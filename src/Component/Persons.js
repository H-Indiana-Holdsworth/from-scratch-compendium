import React from 'react';
import './Persons.css';

export default function Persons({ people }) {
  return (
    <div>
      {people.map((item) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <p className="item-card">
            <span>Gender: {item.gender}</span>
            <span>Height: {item.height}</span>
            <span>Mass: {item.mass}</span>
            <span>Hair Color: {item.hair_color}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
