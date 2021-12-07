//? service id user id template id can be found after you login in emailjs
//*https://www.emailjs.com/
//!EMAIL JS STORES ALL EMAILS AND MESSAGE ONLY IN THEIR DASHBOARD
//!EMAIL JS CAN"T BE USED FOR SENDING EMAILS TO ANY ONE

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // service id
        'service_q6pk2dt',
        // templateid
        'template_o94lnzn',
        form.current,
        // user id
        'user_1rbpcOJKasciTcqBES9fw'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
