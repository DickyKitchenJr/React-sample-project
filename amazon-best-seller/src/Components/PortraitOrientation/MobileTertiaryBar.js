import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './MobileTertiaryBar.css'

function MobileTertiaryBar() {
    const downSymbol = <FontAwesomeIcon icon={faAngleDown} />;
  return (
    <div className="mobile-tertiary-bar">
      <p>Thrillers & Suspense {downSymbol}</p>
    </div>
  );
}

export default MobileTertiaryBar