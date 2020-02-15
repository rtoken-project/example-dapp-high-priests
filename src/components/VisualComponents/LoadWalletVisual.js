import React from "react"
import { LoadingWallet } from "./common/largeComponents"
import { PowerUpLoadingWallet } from "./common/smallComponents"

const LoadWalletVisual = ({ size, ...restProps }) => {
  const Default = () => <LoadingWallet />

  if (size === "large") return <LoadingWallet />
  return <PowerUpLoadingWallet {...restProps} />
}

export default LoadWalletVisual
