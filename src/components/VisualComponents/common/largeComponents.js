import React from "react"
import styled, { keyframes } from "styled-components"
import { Loader } from "./Loader"
import "../../fonts.css"
import metamaskConfirmImage from "../../../images/confirmMetamask.png"
import checkmark from "../../../images/checkmark.svg"
import arrowRight from "../../../images/arrow-right.svg"
import reload from "../../../images/reload.svg"
import error from "../../../images/error.svg"
import success from "../../../images/success.svg"

const movement = keyframes`
  0% {
    transform: translateX(-200px) rotate(30deg);
  }


  to {
    transform: translateX(300px) rotate(30deg);
  }
`

const Layout = styled.div`
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  border-radius: 14px;
  padding: 20px;
  width: 200px;
  height: 340px;
  margin: 15px 0.75rem 0.75rem 0.75rem;
  box-shadow: 0 30px 60px -20px rgba(160, 140, 120, 0.5);

  @media (max-width: 720px) {
    width: calc(100% - 20px);
    height: 300px;
  }
`

const IconContainer = styled.div`
  min-height: 80px;
  min-width: 80px;
  max-height: 80px;
  max-width: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 0;
    max-width: 100%;
    max-height: 100%;
  }
`
const BuyDaiLinkContainer = styled.div`
  align-items: center;
  width: 100%;
`

const Centered = styled(Layout)`
  justify-content: center;
`

const Button = styled.a`
  font-family: "roobert_medium", sans-serif;
  font-weight: 700;
  letter-spacing: -0.2px;
  font-size: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: block;
  display: flex;
  width: 100%;
  bottom: 10px
  left: 10px;
  border-radius: 50px;
  height: 33px;
  box-shadow: ${props =>
    props.waiting ? "none" : "0 17px 20px -5px rgba(12, 32, 117, 0.25)"};
  transition: all 0.2s ease;
  background-color: ${props => (props.waiting ? "#f9e9de" : "#0a1a5d")};
  color: ${props => (props.waiting ? "#0a1a5d" : "white")};
  overflow: hidden;
  cursor: pointer;
  ::before {
    display: ${props => (props.waiting ? "block" : "none")};
    position: relative;
    content: '';
    background: white;
    width: 20px;
    height: 90px;
    opacity: 0.3;
    animation: ${movement} 2s linear infinite;
  }

  ::after {
    display: ${props => (props.waiting ? "block" : "none")};
    position: relative;
    content: '';
    background: white;
    width: 10px;
    height: 90px;
    opacity: 0.3;
    transform: rotate(30deg);
    animation: ${movement} 2s 0.1s linear infinite;
  }


  &:hover {
    outline: none;
    cursor: ${props => (props.waiting ? "default" : "pointer")}
    transform: ${props => (props.waiting ? "none" : "translateY(-2px)")};
    border: 0;
    box-shadow: ${props =>
      props.waiting ? "none" : "0 17px 20px -5px rgba(12, 32, 117, 0.45)"};
    transition: all 0.2s ease;
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.2s ease;
  }
`

const H1 = styled.h1`
  position: relative;
  font-family: "roobert_medium", sans-serif;
  font-weight: 900;
  letter-spacing: -0.2px;
  font-size: 23px;
  text-align: center;
  margin: 0 auto;
  color: #0a1a5d;
  z-index: 10;
  margin-top: 20px;
`

const P = styled.p`
  font-family: "roobert_medium", sans-serif;
  text-align: center;
  margin: 8px auto 0;
  line-height: 1.3;
  color: #4d5b97;
  font-size: 16px;
`

const AskAgain = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    font-family: "roobert_medium", sans-serif;
    font-weight: 600;
    margin: 0px 0px 0px 8px;
    font-size: 14px;
    color: #0a1a5d;
  }
`

const LinkToWallet = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  font-family: "roobert_medium", sans-serif;
  font-weight: 500;
  padding: 10px 0 8px 0;
  border-bottom: 1px solid #eeeeee;

  &:last-child {
    border-bottom: none;
  }

  h2 {
    font-size: 16px;
    color: #0a1a5d;
    margin-block-start: 0;
    margin-block-end: 0;
    text-align: left;
  }
`

const Paragraph = styled.p`
  font-family: "roobert_medium", sans-serif;
  color: #4d5b97;
  font-size: 12px;
  line-height: 1.3;
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: left;
`

const Detail = styled.div`
  font-family: "roobert_medium", sans-serif;
  color: #4d5b97;
  font-size: 12px;
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: left;
  font-weight: 500;
  padding: 0;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  p,
  span {
    margin-bottom: 4px;
    margin-top: 8px;
  }
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

// const UnChecked = styled.div`
//   background: #fff9f4;
//   border: 1px solid #4d5b97;
//   display: block;
//   width: 24px;
//   height: 24px;
//   border-radius: 8px;
// `

export const TransactionInstallWallet = () => {
  return (
    <Layout>
      <div>
        <H1>Install a wallet</H1>
      </div>
      <div
        style={{
          paddingTop: "20px",
          width: "100%",
        }}
      >
        <LinkToWallet href="https://metamask.io/">
          <div>
            <h2>Metamask</h2>
            <Paragraph>Chrome Extension</Paragraph>
          </div>
          <img src={arrowRight} />
        </LinkToWallet>
        <LinkToWallet href="https://wallet.coinbase.com/">
          <div>
            <h2>Coinbase</h2>
            <Paragraph>Mobile App</Paragraph>
          </div>
          <img src={arrowRight} />
        </LinkToWallet>
        <LinkToWallet href="https://trustwallet.com/">
          <div>
            <h2>Trust</h2>
            <Paragraph>Mobile App</Paragraph>
          </div>
          <img src={arrowRight} />
        </LinkToWallet>
      </div>
    </Layout>
  )
}

// <Input id="input" type="checkbox" onChange={onToggleCheck} />
// <Label />
// <p
//   style={{
//     marginBottom: "0px",
//   }}
// >
export const PreApprove = ({ onToggleCheck, onSubmit, isChecked }) => {
  return (
    <Layout>
      <div>
        <H1>Unlock DAI</H1>
        <P>First let's unlock your DAI.</P>
        <AskAgain>
          <Input type="checkbox" onChange={onToggleCheck} checked={isChecked} />
          <p>Don't ask again</p>
        </AskAgain>
      </div>
      <Button onClick={onSubmit}>Proceed</Button>
    </Layout>
  )
}

export const TxConfirmBasic = () => {
  return (
    <Layout>
      <div>
        <IconContainer
          style={{
            maxWidth: "120px",
            maxHeight: "120px",
          }}
        >
          <img src={metamaskConfirmImage} />
        </IconContainer>
        <H1>Confirm in Metamask</H1>
      </div>
      <Button waiting>Waiting</Button>
    </Layout>
  )
}

export const PreMint = ({
  amountDAI,
  feeInDAI,
  feeInPercent,
  totalAmount,
  treeFrequency,
  onSubmit,
}) => {
  return (
    <Layout>
      <div>
        <H1>Confirm</H1>
        <P>Time to start planting!</P>
        <div
          style={{
            padding: "0 10px 0 10px",
            marginTop: "40px",
            overflowY: "hidden",
            minHeight: "100px",
          }}
        >
          <Detail>
            <p>Platform Fee</p>
            <span>${Math.round(0.0008 * totalAmount * 100) / 100}/yr</span>
          </Detail>
          <Detail>
            <p>Gas Fee</p>
            <span>~ $0.20</span>
          </Detail>
        </div>
      </div>

      <Button onClick={onSubmit}>Activate {totalAmount} DAI</Button>
    </Layout>
  )
}

export const TxPendingBasic = () => {
  return (
    <Layout>
      <div>
        <IconContainer>
          <Loader />
        </IconContainer>
        <H1> Transaction submitted</H1>
        <P>Waiting for network</P>
      </div>
      <Button waiting>Waiting</Button>
    </Layout>
  )
}

export const TxPendingMint = () => {
  return (
    <Layout>
      <div>
        <IconContainer>
          <Loader />
        </IconContainer>
        <H1>Planting your first tree</H1>
        <P>Putting seeds in the ground</P>
      </div>

      <Button waiting>Waiting</Button>
    </Layout>
  )
}

export const TxError = ({ onSubmit }) => {
  return (
    <Layout>
      <div>
        <IconContainer>
          <img src={error} />
        </IconContainer>
        <H1>Something went wrong</H1>
        <P>There was an unexpected error.</P>
      </div>
      <Button onClick={onSubmit}>
        <img
          style={{
            margin: "0 8px 0 0 ",
          }}
          src={reload}
        />
        Retry
      </Button>
    </Layout>
  )
}

export const ChangeNetwork = () => {
  return (
    <Layout>
      <div>
        <IconContainer>
          <img src={error} />
        </IconContainer>
        <H1>Change your Network</H1>
        <P>Please switch to Mainnet</P>
      </div>
      <Button waiting>Waiting</Button>
    </Layout>
  )
}

export const TxAborted = ({ onSubmit }) => {
  return (
    <Layout>
      <div>
        <IconContainer>
          <img src={error} />
        </IconContainer>
        <H1>You aborted a transaction</H1>
        <P>You have cancelled a transaction.</P>
      </div>
      <Button onClick={onSubmit}>
        <img
          style={{
            margin: "0 8px 0 0",
          }}
          src={reload}
        />
        Retry
      </Button>
    </Layout>
  )
}

export const TxSuccess = ({ onSubmit }) => {
  return (
    <Layout>
      <div>
        <IconContainer>
          <img src={success} />
        </IconContainer>
        <H1>Success!</H1>
        <P>Your tree has been planted.</P>
      </div>
      <Button onClick={onSubmit}>Go to my grove</Button>
    </Layout>
  )
}

export const InsufficientBalance = ({ onSubmit }) => {
  return (
    <Layout>
      <div>
        <H1>You don't have enough DAI to plant this fast</H1>
        <P>Get more DAI</P>
      </div>
      <BuyDaiLinkContainer>
        <LinkToWallet href="https://app.radarrelay.com/">
          <div>
            <h2>Radar Relay</h2>
            <Paragraph>Exchange</Paragraph>
          </div>
          <img src={arrowRight} />
        </LinkToWallet>
        <LinkToWallet href="https://kyberswap.com/swap/eth-dai">
          <div>
            <h2>Kyber Swap</h2>
            <Paragraph>Exchange</Paragraph>
          </div>
          <img src={arrowRight} />
        </LinkToWallet>
      </BuyDaiLinkContainer>
      <Button onClick={onSubmit}>
        <img
          style={{
            margin: "0 8px 0 0 ",
          }}
          src={reload}
        />
        Go Back
      </Button>
    </Layout>
  )
}

export const LoadingWallet = () => {
  return (
    <Centered>
      <Loader />
      <Paragraph>Loading Wallet</Paragraph>
    </Centered>
  )
}

export const UnlockWallet = () => {
  return (
    <Centered>
      <IconContainer>
        <img
          style={{
            width: "170px",
            marginTop: "-15px",
          }}
          src={metamaskConfirmImage}
        />
      </IconContainer>
      <H1>Unlock your Metamask</H1>
      <Paragraph
        style={{
          textAlign: "center",
          paddingTop: "10px",
        }}
      >
        Open the browser extension and enter your password
      </Paragraph>
    </Centered>
  )
}
