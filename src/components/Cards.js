import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image1 from '../assets/student-devojka.jpg';
import Image2 from '../assets/momak.jpg';
import Image3 from '../assets/devojka2.jpg';

function Cards() {

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
    <div className='cards'>
      <h1>Studenti o domu...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem obj={clients[0]}/>
            <CardItem obj={clients[1]}/>
            <CardItem obj={clients[2]}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;