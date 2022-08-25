import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './MiddleBar.css'

function MiddleBar() {
    const hamburgerIcon = <FontAwesomeIcon icon={faBars} className="hamburger-icon" />;
  return (
    <div className="middle-bar">
      <p className="middle-bar-text">{hamburgerIcon} All</p>
      <p className="middle-bar-text">Back to School</p>
      <p className="middle-bar-text">Off to College</p>
      <p className="middle-bar-text">Best Sellers</p>
      <p className="middle-bar-text">Amazon Basics</p>
      <p className="middle-bar-text">Today's Deals</p>
      <p className="middle-bar-text">New Releases</p>
      <p className="middle-bar-text">Customer Service</p>
      <p className="middle-bar-text">Prime</p>
      <p className="middle-bar-text">Books</p>
      <p className="middle-bar-text">Music</p>
      <p className="middle-bar-text">Kindle Books</p>
      <p className="middle-bar-text">Registry</p>
    </div>
  );
}

export default MiddleBar