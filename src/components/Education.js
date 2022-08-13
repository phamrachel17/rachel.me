import React from "react";
import "../styles/Education.css";

class Education extends React.Component {
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
      <p>
        I am an incoming Junior studying <b>Computer Science</b> at{" "}
        <b> University of California, Riverside </b> and I plan to graduate in the 
        Winter of 2023! Some of my interests include <b>Machine Learning</b>,  
        <b> Full-Stack Development</b>, and the <b>intersection of Forensics and Computer Science</b>.
      </p>
    );
    const two = (
      <p>
        Currently, I am a Full Stack Developer at <b>NASA JPL</b>, specifically in the <a href="https://igs.org/">International GNSS Service</a> department.
        Furthermore, I interned at <b>Cubic Corporation</b> last summer as a Systems Test Engineer
        where I helped optimize the testing process.
      </p>
    );

    const three = (
      <p>
        In my free time, I love watching horror movies and crime documentaries (which is why I am 
        interested in Forensics!). Aside from that, you can find me journaling, thrifting at flea markets,
        or learning more about philosophy!
      </p>
    );

    const desc_items = [one, two, three];
    
    var image = require("./assets/me4.jpg");

    return (
      <div id="education" class="container-fluid p-0">
        <div class="row justify-content-around">
          <div id="about-left" class="col-5">
            <h1>ABOUT ME</h1>
            <div id="about-desc">
              {desc_items}
            </div>
          </div>
          <div id="about-right" class="col-4">
            <div id="about-image"> <img src={image} /> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
