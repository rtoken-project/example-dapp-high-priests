import React from "react"
import PropTypes from "prop-types"
import { ContextProvider } from "./src/components/context"

export const wrapRootElement = ({ element }) => {
  console.log(
    "           -/`           \r\n          /s/-.          \r\n        `+ss/--.         \r\n       .osss/----`       \r\n      -ossss/-----`      \r\n     :ssssss/------`     \r\n   `/sssssss/-------.    \r\n  `osssssso+:.-------.   \r\n .osso+/:---.```...----` \r\n:o+/:-------.````````..-`\r\n.-----------.````````````\r\n:-``.-------.````````  `.\r\n /s+:.`.----.````` `.--. \r\n  .osso/-``-.`` `.----`  \r\n   `/sssss+:..------.    \r\n     -osssss/------`     \r\n      `+ssss/----.       \r\n        -oss/---`        \r\n         `+s/--`         \r\n           :/.           \r\n"
  )
  console.log(
    "        `-:///:-`        \r\n     .odMMMMMMMMMmy:     \r\n   .hMMMMMMMMMMMMMMMm/   \r\n  /No//////Mmo:../dMMMs  \r\n -MMMm     +.-    .MMMM/ \r\n yMMMM     oMMd/-:hMMMMy \r\n hMMMM     mMMMMMMMMMMMs \r\n +MMMM     mMMMMMMMMMMN. \r\n  hMMM     mMMMMMMMMMN-  \r\n   oMM     mMMMMMMMMy`   \r\n    .o     dMMMMMmo.     \r\n           `///-`"
  )
  return <ContextProvider>{element}</ContextProvider>
}

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}
