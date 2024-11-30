// FeedbackForm.js
import React, { useState } from 'react';

function FeedbackForm() {
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '', rating: 1 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit feedback logic
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div className="feedback-form">
      <h2>Give Us Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          onChange={handleInputChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          onChange={handleInputChange} 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          onChange={handleInputChange} 
        ></textarea>
        <select 
          name="rating" 
          value={feedback.rating} 
          onChange={handleInputChange}
        >
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
