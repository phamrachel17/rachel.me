import React from "react";
import "../styles/Projects.css";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
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
        <div id="projects" class="container-fluid position-relative">
          <div class="row gx-3 d-flex justify-content-around">
          <h1 id="projects-title" class="pb-5">PROJECTS</h1>
              <div class="card" style={{width: "18rem"}}>
                  <div class="card-body">
                      <h5 class="card-title">rachel.me</h5>
                      <h6 class="card-subtitle mb-2 text-muted">My personal website</h6>
                      <p class="card-text">Responsive website made with ReactJS, HTML, CSS, and Boostrap 5 styling.</p>
                      <a href="https://github.com/phamrachel17/rachel.me"><i class="fa fa-brands fa-github fa-2x"></i></a>
                  </div>
              </div>
              <div class="card" style={{width: "18rem"}}>
                  <div class="card-body">
                      <h5 class="card-title">Semi-Supervised Learning Algorithm</h5>
                      <h6 class="card-subtitle mb-2 text-muted">ML experiment</h6>
                      <p class="card-text">Conducted label flipping attack experiments on algorithm through NC4 department.</p>
                      <a href="https://github.com/phamrachel17/Semi-Supervised-Learning-Algorithm-Implementation"><i class="fa fa-brands fa-github fa-2x"></i></a>
                  </div>
              </div>
              <div class="card" style={{width: "18rem"}}>
                  <div class="card-body">
                      <h5 class="card-title">IGS Network Map</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Full stack project</h6>
                      <p class="card-text">Used HTML, CSS, JavaScript, Django, and SQL to design and build a responsive interface that displays over 500 station info data.</p>
                  </div>
              </div>
          </div>
        </div>
      </FadeInSection>

    );
  }
}

export default Projects;
