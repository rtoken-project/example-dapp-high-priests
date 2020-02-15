import React from "react"

import { InsufficientBalance } from "./common/largeComponents"
import { PowerUpInsufficientBalance } from "./common/smallComponents"

const InsufficientBalanceVisual = ({ size, ...restProps }) => {
  if (size === "large") return <InsufficientBalance {...restProps} />
  return <PowerUpInsufficientBalance {...restProps} />
}

export default InsufficientBalanceVisual
