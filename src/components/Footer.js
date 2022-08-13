import React from "react";
import "../styles/Footer.css";

class Footer extends React.Component {
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
        <div id="footer" class="container-fluid bg-light p-0">
          <div class="row d-flex justify-content-center">
            <div>Coded and Designed by Rachel Pham ♥ </div>
            <div>All rights reserved. ©</div>
          </div>
        </div>
    );
  }
}

export default Footer;