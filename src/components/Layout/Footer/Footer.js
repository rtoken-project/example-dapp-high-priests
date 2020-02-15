import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
  font-family: "roobert_semibold";
  font-size: 15px;
  color: white;
  text-decoration: none;
  min-height: 20px;
  display: block;
  transition: all 0.2s ease;
  position: relative;

  &:last-child {
    margin-left: 40px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      margin-left: -20px;
      width: 1px;
      height: 16px;
      top: 4px;
      opacity: 0.3;
      background-color: white;
    }
  }

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease;
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.2s ease;
  }
`

const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  right: 30px;
  bottom: 0;
  z-index: 999;
  border-radius: 20px 20px 0 0;
  background-color: #0a1a5d;
  padding: 14px 24px 8px 24px;
`

const Footer = () => (
  <FooterContainer>
    <StyledLink
      href="http://rdai.money/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Made with rDAI
    </StyledLink>
    <StyledLink
      href="https://gitcoin.co/grants/250/rdai-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      Support us
    </StyledLink>
  </FooterContainer>
)

export default Footer
