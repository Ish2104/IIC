import React from 'react';
import './Foot.css'; // Ensure you have this CSS file to style the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_left">
          <p>Copyright © 2024 IIIT-Delhi. All Rights Reserved</p>
        </div>
        <div className="footer_right">
          <p>Design & Development By: Web Admin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
