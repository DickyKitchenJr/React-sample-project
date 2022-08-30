import React from "react";
import TopBar from "./Components/TopBar";
import MiddleBar from "./Components/MiddleBar";
import TertiaryBar from "./Components/TertiaryBar";
import SideNavBar from "./Components/SideNavBar";
import BookSection from "./Components/BookSection/BookSection";
import FooterBars from "./Components/FooterBars";
import "./App.css";
import MarketingFooter from "./Components/MarketingFooter";

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
      <FooterBars />
      <MarketingFooter />
    </>
  );
}

export default App;
