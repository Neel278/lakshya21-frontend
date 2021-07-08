import React, { useState } from 'react';
import './ContactForm.scss';
import Confirmation from '../Confirmation/Confirmation';
import axios from '../../axios/axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState('');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitMessage = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      message: message,
    };
    let result = await (await axios.post('/contact', data)).data;
    console.log(result.message);
    if (result.type === 'error') {
      setError(result.message);
      setOpen(false);
      // have to show pop up for showing error message
      console.warn(error);
    } else {
      setSuccess(result.message[0]);
      setOpen(true);
      // have to show same pop up but with success content
      console.log(success);
    }

    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Leave a Message</h2>
      <div className="contact-form__body">
        <div className="contact-form__row">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="contact-form__name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className="contact-form__mail"
          />
        </div>
        <div className="contact-form__row">
          <textarea
            placeholder="Message"
            className="contact-form__message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="contact-form__submit" onClick={handleClickOpen}>
          Submit
        </button>
      </div>
      <Confirmation open={open} close={handleClose} />
    </div>
  );
}

export default ContactForm;
