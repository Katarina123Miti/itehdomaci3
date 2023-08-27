import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { useState } from 'react';

function Footer() {
    const [emailInput, setEmailInput] = useState('');
    const [commentInput, setCommentInput] = useState('');

  const onClickEmail = () => {
    if(emailInput !== '') {
      setEmailInput('');
      setTimeout(() => {
        alert('Hvala na prijavi na naš newsletter!');
      }, 10);
    }
  }

  const onClickComment = () => {
    if(commentInput !== '') {
      setCommentInput('');
      setTimeout(() => {
        alert('Hvala Vam! Potrudićemo se da usvojimo predloge i pohvale!');
      }, 10);
    }
  }

  const onChangeEmail = (e) => {
    setEmailInput(e.target.value);
  }

  const onChangeComment = (e) => {
    setCommentInput(e.target.value);
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
        <div className='input'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
              value={emailInput}
              onChange={onChangeEmail}
            />
             <Button buttonStyle='btn--outline' onClick={onClickEmail} >Prijavi se</Button>
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
              value={commentInput}
              onChange={onChangeComment}
            />
            <br></br>
              <Button buttonStyle='btn--outline' onClick={onClickComment}>Pošalji komentar</Button>
          </form>
        </div>
      </section>
      <div className='website-rights'>SD 2023</div>
    </div>
  );
}

export default Footer;