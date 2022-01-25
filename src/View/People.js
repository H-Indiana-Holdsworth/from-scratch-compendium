import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { getPeople } from '../services/starwars';
import Persons from '../Component/Persons';

export default function People() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const peopleList = await getPeople();
      setPeople(peopleList);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="title">
        <h1 className="title-text">Star Wars People!</h1>
      </div>
      <Persons people={people} />
    </>
  );
}
