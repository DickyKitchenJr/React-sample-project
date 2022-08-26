import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import "./BookList.css";

function BookList() {
    const star = <FontAwesomeIcon icon={faStar} className="star-icon" />;
    const halfStar = <FontAwesomeIcon icon={faStarHalf} className="half-star-icon" />;
  return (
    <div className="booklist">
      <p className="ranking-block">
        #1&nbsp;&nbsp;<span className="border-cap">&nbsp;&nbsp;&nbsp;</span>
      </p>
      <img clasName="book-cover" src="https://m.media-amazon.com/images/I/811YQ9+UOOL._AC_UY327_FMwebp_QL65_.jpg" alt="book cover" />
      <p className="book-title">Prey/Pray: Origin of The Average Man</p>
      <p className="author">&gt;Dicky Kitchen Jr</p>
      <div className="star-section">{star}{star}{star}{star}{halfStar}<p>10352</p>
      </div>
      
      <p className="book-format-type">Paperback</p>
      <p className="book-price">$14.99</p>
    </div>
  );
}

export default BookList;
