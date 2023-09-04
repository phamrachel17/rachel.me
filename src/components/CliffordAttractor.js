import React, { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import styled from "styled-components";

const maxLineCount = 2000; // Adjust this to the desired line count before reset

const Sketch = (p) => {
  let a, b, c, d;
  let x = 0;
  let y = 0;
  let lines = [];

  const lineColor = p.color("#89fceb"); // Define the line color here

  const addLine = () => {
    // Clifford Attractor Equations
    const x2 = p.sin(a * y) + c * p.cos(a * x);
    const y2 = p.sin(b * x) + d * p.cos(b * y);

    x = x2;
    y = y2;

    const scaleFactor = p.min(p.width, p.height) / 4;
    const px2 = x2 * scaleFactor;
    const py2 = y2 * scaleFactor;

    lines.push({ x: px2, y: py2 });
  };

  p.setup = () => {
    p.createCanvas(700, 700, "transparent");
    p.stroke(lineColor);
    p.strokeWeight(0.5);
    p.noFill();

    a = 2.0; // Adjusted parameters for a circular shape
    b = -2.0;
    c = 1.0;
    d = -1.0;

    // Set the frame rate to control the animation speed
    p.frameRate(50);
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);

    p.beginShape();

    for (let i = 0; i < 2; i++) {
      addLine();
    }

    if (lines.length > maxLineCount) {
      lines = [];
      p.clear();
    }

    // Use curveVertex instead of vertex for smoother curves
    for (let i = 0; i < lines.length; i++) {
      if (i >= 2) {
        const xc = (lines[i - 1].x + lines[i].x) / 2;
        const yc = (lines[i - 1].y + lines[i].y) / 2;
        p.curveVertex(lines[i - 1].x, lines[i - 1].y);
        p.curveVertex(xc, yc);
      }
    }

    p.endShape();
  };
};

const CliffordAttractor = () => (
  <CliffordAttractorStyled>
    <ReactP5Wrapper sketch={Sketch} />
  </CliffordAttractorStyled>
);

const CliffordAttractorStyled = styled.div``;

export default CliffordAttractor;
