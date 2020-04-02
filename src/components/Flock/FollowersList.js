import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

import Web3Utils from "./Web3/Web3Utils"
import LoadingWithWalletPrompt from "../common/LoadingWithWalletPrompt"

const Box = require("3box")

const API_URL = "https://api.rdai.money"

const LI = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`
const FollowersEmpty = styled.div`
  margin-top: 80px;
  border-radius: 12px;
  width: 100%;
  font-family: "roobert_medium", sans-serif;
  font-size: 18px;
  color: white;
  display: flex;
  height: 230px;
  background-color: #0e0f20;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;

  p {
    margin-bottom: 0;
  }
`

const FollowersList = ({ hatID, visibilityThreshold }) => {
  const [state, setState] = useState({
    isFollower: false,
    sortedFollowers: [],
    status: "loading",
  })
  const loadDetails = async () => {
    try {
      if (typeof window !== "undefined") {
        // load all users
        const url = `${API_URL}/v1/allUsersWithHat/?hatID=${hatID}`
        const { data } = await axios.get(url)
        // Get funding stats
        const sortedFollowers = data.accounts.sort((a, b) => {
          return b.balance - a.balance
        })
        // 3BOX
        // const opts = { metadata: true, profileServer: true }
        for (let index = 0; index < sortedFollowers.length; index++) {
          const profile = await Box.getProfile(sortedFollowers[index].id)
          const { image, name } = profile
          if (name) sortedFollowers[index].name = name
          if (image) {
            sortedFollowers[index].image = image[0].contentUrl["/"]
          }
        }
        // Get user data
        let isFollower = false
        const web3Utils = new Web3Utils()
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
        const user = sortedFollowers.find(
          element => element.id.toLowerCase() === walletAddress.toLowerCase()
        )
        if (user && user.balance > 0) {
          isFollower = userHatID === hatID
        }
        setState({
          ...state,
          sortedFollowers,
          isFollower,
          status: "",
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    try {
      loadDetails()
    } catch (e) {
      console.log(e)
    }
  }, [hatID])
  const getFollowerRow = item => {
    if (item.balance > visibilityThreshold)
      return (
        <LI key={item.id}>
          {item.image && (
            <img
              alt={item.name}
              src={`https://ipfs.io/ipfs/${item.image}`}
              width={50}
            />
          )}
          <h4>
            {item.name || `${item.id.slice(0, 5)}...${item.id.slice(39, 43)}`}
          </h4>
          <p>{Number(item.balance).toFixed(2)} DAI</p>
        </LI>
      )
  }
  if (state.status === "loading" && state.sortedFollowers.length === 0) {
    return <LoadingWithWalletPrompt />
  }
  if (state.isFollower && hatID !== 0) {
    return (
      <ol>{state.sortedFollowers.map(follower => getFollowerRow(follower))}</ol>
    )
  }
  return (
    <FollowersEmpty>
      <p>Join the flock to see who's following</p>
    </FollowersEmpty>
  )
}
export default FollowersList
