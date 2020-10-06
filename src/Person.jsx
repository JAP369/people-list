import React from 'react';
import './Person.css';

function Person({ img, name, style, children }) {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className='person'>
      <img src={url} alt='person image' />
      <h4>{name}</h4>
      {children}
      <h4>{style}</h4>
    </article>
  );
}

export default Person;
