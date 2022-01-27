import React, { useEffect } from 'react';
import { useState } from 'react';
import { getPeople, getPerson } from '../services/starwars';
import Persons from '../Component/Persons';
import Controls from '../Component/Controls';

export default function People() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const peopleList = await getPeople();
      setPeople(peopleList);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  useEffect(() => {
    const fetchPerson = async () => {
      const searchPerson = await getPerson(query);
      setPerson(searchPerson);
      setLoading2(false);
    };
    if (loading2) {
      fetchPerson();
    }
  }, [loading2, query]);

  if (loading || loading2) return <h1>Loading...</h1>;

  return (
    <>
      <div className="title">
        <h1 className="title-text">Star Wars People!</h1>
      </div>
      <Controls query={query} setQuery={setQuery} setLoading2={setLoading2} />
      <Persons person={person} people={people} />
    </>
  );
}
