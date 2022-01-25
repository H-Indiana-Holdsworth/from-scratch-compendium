import React from 'react';

export default function Controls({ query, setQuery, setLoading }) {
  return (
    <div>
      <input
        id="filled-basic"
        label="Filled"
        variant="filled"
        type="text"
        placeholder="Search pokemans"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
