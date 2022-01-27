import React from 'react';

export default function Controls({ query, setQuery, setLoading2 }) {
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
      <button onClick={() => setLoading2(true)}>Search</button>
    </div>
  );
}
