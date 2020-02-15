import React from "react"

import { TxPendingBasic } from "./common/largeComponents"
import { PowerUpPending } from "./common/smallComponents"

const TxPendingBasicVisual = ({ size, ...restProps }) => {
  if (size === "large") return <TxPendingBasic {...restProps} />
  return <PowerUpPending {...restProps} />
}

export default TxPendingBasicVisual
