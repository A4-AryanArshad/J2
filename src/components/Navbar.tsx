import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial state
    if (heroTextRef.current) {
      Array.from(heroTextRef.current.children).forEach((el) => {
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.transform = 'translateY(40px)';
      });
    }
    // Animate in after a short delay
    const timeout = setTimeout(() => {
      if (heroTextRef.current) {
        gsap.to(heroTextRef.current.children, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        });
      }
    }, 800); // 0.8s delay
    return () => clearTimeout(timeout);
  }, []);
  return (
    <nav className="new-navbar">
    <div className="new-navbar-logo">
      <img id="imager1" src="./RLogo.png"/>
  
    </div>
    <button
      className={`hamburger${menuOpen ? ' open' : ''}`}
      aria-label="Toggle menu"
      onClick={() => setMenuOpen((open) => !open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className={`new-navbar-menu${menuOpen ? ' open' : ''}`}>
      <ul className="new-nav-menu">
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/our-services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
      <div className="new-navbar-actions">
        <button className="new-login-btn">
          <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>Log In</Link>
        </button>
        <button className="new-book-btn">Book Now</button>
      </div>
    </div>
  </nav>
  );
};

export default Navbar; 