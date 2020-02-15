import React from "react"

import { TxPendingMint } from "./common/largeComponents"
import { PowerUpPending } from "./common/smallComponents"

const TxPendingMintVisual = ({ size, ...restProps }) => {
  if (size === "large") return <TxPendingMint {...restProps} />
  return <PowerUpPending {...restProps} />
}

export default TxPendingMintVisual
