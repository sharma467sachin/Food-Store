import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user is logged in
    const userLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    if (userLoggedIn) {
      // Save contact data in session storage
      const contactData = {
        name,
        email,
        phone,
        message
      };
      sessionStorage.setItem('contactData', JSON.stringify(contactData));

      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage(''); 
    } else {
      // If user is not logged in, display a message to log in first
      alert('Please log in to submit your contact information.');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  };

  return (
    <div className="contact-us-container">
      <div className="left-section">
        <h2>
          <span className="black-text">Request A</span> <span className="white-text">Call Back</span>
        </h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
          </div>
          <div className="form-group">
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone number' />
          </div>
          <div className="form-group">
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" placeholder='Write Your Message'></textarea>
          </div>
          <button type="submit" id='send'>Send</button>
        </form>
        {submitted && <p>Contact information submitted successfully!</p>}
      </div>
      <div className="right-section">
        <img src="https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303520.jpg?t=st=1713025523~exp=1713029123~hmac=047a48aec690cb6b0a3316cf335652deb7a0613b81fe77a692a0f6d259d689e9&w=900" alt="Image" id='cont_img' />
      </div>
    </div>
  );
};

export default Contact;
