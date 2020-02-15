import React from "react"

import { PreApprove } from "./common/largeComponents"
import { PowerUpPreApprove } from "./common/smallComponents"

const PreApproveVisual = ({ size, ...restProps }) => {
  if (size === "large") return <PreApprove {...restProps} />
  return <PowerUpPreApprove {...restProps} />
}

export default PreApproveVisual
