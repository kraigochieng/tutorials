import React from 'react'

export default function ColumnFilter({column}) {
  const {filterValue, setFilter} = column
  
  return (
    <span>
        Search:
        <input value={filterValue || ''} onChange={(event) => setFilter(event.target.value)}/>
    </span>
  )
}
