import React from 'react';
import '../App.css';
import './MainSection.css';
import Cards from './Cards';
//import {Button} from './Button';
import Image1 from '../assets/student-devojka.jpg';
import Image2 from '../assets/momak.jpg';
import Image3 from '../assets/devojka2.jpg';

function MainSection() {
  const clients = [
    {
        name: 'Ana Antić',
        text: 'Studenti, dođite i provedite najlepše dane svoje mladosti okruženi divnim ljudima!',
        src: Image1
    },
    {
        name: 'Milan Ilić',
        text: 'Nisi bio student ako nisi živeo u studentskom domu!',
        src: Image2
    },
    {
        name: 'Milica Lazarević',
        text: 'Ne čekajte i prijavite se! Mladost prolazi!',
        src: Image3
    }
]; 
  return (
    <>
    <div className='main-container'>
      <image src='../assets/bckg.jpg'/>
      <h1>STUDENTSKI DOMOVI</h1>
      <p>Mesta gde se prave najlepše uspomene!</p>
      <div className='main-btns'>
        
      </div>
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
    <Cards title='ŠTA KAŽU O NAMA?' data1={clients} type='clients'></Cards>
    </div>
    </>
  );
}

export default MainSection;