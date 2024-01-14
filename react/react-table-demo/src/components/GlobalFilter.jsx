import React, { useState } from 'react';

export default function GlobalFilter({ filter, setFilter }) {
  const [value, setValue] = useState(filter);

  function handleChange(event) {
    const newValue = event.target.value;
    setValue(newValue);

    clearTimeout(handleChange.timeout);
    handleChange.timeout = setTimeout(() => {
      setFilter(newValue || undefined);
    }, 1000);
  }

  return (
    <span>
      Search:<input value={value || ''} onChange={handleChange} />
    </span>
  );
}
