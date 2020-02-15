import React, { PropTypes } from "react"

import { InitialSmall, RedeemSmall } from "./Initial/InitialSmall"
import InitialLarge from "./Initial/InitialLarge"

const InitialVisual = ({ type, size, ...restProps }) => {
  if (type === "redeem") return <RedeemSmall {...restProps} />
  if (size === "large") return <InitialLarge {...restProps} />
  return <InitialSmall {...restProps} />
}

export default InitialVisual
