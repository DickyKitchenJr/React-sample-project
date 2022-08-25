import React from 'react';
import './TertiaryBar.css';

function TertiaryBar() {
  return (
    <>
    <div className="tertiary-bar">
      <p className="books">Books</p>
      <p className="tertiary-bar-text">Advanced Search</p>
      <p className="tertiary-bar-text">New Releases</p>
      <p className="tertiary-bar-text">Best Sellers & More</p>
      <p className="tertiary-bar-text">Amazon Book Clubs</p>
      <p className="tertiary-bar-text">Children's Books</p>
      <p className="tertiary-bar-text">Textbooks</p>
      <p className="tertiary-bar-text">Textbook Rentals</p>
      <p className="tertiary-bar-text">Best Books of the Month</p>
    </div>
    <div className='best-seller-bar'>
        <p className='bs-bar-line1'>Amazon Best Sellers</p>
        <p className='bs-bar-line2'>Our most popular products based on sales. Updated hourly.</p>
    </div>
    </>
    
  );
}

export default TertiaryBar