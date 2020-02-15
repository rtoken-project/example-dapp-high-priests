import React from "react"

import { PreMint } from "./common/largeComponents"
import { PowerUpPreMint } from "./common/smallComponents"

const TransactionConfirmationVisual = ({ size, ...restProps }) => {
  if (size === "large") return <PreMint {...restProps} />
  return <PowerUpPreMint {...restProps} />
}

export default TransactionConfirmationVisual
