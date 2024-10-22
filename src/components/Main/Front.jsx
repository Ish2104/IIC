import React, { useState, useEffect } from "react";
import "./Front.css";
import Home1 from "../../assets/Home1.png";
import Home2 from "../../assets/Home2.jpg";
import Home3 from "../../assets/Home3.jpg";
import Home4 from "../../assets/Home4.png";
import Home5 from "../../assets/Home5.png";

const images = [
  { src: Home1, link: "https://induction.iiitd.edu.in/" },
  { src: Home2, link: "https://iiitd.ac.in/academics/pcr" },
  { src: Home3, link: "https://iiitd.ac.in/vbc" },
  { src: Home4, link: "https://example.com/page3" },
  {
    src: Home5,
    link: "https://www.ieee-ises.org/IEEE-iSES_2024_Website/index.html",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Trigger the animations as soon as the component mounts
    setTimeout(() => {
      setTitleVisible(true);
    }, 500); // Delay title animation slightly
    setTimeout(() => {
      setDescriptionVisible(true);
    }, 1000); // Delay description animation slightly
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hero-section">
      <div className="hero-image">
        <a
          href={images[currentIndex].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={images[currentIndex].src} alt="Hero" />
        </a>
        <button className="prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="next" onClick={handleNext}>
          ❯
        </button>
      </div>

      <div className={`title-div ${titleVisible ? "slide-in-left" : ""}`}>
        <h1>Institute Innovation Council (IIC)</h1>
      </div>
      <div
        className={`description-div ${
          descriptionVisible ? "slide-in-right" : ""
        }`}
      >
        <p>
          The Institute Innovation Council (IIC) is committed to nurturing a
          dynamic culture of innovation and incubation among faculty and
          students at IIIT-Delhi. Our mission is to ignite creativity and
          entrepreneurial spirit, leading to the formation of successful
          startups. These ventures, developed and led by our talented faculty
          and students, highlight the innovative potential and collaborative
          energy within our community. By promoting teamwork and a proactive
          approach, the IIC aims to establish IIIT-Delhi as a vibrant hub of
          innovation, where ideas are transformed into reality and the next
          generation of entrepreneurs is empowered to thrive.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
