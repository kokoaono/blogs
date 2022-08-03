import React from "react";
import myself from "../images/myself.jpg";

function About() {
  return (
    <div className="about">
      <h2>Who am I?</h2>
      <p>
        My name is Koko. I am originally from Japan and I have worked as a chef
        for many years.
        <br />
        Recently, I wanted a career change so I started to teach myself coding
        then completed the Bootcamp course through Enspiral Dev Academy in
        Auckland. I want to broaden my horizons and pursue my new career. I am
        exiperienced in React, Javascript, node.js, Express.js.
      </p>
      <div>
        <h2>Highlights</h2>
        <ul>
          <li>2021 - Start coding</li>
          <li>2019 - Back to NZ, </li>
          <li>2016 - 2019 Spent time in Mexico, Australia, and Moldives.</li>
          <li>
            2009 - Started to work as chef for Private clients, large sports
            events such as Rugby World cup, ASB Tennis Classic.
          </li>
          <li>2005 - Moved to NZ</li>
        </ul>
      </div>
      <img
        src={myself}
        alt="me"
        className="photo-myself"
        style={{ borderRadius: "10%" }}
      />
    </div>
  );
}

export default About;
