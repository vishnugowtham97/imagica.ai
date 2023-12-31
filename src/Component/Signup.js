// App.js
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source
          src="https://dopniceu5am9m.cloudfront.net/static/assets/230705/site_bg_1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="login-container">
        <div class="StudiosSignUp_logo-box__07ucM">
          <img src="https://dopniceu5am9m.cloudfront.net/static/assets/230705/logoX1.svg" />
        </div>
        <form>
          <h3 className="imagica-login-head">Let's get started</h3>

          <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" required />
            <label>Name</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" required />
            <label>Repeat Password</label>
          </div>
          <p className="sign-para">
            By selecting "Create an account" or "Sign up with Google" you agree
            to our Terms of Service (Platform).Terms of Service (Environment)
            and Privacy Policy
          </p>
          <button className="login-pagebtn">Create Account</button>
          <p className="or">or</p>
          <button className="google-btn">
            <img
              src="https://dopniceu5am9m.cloudfront.net/static/assets/230705/google-logo.svg"
              class="GoogleOauthButton"
            />
            <span> Sign up with Google</span>
          </button>
          <div className="register">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
