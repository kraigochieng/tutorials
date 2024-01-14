import React from 'react'

export default function GlobalFilter({filter, setFilter}) {
  return (
    <span>
        Search:<input value={filter || ''} onChange={(event) => setFilter(event.target.value)}/>
    </span>
  )
}
