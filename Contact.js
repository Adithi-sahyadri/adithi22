// ContactPage.js
import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    console.log('Form submitted', formData);
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Your Email" onChange={handleInputChange} />
        <textarea name="message" placeholder="Your Message" onChange={handleInputChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@foodsite.com</p>
        <p>Location: 123 Food St, City, Country</p>
        {/* Optionally, include an embedded map */}
      </div>
    </div>
  );
}

export default ContactPage;
