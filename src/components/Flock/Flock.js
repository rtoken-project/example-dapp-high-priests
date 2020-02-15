import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Tribute from "tribute-utils"
import Loadable from "react-loadable"
import RTokenAnalytics from "rtoken-analytics"
var CryptoJS = require("crypto-js")
import { navigate } from "gatsby"
import { Context } from "../context"

const Loading = props => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={() => location.reload()}>Retry</button>
      </div>
    )
  } else if (props.pastDelay) {
    return <div></div>
  } else if (props.timedOut) {
    return (
      <div>
        Taking a long time...{" "}
        <button onClick={() => location.reload()}>Retry</button>
      </div>
    )
  } else {
    return null
  }
}

const Flock = () => {
  const [context, setContext] = useContext(Context)

  const [state, setState] = useState({})

  const loadDetails = async () => {
    // load stuff
  }

  useEffect(() => {
    try {
      loadDetails()
    } catch (e) {
      console.log(e)
    }
  }, [])

  return <>Flock page</>
}

export default Flock
