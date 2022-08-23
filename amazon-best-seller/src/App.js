import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src="images/amazonlogo.jpg" alt="amazon logo" />
        <p>
          hello
          <br />
          select your address
        </p>
        <form className="form">
          <input type="search" placeholder="Search" className="search-field" />
          <button type="submit" className="search-button">
            <img src="images/search-icon.png" alt="search icon" />
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
