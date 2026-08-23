import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo"><span className="footer-mark">♧</span><span>Memory <b>Master</b></span></Link>
          <p>Sharpen your mind, challenge your memory, and become the ultimate Memory Master.</p>
          <div className="footer-socials" aria-label="Social links">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <Link to="/support#faq">Help &amp; FAQ</Link>
          <Link to="/support#privacy">Privacy Policy</Link>
          <Link to="/support#terms">Terms of Use</Link>
          <a href="mailto:support@memorymaster.example">Contact Us</a>
        </div>

        <div className="footer-column footer-note">
          <h3>Memory Master</h3>
          <p>Built to make every round simple, focused, and fun.</p>
          <p className="footer-tagline">Think. Remember. Match.</p>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Memory Master.</span><span>All Rights Reserved.</span></div>
    </footer>
  );
}

export default Footer;
