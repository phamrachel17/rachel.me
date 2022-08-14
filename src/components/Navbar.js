import React from "react";

const isMobile = window.innerWidth < 600;

class Navbar extends React.Component {
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
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
              <div class="row d-flex justify-content-start">
                <div class="col-3 me-3">
                  <a class="navbar-brand" href="#">RACHEL</a>
                </div>
                <div class="col-1 me-1">
                  <a class="navbar-brand" href="mailto:rpham022@ucr.edu"><i class="fa fa-envelope" aria-hidden="true" color="black"></i></a>
                </div>
                <div class="col-1 me-1">
                <a class="navbar-brand" href="https://www.linkedin.com/in/rachelphamm/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
                <div class="col-1 me-1">
                <a class="navbar-brand" href="https://github.com/phamrachel17"><i class="fa fa-brands fa-github"></i></a>
                </div>
              </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#experience">Experience</a>
                    </li>
                    {/* <li class="nav-item">
                    <a class="nav-link" href="#skillsandedu">Skills and Education</a>
                    </li> */}
                    <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
  }
}

export default Navbar;
