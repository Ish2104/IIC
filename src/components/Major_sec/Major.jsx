import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./hero_major.css";

const Hero_major = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div className="hero-major" data-aos="fade-up">
      <section className="hero_major">
        <div className="focus-area" data-aos="slide-up">
          <h2 data-aos="zoom-in">Major Focus Areas</h2>
          <div className="title_decoration" data-aos="fade-in">
            {/* Decoration element */}
          </div>
          <ul data-aos="fade-up">
            <li>To create a vibrant local innovation ecosystem.</li>
            <li>Start-up/entrepreneurship supporting Mechanism in HEIs.</li>
            <li>Prepare the institute for Atal Ranking of Institutions on Innovation Achievements Framework (ARIIA).</li>
            <li>Establish Function Ecosystem for Scouting Ideas and Pre-incubation of Ideas.</li>
            <li>Develop better Cognitive Ability amongst Technology Students.</li>
          </ul>
        </div>

        <div className="functions-area" data-aos="slide-up">
          <h2 data-aos="zoom-in">Functions</h2>
          <div className="title_decoration" data-aos="fade-in">
            {/* Decoration element */}
          </div>
          <ul data-aos="fade-up">
            <li>To conduct various innovation and entrepreneurship-related activities prescribed by Central MIC in a time-bound fashion.</li>
            <li>Identify and reward innovations and share success stories.</li>
            <li>Organize periodic workshops/seminars/interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.</li>
            <li>Network with peers and national entrepreneurship development organizations.</li>
            <li>Create an Institution’s Innovation portal to highlight innovative projects carried out by institution’s faculty and students.</li>
            <li>Organize Hackathons, idea competitions, mini-challenges, etc. with the involvement of industries.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Hero_major;
