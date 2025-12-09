import { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      // Update outer circle with slight delay
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 100);
      
      // Update dot immediately
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    window.addEventListener('mousemove', updateCursor);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .nav-item, .contact-link, .skills-tab, .contact-card, .skill-card-wrapper');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        className="cursor" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 0.6 : 1
        }}
      />
      <div 
        className="cursor-dot" 
        style={{ 
          left: `${dotPosition.x}px`, 
          top: `${dotPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
}

export default CustomCursor;
