import React, { useState } from 'react';
import "../Contacts_new/Con_New.css";

const Con_New = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:alok@iiitd.ac.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">Contact Us</h2>
      <div
            className="title_decorator"
            style={{ height: "0.20rem", width: "43vh", marginLeft: "0vh" }}
          >
            {" "}
            hello
        </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <div className="contact-item">
              <h4>Address:</h4>
              <p>IIIT Delhi, New Delhi, India</p>
            </div>
            <div className="contact-item">
              <h4>Call Us:</h4>
              <p>+91 11 26907400</p>
            </div>
            <div className="contact-item">
              <h4>Email Us:</h4>
              <p>info@iiitd.ac.in</p>
            </div>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.859493968734!2d77.26904477495351!3d28.543942688099083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1721920970948!5m2!1sen!2sin"
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
            />
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Message" 
              value={formData.message} 
              onChange={handleChange} 
              required>
            </textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Con_New;
