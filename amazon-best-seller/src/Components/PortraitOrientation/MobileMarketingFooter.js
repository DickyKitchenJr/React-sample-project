import React from 'react';
import './MobileMarketingFooter.css';

function MobileMarketingFooter() {
  return (
    <div className="mobile-marketing-footer">
      <ul className="mobile-marketing-ul">
        <li>Amazon.com</li>
        <li>AmazonFresh</li>
        <li>Gift Cards & Registry</li>
        <li>Your Account</li>
        <li>
          Sell products on
          <br />
          Amazon
        </li>
        <li>
          Your Recalls and
          <br />
          Product Safety Alerts
        </li>
        <li>Customer Service</li>
      </ul>
      <ul className="mobile-marketing-ul">
        <li>Your Orders</li>
        <li>Your Lists</li>
        <li>Find a Gift</li>
        <li>Browsing History</li>
        <li>Returns</li>
      </ul>
    </div>
  );
}

export default MobileMarketingFooter