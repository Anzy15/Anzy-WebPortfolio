import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Andrei Gabison. All rights reserved.
        </p>
        <p className="footer-subtext">
          Built with React
        </p>
      </div>
    </footer>
  );
}

export default Footer;
