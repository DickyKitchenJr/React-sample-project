import React from 'react';
import './FooterBars.css';

function FootBars() {
  return (
    <div>
        <div className='sign-in-footer'>
            <p>See personalized recommendations</p>
            <button type='button'>Sign in</button>
            <p>New customer? <span>Start here.</span></p>
        </div>
    </div>
  )
}

export default FootBars