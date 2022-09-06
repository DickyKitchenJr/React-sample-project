import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import './MobileFooter.css';

function MobileFooter() {
    const upSymbol = <FontAwesomeIcon icon={faCaretUp} />;
  return (
    <div className='mobile-footer'>
        <p>{upSymbol}</p>
        <p><a className='mobile-a' href='#mobile-top-bar'>TOP OF PAGE</a></p>
    </div>
  )
}

export default MobileFooter