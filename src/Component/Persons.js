import React from 'react';
import './Persons.css';

export default function Persons({ people }) {
  return (
    <div>
      {people.map((person) => (
        <div key={person.name}>
          <h3>{person.name}</h3>
          <p className="person-card">
            <span>Gender: {person.gender}</span>
            <span>Height: {person.height}</span>
            <span>Mass: {person.mass}</span>
            <span>Hair Color: {person.hair_color}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
