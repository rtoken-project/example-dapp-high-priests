import React from "react"
import { withKnobs, text, boolean } from "@storybook/addon-knobs"

import {
  InitialSmall,
  RedeemSmall,
} from "../src/components/VisualComponents/Initial/InitialSmall"
import {
  PowerUpUnlockWallet,
  PowerUpNoWallet,
  PowerUpLoadingWallet,
  PowerUpChangeNetwork,
  PowerUpInsufficientBalance,
  PowerUpPreApprove,
  PowerUpConfirm,
  PowerUpPreMint,
  PowerUpPending,
  PowerUpSuccess,
  PowerUpAborted,
  PowerUpError,
} from "../src/components/VisualComponents/common/smallComponents"

export default {
  title: "PowerUps",
  parameters: {
    componentSubtitle: "Subtitle",
  },
  decorators: [withKnobs],
}

const styles = {
  textAlign: "center",
  backgroundColor: "#FAEBE0",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: "4rem",
  boxSizing: "border-box",
  justifyContent: "center",
}

const initialSmallProps = {
  name: "Watering can",
  growthRate: "+4 trees per year",
  price: 25,
  backgroundColor: "#1DADFE",
  primaryColor: "white",
  buttonText: "#0080BD",
  buttonColor: "linear-gradient(180deg, #FFFFFF 0%, #ACE4FF 100%)",
  boxShadow: "0 17px 20px -5px #2B7DA4",
  emoji: "💧",
}

const redeemSmallProps = {
  type: "redeem",
  name: "Stop Donating",
  growthRate: "Get all your DAI back",
  backgroundColor: "#FF5964",
  primaryColor: "white",
  buttonText: "#0080BD",
  buttonColor: "linear-gradient(180deg, #FFFFFF 0%, #ACE4FF 100%)",
  boxShadow: "0 17px 20px -5px #2B7DA4",
  emoji: "🛑",
}

const Center = ({ children }) => <div style={styles}>{children}</div>

export const all = () => (
  <div
    style={{
      width: "420px",
      position: "absolute",
      left: "30px",
    }}
  >
    <InitialSmall {...initialSmallProps} />
    <RedeemSmall {...redeemSmallProps} />
    <PowerUpUnlockWallet />
    <PowerUpLoadingWallet />
    <PowerUpNoWallet />
    <PowerUpChangeNetwork />
    <PowerUpInsufficientBalance />
    <PowerUpPreApprove />
    <PowerUpPreMint />
    <PowerUpConfirm />
    <PowerUpPending />
    <PowerUpError />
    <PowerUpAborted />
    <PowerUpSuccess />
  </div>
)

export const confirm = () => (
  <Center>
    <PowerUpConfirm />
  </Center>
)

export const pending = () => (
  <Center>
    <PowerUpPending />
  </Center>
)

export const error = () => (
  <Center>
    <PowerUpError />
  </Center>
)

export const aborted = () => (
  <Center>
    <PowerUpAborted />
  </Center>
)

export const success = () => (
  <Center>
    <PowerUpSuccess />
  </Center>
)

export const loadingWallet = () => (
  <Center>
    <PowerUpLoadingWallet />
  </Center>
)
