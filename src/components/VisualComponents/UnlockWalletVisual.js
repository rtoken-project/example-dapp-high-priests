import React, { PropTypes } from "react"
import { UnlockWallet } from "./common/largeComponents"
import { PowerUpUnlockWallet } from "./common/smallComponents"

const UnlockWalletVisual = ({ size, ...restProps }) => {
  if (size === "large") return <UnlockWallet {...restProps} />
  return <PowerUpUnlockWallet {...restProps} />
}

export default UnlockWalletVisual
