import React from "react"

import { TxSuccess } from "./common/largeComponents"
import { PowerUpSuccess } from "./common/smallComponents"

const SuccessVisual = ({ size, ...restProps }) => {
  if (size === "large") return <TxSuccess {...restProps} />
  return <PowerUpSuccess {...restProps} />
}

export default SuccessVisual
