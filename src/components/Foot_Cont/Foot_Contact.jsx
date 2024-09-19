import React from 'react';
import './Foot_Contact.css'; // Ensure you have this CSS file to style the footer

const Footer_Cont = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_section">
          <h3>Address</h3>
          <p>
            Indraprastha Institute of Information Technology<br />
            Delhi Okhla Industrial Estate, Phase III<br />
            (Near Govind Puri Metro Station)<br />
            New Delhi, India - 110020
          </p>
        </div>
        <div className="footer_section">
          <h3>President</h3>
          <p>
            Prof <br />
            Director, IIIT DELHI<br />
            President, IIC, IIIT DELHI<br />
            <a href="mailto:director.iith.ac.in">director.iiitd.ac.in</a>
          </p>
        </div>
        <div className="footer_section">
          <h3>Contact Us</h3>
          <p>
            <strong>Email:</strong> <a href="mailto:info@iiitd.ac.in">info@iiitd.ac.in</a><br />
            <strong>Phone:</strong> +91-011-71985300, +91-011-26907400-7404 (5 lines)<br />
            <strong>Fax:</strong> +91-11-26907405
          </p>
        </div>
        <div className="footer_section">
          <h3>Quick Links</h3>
          <p>
            <a href="https://iic.mic.gov.in/">MOE Innovation Cell</a>
          </p>
        </div>
      </div>
      <div className="footer_bottom"> 
        <p>IIITD Website | Web Team</p>
      </div>
    </footer>
  );
};

export default Footer_Cont;
