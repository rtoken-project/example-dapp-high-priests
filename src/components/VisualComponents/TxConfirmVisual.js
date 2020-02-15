import React from "react"

import { TxConfirmBasic } from "./common/largeComponents"
import { PowerUpConfirm } from "./common/smallComponents"

const TxConfirmVisual = ({ size, ...restProps }) => {
  if (size === "large") return <TxConfirmBasic {...restProps} />
  return <PowerUpConfirm {...restProps} />
}

export default TxConfirmVisual
