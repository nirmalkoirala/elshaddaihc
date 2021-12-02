import React, { useState } from "react";
import axios from "axios";
import Background from '../../images/3.jpg';
import "./index.css";
import emailjs from 'emailjs-com';
import { ContactContainer, ContactContent, Heading, ContactBg } from "./ContactElements";


const Contact = () => {
    const [values, setValues] = useState({
        Name: "", 
        Email: "", 
        Phone: "", 
        Message: "",
    });

const [submitted, setSubmitted] = useState(false);
const [valid, setValid] = useState(false);

    const handleNameInputChange = (event) => {
        setValues({...values, Name: event.target.value})
    }
    const handleEmailInputChange = (event) => {
        setValues({...values, Email: event.target.value})
    }
    const handlePhoneInputChange = (event) => {
        setValues({...values, Phone: event.target.value})
    }
    const handleMessageInputChange = (event) => {
        setValues({...values, Message: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.Name && values.Email && values.Phone && values.Message) {
            setValid(true);
            emailjs.sendForm('service_dwhvbw5', 'template_cx9ve8e', event.target, 'user_bZYe7wtxHIQeQH9aU3Zwk').then(res=>{
              console.log(res);
            }).catch(err=> console.log(err));
        }
        setSubmitted(true);


    }


  return (
      <ContactContainer id="contactus">
        <ContactBg>
        <img src={ Background }/>
        </ContactBg>
          <ContactContent>
              <Heading>Contact Us</Heading>
        <div class="form-container">
        <form class="register-form" onSubmit={handleSubmit} >
            {submitted && valid ? <div className="success-message">Success! Thank you for submitting</div> : null}
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          onChange={handleNameInputChange}
          value={values.Name}
          id="name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="Name"/>
          {submitted && !values.Name ? <span id="name-error">Please enter a first name</span> : null}
        {/* Uncomment the next line to show the error message */}

        <input
        onChange={handleEmailInputChange}
        value={values.Email}
          id="email"
          class="form-field"
          type="email"
          placeholder="Email"
          name="Email"/>
        {submitted && !values.Email ? <span id="email-error">Please enter a valid email</span> : null}
        {/* Uncomment the next line to show the error message */}

        <input
        onChange={handlePhoneInputChange}
        value={values.Phone}
          id="phone"
          class="form-field"
          type="tel"
          placeholder="Phone"
          name="Phone"/>
          {submitted && !values.Phone ? <span id="phone-error">Please enter a phone number</span> : null}
        {/* Uncomment the next line to show the error message */}
        <input
        onChange={handleMessageInputChange}
        value={values.Message}
          id="message"
          class="form-field"
          type="text"
          placeholder="Message"
          name="Message"/>
          {submitted && !values.Message ? <span id="message-error">Please enter a message</span> : null}
        {/* Uncomment the next line to show the error message */}
        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
    </ContactContent>
</ContactContainer>
  );
  }

export default Contact;
