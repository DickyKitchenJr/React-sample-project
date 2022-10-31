import React, { useState } from "react";
import logo from "./logo.svg";
import smile from "./smile.png";
import PageColor from "./PageColorChanger/PageColor";
import "./App.css";

function App() {
  const [spin, setSpin] = useState(0)

  const handleClick = () => {
    if(spin === 0){
      setSpin(1)
    } else {
      setSpin(0)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img spin={spin} src={smile} className="App-logo" alt="logo" />

        <button onClick={handleClick}>Change Spin Direction</button>
      </header>
      <PageColor />
    </div>
  );
}

export default App;
