import React from "react"

import { PowerUpChangeNetwork } from "./common/smallComponents"
import { ChangeNetwork } from "./common/largeComponents"

const ChangeNetworkVisual = ({ size, ...restProps }) => {
  if (size === "large") return <ChangeNetwork {...restProps} />
  return <PowerUpChangeNetwork {...restProps} />
}

export default ChangeNetworkVisual
