import React from "react"

import { TxError } from "./common/largeComponents"
import { PowerUpError } from "./common/smallComponents"

const TxErrorVisual = ({ size, ...restProps }) => {
  if (size === "large") return <TxError {...restProps} />
  return <PowerUpError {...restProps} />
}

export default TxErrorVisual
