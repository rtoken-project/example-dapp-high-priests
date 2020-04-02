// *************************************
// We're sorry! This component uses "Dappy",
// a closed-source package created by the team at https://dappy.dev
// It is purposefully ommited from this repo  :_(
// If you're interested in working on Dappy,
// or want to chat then drop us a line!
// *************************************

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

import Web3Utils from "./Web3/Web3Utils"
import DappyModule from "./DappyModule"
import LoadingWithWalletPrompt from "../common/LoadingWithWalletPrompt"

const API_URL = "https://api.rdai.money"
const LoadingContainer = styled.div`
  heigth: 314;
`
const DappyHandler = ({ hatID, firstName }) => {
  const [state, setState] = useState({
    isFollower: null,
    status: "Loading",
    amountActive: 0,
  })
  const loadDetails = async () => {
    if (hatID === 0) return
    try {
      if (typeof window !== "undefined") {
        const url = `${API_URL}/v1/allUsersWithHat/?hatID=${hatID}`
        const { data } = await axios.get(url)
        // Get funding stats
        const followers = data.accounts
        // Get user data
        const web3Utils = new Web3Utils()
        let isFollower = false
        const {
          hasWallet,
          walletAddress,
          error,
        } = await web3Utils.unlockWallet()
        if (error || !hasWallet) {
          setState({
            ...state,
            status: "",
            isFollower: false,
          })
          return
        }
        const { data: data2 } = await axios.get(
          `${API_URL}/v1/getHatIDByAddress?owner=${walletAddress}`
        )
        const { hatID: userHatID } = data2
        const user = followers.find(
          element => element.id.toLowerCase() === walletAddress.toLowerCase()
        )
        if (user && user.balance > 0) {
          isFollower = userHatID === hatID
        }
        setState({
          ...state,
          status: "",
          isFollower,
          amountActive: user.balance,
        })
      }
    } catch (e) {
      // console.log(e)
      setState({
        ...state,
        status: "",
      })
    }
  }
  useEffect(() => {
    try {
      loadDetails()
    } catch (e) {
      console.log(e)
    }
  }, [hatID])
  if (state.status === "") {
    return (
      <DappyModule
        key={("follower", state.isFollower, hatID)}
        isFollower={state.isFollower}
        firstName={firstName}
        hatID={hatID}
        amountActive={state.amountActive}
      />
    )
  }
  return (
    <LoadingContainer>
      <LoadingWithWalletPrompt />
    </LoadingContainer>
  )
}
export default DappyHandler
