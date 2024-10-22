import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faFileAlt, faFlask, faHandshake } from "@fortawesome/free-solid-svg-icons";
import "./Stats.css";

const IICStatistics = () => {
  const stats = [
    {
      title: "Events Conducted",
      value: 35,
      icon: faLightbulb,
      info: "Total number of events that have been organized, promoting innovation and entrepreneurship.",
      link: "/startups"
    },
    {
      title: "Students Impacted",
      value: 15,
      icon: faFileAlt,
      info: " Total number of students that have been positively impacted through these initiatives.",
      link: "/patents"
    },
    {
      title: "Patent Filed",
      value: 50,
      icon: faFlask,
      info: "Total patents that have been filed, reflecting the institution’s innovation efforts.",
      link: "/innovations"
    },
    {
      title: " Students and Faculty Startups",
      value: 20,
      icon: faHandshake,
      info: "Total startups that have been launched by both students and faculty, fostering a thriving entrepreneurial ecosystem.",
      link: "/collaborations"
    },
  ];

  return (
    <div className="statistics-section">
      <h2>Impact and Statistics</h2>
      <div className="tit_decoration"></div>
      <div className="statistics-grid">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stat-item"
            onClick={() => window.location.href = stat.link} 
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
            <h3>
              <CountUp start={0} end={stat.value} duration={2.5} />
            </h3>
            <p>{stat.title}</p>
            <div className="extra-info">{stat.info}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IICStatistics;
