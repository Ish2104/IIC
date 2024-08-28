import React, { useState, useEffect } from "react";
import "./Front.css";
import Home1 from "../../assets/Home1.png";
import Home2 from "../../assets/Home2.jpg";
import Home3 from "../../assets/Home3.jpg";
import Home4 from "../../assets/Home4.png";

const images = [
  { src: Home1, link: "https://induction.iiitd.edu.in/" },
  { src: Home2, link: "https://iiitd.ac.in/academics/pcr" },
  { src: Home3, link: "https://iiitd.ac.in/vbc" },
  { src: Home4, link: "https://example.com/page3" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
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

      <div className="hero-content">
        <h1>Institute Innovation Council (IIC)</h1>
        <p>
          {/* IIC (Institute Innovation Council) aims to enhance the culture of
          innovation and incubation among faculty and students at IIIT-D,
          leading to successful IIIT-D startups, promoted and owned by the
          faculties and the students. */}
          The Institute Innovation Council (IIC) is dedicated to fostering a
          vibrant culture of innovation and incubation among faculty and
          students at IIIT-D. Our mission is to drive creativity and
          entrepreneurial spirit, resulting in the establishment of successful
          startups. These ventures, promoted and owned by our talented faculty
          and students, showcase the innovative potential and collaborative
          efforts within our community.By fostering collaboration and a proactive mindset, the IIC is dedicated to making IIIT-D a hub of innovation, where ideas are turned into reality, and the next generation of entrepreneurs is born.







        </p>
      </div>
    </div>
  );
};

export default HeroSection;
