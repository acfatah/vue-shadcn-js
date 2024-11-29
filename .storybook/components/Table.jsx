// eslint-disable-next-line no-unused-vars
import React from 'react'

function Table({ headers, rows }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.keys(row).map((cell, cellIndex) => (
              <td key={cellIndex}>
                {row[cell]}
              </td>
            ))}
            <td>
              <div
                style={{
                  minHeight: '24px',
                  width: `${row.size}`,
                  backgroundColor: 'green',
                }}
              >
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
