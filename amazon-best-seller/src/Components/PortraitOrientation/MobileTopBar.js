import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./MobileTopBar.css";

function MobileTopBar() {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} className="mobile-search-icon" />;
  const shoppingCart = <FontAwesomeIcon icon={faCartShopping}  className="mobile-shoppingcart-icon"/>;
  const hamburgerIcon = <FontAwesomeIcon icon={faBars} className="mobile-hamburger-icon" />;
  return (
    <div className="mobile-top-bar" id="mobile-top-bar">
      <div className="above-search-bar">
        <div className="left-above-search-bar">
          {hamburgerIcon}
          <img
            className="mobile-amazon-logo"
            src="../images/amazonlogo.png"
            alt="amazon logo"
          />
        </div>
        <div className="right-above-search-bar">
          <p className="mobile-top-bar-p">Sign in &gt;</p>
          <img className="mobile-user-icon" src="../images/user-icon.png" alt="user icon" />
          <p className="mobile-top-bar-p">{shoppingCart}</p>
        </div>
      </div>
      <form className="mobile-form">
        <input
          type="search"
          placeholder="Search Amazon"
          className="mobile-search-field"
          size="100"
        />
        <button type="submit" className="mobile-search-button">
          {searchIcon}
        </button>
      </form>
    </div>
  );
}

export default MobileTopBar;
