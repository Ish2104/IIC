import React, { useRef, useEffect, useState } from 'react';
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

// Define categories
const categories = ['All', 'Technology', 'Design', 'Business', 'Finance', 'Others'];

// Updated images with categories
const images = [
  { id: 1, src: event1, alt: "Cap Event", category: 'Technology', description: "Cap Event Description" },
  { id: 2, src: event2, alt: "Design Event", category: 'Design', description: "Design Event Description" },
  { id: 3, src: event3, alt: "Design Event", category: 'Design', description: "Design Event Description" },
  { id: 4, src: event4, alt: "Enactus Event", category: 'Business', description: "Enactus Event Description" },
  { id: 5, src: event5, alt: "Epoch Event", category: 'Finance', description: "Epoch Event Description" },
  { id: 6, src: event6, alt: "Rob Event", category: 'Technology', description: "Rob Event Description" },
  { id: 7, src: event7, alt: "Intern Event", category: 'Business', description: "Intern Event Description" },
  { id: 8, src: event8, alt: "Oncos Event", category: 'Others', description: "Oncos Event Description" },
  { id: 9, src: event9, alt: "Vcs Event", category: 'Finance', description: "Vcs Event Description" },
  { id: 10, src: event10, alt: "Bharat Event", category: 'Technology', description: "Bharat Event Description" },
  { id: 11, src: event11, alt: "Ad Event", category: 'Design', description: "Ad Event Description" },
  { id: 12, src: event12, alt: "Biz Event", category: 'Business', description: "Biz Event Description" },
  { id: 13, src: event13, alt: "Fin Event", category: 'Finance', description: "Fin Event Description" },
  { id: 14, src: event14, alt: "Fintech Event", category: 'Technology', description: "Fintech Event Description" },
  { id: 15, src: event15, alt: "Fork Event", category: 'Technology', description: "Fork Event Description" },
  { id: 16, src: event16, alt: "Solv Event", category: 'Finance', description: "Solv Event Description" },
];

const Gal = () => {
  const galleryRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredImages, setFilteredImages] = useState(images);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const slideshowInterval = useRef(null);

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
      let scrollDistance = event.deltaY * 2; // Increase scroll speed
      galleryElement.scrollBy({
        top: scrollDistance,
        behavior: 'auto',
      });
    };

    galleryElement.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      galleryElement.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSlideshow && selectedImage) {
      slideshowInterval.current = setInterval(() => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
      }, 3000); // Change image every 3 seconds
    }

    return () => {
      if (slideshowInterval.current) {
        clearInterval(slideshowInterval.current);
      }
    };
  }, [isSlideshow, selectedImage, filteredImages]);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
    setIsSlideshow(false);
  };

  const handleLightboxClick = (e) => {
    if (e.target.classList.contains('lightbox-overlay')) {
      closeLightbox();
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === category));
    }
    // Reset selected image if it's not in the new filtered list
    if (selectedImage && category !== 'All' && selectedImage.category !== category) {
      closeLightbox();
    }
  };

  const handleKeyDown = (e) => {
    if (selectedImage) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      } else if (e.key === 'ArrowLeft') {
        navigatePrev();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const navigateNext = () => {
    if (filteredImages.length === 0) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const navigatePrev = () => {
    if (filteredImages.length === 0) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const toggleSlideshow = () => {
    setIsSlideshow(!isSlideshow);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">OUR GALLERY</h2>
      <div className="title_decorates"></div>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid" ref={galleryRef}>
  {filteredImages.map((image) => (
    <div
      key={image.id}
      className="gallery-item"
      onClick={() => openLightbox(image)}
    >
      <img src={image.src} alt={image.alt} className="gallery-img fade-in" loading="lazy" />
      <div className="overlay">
        <p className="overlay-text">Hovered Text</p>
      </div>
    </div>
  ))}
</div>


      {selectedImage && (
        <div className="lightbox-overlay" onClick={handleLightboxClick} role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-img" />
            <div className="lightbox-details">
              <h3 id="lightbox-title">{selectedImage.alt}</h3>
              <p>{selectedImage.description}</p>
            </div>
            <div className="lightbox-navigation">
              <button onClick={navigatePrev} aria-label="Previous Image">&larr;</button>
              <button onClick={navigateNext} aria-label="Next Image">&rarr;</button>
            </div>
            <button onClick={toggleSlideshow} className="slideshow-button" aria-label={isSlideshow ? "Stop Slideshow" : "Start Slideshow"}>
              {isSlideshow ? "Stop Slideshow" : "Start Slideshow"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gal;
