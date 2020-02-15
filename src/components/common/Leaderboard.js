import React from "react"
import styled from "styled-components"

import EtherscanLink from "./EtherscanLink"
import Table from "./Table"

const StyledTable = styled(Table)`
  padding: 15px;
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
`

const Leaderboard = ({ rows, sortByRate }) => {
  const formattedRows = rows.map(row => {
    const newRow = []
    newRow[0] = <EtherscanLink address={row[0]} />
    newRow[1] = Math.round(row[1] * 100) / 100
    newRow[2] = Math.round(row[2])
    newRow[3] = row[3]
    return newRow
  })

  const sortIndex = sortByRate ? 2 : 1
  const sortedRows = formattedRows.sort(function(a, b) {
    return b[sortIndex] > a[sortIndex]
  })

  const trimmedRows = sortedRows.slice(0, 10)

  return (
    <StyledTable
      headers={["Planter", "Trees planted", "Trees / yr", "Grove"]}
      rows={trimmedRows}
    />
  )
}

export default Leaderboard
