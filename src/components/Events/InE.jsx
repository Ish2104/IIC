// import React from 'react';
// import "../Events/InE.css";

// export default function InE() {
//   return (
//     <div>

      
//     </div>
//   )
// }


import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import "../Events/InE.css"; 
import event1 from "../../images/Event1.png";
import event2 from "../../images/Event2.png";
import event3 from "../../images/Event3.png";





const eventsData = [
  {
    id: 1,
    title: 'EPOCH 6: HACKREWIND',
    date: 'April 10 and 11, 2024',
    image: require('../../images/Event1.png'),
    pdf: '/documents/newsletter_IIC.pdf'
  },
  {
    id: 2,
    title: 'EPOCH 7: HACKFINAL',
    date: 'April 22, 2024',
    image: require('../../images/Event2.png'),
    pdf: '/documents/newsletter_IIC.pdf'
  },
  {
    id: 3,
    title: 'WORLD ENVIRONMENT DAY ',
    date: 'Jun 5, 2024',
    image: require('../../images/Event3.png'),
    pdf: '/documents/newsletter_IIC.pdf'
  },
  // {
  //   id: 4,
  //   title: 'Another Event',
  //   date: 'Aug 15, 2022',
  //   image: require('../../images/Event2.png'),
  //   pdf: 'file:///C:/Users/asus/AppData/Local/Microsoft/Windows/INetCache/IE/2AU9QXPF/newsletter%20IIC[1].pdf'
  // },
  // {
  //   id: 5,
  //   title: 'Another Event',
  //   date: 'Sep 30, 2022',
  //   image: require('../../images/Event2.png'),
  //   pdf: 'file:///C:/Users/asus/AppData/Local/Microsoft/Windows/INetCache/IE/2AU9QXPF/newsletter%20IIC[1].pdf'
  // },
  // Add more events as needed
];

export default function InE() {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

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
            className="title_decoration"
            style={{ height: "0.25rem", width: "50vh", marginLeft: "49vh" }}
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
                <button className="ine-btn session-btn">Session</button>
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
