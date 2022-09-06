import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import './MobileMiddleBar.css';

function MobileMiddleBar() {
    const locationDot = <FontAwesomeIcon icon={faLocationDot} className="mobile-location-icon"/>;
  return (
    <div className='mobile-middle-bar'>
        <p>{locationDot} &nbsp; Select a location to see product availability</p>
    </div>
  )
}

export default MobileMiddleBar