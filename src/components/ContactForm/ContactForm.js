import React from 'react';

import './ContactForm.scss';

function ContactForm() {
  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Leave a Message</h2>
      <div className="contact-form__body">
        <div className="contact-form__row">
          <input
            type="text"
            placeholder="Name"
            className="contact-form__name"
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-form__mail"
          />
        </div>
        <div className="contact-form__row">
          <textarea placeholder="Message" className="contact-form__message" />
        </div>
        <button className="contact-form__submit">Submit</button>
      </div>
    </div>
  );
}

export default ContactForm;

// import React, { useState } from 'react';
// import './ContactForm.scss';
// import axios from '../../axios/axios';

// function ContactForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState([]);

//   const submitMessage = async (e) => {
//     e.preventDefault();
//     const data = {
//       name: name,
//       email: email,
//       message: message,
//     };
//     let result = await (await axios.post('/contact', data)).data;
//     console.log(result);
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <form onSubmit={(e) => submitMessage(e)}>
//       <div className="contact-form">
//         <h2 className="contact-form__title">Leave a Message</h2>
//         <div className="contact-form__body">
//           <div className="contact-form__row">
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="Name"
//               className="contact-form__name"
//             />
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Email"
//               className="contact-form__mail"
//             />
//           </div>
//           <div className="contact-form__row">
//             <textarea
//               placeholder="Message"
//               className="contact-form__message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>
//           <button
//             className="contact-form__submit"
//             onClick={(e) => submitMessage(e)}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default ContactForm;
