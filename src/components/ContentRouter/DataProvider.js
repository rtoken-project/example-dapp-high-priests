import React, { useContext, useEffect } from "react"

import { Context } from "../context"

import Web3Utils from "../Dappi/Web3Utils"

// ============================
// DataProvider CURRENTLY UNUSED
// Todo: delete

const DataProvider = () => {
  const [context, setContext] = useContext(Context)

  const updateCompoundRate = async () => {
    const web3Utils = new Web3Utils()
    const { rate, error } = await web3Utils.getCompoundRate()
    if (error) {
      console.log(error.message)
      return
    }
    if (web3Utils.isBrowser()) {
      localStorage.setItem("compoundRate", rate)
    }
    setContext({
      ...context,
      compoundRate: rate,
    })
  }

  useEffect(() => {
    updateCompoundRate()
  }, [])

  return <></>
}

export default DataProvider
