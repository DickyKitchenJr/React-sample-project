import React, { useState } from "react";
import smile from "./smile.png";
import PageColor from "./PageColorChanger/PageColor";
import Form from "./Form/Form";
import "./App.css";

function App() {
  const [spin, setSpin] = useState(0);

  const handleClick = () => {
    if (spin === 0) {
      setSpin(1);
    } else {
      setSpin(0);
    }
  };

  return (
    <div className="App">

      <header className="App-header">
        <h1>React Experiments</h1>
        <p>Sometimes you just need a place to play around.</p>
      </header>

      <div className="smileSpin">
        <img spin={spin} src={smile} className="App-logo" alt="smile face" />
        <button onClick={handleClick}>Change Spin Direction</button>
      </div>

      <PageColor />

      <Form />
      
    </div>
  );
}

export default App;
