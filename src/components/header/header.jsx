// Header.jsx
import React, { useState } from 'react';
import './header.css'; // Import your CSS file
import { Link, animateScroll as scroll } from 'react-scroll';
import iic_logo from "../../images/LOGO.png" ;


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className='temp'>
                <div className="logo">
                    {/* Add your main logo here */}
                    <img src={iic_logo} alt="Main Logo" />
                </div>
                <div className="hamburger-icon" onClick={toggleMenu}>
                    {isMenuOpen ? '✕' : '☰'} 
                </div>
            </div>
            <nav className={`options ${isMenuOpen ? 'open' : ''}`}>
                {/* Full navigation menu */}
                <Link to="hero-section" smooth={true} duration={500}>Home</Link>
                <Link to="hero_major" smooth={true} duration={500}>Major Focus Areas</Link>
                <Link to="ine-events" smooth={true} duration={500}>I & E Events</Link>
                <Link to="team_section" smooth={true} duration={500}>Our Team</Link>
                <Link to="gallery-container" smooth={true} duration={500}>Gallery</Link>
                <Link to="footer" smooth={true} duration={500}><div className="btn">Contact Us</div></Link>
            </nav>
        </header>
    );
};

export default Header;
