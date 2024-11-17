import React, { useEffect } from 'react';
import { LinkedIn } from '@mui/icons-material'; // Import LinkedIn icon from Material UI
import './Team_new.css';
import mem1 from "../../images/pankajvajpayee.jpg";
import mem2 from "../../images/deepika.jpg";
import mem3 from "../../images/anupamsaronwala.jpg";
import mem4 from "../../images/anujg.jpg";
import mem5 from "../../images/pravesh.jpg";
import mem6 from "../../images/jaspreet.jpg";
import mem7 from "../../images/twisha.jpg";
import mem8 from "../../images/gurusahai.jpg";
import mem9 from "../../images/aman.png";

const Team = (props) => {
  useEffect(() => {
    const teamSection = document.querySelector('.team_section');
    const teamMembers = document.querySelectorAll('.team_member');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          teamMembers.forEach(member => member.classList.add('slide-up'));
        }
      });
    });

    observer.observe(teamSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="team_main">
      <section className="team_section">
        <h2>MEET OUR {props.teamType} TEAM</h2>
        <div className="title_decorates"></div>
        <div className="team_grid_wrapper">
          <div className="team_grid">
            {props.teamMembers.map((member, index) => (
              <div key={index} className="team_member">
                <div className="team_image_container">
                  <img src={member.img} alt={member.name} className="team_image" />
                </div>
                <h3>{member.name}</h3>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin_link">
                  <LinkedIn />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
