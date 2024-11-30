// AboutUs.js
import React from 'react';

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>We are a passionate food company serving the best dishes made with love and the finest ingredients!</p>
      <h3>Meet the Team</h3>
      <div className="team">
        <div className="team-member">
          <img src="/assets/team-member1.jpg" alt="Chef John Doe" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
          <p>Chef John Doe – Head Chef</p>
        </div>
        <div className="team-member">
          <img src="" alt="Jane Smith" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
          <p>Jane Smith – Sous Chef</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;


