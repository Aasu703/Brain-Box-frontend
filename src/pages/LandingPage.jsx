import React from "react";
import { Link } from "react-router-dom";
import "./../css/LandingPage.css"; // Ensure you have a CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Brain-Box</h1>
      <p>Your virtual study room for collaboration and productivity!</p>
      <div className="landing-buttons">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
