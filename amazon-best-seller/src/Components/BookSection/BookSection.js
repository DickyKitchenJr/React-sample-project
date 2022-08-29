import React from 'react';
import './BookSection.css';
import{ books } from './books';
import BookList from './BookList';

function BookSection() {
  return (
    <div className="book-section">
      <p className="book-list-heading">Best Sellers in Thrillers & Suspense</p>
      <div className="listed-books">
        {books.map((book) => {
          return <BookList key={book.id} {...book}></BookList>;
        })}
      </div>
      <div className='mock-page-buttons'><p>
        &#8592; Previous Page <button className='current-page'>1</button> 
        <button className='other-pages'>2</button> 
        <button className='other-pages'>Next Page &#8594;</button>
      </p></div>
      
    </div>
  );
}

export default BookSection