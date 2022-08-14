import React from "react";
import "../styles/Intro.css";
import Typist from 'react-typist';
import FadeInSection from "./FadeInSection";

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
        <div id="intro" class="container-fluid position-relative">
          <div class="row d-flex justify-content-start">
            <span id="intro-title" class="text-gray"> {"Rachel Pham"} </span>
          </div>
          <div class="row d-flex justify-content-start">
          <Typist>
                <div id="intro-subtitle" class="text-gray">welcome to the virtual representation of me!</div>
                {/* <div id="intro-desc"> aspiring software enginner </div> */}
            </Typist>
          </div>
        </div>
      );
    }
  }
  
  export default Intro;