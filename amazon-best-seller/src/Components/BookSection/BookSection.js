import React from 'react';
import './BookSection.css';
import{ books } from './books';
import BookList from './BookList';

function BookSection() {
  return (
    <div className="book-section">
      <p className="book-list-heading">Best Sellers in Thrillers & Suspense</p>
      <div className="listed-books">
        {books.map((book) =>{
          return <BookList key ={book.id} {...book}></BookList>
        })}
      </div>
    </div>
  );
}

export default BookSection