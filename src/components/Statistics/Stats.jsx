import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faFileAlt, faFlask, faHandshake } from "@fortawesome/free-solid-svg-icons";
import "./Stats.css";

const IICStatistics = () => {
  const stats = [
    {
      title: "Startups Incubated",
      value: 35,
      icon: faLightbulb,
      info: "Supporting student and faculty-led startups.",
      link: "/startups"
    },
    {
      title: "Patents Filed",
      value: 15,
      icon: faFileAlt,
      info: "Innovative research resulting in patent filings.",
      link: "/patents"
    },
    {
      title: "Innovations Supported",
      value: 50,
      icon: faFlask,
      info: "Fostering creativity and innovative solutions.",
      link: "/innovations"
    },
    {
      title: "Collaborations",
      value: 20,
      icon: faHandshake,
      info: "Partnerships with industries and institutions.",
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
