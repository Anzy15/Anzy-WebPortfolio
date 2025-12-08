import React from 'react';

function About() {
  const jsonCode = `{
  "developer": {
    "name": "Andrei Mighel Gabison",
    "role": "Full-Stack Developer",
    "location": "Philippines",
    "languages": [
      "English",
      "Filipino",
      "Cebuano"
    ],
    "available": true
  }
}`;

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-layout">
          <div className="about-left">
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-title">developer.json</div>
              </div>
              <pre className="code-content">
                <code>{jsonCode}</code>
              </pre>
            </div>
          </div>

          <div className="about-right">
            <div className="about-intro">
              <p className="intro-text">
                A proactive IT student currently building a foundation in Full-Stack Development. 
                Proficient in key technologies including Java (Spring Boot), Python (Django), and ReactJS.
              </p>
              <p className="intro-description">
               Committed to continuous learning, I leverage my education at Cebu Institute of Technology - University, 
               complemented by a ServiceNow Certificate of Achievement and foundational UI/UX skills.
              </p>
              <p className="intro-description">
                Based in Talisay City, Philippines, I seek a challenging, learning-focused opportunity to apply and grow my skills 
                in professional web and mobile development projects.ager to contribute to dynamic development teams, 
                I aim to deliver impactful solutions and grow as a Full-Stack Developer.
              </p>
            </div>
          </div>
        </div>
        
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-number">2026</div>
            <div className="stat-label">Expected Graduation</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Certificates</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">Languages</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">Major Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
