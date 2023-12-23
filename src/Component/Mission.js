// Mission.js
import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="mission-container">
      <video autoPlay loop muted playsInline className="mission-video">
        <source
          src="https://dopniceu5am9m.cloudfront.net/static/assets/imagica-video/BG_loop_2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="mission-content">
        <h1>Imagination is Creation</h1>
        <br />
        <hr />
        <br />
        <p>
          Imagica is the new operating system for the AI age that enables
          computers to be an extension of our minds, so that we can all create
          at the speed of thought. With Imagica, our thoughts generate new AIs
          to supercharge our thinking and co-create with computers in previously
          unimaginable ways.
        </p>
      </div>
    </div>
  );
};

export default Mission;
