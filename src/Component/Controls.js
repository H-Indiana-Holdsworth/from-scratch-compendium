import React from 'react';

export default function Controls({ query, setQuery, handleClick }) {
  return (
    <div>
      <input
        id="filled-basic"
        label="Filled"
        variant="filled"
        type="text"
        placeholder="Search Star Wars People"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
