import React from 'react';
import Slider from 'react-slick';
import OncosImage from '../../images/Oncos.png'; 
import InternImage from '../../images/Intern.png';
import DesignImage from '../../images/Design.png';
import DesImage from '../../images/Des.png';
import EpochImage from '../../images/Epoch.png';
import EnactusImage from '../../images/Enactus.png';
import CapImage from '../../images/Cap.png';
import RobImage from '../../images/Rob.png';
import ForkImage from '../../images/Fork.png';
import BizImage from '../../images/Biz.png';
import FinImage from '../../images/Fin.png';
import SolvImage from '../../images/Solv.png';
import FintechImage from '../../images/Fintech.png';
import VcsImage from '../../images/Vcs.png';
import BharatImage from '../../images/Bharat.png';
import AdImage from '../../images/Ad.png';
import Afro from '../../images/Afro.png';
import Wit from '../../images/Wit.png';
import Micro from '../../images/Micro.png';
import Cam from '../../images/Cam.png';

import './InE.css';

// const eventsData = [
//   { id: 1, title: 'OnCoslice', date: '15th March 2024', image: OncosImage, pdf: '/documents/OnCoslice.pdf' },
//   { id: 2, title: 'Internship Fair', date: '15-16 March 2024', image: InternImage, pdf: '/documents/Internship.pdf' },
//   { id: 3, title: 'Design Panel', date: '16 March 2024', image: DesignImage, pdf: '/documents/Design.pdf' },
//   { id: 4, title: 'Design Hub Designathon', date: '16 March 2024', image: DesImage, pdf: '/documents/Designathon.pdf' },
//   { id: 5, title: 'Epoch', date: '15-16 March 2024', image: EpochImage, pdf: '/documents/Epoch.pdf' },
//   { id: 6, title: 'Enactus fair', date: '16 March 2024', image: EnactusImage, pdf: '/documents/Enactus.pdf' },
//   { id: 7, title: 'Capitalist Date', date: '16 March 2024', image: CapImage, pdf: '/documents/Cap.pdf' },
//   { id: 8, title: 'Robosoccer', date: '16 March 2024', image: RobImage, pdf: '/documents/Rob.pdf' },
//   { id: 9, title: 'Fork It', date: '16 March 2024', image: ForkImage, pdf: '/documents/Fork.pdf' },
//   { id: 10, title: 'The Biz-Ent-ine Empire', date: '15 March 2024', image: BizImage, pdf: '/documents/Biz.pdf' },
//   { id: 11, title: 'Finance Dilema', date: '16 March 2024', image: FinImage, pdf: '/documents/Fin.pdf' },
//   { id: 12, title: 'Bidding B-Plan', date: '16 March 2024', image: SolvImage, pdf: '/documents/Bid.pdf' },
//   { id: 13, title: 'Fintech Hackathon', date: '15-16 March 2024', image: FintechImage, pdf: '/documents/Fintech.pdf' },
//   { id: 14, title: 'Vcs Investor Panel', date: '15 March 2024', image: VcsImage, pdf: '/documents/Vcs.pdf' },
//   { id: 15, title: 'Bharat AI', date: '16 March 2024', image: BharatImage, pdf: '/documents/Bharat.pdf' },
//   { id: 16, title: 'Ad-Mad', date: '15 March 2024', image: AdImage, pdf: '/documents/Ad.pdf' },

// /* 
//   nodata
//   { id: 17, title: 'IIITD Pitchers S1', date: '5 April 2024', image: , pdf: '' },
//   { id: 18, title: 'IIITD Pitchers S2', date: '12 April 2024', image: , pdf: '' },
//   { id: 19, title: 'IIITD Pitchers S3', date: '17 April 2024', image: , pdf: '' },

//   { id: 20, title: 'World Environment Day ', date: '5 June 2024', image: , pdf: '' },
// */
  

//   { id: 17, title: 'Afro Asian Conference', date: '6 July 2024', image: Afro, pdf: '/documents/Afro.pdf' },
//   { id: 18, title: 'Witnessing Disaster', date: '6-10 August 2024', image: Wit, pdf: '/documents/Wit.pdf' },
//   { id: 19, title: 'Micro-eco of Irrigation', date: '9 August 2024', image: Micro, pdf: '/documents/Micro.pdf' },
//   { id: 20, title: 'Campus Investment', date: '9 August 2024', image: Cam, pdf: '/documents/Cam.pdf' },

//   /*   
//    nodata
//   { id: 21, title: 'Snackchat Event ', date: '21 August 2024', image: , pdf: '' },
//   { id: 22, title: 'TechSpectra 2024 ', date: '23-25 August 2024', image: AdImage, pdf: '' },
//   { id: 23, title: 'Vision Alignment and Team Building Workshop ', date: '17 September 2024', image: , pdf: '' },
//   { id: 24, title: 'Smart India Hackathon', date: '21 September 2024', image: , pdf: '' },
//   { id: 25, title: 'India Internet Day', date: '27 September 2024', image: , pdf: '' },
//   */


// ]; 

const EventCarousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Show one set of 6 events at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,  // Show one set of 6 events
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,  // Still 6 events, just adjust row layout with CSS
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,  // Maintain structure but stack events vertically
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="ine-events">
      <h2 className="ine-title">{props.heading}</h2>
      <div className="title_decorate"></div>
            {props.eventsData.length > 6 ? (
        <Slider {...settings}>
          {props.eventsData.map((event, index) => {
            // Only create a new row every 6 events
            if (index % 6 === 0) {
              return (
                <div key={index} className="ine-event-slide">
                  <div className="ine-event-row">
                    {/* Row 1: 3 events */}
                    {props.eventsData.slice(index, index + 3).map(event => (
                      <div key={event.id} className="ine-event-card">
                        <div className="ine-event-image-container">
                          <img src={event.image} alt={event.title} className="ine-event-image" />
                        </div>
                        <div className="ine-event-info">
                          <h3>{event.title}</h3>
                          <p>{event.date}</p>
                          <div className="ine-event-buttons">
                            <a href={event.pdf} className="ine-btn session-btn" target="_blank" rel="noopener noreferrer">
                              Details
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="ine-event-row">
                    {/* Row 2: 3 events */}
                    {props.eventsData.slice(index + 3, index + 6).map(event => (
                      <div key={event.id} className="ine-event-card">
                        <div className="ine-event-image-container">
                          <img src={event.image} alt={event.title} className="ine-event-image" />
                        </div>
                        <div className="ine-event-info">
                          <h3>{event.title}</h3>
                          <p>{event.date}</p>
                          <div className="ine-event-buttons">
                            <a href={event.pdf} className="ine-btn session-btn" target="_blank" rel="noopener noreferrer">
                              Details
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </Slider>
      ) : (
        props.eventsData.map((event, index) => {
          // Only create a new row every 6 events
          if (index % 6 === 0) {
            return (
              <div key={index} className="ine-event-slide">
                <div className="ine-event-row">
                  {/* Row 1: 3 events */}
                  {props.eventsData.slice(index, index + 3).map(event => (
                    <div key={event.id} className="ine-event-card">
                      <div className="ine-event-image-container">
                        <img src={event.image} alt={event.title} className="ine-event-image" />
                      </div>
                      <div className="ine-event-info">
                        <h3>{event.title}</h3>
                        <p>{event.date}</p>
                        <div className="ine-event-buttons">
                          <a href={event.pdf} className="ine-btn session-btn" target="_blank" rel="noopener noreferrer">
                            Details
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="ine-event-row">
                  {/* Row 2: 3 events */}
                  {props.eventsData.slice(index + 3, index + 6).map(event => (
                    <div key={event.id} className="ine-event-card">
                      <div className="ine-event-image-container">
                        <img src={event.image} alt={event.title} className="ine-event-image" />
                      </div>
                      <div className="ine-event-info">
                        <h3>{event.title}</h3>
                        <p>{event.date}</p>
                        <div className="ine-event-buttons">
                          <a href={event.pdf} className="ine-btn session-btn" target="_blank" rel="noopener noreferrer">
                            Details
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })
      )}
    </div>
  );
};

export default EventCarousel;
