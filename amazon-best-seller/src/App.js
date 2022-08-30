import React from "react";
import TopBar from "./Components/TopBar";
import MiddleBar from "./Components/MiddleBar";
import TertiaryBar from "./Components/TertiaryBar";
import SideNavBar from "./Components/SideNavBar";
import BookSection from "./Components/BookSection/BookSection";
import FootBars from "./Components/FootBars";
import "./App.css";

function App() {
  return (
    <>
      <TopBar />
      <MiddleBar />
      <TertiaryBar />
      <div className="side-nav-and-books">
        <SideNavBar />
        <BookSection />
      </div>
      <FootBars />
    </>
  );
}

export default App;
