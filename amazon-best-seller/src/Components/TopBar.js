import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import './TopBar.css';

function TopBar() {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />;
  const flagIcon = <FontAwesomeIcon icon={faFlagUsa} className="flag-icon" />;
  const shoppingCart = <FontAwesomeIcon icon={faCartShopping} />;
  const locationDot = <FontAwesomeIcon icon={faLocationDot} />;
  return (
      <header id='header'>
        <img
          className="amazon-logo"
          src="/images/amazonlogo.png"
          alt="amazon logo"
        />
        <p className="hello topbar-text">
          Hello
          <br />
          <span className="topbar span">{locationDot} Select Your Address</span>
        </p>
        <form className="form">
          <input
            type="search"
            placeholder="Search"
            className="search-field"
            size="100"
          />
          <button type="submit" className="search-button">
            {searchIcon}
          </button>
        </form>
        <p className="topbar topbar-text">
          English<br></br>
          {flagIcon}
        </p>
        <p className="topbar topbar-text">
          Hello, Sign In
          <br />
          <span className="span">Account & Lists</span>
        </p>
        <p className="topbar topbar-text">
          Returns
          <br />
          <span className="span">& Orders</span>
        </p>
        <p className="topbar span cart">{shoppingCart}Cart</p>
      </header>
  );
}

export default TopBar