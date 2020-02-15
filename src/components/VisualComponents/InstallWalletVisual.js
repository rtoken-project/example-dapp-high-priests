import React from "react"

import { TransactionInstallWallet } from "./common/largeComponents"
import { PowerUpNoWallet } from "./common/smallComponents"

const InstallWalletVisual = ({ size, ...restProps }) => {
  if (size === "large") return <TransactionInstallWallet {...restProps} />
  return <PowerUpNoWallet {...restProps} />
}

export default InstallWalletVisual
