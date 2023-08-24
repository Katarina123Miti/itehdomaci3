import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Footer() {
    const [buttonClick, setButtonClick] = useState('');

  const onClick = () => {
    if(buttonClick != '') {
      setButtonClick('');
      setTimeout(() => {
        alert('Hvala na prijavi na naš newsletter!');
      }, 10);
    }
  }

  const onClick2 = () => {
    if(buttonClick != '') {
      setButtonClick('');
      setTimeout(() => {
        alert('Hvala Vam! Potrudićemo se da usvojimo predloge i pohvale!');
      }, 10);
    }
  }

  const onChange = (e) => {
    setButtonClick(e.target.value);
  }
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Prijavite se da biste dobijali sve neophodne informacije o konkursu za dom:
        </p>
        <p className='footer-subscription-text'>
          Možete se odjaviti kad god budete želeli.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
              value={buttonClick}
              onChange={onChange}
            />
             <Button buttonStyle='btn--outline' onClick={onClick} >Prijavi se</Button>
          </form>
        </div>
      </section>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
          Ostavite nam sugestiju/komentar!
        </p>
        <div className='input-areas'>
          <form>
            <textarea
              className='footer-input'
              name='comment'
              type='comment'
              placeholder='Komentar'
              value={buttonClick}
              onChange={onChange}
            />
            <br></br>
              <Button buttonStyle='btn--outline' onClick={onClick2}>Pošalji komentar</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;