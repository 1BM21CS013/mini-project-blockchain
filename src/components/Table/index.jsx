import React from 'react'

const Table = ({ columns, rows }) => {
  return (
    <table>
      <thead>
        <tr className='border-b-2 border-b-blue-900'>
          {columns.map((col, index) => (
            <th key={index} className='p-4 text-left'>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((col, colIndex) => (
              <td key={colIndex} className={`p-4 ${index % 2 == 0 ? 'bg-slate-100' : ''}`}>{col.render ? col.render(row[col.field]) : row[col.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table