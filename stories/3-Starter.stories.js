import React from "react"
import { withKnobs } from "@storybook/addon-knobs"

import InitialLarge from "../src/components/VisualComponents/Initial/InitialLarge"
import {
  UnlockWallet,
  LoadingWallet,
  TransactionInstallWallet,
  PreApprove,
  ChangeNetwork,
  PreMint,
  TxConfirmBasic,
  TxPendingMint,
  TxPendingBasic,
  TxError,
  TxAborted,
  TxSuccess,
  InsufficientBalance,
} from "../src/components/VisualComponents/common/largeComponents"

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

const Center = ({ children }) => <div style={styles}>{children}</div>

export default {
  title: "Starters",
  parameters: {
    componentSubtitle: "Subtitle",
  },
  decorators: [withKnobs],
}

export const all = () => (
  <>
    <UnlockWallet />
    <LoadingWallet />
    <TransactionInstallWallet />
    <ChangeNetwork />
    <InsufficientBalance />
    <PreApprove onToggleCheck={() => {}} onSubmit={() => {}} />
    <TxConfirmBasic />
    <TxError />
    <TxAborted />
    <TxSuccess />
    <PreMint />
    <TxPendingMint />
    <TxPendingBasic />
  </>
)

export const installWallet = () => (
  <Center>
    <TransactionInstallWallet />
  </Center>
)

export const permission = () => (
  <Center>
    <PreApprove onToggleCheck={() => {}} onSubmit={() => {}} />
  </Center>
)

export const confirmMetamask = () => (
  <Center>
    <TxConfirmBasic />
  </Center>
)

export const confirmation = () => (
  <Center>
    <PreMint />
  </Center>
)

export const confirming = () => (
  <Center>
    <TxPendingBasic />
  </Center>
)

export const planting = () => (
  <Center>
    <TxPendingMint />
  </Center>
)

export const error = () => (
  <Center>
    <TxError />
  </Center>
)

export const aborted = () => (
  <Center>
    <TxAborted />
  </Center>
)

export const success = () => (
  <Center>
    <TxSuccess />
  </Center>
)

export const insufficientbalance = () => (
  <Center>
    <InsufficientBalance />
  </Center>
)
