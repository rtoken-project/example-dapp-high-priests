import React, { useState, createContext } from "react"
import PropTypes from "prop-types"

const Context = createContext()

const ContextProvider = props => {
  const { children } = props
  const [state, setState] = useState({})
  // console.log(state)
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Context, ContextProvider }

/*
 * https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
 */
