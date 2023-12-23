import React from "react";
import "./Company.css";

const Company = () => {
  return (
    <div className="company-container">
      <div className="left-content">
        <h1>Who is behind Imagica?</h1>
        <p>
          Since 2016, Brain AI has been a pioneer in one-shot learning for NLP,
          an approach to human-like conversational interfaces recently
          popularized by Large Language Models such as GPT. In 2021, Brain
          launched "Natural AI" - a digital commerce app featuring the world's
          first generative interface.
        </p>
      </div>
      <div className="right-content">
        <div className="company-video-container">
          <video controls autoPlay playsInline preload="auto" loop>
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

export default Company;
