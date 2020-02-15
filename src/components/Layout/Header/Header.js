import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../../../images/logo.svg"

const StyledButton = styled(Link)`
  font-family: "roobert_semibold";
  font-size: 15px;
  color: #0a1a5d;
  text-decoration: none;
  border: 1px solid #d6b094;
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
  background: transparent;
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
    color: #0a1a5d;
    text-decoration: none;
    padding-left: 12px;
    margin: 17px 0px;

    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
`

const StyledLink = styled(Link)`
  font-family: "roobert_medium";
  font-size: 16px;
  color: #0a1a5d;
  margin-left: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-flex;
  padding-top: 4px;

  @media (max-width: 500px) {
    font-size: 13px;
    padding-top: 0;
  }

  &:before {
    content: "";
    height: 16px;
    width: 1px;
    background-color: #d6b094;
    display: block;
    margin-right: 12px;
    margin-top: 4px;
  }

  &:hover {
    transition: border 0.2s ease;
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.2s ease;
  }
`

const Header = () => (
  <HeaderContainer>
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <LogoLink to="/">
        <img src={Logo} />
        <h3>rTrees</h3>
      </LogoLink>
      <StyledLink to="/about">How it works</StyledLink>
    </div>

    <StyledButton to="/grove">Your grove</StyledButton>
  </HeaderContainer>
)

export default Header
