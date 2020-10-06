import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';
import './index.css';

function PeopleList() {
  return (
    <section className='peopleList'>
      <Person img='11' name='Ryu' style='Karate'>
        <p>Street Fighter Martial Artist</p>
      </Person>
      <Person img='22' name='Ken' style='Karate' />
      <Person img='33' name='Sagat' style='Muay Thai' />
    </section>
  );
}

ReactDOM.render(<PeopleList />, document.getElementById('root'));
