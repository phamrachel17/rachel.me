import React from "react";
import "../styles/Intro.css";
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>

class Intro extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: "1",
        visible: true
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
        <div id="intro" class="container-fluid">
          <div class="row d-flex align-items-center">
            <span id="intro-title"> {"Rachel Pham"} </span>
          </div>
          <div class="row d-flex align-items-center">
            <Typist>
                <div id="intro-subtitle">welcome to the virtual representation of me</div>
                {/* <div id="intro-desc"> aspiring software enginner </div> */}
            </Typist>
          </div>
          <div class="row d-flex align-items-center">
            {/* <div id="socialmedia-icons" href="/">
            <a href="https://www.linkedin.com/in/rachelphamm/">
                
            </a>
            <a href="mailto:rpham022@ucr.edu">
              
            </a>
            <a href="https://github.com/phamrachel17">
              
            </a>
            </div> */}
          </div>
        </div>
      );
    }
  }
  
  export default Intro;