
import './FormContatos.css';
import Footer from './Footer';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function FormC() {
  const FormC = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m2vfwjx', 'template_watwa5e', FormC.current, 'foMiyKGK4v3qsiv3a')
      .then((result) => {
          alert('Agradecemos pelo envio do feedback.');
      }, (error) => {
          alert(error.message);
      });
      e.target.reset();
  };




  return (
    <>
    <div className='formu'>
    <div className="feed">
      <h1>Nos envie um feedback.</h1>
      </div>
    <form ref={FormC} onSubmit={sendEmail}>
    <div className="ema1">
    <input type="email" placeholder='Email..' name="user_email"/>
    </div>
    <div className='come1'>
    <input type="text" placeholder='Comentario..' name="message"/>
    </div>
    <div className='message'>
      <p>Esta mensagem será direcionada ao nosso Email.</p>
    </div>
    <div className='botao1'>
    <input type="submit" value="    Enviar    " />
    </div>
  </form>
  </div>
  <Footer />
    </>
  )
};

export default FormC;