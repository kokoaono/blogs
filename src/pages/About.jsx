import myself from "../images/myself.jpg";
import food from "../images/food.jpg";
import food2 from "../images/food2.jpg";

function About() {
  return (
    <div className="about">
      <h2>Who Am I?</h2>
      <p>
        My name is Koko. I am originally from Japan and I have worked as a chef
        for many years.
        <br />
        I come across coding while I was studying Paramedicine after returning
        to NZ. I got more involved in coding over summer break, taught myself
        and decided to take the Bootcamp course throught DevAcademy.
        <br />
        I want to be a FrontEnd developer. I value growth and have long term goals in mind to pursue new career as a developer.
        I am exiperienced in React, Javascript, node.js, and Express.js.
      </p>
      <div>
        <h2>Highlights</h2>
        <ul>
          <li>2021 - Start coding</li>
          <li>2019 - Return to NZ </li>
          <li>2016 - 2019 Spent time in Mexico, Australia, and Moldives.</li>
          <li>
            2009 - Started to work as chef for Private clients, large sports
            events such as Rugby World cup, ASB Tennis Classic.
          </li>
          <li>2005 - Moved to NZ</li>
        </ul>
      </div>
      <div className="gallery">
        <img src={myself} alt="me" />
      </div>
      <div className="gallery">
        <img src={food} alt="table full of food" />
      </div>{" "}
      <div className="gallery">
        <img src={food2} alt="salmon dish" />
      </div>
    </div>
  );
}

export default About;
