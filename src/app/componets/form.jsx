'use client'

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './form.css'



// Form component
export const Form = () => {
  const formRef = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  // Function to send email
  const sendEmail = (e) => {
  e.preventDefault();
  // Get all needed elements from the DOM
  const form = e.target;
  const nameInput = form.querySelector("#user_name");
  const emailInput = form.querySelector("#user_email");
  const messageInput = form.querySelector("#message");

  // Get needed data from email JS
  const publicKey = "iDWeRGfz2ZBgjaR8R";
  const serviceID = "service_wz5b8es";
  const templateID = "template_0yn1kqu";

  // Initialize email JS with public key (if not initialized already)
  emailjs.init(publicKey);

  // Get all input field values
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Send the email (Add service, template ID, and input field values)
  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      // Handle success: Change button text, clear input fields, or any other actions
      console.log("Message Sent Successfully");
      form.reset(); // Clear the form
      setIsMessageSent(true);

      // Reset the state after 3 seconds
      setTimeout(() => {
        setIsMessageSent(false);
      }, 3000);
    })
    
    .catch((error) => {
      // Handle error: Console log the error, change button text, or any other actions
      console.log(error);
      console.log("Something went wrong");
      setIsMessageSent(false);
    });
  };

  return (
    <form id="contact-form" className='form' ref={formRef} onSubmit={sendEmail}>
      <p type="Full Name"><input id="user_name" placeholder="Write your name here.." name="name" autoComplete="true" /></p>
      <p type="Email"><input id="user_email" placeholder="Let us know how to contact you back.." name="email" autoComplete="true" /></p>
      <p type="Message"><input id="message" placeholder="What would you like to tell us.." name="message"></input></p>
      <button type="submit" className={isMessageSent ? "success" : ""}>{isMessageSent ? "Message Sent Successfully" : "Send Message" }</button>
    </form>
  );
};

export default Form;