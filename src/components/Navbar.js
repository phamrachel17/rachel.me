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
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">RACHEL</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#experience">Experience</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
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
