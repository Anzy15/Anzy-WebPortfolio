import React from 'react';

function Awards() {
  const awards = [
    {
      id: 1,
      title: 'Certification/Award Name',
      issuer: 'Issuing Organization',
      date: 'Month Year',
      description: 'Brief description or achievement'
    },
    {
      id: 2,
      title: 'Certification/Award Name',
      issuer: 'Issuing Organization',
      date: 'Month Year',
      description: 'Brief description or achievement'
    },
    {
      id: 3,
      title: 'Certification/Award Name',
      issuer: 'Issuing Organization',
      date: 'Month Year',
      description: 'Brief description or achievement'
    }
  ];

  return (
    <section id="awards" className="section awards-section">
      <div className="section-container">
        <h2 className="section-title">Awards & Certifications</h2>
        <div className="awards-list">
          {awards.map(award => (
            <div key={award.id} className="award-item">
              <div className="award-header">
                <h3>{award.title}</h3>
                <span className="award-date">{award.date}</span>
              </div>
              <p className="award-issuer">{award.issuer}</p>
              <p className="award-description">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
