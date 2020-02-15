import React from "react"

const Table = ({ headers, rows }) => {
  let tableRows
  let tableHead

  if (rows.length > 0) {
    tableRows = rows.map(row => {
      const rowItems = row.map(item => <td>{item}</td>)
      return <tr>{rowItems}</tr>
    })
  }

  if (headers) tableHead = headers.map(item => <th>{item}</th>)

  return (
    <table>
      <tr> {tableHead}</tr>
      {tableRows}
    </table>
  )
}

export default Table
