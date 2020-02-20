import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";
const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawDesignerLife />
        </div>
        <div class="column">
          <h1 id='about-header' className="ui header">About Myself</h1>
          <p>
            Hello, My name is Anish Kanswal
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;