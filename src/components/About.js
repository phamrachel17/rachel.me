import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p className="text-start">
        Hi, thanks for stopping by! <span>&#9786;</span>
      </p>
    );
    const two = (
      <p className="text-start"> 
        My name is Rachel Pham and I am an undergraduate Senior studying <span style={{ color: '#00ffd9' }}>Statistics and Data Science</span> with a focus in <span style={{ color: '#15ffd4' }}>Computer Science</span> at 
        <span style={{ color: 'neon' }}> UC Santa Barbara</span>. My technical interests include full stack development, data science, and AI/machine learning.
      </p>
    );
    const three = (
      <p className="text-start">
        During this past summer, I interned at <span style={{ color: '#00ffd9' }}>Northrop Grumman</span> as a <span style={{ color: '#00ffd9' }}>Software Engineer Intern</span>, where I got the opportunity to work on a Software
        and Data Science project. Read more about it in my resume below!
      </p>
    );
  
    const four = (
      <p className="text-start">
        In my free time, I love watching horror movies and crime documentaries. Aside from that, you can find me journaling, going to concerts/festivals, taking sunset walks,
        or learning more about philosophy!
      </p>
    );

    const desc_items = [one, two, three, four];
    var image = require("./assets/me4.jpg");

  return (
    <FadeInSection>
       <div id="about" class="container-fluid position-relative d-flex justify-content-center">
        <div class="row d-flex justify-content-evenly">
          <div id="about-content" class="col-5">
            <h1 id="about-title" class="pb-4 text-gray">ABOUT ME</h1>
            <div id="about-desc" class="subtext-gray">
              {desc_items}
            </div>
          </div>
          <div id="about-right" class="col-4">
            <div id="about-image"> <img src={image} /> </div>
          </div>
        </div>
      </div>     
    </FadeInSection>
    );
  }
}

export default About;
