import React, { useState } from 'react';
import './header.css'; 
import { Link, animateScroll as scroll } from 'react-scroll';
import iic_logo from "../../images/iiclogo_bew.png";
import second_logo from "../../images/iiitd_img.png"; // Import second logo

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className='temp'>
                <div className="logo">
                    {/* Display both logos */}
                    <img src={iic_logo} alt="IIC Logo" className="iic-logo" />
                    <img src={second_logo} alt="Second Logo" className="second-logo" />
                </div>
                <div className="hamburger-icon" onClick={toggleMenu}>
                    {isMenuOpen ? '✕' : '☰'}
                </div>
            </div>
            <nav className={`options ${isMenuOpen ? 'open' : ''}`}>
                <Link to="hero-section" smooth={true} duration={500}>Home</Link>
                <Link to="hero-major" smooth={true} duration={500}>Major Focus Areas</Link>
                <Link to="ine-events" smooth={true} duration={500}>I & E Events</Link>
                <Link to="team_section" smooth={true} duration={500}>Our Team</Link>
                <Link to="gallery-container" smooth={true} duration={500}>Gallery</Link>
                <Link to="footer" smooth={true} duration={500}>
                    <div className="btn">Contact Us</div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
