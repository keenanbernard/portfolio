import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css'

export const ContactUs = () => {
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vnp2gwp', 'template_dua45nl', form.current, 'f1Av-EeUPprCppgtL')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    clearForm();
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const EmailErrorMessage = () => {
    return (
      <p className="FieldError">Please enter a valid email</p>
    );
  };

  const getIsFormValid = () => {

    return !(fullName.length < 1 || message.length < 8 || !validateEmail(email));

  };

  const clearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="Contact">
      <form ref={form} onSubmit={sendEmail}>
        <fieldset>
          <h2>Get In Touch</h2>
          <div className="Field">
            <label>
              name <sup>*</sup>
            </label>
            <input placeholder="Name" type="text" name="user_name" onChange={e => setFullName(e.target.value)} value={fullName}/>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" type="Email" name="user_email" onChange={e => setEmail(e.target.value)} value={email}/>
            {!validateEmail(email) ? EmailErrorMessage() : null}
          </div>
          <div className="Field">
            <label>
              Message <sup>*</sup>
            </label>
            <input className="Field" placeholder="Message" type="text" name="message" onChange={e => setMessage(e.target.value)} value={message}/>
          </div>
          <button type="submit" value="Send" disabled={!getIsFormValid()}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};