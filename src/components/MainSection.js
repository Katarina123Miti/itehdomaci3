import React from 'react';
import '../App.css';
import './MainSection.css';
import Cards from './Cards';

function MainSection() {
  return (
    <>
    <div className='main-container'>
      <image src='../assets/bckg.jpg'/>
      <h1>STUDENTSKI DOMOVI</h1>
      <p>Mesta gde se prave najlepše uspomene!</p>
    </div>
    <div className='main-text'>
    <h1>KO SMO MI</h1>
    <h3>portal studentski domovi</h3>
      <p>
      Obezbedite sebi zanimljiv i pristupačan studentski život.
      </p>
      <p>
      Pronađite Vama najbolji studentski dom.
      </p>
    </div>
    <div className='main-clients'>
      <Cards></Cards>
    </div>
    </>
  );
}

export default MainSection;