import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  return (
    <div className="App">
      <header>
        <img src="images/amazonlogo.jpg" alt="amazon logo" />
        {/* NOT DISPLAYING */}
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
      </header>
    </div>
  );
}

export default App;
