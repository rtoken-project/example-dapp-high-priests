import React from "react"

const EtherscanLink = ({ address, network }) => {
  let networkString = `${network}.`
  if (
    network === "homestead" ||
    network === "mainnet" ||
    network === null ||
    typeof networkString === "undefined"
  )
    networkString = ""
  let url = "empty"
  let linkText = "empty "
  if (address && address.search(/0x[0-9a-bA-z]{40}/) === 0) {
    url = `https://${networkString}etherscan.io/address/${address}`
    linkText = `${address.slice(0, 6)}...${address.slice(38, 42)}`
  } else if (address && address.search(/.eth/) > 0) {
    url = `https://etherscan.io/enslookup?q=${address}`
    linkText = address
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {linkText}
    </a>
  )
}

export default EtherscanLink
