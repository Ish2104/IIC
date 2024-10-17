import React, { useEffect } from "react";
import "./services.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLightbulb } from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-section">
      <h2>IIC'S ACTIVITIES</h2>

      <div className="title_decoration"></div>

      <p>The following are key activities involved in the Institution's Innovation Council (IIC):</p>

      <div className="services-container">
        <div className="service" data-aos="fade-left">
          <FaLightbulb className="service-icon" />
          <h3>Promoting Innovation</h3>
          <p>
            This includes encouraging experimentation, supporting risk-taking,
            and providing resources and opportunities for individuals and teams
            to explore new concepts. By valuing diverse perspectives and staying
            open to change, organizations and societies can drive progress and
            achieve groundbreaking solutions.
          </p>
        </div>
        <div className="service" data-aos="fade-left">
          <FaLightbulb className="service-icon" />
          <h3>Supporting Entrepreneurs</h3>
          <p>
            This includes offering access to funding, business advice, and
            practical tools, as well as creating a nurturing environment that
            encourages risk-taking and growth. Effective support helps
            entrepreneurs navigate challenges and scale their businesses,
            driving economic and social impact.
          </p>
        </div>
        <div className="service" data-aos="fade-left">
          <FaLightbulb className="service-icon" />
          <h3>Building Startup Ecosystem</h3>
          <p>
            It includes cultivating a collaborative community, facilitating
            access to funding and talent, and promoting an entrepreneurial
            culture. A well-developed ecosystem enhances the chances of startup
            success and drives innovation and economic growth.
          </p>
        </div>
      </div>

      <div className="idea-section">
        <p>
          Do you have new ideas? We welcome innovative suggestions and creative
          thoughts that can help us build a brighter future together. Share your
          ideas, and let's make an impact!
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScODPy0LM7LI0R9Q3lXnD--Z51yodTnNKb3k0MpM1AZB9gQrg/viewform?usp=sf_link" className="yes-button">
          YES
        </a>
      </div>
    </div>
  );
};

export default Services;
