import React from "react";
import "../styles/Intro.css";
import Typist from 'react-typist';
import CliffordAttractor from "./CliffordAttractor";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Container fluid id="intro">
          <Row>
            <Col style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '20%'}}>
              <span id="intro-title" class="text-gray"> {"Hi, I'm Rachel!"} </span>
              <Typist>
                  <div id="intro-subtitle" class="text-gray"> Interested in Software Engineering, Data Science, and Machine Learning. </div>
              </Typist>
            </Col>
            <Col id="clifford-attractor" style={{ paddingTop: '10%', paddingRight: '10%' }}>
              <CliffordAttractor />
            </Col>
          </Row>
        </Container>

      );
    }
  }
  
  export default Intro;