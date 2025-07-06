import React, { useRef, useEffect } from 'react';
import './Home.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        [...colRefs.current, bottomRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.13,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  return (
    <footer className="footer-section" ref={sectionRef}>
      <div className="footer-container">
        <div className="footer-col logo-col" ref={el => { colRefs.current[0] = el; }}>
          <div className="footer-logo">
          <img id="imager1" src="./RLogo.png"/>
          </div>
          <div className="footer-desc">
            Professional automotive services with a commitment to honesty, reliability, and exceptional results.
          </div>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram" className="footer-social"><svg width="20" height="20" fill="none" stroke="#FFD600" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17" cy="7" r="1.2"/></svg></a>
            <a href="#" aria-label="Facebook" className="footer-social"><svg width="20" height="20" fill="none" stroke="#FFD600" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 8h-2a2 2 0 0 0-2 2v2h4l-.5 3h-3.5v7"/></svg></a>
            <a href="#" aria-label="Email" className="footer-social"><svg width="20" height="20" fill="none" stroke="#FFD600" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4"/><path d="M22 6l-10 7L2 6"/></svg></a>
          </div>
        </div>
        <div className="footer-col" ref={el => { colRefs.current[1] = el; }}>
          <div className="footer-heading">Services</div>
          <ul className="footer-list">
            <li><a href="#services">Diagnostics</a></li>
            <li><a href="#services">Repairs</a></li>
            <li><a href="#services">Maintenance</a></li>
            <li><a href="#services">MOT Preparation</a></li>
            <li><a href="#services">Tyre Replacement</a></li>
          </ul>
        </div>
        <div className="footer-col" ref={el => { colRefs.current[2] = el; }}>
          <div className="footer-heading">Business Hours</div>
          <ul className="footer-list">
            <li><span className="footer-icon">🕒</span> Monday - Friday: 8am - 6pm</li>
            <li><span className="footer-icon">🕒</span> Saturday: 9am - 4pm</li>
            <li><span className="footer-icon">🕒</span> Sunday: Closed</li>
          </ul>
        </div>
        <div className="footer-col" ref={el => { colRefs.current[3] = el; }}>
          <div className="footer-heading">Contact Us</div>
          <ul className="footer-list">
            <li>North London Workshop</li>
            <li><a href="mailto:bespokechauffeurhire@yahoo.co.uk" className="footer-email">bespokechauffeurhire@yahoo.co.uk</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" ref={bottomRef}>
        <div className="footer-bottom-left">© 2025 J<sup>2</sup> Mechanics. All rights reserved.</div>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Privacy Policy</a>
          <a href="#" className="footer-bottom-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 