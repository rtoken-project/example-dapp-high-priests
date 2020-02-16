import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Web3Utils from "../../Flock/Web3/Web3Utils"
import axios from "axios"
const API_URL = "https://api.rdai.money"

import Logo from "../../../images/logo.svg"

const StyledButton = styled(Link)`
  font-family: "roobert_semibold";
  font-size: 15px;
  color: white;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  height: 50px;
  padding: 12px 24px 10px 24px;
  transition: all 0.2s ease;

  @media (max-width: 500px) {
    font-size: 13px;
    margin-top: 6px;
    height: 36px;
    padding: 8px 20px 6px 20px;
  }

  &:hover {
    border: 1px solid #232927;
    transition: border 0.2s ease;
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.2s ease;
  }
`

const HeaderContainer = styled.div`
  background: #121427;
  position: relative;
  padding: 30px;
  display: flex;
  z-index: 999;
  justify-content: space-between;


  img {
    @media (max-width: 500px) {
      width: 50px;
    }
  }

  @media (max-width: 500px) {
    padding: 20px;
  }
}}
`

const LogoLink = styled(Link)`
  display: flex;
  align-ttems: center;
  flex-direction: row;
  text-decoration: none;
  h3 {
    font-family: "roobert_semibold";
    font-size: 16px;
    color: white;
    text-decoration: none;
    padding-left: 12px;
    margin: 17px 0px;

    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
`
const GithubLink = styled.a`
  display: flex;
  align-ttems: center;
  flex-direction: row;
  text-decoration: none;
  h3 {
    font-family: "roobert_semibold";
    font-size: 16px;
    color: white;
    text-decoration: none;
    padding-left: 30px;
    margin: 17px 0px;

    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
`

const Header = () => {
  const [state, setState] = useState({
    hatID: null,
  })
  const loadDetails = async () => {
    try {
      const web3Utils = new Web3Utils()
      if (web3Utils.isWeb3EnabledBrowser()) {
        let hatID = null
        const {
          hasWallet,
          walletAddress,
          error,
        } = await web3Utils.unlockWallet()
        if (error || !hasWallet) {
          return
        }
        const { data } = await axios.get(
          `${API_URL}/v1/getHatIDByAddress?owner=${walletAddress}`
        )
        const { hatID: userHatID } = data
        if (userHatID) hatID = userHatID
        setState({
          ...state,
          hatID,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  const ActionButton = () => {
    if (!state.hatID)
      return <StyledButton onClick={loadDetails}>Load Wallet</StyledButton>
    return (
      <StyledButton to={`/flock?hatID=${state.hatID}`}>Your flock</StyledButton>
    )
  }
  return (
    <HeaderContainer>
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
        }}
      >
        <LogoLink to="/">
          <h3>High Priests</h3>
        </LogoLink>
        <GithubLink
          target="_blank"
          href="https://github.com/rtoken-project/example-dapp-high-priests"
        >
          <h3>Github</h3>
        </GithubLink>
      </div>

      <ActionButton />
    </HeaderContainer>
  )
}

export default Header
