import React from 'react'
import { books } from "./books";
import MobileBookList from "./MobileBookList";
import "./MobileBookSection.css"

function MobileBookSection() {
  return (
    <div className="mobile-book-section">
      <ul className="nav-scroll">
        <li className="nav-list">Best Sellers</li>
        <li className="nav-list">New Releases</li>
        <li className="nav-list">Most Wished For</li>
        <li className="nav-list">Gift Ideas</li>
      </ul>
      <div className="mobile-listed-books">
        {books.map((book) => {
          return <MobileBookList key={book.id} {...book}></MobileBookList>;
        })}
      </div>
    </div>
  );
}

export default MobileBookSection