import React, { useState } from 'react';
import TiltedCard from './TiltedCard';

// Import skill logos
import javaLogo from '../images/java.png';
import javascriptLogo from '../images/javascript.png';
import pythonLogo from '../images/python.png';
import sqlLogo from '../images/sql.png';
import htmlLogo from '../images/html.png';
import cssLogo from '../images/css.png';
import gitLogo from '../images/git.png';
import githubLogo from '../images/github.png';
import vscodeLogo from '../images/vscode.png';
import figmaLogo from '../images/figma.png';
import canvaLogo from '../images/canva.png';
import postmanLogo from '../images/postman.png';
import mysqlLogo from '../images/mysql.png';
import reactLogo from '../images/react.png';
import springbootLogo from '../images/springboot.png';
import djangoLogo from '../images/django.png';
import firebaseLogo from '../images/firebase.png';
import awsLogo from '../images/aws.png';
import servicenowLogo from '../images/servicenow.png';

function Skills() {
  const [activeTab, setActiveTab] = useState('LANGUAGES');

  const skillsData = {
    LANGUAGES: [
      { name: 'Java', icon: javaLogo },
      { name: 'Javascript', icon: javascriptLogo },
      { name: 'Python', icon: pythonLogo },
      { name: 'SQL', icon: sqlLogo },
      { name: 'HTML', icon: htmlLogo },
      { name: 'CSS', icon: cssLogo }
    ],
    TOOLS: [
      { name: 'Git', icon: gitLogo },
      { name: 'GitHub', icon: githubLogo },
      { name: 'VS Code', icon: vscodeLogo },
      { name: 'Figma', icon: figmaLogo },
      { name: 'Canva', icon: canvaLogo },
      { name: 'Postman', icon: postmanLogo },
      { name: 'MySQL', icon: mysqlLogo }
    ],
    PLATFORMS: [
      { name: 'React', icon: reactLogo },
      { name: 'Spring Boot', icon: springbootLogo },
      { name: 'Django', icon: djangoLogo },
      { name: 'Firebase', icon: firebaseLogo },
      { name: 'AWS', icon: awsLogo },
      { name: 'ServiceNow', icon: servicenowLogo }
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
