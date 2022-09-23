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
      <p class="text-start">
        Hi, thanks for stopping by! <span>&#9786;</span>
      </p>
    );
    const two = (
      <p class="text-start"> 
        My name is Rachel Pham and I am an undergraduate Junior studying <b>Statistics and Data Science</b> at 
        <b> UC Santa Barbara</b>. My technical interests include full stack development, software development, data science,
        and the intersection between forensics and computer science.
      </p>
    );
    const three = (
      <p class="text-start">
        Currently, I am a Full Stack Developer Intern at <b>NASA JPL</b>, specifically in the <b><a href="https://igs.org/">International GNSS Service</a></b> department.
      </p>
    );

    const four = (
      <p class="text-start">
        In my free time, I love watching horror movies and crime documentaries. Aside from that, you can find me journaling, going to concerts, taking sunset walks,
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
            <h1 class="pb-4 text-gray" >ABOUT ME</h1>
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
