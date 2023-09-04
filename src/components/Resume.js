import React from 'react';
import FadeInSection from './FadeInSection';
import resume from './assets/Resume.pdf';

const Resume = () => {
    const embedStyle = {
        width: '1000px',
        height: '900px',
        margin: '0 auto', // This centers the PDF horizontally
        display: 'block', // To center it horizontally, you may also set it to 'inline-block'
        marginBottom: '50px',
      };

  return (
    <FadeInSection>
      <div id="resume" className="container-fluid position-relative">
        <h1 id="projects-title" className="pb-4 text-white">RESUME</h1>
        <div>
            <embed src={resume} style={embedStyle} />
        </div>
      </div>
    </FadeInSection>
  );
};

export default Resume;
