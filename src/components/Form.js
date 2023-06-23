import React from 'react';
import "../styles/form.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import ModalMsg from './ModalMsg';
import { useState } from 'react';

function Form() {
  const form = useRef();
  const [text, setText] = useState("Contactez-moi")
  const [opened, setIsOpened] = useState(false)
  // const isOpened = useSelector((state) => state.isOpened)
  // console.log(isOpened);

  const onChangeValue = () => {
    handleOpenModal();
  }
  const handleOpenModal = () => {
    setIsOpened(!opened)

  }

  console.log(text)

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_5s1xyxx";
    const templateId = "template_l7qk1j4";
    const publicKey = "BgneIOmTI_wiVuDLh";

    setText("Envoie en cours...")

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        if (result.text === "OK") {
          e.target.reset();
          setText("Contactez-moi")
          handleOpenModal()
        }

      }, (error) => {
        console.log(error.text);
      });


  };



  return (
    <div className='form-container' id='contact'>
      <h2 className='contact-title'>Me contacter</h2>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <div className='input-wrapper1'>
          <input className='contact-input' type='text' placeholder='Name' name='user_name' />
          <input className='contact-input' type='email' placeholder='Email address' name='user_email' /> </div>
        <div className='input-wrapper2'>
          <textarea className="contact-text" name='message' type='text' placeholder='Message'></textarea> </div>
        <input className='contact-submit' type='submit' value={text} id='input-submit' /> </form>
      {opened && <ModalMsg onChangeValue={onChangeValue} />}

    </div>
  )
}

export default Form
