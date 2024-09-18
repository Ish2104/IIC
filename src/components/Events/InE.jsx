

import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import "../Events/InE.css"; 





const eventsData = [
  {
    id: 1,
    title: 'OnCoslice',
    date: '15th March 2024',
    image: require('../../images/Oncos.png'),
    pdf: '/documents/OnCoslice.pdf'
  },
  {
    id: 2,
    title: 'Internship Fair',
    date: '15-16 March 2024',
    image: require('../../images/Intern.png'),
    pdf: '/documents/Internship.pdf'
  },
  {
    id: 3,
    title: 'Design Panel ',
    date: '16 March 2024',
    image: require('../../images/Design.png'),
    pdf: '/documents/Design.pdf'
  },
  {
    id: 4,
    title: 'Design Hub Designathon',
    date: '16 March 2024',
    image: require('../../images/Des.png'),
    pdf: '/documents/Designathon.pdf'
  },
  {
    id: 5,
    title: 'Epoch',
    date: '15-16 March 2024',
    image: require('../../images/Epoch.png'),
    pdf: '/documents/Epoch.pdf'
  },
  {
    id: 6,
    title: 'Enactus fair',
    date: '16 March 2024',
    image: require('../../images/Enactus.png'),
    pdf: '/documents/Enactus.pdf'
  },

  {
    id: 7,
    title: 'Capitalist Date',
    date: '16 March 2024',
    image: require('../../images/Cap.png'),
    pdf: '/documents/Cap.pdf'
  },
  {
    id: 8,
    title: 'Robosoccer',
    date: '16 March 2024',
    image: require('../../images/Rob.png'),
    pdf: '/documents/Rob.pdf'
  },
  {
    id: 9,
    title: 'Fork It',
    date: '15-16 March 2024',
    image: require('../../images/Epoch.png'),
    pdf: '/documents/Epoch.pdf'
  },
  {
    id: 10,
    title: 'Epoch',
    date: '15-16 March 2024',
    image: require('../../images/Epoch.png'),
    pdf: '/documents/Epoch.pdf'
  },
  {
    id: 11,
    title: 'Epoch',
    date: '15-16 March 2024',
    image: require('../../images/Epoch.png'),
    pdf: '/documents/Epoch.pdf'
  },
  {
    id: 12,
    title: 'Epoch',
    date: '15-16 March 2024',
    image: require('../../images/Epoch.png'),
    pdf: '/documents/Epoch.pdf'
  },
  {
    id: 13,
    title: 'Epoch',
    date: '15-16 March 2024',
    image: require('../../images/Epoch.png'),
    pdf: '/documents/Epoch.pdf'
  },
  {
    id: 14,
    title: 'Epoch',
    date: '15-16 March 2024',
    image: require('../../images/Epoch.png'),
    pdf: '/documents/Epoch.pdf'
  },
  {
    id: 15,
    title: 'Epoch',
    date: '15-16 March 2024',
    image: require('../../images/Epoch.png'),
    pdf: '/documents/Epoch.pdf'
  },
  {
    id: 16,
    title: 'Epoch',
    date: '15-16 March 2024',
    image: require('../../images/Epoch.png'),
    pdf: '/documents/Epoch.pdf'
  },
  

  
];

export default function InE() {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  // Calculate the indices for the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventsData.slice(indexOfFirstEvent, indexOfLastEvent);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="ine-events">
      <h2 className="ine-title">I & E Events</h2>
      <div
            className="title_decorate"
            style={{ height: "0.20rem", width: "41vh", marginLeft: "63vh",marginTop:"0vh" }}
          >
            {" "}
            hello
        </div>
      <div className="ine-event-grid">
        {currentEvents.map(event => (
          <div key={event.id} className="ine-event-card">
            <img src={event.image} alt={event.title} className="ine-event-image" />
            <div className="ine-event-info">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <div className="ine-event-buttons">
                {/* <button className="ine-btn session-btn">Session</button> */}
                <button
                  className="ine-btn detail-btn"
                  onClick={() => window.open(event.pdf, '_blank')}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          count={Math.ceil(eventsData.length / eventsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
}
