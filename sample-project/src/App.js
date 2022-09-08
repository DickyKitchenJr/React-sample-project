import "./App.css";
import smile from "./smile.png";
import Banner from "./Components/Banner";
import Buttons from "./Components/Buttons";
import PageColor from "./Components/PageColorChanger/PageColor";

function App() {
  return (
    <div className="App">
      <Banner />
      <h2>Spin The Smile</h2>
      <Buttons />
      <header className="App-header">
        {/* <img src={smile} className="App-logo" alt="logo" /> */}
        <PageColor />
      </header>
    </div>
  );
}

export default App;
