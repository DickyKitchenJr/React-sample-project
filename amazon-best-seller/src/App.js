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
        {/* NOT DISPLAYING */}
        <img
          src="amazon-best-seller\src\images\amazonlogo.jpg"
          alt="amazon logo"
        />
        <p>
          hello
          <br />
          select your address
        </p>
        <form className="form">
          <input type="search" placeholder="Search" className="search-field" />
          <button type="submit" className="search-button">
            {searchIcon}
          </button>
        </form>
        <p>{flagIcon}EN</p>
        <p>
          Hello, Sign in
          <br />
          <span>Account & Lists</span>
        </p>
        <p>
          Returns
          <br />
          <span>& Orders</span>
        </p>
        <p>{shoppingCart}Cart</p>
      </header>
    </div>
  );
}

export default App;
