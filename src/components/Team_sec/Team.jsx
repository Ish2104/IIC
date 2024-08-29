import React, { useEffect, useRef, useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './Team_new.css';
import mem1 from "../../images/pankajvajpayee.jpg";
import mem2 from "../../images/deepika.jpg";
import mem3 from "../../images/anupamsaronwala.jpg";
import mem4 from "../../images/anujg.jpg";
import mem5 from "../../images/pravesh.jpg";
import mem6 from "../../images/jaspreet.jpg";
import mem7 from "../../images/twisha.jpg";
import mem8 from "../../images/gurusahai.jpg";

const teamMembers = [
  { name: "Dr. Pankaj Vajpayee", img: mem1, linkedin: "https://www.linkedin.com/in/pankaj-vajpayee/" },
  { name: "Dr. Deepika Bhaskar", img: mem2, linkedin: "https://www.linkedin.com/in/deepika-bhaskar/" },
  { name: "Mr. Anupam Saronwala", img: mem3, linkedin: "https://www.linkedin.com/in/anupam-saronwala/" },
  { name: "Dr. Anuj Grover", img: mem4, linkedin: "https://www.linkedin.com/in/anuj-grover/" },
  { name: "Dr. Pravesh Biyani", img: mem5, linkedin: "https://www.linkedin.com/in/pravesh-biyani/" },
  { name: "Dr. Jaspreet Kaur", img: mem6, linkedin: "https://www.linkedin.com/in/jaspreet-kaur/" },
  { name: "Twisha Kacker", img: mem7, linkedin: "https://www.linkedin.com/in/twisha-kacker/" },
  { name: "Kumar Gurusahai", img: mem8, linkedin: "https://www.linkedin.com/in/kumar-gurusahai/" }
];

const Team = () => {
  const containerRef = useRef(null);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer && scrolling) {
        scrollAmount += 1;
        scrollContainer.scrollLeft += 1; // Adjust speed here

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    };

    const scrollInterval = setInterval(scroll, 30);

    return () => clearInterval(scrollInterval);
  }, [scrolling]);

  useEffect(() => {
    const teamMembers = document.querySelectorAll('.team_member');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
          observer.unobserve(entry.target); // Stop observing after it slides up
        }
      });
    });

    teamMembers.forEach(member => {
      observer.observe(member);
    });

    return () => {
      teamMembers.forEach(member => {
        observer.unobserve(member);
      });
    };
  }, []);

  const handleScrollLeft = () => {
    const scrollContainer = containerRef.current;
    scrollContainer.scrollLeft -= 300;
  };

  const handleScrollRight = () => {
    const scrollContainer = containerRef.current;
    scrollContainer.scrollLeft += 300;
  };

  const handleMouseEnter = () => setScrolling(false);
  const handleMouseLeave = () => setScrolling(true);

  return (
    <div className="team_main">
      <section className="team_section">
        <h2>MEET OUR TEAM</h2>
        <div className="title_decorate"></div>
        <div className="team_grid_wrapper">
          <button className="scroll_button left" onClick={handleScrollLeft}>
            <ArrowBackIos />
          </button>
          <div 
            className="team_grid" 
            ref={containerRef} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            {teamMembers.concat(teamMembers).map((member, index) => (
              <div key={index} className="team_member">
                <div className="team_image_container">
                  <img src={member.img} alt={member.name} className="team_image" />
                </div>
                <h3>{member.name}</h3>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin_link">
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
          <button className="scroll_button right" onClick={handleScrollRight}>
            <ArrowForwardIos />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;
