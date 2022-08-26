import React from 'react';
import './BookSection.css';
import BookList from './BookList';

function BookSection() {
  return (
    <div className="book-section">
      <p className="book-list-heading">Best Sellers in Thrillers & Suspense</p>
      <div className='listed-books'>
        <BookList  />
        <BookList  />
        <BookList  />
        <BookList  />
        <BookList  />
      </div>
      
    </div>
  );
}

export default BookSection