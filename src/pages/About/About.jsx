import { React, useEffect } from "react";
import "./About.css";
import Zoom from "react-reveal/Zoom";

const About = () => {

  return (
    <div id="aboutContainer">
      <Zoom>
      <p>Hi, my name is Kelly and I am a second year student studying Systems Design Engineering at the University of Waterloo.
            What is Systems Design you ask? It's defined as "look[ing] at the big picture to find the connections that advance technology and innovation".
            I'm specifically interested in applying software development to solve real world issues in different industries such as environment and healthcare.
        </p>
      </Zoom>
    </div>
  );
};

export default About;