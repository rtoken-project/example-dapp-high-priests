import React from "react"

import Table from "../src/components/common/Table"
import Leaderboard from "../src/components/common/Leaderboard"
import EtherscanLink from "../src/components/common/EtherscanLink"

export default {
  title: "Common",
}

const row1 = [
  "0x9492510BbCB93B6992d8b7Bb67888558E12DCac4",
  23.456234343,
  90.234234324234,
  <a href="https://rtrees.dappy.com/grove?address=0x9492510bbcb93b6992d8b7bb67888558e12dcac4&network=homestead">
    🌳 Grove
  </a>,
]
const row2 = [
  "pi0neerpat.eth",
  9.45634443,
  90.6969669,
  <a href="https://rtrees.dappy.com/grove?address=0x9492510bbcb93b6992d8b7bb67888558e12dcac4&network=homestead">
    🌳 Grove
  </a>,
]

const tableDetails = {
  headers: ["Planter", "Trees planted", "Trees / yr", "Grove"],
  rows: [row1, row2],
}

export const table = () => (
  <>
    <h1>Basic Table</h1>
    <Table {...tableDetails} />
    <br />
    <h1>Leaderboard</h1>
    <Leaderboard rows={tableDetails.rows} />
  </>
)

export const etherscanLinks = () => (
  <>
    <h1>Shortened Link</h1>
    <EtherscanLink
      address="0x9492510BbCB93B6992d8b7Bb67888558E12DCac4"
      network="homestead"
    />
    <br />
    <EtherscanLink
      address="0x9492510BbCB93B6992d8b7Bb67888558E12DCac4"
      network="kovan"
    />
    <br />
    <EtherscanLink address="pi0neerpat.eth" network="homestead" />
  </>
)
