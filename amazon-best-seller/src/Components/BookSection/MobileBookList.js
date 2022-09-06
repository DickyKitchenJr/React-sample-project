import React from "react";
import { randomNum } from "./randomNum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import "./MobileBookList.css";

function MobileBookList(props) {
  const star = <FontAwesomeIcon icon={faStar} className="mobile-star-icon" />;
  const halfStar = (
    <FontAwesomeIcon icon={faStarHalf} className="mobile-half-star-icon" />
  );
  return (
    <div className="mobile-booklist">
      <div className="left-mobile-booklist">
        <div className="mobile-ranking-block">
          <p className="ranking-block">
            #{props.id}&nbsp;&nbsp;
            <span className="border-cap">&nbsp;&nbsp;&nbsp;</span>
          </p>
        </div>
        <img className="mobile-book-cover" src={props.img} alt="book cover" />
      </div>
      <div className="right-mobile-booklist">
        <p className="mobile-book-title">{props.title}</p>
        <div className="mobile-star-section">
          {star}
          {star}
          {star}
          {star}
          {halfStar}
          <p className="mobile-rating-amount">{randomNum()}</p>
        </div>
        <p className="mobile-book-price">{props.price}</p>
      </div>
    </div>
  );
}

export default MobileBookList;
