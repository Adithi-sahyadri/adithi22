// SignUp.js
import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === '' || formData.password === '') {
      setError('Please fill in all fields');
    } else {
      // Simulate sign up logic
      console.log('User signed up:', formData);
    }
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
