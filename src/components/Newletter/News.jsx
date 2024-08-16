import React, { useState } from 'react';
import './News_css.css';

const News = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // The link to your newsletter PDF
    const pdfUrl = '/documents/newsletter_IIC.pdf';
    window.open(pdfUrl, '_blank');
  };

  const handleEmailSubmit = () => {
    if (email) {
      // Create a mailto link with the subscriber's email
      const mailtoLink = `mailto:alok@iiitd.ac.in?subject=I%20SUBSCRIBE%20TO%20YOUR%20NEWSLETTER&body=Subscriber%20email:%20${encodeURIComponent(email)}`;
      window.location.href = mailtoLink;
      setEmail(''); // Clear the input field after submission
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="news-container">
      <h2 className="news-title">Join Our Newsletter</h2>
      <p className="news-description">Click on the button to discover our newsletter and receive the latest news about our events!</p>
      <div className="news-bar">
        <div className="news-bar-content">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="news-input"
          />
        </div>
        <button className="news-button" onClick={handleSubscribe}>Discover</button>
        <button className="news-button subscribe-button" onClick={handleEmailSubmit}>Subscribe</button>
      </div>
    </div>
  );
};

export default News;
