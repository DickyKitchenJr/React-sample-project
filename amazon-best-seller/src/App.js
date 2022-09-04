import React from "react";
import TopBar from "./Components/TopBar";
import MiddleBar from "./Components/MiddleBar";
import TertiaryBar from "./Components/TertiaryBar";
import SideNavBar from "./Components/SideNavBar";
import BookSection from "./Components/BookSection/BookSection";
import FooterBars from "./Components/FooterBars";
import MarketingFooter from "./Components/MarketingFooter";
import MobileTopBar from "./Components/PortraitOrientation/MobileTopBar";
import "./App.css";

function App() {
  return (
    <>
      <div className="landscape-orientation">
        <TopBar />
        <MiddleBar />
        <TertiaryBar />
        <div className="side-nav-and-books">
          <SideNavBar />
          <BookSection />
        </div>
        <FooterBars />
        <MarketingFooter />
      </div>
      <div className="portrait-orientation">
        <p>I'll only show in portrait layout (i.e. cell phones)</p>
        <MobileTopBar />
      </div>
    </>
  );
}

export default App;
