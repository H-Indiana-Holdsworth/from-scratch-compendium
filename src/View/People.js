import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { getPeople } from '../services/starwars';
import Persons from '../Component/Persons';
import Controls from '../Component/Controls';

export default function People() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const peopleList = await getPeople(query);
      setPeople(peopleList);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="title">
        <h1 className="title-text">Star Wars People!</h1>
      </div>
      <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
      <Persons people={people} />
    </>
  );
}
