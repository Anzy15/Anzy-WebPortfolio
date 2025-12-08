import React from 'react';
import ProfileCard from './ProfileCard';
import TextType from './TextType';
import profilePic from '../images/profilepic.jpg';

function Home() {
  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section home-section">
      <div className="home-content-wrapper">
        <div className="home-left">
          <ProfileCard
            name="Andrei Gabison"
            title="Full Stack Developer"
            handle="Anzy15"
            status="Available for work"
            contactText="Contact Me"
            avatarUrl={profilePic}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={handleContactClick}
          />
        </div>
        <div className="home-right">
          <div className="home-greeting">
            <TextType 
              text={["Hello, my name's Andrei Gabison", "I'm a Full Stack Developer", "Welcome to my portfolio!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              as="h1"
              className="greeting-text"
            />
          </div>
          <div className="home-intro">
            <p>
              Proficient across the stack with Java (Spring Boot), Python (Django), ReactJS, and SQL, with
              experience in full-stack web and mobile development. Familiar in UI/UX design using Figma and
              certified with a ServiceNow Certificate of Achievement.
            </p>
            <button className="get-in-touch-btn" onClick={handleContactClick}>
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
