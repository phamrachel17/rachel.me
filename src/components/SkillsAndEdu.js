import React from "react";

class SkillsAndEdu extends React.Component {
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

    return (
      <div id="skills-and-edu" class="container-fluid p-0">
        <div class="row justify-content-around">
          <div id="skills" class="col-6">
            <h1>SKILLS</h1>

          </div>
          <div id="education" class="col-6">
            <h1>EDUCATION</h1>

          </div>
        </div>
      </div>
    );
  }
}

export default SkillsAndEdu;
