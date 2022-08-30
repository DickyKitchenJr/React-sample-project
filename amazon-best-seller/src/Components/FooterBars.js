import React from "react";
import "./FooterBars.css";

function FooterBars() {
  return (
    <div>
      <div className="sign-in-footer">
        <p>See personalized recommendations</p>
        <button type="button" className="sign-in-button">
          Sign in
        </button>
        <p className="new-customer-text">
          New customer? <span className="start-here">Start here.</span>
        </p>
      </div>
        <p className="back-to-top">
          <a className="return-to-top-a" href="#header">
            Back to top
          </a>
        </p>
    </div>
  );
}

export default FooterBars;
