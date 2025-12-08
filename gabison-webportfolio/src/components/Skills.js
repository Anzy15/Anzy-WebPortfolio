import React, { useState } from 'react';
import TiltedCard from './TiltedCard';

function Skills() {
  const [activeTab, setActiveTab] = useState('LANGUAGES');

  const skillsData = {
    LANGUAGES: [
      { name: 'JavaScript', icon: null },
      { name: 'Python', icon: null },
      { name: 'Java', icon: null },
      { name: 'TypeScript', icon: null },
      { name: 'C', icon: null },
      { name: 'SQL', icon: null },
      { name: 'PHP', icon: null },
      { name: 'HTML', icon: null }
    ],
    TOOLS: [
      { name: 'Git', icon: null },
      { name: 'Docker', icon: null },
      { name: 'VS Code', icon: null },
      { name: 'Figma', icon: null },
      { name: 'Postman', icon: null },
      { name: 'npm', icon: null }
    ],
    PLATFORMS: [
      { name: 'React', icon: null },
      { name: 'Node.js', icon: null },
      { name: 'Spring Boot', icon: null },
      { name: 'Firebase', icon: null },
      { name: 'AWS', icon: null },
      { name: 'MongoDB', icon: null }
    ]
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <h2 className="section-title">Tech Stack</h2>
        
        <div className="skills-tabs">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              className={`skills-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="skills-grid-container">
          {skillsData[activeTab].map((skill, index) => (
            <div key={index} className="skill-card-wrapper">
              <TiltedCard
                imageSrc={skill.icon || 'https://via.placeholder.com/200x200/1488e1/ffffff?text=' + skill.name}
                altText={skill.name}
                captionText={skill.name}
                containerHeight="200px"
                containerWidth="200px"
                imageHeight="200px"
                imageWidth="200px"
                rotateAmplitude={12}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="skill-name-overlay">{skill.name}</div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
