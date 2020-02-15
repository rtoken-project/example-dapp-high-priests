import React from "react"

const EtherscanLink = ({ address, network }) => {
  if (
    network === "homestead" ||
    network === "mainnet" ||
    network === null ||
    typeof network === "undefined"
  )
    network = ""
  else network += "."
  let url = "empty"
  let linkText = "empty "
  if (address && address.search(/0x[0-9a-bA-z]{40}/) === 0) {
    url = `https://${network}etherscan.io/address/${address}`
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
