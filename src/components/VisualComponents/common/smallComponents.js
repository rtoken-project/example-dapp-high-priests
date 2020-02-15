import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import "../../fonts.css"
import { Loader, SmallLoader } from "./Loader"
import metamaskConfirmImage from "../../../images/confirmMetamask.png"
import errorOutline from "../../../images/error-outline.svg"
import reload from "../../../images/reload.svg"
import checkmark from "../../../images/checkmark.svg"
import exit from "../../../images/e-remove.svg"
import error from "../../../images/error.svg"
import unlockSmall from "../../../images/unlock-small.svg"
import powerup from "../../../images/powerup.svg"

const Label = styled.label`
  background: #fff9f4;
  border: 1px solid #4d5b97;
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 4px;
`

const Input = styled.input`
  &:checked  {
    border: 1px solid #0a1a5d
    background: #E5FDA2;
    background-image: url(${checkmark});
    background-position: center;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: 50%; /* Resize the background image to cover the entire container */
  }
`

const AskAgain = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    font-family: "roobert_medium", sans-serif;
    font-weight: 600;
    margin-left: 8px;
    font-size: 14px;
    color: #545f98;
  }
`

const EmojiContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding-top: 5px;
  background-color: #faebe0;
  border-radius: 30px;
  font-size: 40px;
  text-align: center;
  margin-right: 10px;
  overflow: hidden;

  img {
    margin-bottom: 8px;
  }
`

const movement = keyframes`
  0% {
    transform: translateX(-100px) rotate(30deg);
  }


  to {
    transform: translateX(100px) rotate(30deg);
  }
`

const PowerUp = styled.div`
  width: 420px;
  max-height: 80px;
  box-sizing: border-box;
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 100px;
  padding: 10px;

  @media (max-width: 960px) {
    width: 96%;
  }

  h3 {
    font-family: "roobert_medium", sans-serif;
    font-size: 21px;
    margin: 6px 0 0 0;
    padding: 0;
    color: #0a1a5d;
    font-weight: 700;
  }

  h5 {
    font-family: "roobert_medium", sans-serif;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    margin: 4px 0 0 0;
    padding: 0;
    color: #545f98;
    display: inline-flex;
  }

  h5:nth-child(3)::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 3px;
    position: absolute;
    left: -15px;
    top: 4px;
    display: block;
    background-color: black;
    opacity: 0.2;
  }

  button {
    font-family: "roobert_medium";
    position: relative;
    font-size: 16px;
    font-weight: 700;
    height: 50px;
    box-shadow: 0 17px 20px -5px rgba(12, 32, 117, 0.25);
    transition: all 0.2s ease;
    background-color: #0a1a5d;
    color: white;
    max-height: 60px;
    border: 0;
    border-radius: 50px;
    align-self: center;
    margin-left: auto;
    padding: 12px 16px;
    width: 100px;
    margin-right: 5px;
    transition: all 0.2s ease;

    &.small {
      max-width: 50px;
    }

    &.waiting {
      width: 80px;
      color: white;
      overflow: hidden;
      background-color: #f9e9de;
      color: #0a1a5d;
      box-shadow: none;

      &:hover {
        transform: none;
        cursor: auto;
      }

      ::before {
        display: block;
        position: absolute;
        content: "";
        background: white;
        min-width: 10px;
        height: 70px;
        top: -10px;
        opacity: 0.3;
        animation: ${movement} 2s linear infinite;
      }

      ::after {
        display: block;
        position: absolute;
        content: "";
        background: white;
        min-width: 6px;
        height: 70px;
        top: -10px;
        opacity: 0.2;
        animation: ${movement} 2s 0.2s linear infinite;
      }
    }

    &.repeat {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-top: 0;
      }
    }

    &.loading {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #faeadf;
      padding-top: 0px;
      box-shadow: none;

      &:hover {
        transform: none;
        cursor: auto;
      }

      img {
        max-width: 60px;
        margin: 0;
      }
    }

    &:hover {
      stroke: 0;
      outline: 0;
      transform: translateY(-2px);
      transition: transform 0.2s ease;
      cursor: pointer;
    }

    &:active {
      stroke: 0;
      outline: 0;
      transform: scale(0.98);
      transition: transform 0.2s ease;
    }

    &:focus {
      outline: 0;
    }
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  font-family: roobert_medium, sans-serif;
  font-weight: 700;
  font-size: 14px;
  position: relative;
  margin: 4px 0 0 4px;
  padding: 0;
  color: #545f98;
  display: inline-flex;
`

const StyledWalletLink = styled(Link)`
  text-decoration: none;
  font-family: roobert_medium, sans-serif;
  font-weight: 700;
  font-size: 14px;
  position: relative;
  margin: 4px 0 0 4px;
  padding: 0;
  color: #545f98;
  display: inline-flex;
`

const PowerUpCentered = styled(PowerUp)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

  h5 {
    margin: -2px 0 0 8px;
    color: #545f98;
  }
`

export const PowerUpConfirm = () => (
  <PowerUp>
    <EmojiContainer>
      <img src={metamaskConfirmImage} />
    </EmojiContainer>

    <div>
      <h3>Confirm in Metamask</h3>
      <h5>Waiting</h5>
    </div>
    <button className="waiting">Sign</button>
  </PowerUp>
)

export const PowerUpPreMint = ({ onSubmit }) => (
  <PowerUp>
    <EmojiContainer>
      <img
        style={{
          width: "20px",
        }}
        src={powerup}
      />
    </EmojiContainer>
    <div>
      <h3>Confirmation</h3>
      <h5>Activating more DAI</h5>
    </div>
    <button className="" style={{}} onClick={onSubmit}>
      Accept
    </button>
  </PowerUp>
)

export const PowerUpLoadingWallet = () => (
  <PowerUpCentered>
    <SmallLoader />
    <h5>Loading wallet</h5>
  </PowerUpCentered>
)
export const PowerUpUnlockWallet = () => (
  <PowerUp>
    <EmojiContainer>
      <img
        style={{
          width: "70px",
          marginTop: "20px",
        }}
        src={metamaskConfirmImage}
      />
    </EmojiContainer>
    <div>
      <h3>Unlock your wallet</h3>
      <h5>Waiting</h5>
    </div>
    <button className="loading">
      <Loader />
    </button>
  </PowerUp>
)

export const PowerUpInsufficientBalance = ({ onSubmit }) => (
  <PowerUp>
    <EmojiContainer>
      <img src={error} style={{ minWidth: "100%" }} />
    </EmojiContainer>
    <div>
      <h3>Not enough DAI</h3>
      <h5>Get DAI from </h5>
      <StyledLink href="https://app.radarrelay.com/">Radar Relay</StyledLink>
    </div>
    <button onClick={onSubmit}>Go Back</button>
  </PowerUp>
)

export const PowerUpPreApprove = ({ onToggleCheck, onSubmit, isChecked }) => (
  <PowerUp>
    <EmojiContainer>
      <img src={unlockSmall} />
    </EmojiContainer>
    <div>
      <h3>Approve spending</h3>
      <h5>
        <AskAgain>
          <Input
            id="input"
            type="checkbox"
            onChange={onToggleCheck}
            checked={isChecked}
          />

          <p
            style={{
              marginBottom: "0px",
            }}
          >
            Don't ask again
          </p>
        </AskAgain>
      </h5>
    </div>
    <button className="" style={{}} onClick={onSubmit}>
      Accept
    </button>
  </PowerUp>
)

export const PowerUpPending = () => (
  <PowerUp>
    <EmojiContainer>
      <SmallLoader />
    </EmojiContainer>
    <div>
      <h3>Submitted</h3>
      <h5>Waiting for network</h5>
    </div>
    <button className="waiting">···</button>
  </PowerUp>
)

export const PowerUpAborted = ({ onSubmit }) => (
  <PowerUp>
    <EmojiContainer>
      <img src={errorOutline} />
    </EmojiContainer>
    <div>
      <h3>Transaction Aborted</h3>
      <h5>You cancelled</h5>
    </div>
    <button className="repeat" onClick={onSubmit}>
      <img
        style={{
          width: "20px",
        }}
        src={reload}
      />
    </button>
  </PowerUp>
)
export const PowerUpNoWallet = ({ onSubmit }) => (
  <PowerUp>
    <EmojiContainer>
      <img src={errorOutline} />
    </EmojiContainer>
    <div>
      <h3>No Wallet Found</h3>
      <h5>Please enable or install </h5>
      <StyledLink href="https://metamask.io/">MetaMask</StyledLink>
    </div>
    <button className="repeat" onClick={onSubmit}>
      <img
        style={{
          width: "20px",
        }}
        src={reload}
      />
    </button>
  </PowerUp>
)

export const PowerUpError = ({ onSubmit }) => (
  <PowerUp>
    <EmojiContainer>
      <img
        style={{
          width: "20px",
        }}
        src={errorOutline}
      />
    </EmojiContainer>
    <div>
      <h3>Something went wrong</h3>
      <h5>Transaction failed</h5>
    </div>
    <button className="repeat" onClick={onSubmit}>
      <img
        style={{
          width: "20px",
        }}
        src={reload}
      />
    </button>
  </PowerUp>
)
export const PowerUpChangeNetwork = () => (
  <PowerUp>
    <EmojiContainer>
      <img
        style={{
          width: "20px",
        }}
        src={errorOutline}
      />
    </EmojiContainer>
    <div>
      <h3>Change your Network</h3>
      <h5>Please switch to Mainnet</h5>
    </div>
    <button className="waiting">···</button>
  </PowerUp>
)

export const PowerUpSuccess = ({ onSubmit, message, etherscanLink }) => (
  <PowerUp>
    <EmojiContainer>
      <img src={checkmark} />
    </EmojiContainer>
    <div>
      <h3>Success!</h3>
      <h5>{message}</h5>
    </div>
    <button className="repeat" onClick={onSubmit}>
      <img
        style={{
          width: "20px",
        }}
        src={reload}
      />
    </button>
  </PowerUp>
)
