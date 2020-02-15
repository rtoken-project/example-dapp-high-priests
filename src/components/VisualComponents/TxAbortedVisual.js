import React from "react"

import { TxAborted } from "./common/largeComponents"
import { PowerUpAborted } from "./common/smallComponents"

const TxAbortedVisual = ({ size, ...restProps }) => {
  if (size === "large") return <TxAborted {...restProps} />
  return <PowerUpAborted {...restProps} />
}

export default TxAbortedVisual
