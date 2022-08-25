import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const flagIcon = <FontAwesomeIcon icon={faFlagUsa} />;
  const shoppingCart = <FontAwesomeIcon icon={faCartShopping} />;
  return (
    <div className="App">
      <header>
        <img
          className="amazon-logo"
          src="/images/amazonlogo.png"
          alt="amazon logo"
        />
        <p className="hello">
          Hello
          <br />
          <span className="topbar">Select Your Address</span>
        </p>
        <form className="form">
          <input type="search" placeholder="Search" className="search-field" />
          <button type="submit" className="search-button">
            {searchIcon}
          </button>
        </form>
        <p className="topbar">{flagIcon}EN</p>
        <p className="topbar">
          Hello, Sign In
          <br />
          <span>Account & Lists</span>
        </p>
        <p className="topbar">
          Returns
          <br />
          <span>& Orders</span>
        </p>
        <p className="topbar">{shoppingCart}Cart</p>
      </header>
    </div>
  );
}

export default App;
