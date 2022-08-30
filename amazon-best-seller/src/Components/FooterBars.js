import React from 'react';
import './FooterBars.css';

function FooterBars() {
  return (
    <div>
        <div className='sign-in-footer'>
            <p>See personalized recommendations</p>
            <button type='button' className='sign-in-button'>Sign in</button>
            <p className='new-customer-text'>New customer? <span className='start-here'>Start here.</span></p>
        </div>
    </div>
  )
}

export default FooterBars