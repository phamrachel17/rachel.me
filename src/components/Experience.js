import React from "react";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";

class Experience extends React.Component {
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
      <FadeInSection>
        <div id="experience" class="container">
            <h1 class="pb-4 text-white" style={{ fontSize:'45px' }}>EXPERIENCE</h1>
        <div class="main-timeline-4 text-white">
            <div class="timeline-4 right-4">
            <div class="card gradient-custom-4">
                <div class="card-body p-4">
                <h4>SWE Intern @ Northrop Grumman</h4>
                <p class="small text-white-40 mb-4">June 2023 - August 2023</p>
                <p>
                    Integrated Elastic Stack into VSIL environment and created a financial analysis tool using Python.
                </p>
                <h6 class="badge bg-light text-black mb-0 pr-1">Python</h6>
                <h6 class="badge bg-light text-black mb-0">Linux</h6>
                <h6 class="badge bg-light text-black mb-0">OpenPyXL</h6>
                <h6 class="badge bg-light text-black mb-0">XlWings</h6>
                </div>
            </div>
            </div>
            <div class="timeline-4 left-4">
            <div class="card gradient-custom">
                <div class="card-body p-4">
                <h4>Full Stack Developer Intern @ NASA JPL</h4>
                <p class="small text-white-40 mb-4">June 2022 - December 2022</p>
                <p>
                    Designed and built Network page that displays 500+ stations.
                </p>
                <h6 class="badge bg-light text-black mb-0 pr-1">HTML</h6>
                <h6 class="badge bg-light text-black mb-0">CSS</h6>
                <h6 class="badge bg-light text-black mb-0">JavaScript</h6>
                <h6 class="badge bg-light text-black mb-0">Django</h6>
                <h6 class="badge bg-light text-black mb-0">SQL</h6>
                </div>
            </div>
            </div>
            <div class="timeline-4 right-4">
            <div class="card gradient-custom-4">
                <div class="card-body p-4">
                <h4>Systems Test Engineer Intern @ Cubic Transportation</h4>
                <p class="small text-white-40 mb-4">June 2021 - Sept 2021</p>
                <p>Tested contactless card tapping system to pay for fares in Boston.</p>
                <h6 class="badge bg-light text-black mb-0">TestRail</h6>
                <h6 class="badge bg-light text-black mb-0">Jira</h6>
                <h6 class="badge bg-light text-black mb-0">SQL</h6>
                </div>
            </div>
            </div>
            <div class="timeline-4 left-4">
            <div class="card gradient-custom">
                <div class="card-body p-4">
                <h4>Undergraduate Research Intern @ NC4</h4>
                <p class="small text-white-40 mb-4">March 2021 - June 2022</p>
                <p>Implemented a semi-supervised learning algorithm of MNIST data sets using Python and conducted
                    research on label flipping attacks.
                </p>
                <h6 class="badge bg-light text-black mb-0">Python</h6>
                </div>
            </div>
            </div>
        </div>
        </div>
      </FadeInSection>
    );
  }
}

export default Experience;
