import React, { useState } from "react";
import "./Cont.css";
import logo1 from "../../images/contact.png";
// import logo2 from "../../images/map.png";

import { Link } from "react-router-dom";

function Cont() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:alok.nikhil@gmail.com?subject=${encodeURIComponent(
      query)}`
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="cont_home">
      <section className="cont_hed">
        <div className="cont">
          <h1>Contact Us</h1>
          <div
            className="title_decorater"
            // style={{
            //   height: "0.3rem",
            //   width: "27vh",
            //   marginLeft: "0vh",
            //   marginTop: "2vh",
            // }}
          >
            {/* {" "}
            hello */}
          </div>
          <br />
          <img src={logo1} alt="details" />
        </div>
      </section>

      <section className="Cont_Cards">
        <div className="cont_types">
          <div className="cont_type1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.859493968734!2d77.26904477495351!3d28.543942688099083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1721920970948!5m2!1sen!2sin"
              width="300"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="location"
            ></iframe>
            <p className="discription">Locate us on Maps.</p>
          </div>

          <div className="cont_type1">
            <p>Contact Us</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              ></textarea>
              <button type="submit" className="cont_btn">
                Submit Details
              </button>
            </form>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Cont;
