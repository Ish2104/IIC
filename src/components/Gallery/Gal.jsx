import React, { useRef, useEffect } from 'react';
import './Gal.css';
import event1 from '../../images/Cap.png';
import event2 from '../../images/Des.png';
import event3 from '../../images/Design.png';
import event4 from '../../images/Enactus.png';
import event5 from '../../images/Epoch.png';
import event6 from '../../images/Rob.png';
import event7 from '../../images/Intern.png';
import event8 from '../../images/Oncos.png';
import event9 from '../../images/Vcs.png';
import event10 from '../../images/Bharat.png';
import event11 from '../../images/Ad.png';
import event12 from '../../images/Biz.png';
import event13 from '../../images/Fin.png';
import event14 from '../../images/Fintech.png';
import event15 from '../../images/Fork.png';
import event16 from '../../images/Solv.png';



const images = [
  { id: 1, src: event1, alt: "event 1" },
  { id: 2, src: event2, alt: "event 2" },
  { id: 3, src: event3, alt: "event 3" },
  { id: 4, src: event4, alt: "event 4" },
  { id: 5, src: event5, alt: "event 5" },
  { id: 6, src: event6, alt: "event 6" },
  { id: 7, src: event7, alt: "event 7" },
  { id: 8, src: event8, alt: "event 8" },
  { id: 9, src: event9, alt: "event 9" },
  { id: 10, src: event10, alt: "event 10" },
  { id: 11, src: event11, alt: "event 11" },
  { id: 12, src: event12, alt: "event 12" },
  { id: 13, src: event13, alt: "event 13" },
  { id: 14, src: event14, alt: "event 14" },
  { id: 15, src: event15, alt: "event 15" },
  { id: 16, src: event16, alt: "event 16" },
];

const Gal = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    const handleScroll = (event) => {
      const { scrollTop, clientHeight, scrollHeight } = galleryElement;

      // Check if the user has reached the top or bottom of the gallery
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight;

      // Allow default scroll when at the top or bottom of the gallery
      if (atTop && event.deltaY < 0) {
        return;
      }
      if (atBottom && event.deltaY > 0) {
        return;
      }

      // Custom scroll for the gallery
      event.preventDefault();
      let scrollDistance = event.deltaY * 2;
        // Increase scroll speed
      galleryElement.scrollBy({
        top: scrollDistance,
        behavior: 'auto',
      });
    };

    galleryElement.addEventListener('wheel', handleScroll);

    return () => {
      galleryElement.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">OUR GALLERY</h2>
      <div className="title_decorates"></div>
      <div className="gallery-grid" ref={galleryRef}>
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-img fade-in" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gal;
