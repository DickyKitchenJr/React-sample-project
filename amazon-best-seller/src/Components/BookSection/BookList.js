import React from "react";
import { randomNum } from "./randomNum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import "./BookList.css";

function BookList(props) {
  const star = <FontAwesomeIcon icon={faStar} className="star-icon" />;
  const halfStar = (
    <FontAwesomeIcon icon={faStarHalf} className="half-star-icon" />
  );
  return (
    <div className="booklist">
      <p className="ranking-block">
        #{props.id}&nbsp;&nbsp;<span className="border-cap">&nbsp;&nbsp;&nbsp;</span>
      </p>
      <div className="inside-book-box">
        <img
          className="book-cover"
          src={props.img}
          alt="book cover"
        />
        <p className="book-title">{props.title}</p>
        <p className="author">&gt;{props.author}</p>
        <div className="star-section">
          {star}
          {star}
          {star}
          {star}
          {halfStar}
          <p className="rating-amount">{randomNum()}</p>
        </div>

        <p className="book-format-type">Paperback</p>
        <p className="book-price">{props.price}</p>
      </div>
    </div>
  );
}

export default BookList;
