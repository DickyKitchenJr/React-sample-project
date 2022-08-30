import React from 'react';
import './MarketingFooter.css';

function MarketingFooter() {
  return (
    <div className="marketing-footer">
      <ul className="list-column">
        <li className="list-title">Get to Know Us</li>
        <li>Careers</li>
        <li className='joined-li'>Amazon<br/>Newsletter</li>
        <li>About Amazon</li>
        <li>Sustainability</li>
        <li>Press Center</li>
        <li>Investor Relations</li>
        <li>Amazon Devices</li>
        <li>Amazon Science</li>
      </ul>
      <ul className="list-column">
        <li className="list-title">Make Money with Us</li>
        <li>Sell products on Amazon</li>
        <li>Sell apps on Amazon</li>
        <li>Supply to Amazon</li>
        <li>Become an Affiliate</li>
        <li>Become a Delivery Driver</li>
        <li className='joined-li'>Start a package delivery<br/>business</li>
        <li>Advertise Your Products</li>
        <li>Self-Publish with Us</li>
        <li>Host an Amazon Hub</li>
        <li className='joined-li'>&gt; See More Ways to Make<br/>Money</li>
      </ul>
      <ul className="list-column">
        <li className="list-title">Amazon Payment Products</li>
        <li className='joined-li'>Amazon Rewards Visa Signature<br/>Cards</li>
        <li>Amazon Store Card</li>
        <li>Amazon Secured Card</li>
        <li>Amazon Business Card</li>
        <li>Shop with Points</li>
        <li>Credit Card Marketplace</li>
        <li>Reload Your Balance</li>
        <li>Amazon Currency Converter</li>
      </ul>
      <ul className="list-column">
        <li className='list-title'>Let Us Help You</li>
        <li className='joined-li'>Amazon and COVID-<br/>19</li>
        <li>Your Account</li>
        <li>Your Orders</li>
        <li className='joined-li'>Shipping Rates &<br/>Policies</li>
        <li>Amazon Prime</li>
        <li className='joined-li'>Returns &<br/>Replacements</li>
        <li className='joined-li'>Manage Your<br/>Content and Devices</li>
        <li className='joined-li'>Your Recalls and<br/>Product Safety<br/>Alerts</li>
        <li>Amazon Assistant</li>
        <li>Help</li>
      </ul>
    </div>
  );
}

export default MarketingFooter