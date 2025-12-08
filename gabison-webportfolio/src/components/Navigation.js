import React from 'react';
import GooeyNav from './GooeyNav';
import catLogo from '../images/chillcat.gif';

function Navigation() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo-section">
          <div className="logo-placeholder">
            <img src={catLogo} alt="Logo" className="nav-logo-img" />
          </div>
          <span className="nav-name">Andrei's Portfolio</span>
        </div>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </nav>
  );
}

export default Navigation;
