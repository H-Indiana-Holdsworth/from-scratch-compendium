import React, { useEffect } from 'react';
import { useState } from 'react';
import { getPeople, getPerson } from '../services/starwars';
import Persons from '../Component/Persons';
import Controls from '../Component/Controls';
import DarkModeToggle from '../hooks/DarkMode';

export default function People() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const peopleList = await getPeople();
      setPeople(peopleList);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleClick = async () => {
    const searchPerson = await getPerson(query);
    setPeople(searchPerson);
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="title">
        <h1 className="title-text">Star Wars People!</h1>
      </div>
      <Controls query={query} setQuery={setQuery} handleClick={handleClick} />
      <DarkModeToggle />
      <Persons people={people} />
    </>
  );
}
