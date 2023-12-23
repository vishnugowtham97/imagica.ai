// Works.js
import React from "react";
import "./Works.css";

const Works = () => {
  return (
    <div className="works-container">
      <div className="works-background-video">
        <video loop autoPlay preload="auto" playsInline muted>
          <source
            src="https://dopniceu5am9m.cloudfront.net/static/assets/230705/site_bg_1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="works-content">
        <h1>Create any AI by describing it</h1>
        <p>From idea to product at the speed of thought.</p>
      </div>

      <div className="works-video-content">
        <div className="works-video-container">
          <video loop autoPlay preload="auto" playsInline muted>
            <source
              src="https://dopniceu5am9m.cloudfront.net/static/assets/imagica-video/bubbles_new_sound.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Works;
