// App.js
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
          <h3 className="imagica-login-head">Log in to your Imagica account</h3>
          <p className="imagica-login-head">
            Enter your email and password to log in
          </p>
          <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="forget">
            <a href="#">Forget Password?</a>
          </div>
          <button className="login-pagebtn">Log in</button>
          <p className="or">or</p>
          <button className="google-btn">
            <img
              src="https://dopniceu5am9m.cloudfront.net/static/assets/230705/google-logo.svg"
              class="GoogleOauthButton"
            />
            <span> Sign in with Google</span>
          </button>
          <div className="register">
            <p>
              Don't have an account <Link to="/signup">Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
