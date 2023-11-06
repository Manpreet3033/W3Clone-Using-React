import { React, useState } from "react";
import { MyNav } from "../Header/MyNav";
import { LandingPage } from "./LandingPage";
import { PageComponents } from "./PageComponents";
import { FootListUpper } from "./FootListUpper";
import { FootList } from "./FootList";
import { FootPageDown } from "./FootPageDown";
import { Footer } from "../Footer";
import { HtmlPageInner4 } from "./InnerPages/HtmlPage/htmlpagges";

export const HomePage = () => {
  const [isBottomNavVisible, setBottomNavVisibility] = useState(true);
  const handleToggleBottomNav = () => {
    setBottomNavVisibility(!isBottomNavVisible);
  };
  return (
    <div>
      <MyNav toggleBottom={handleToggleBottomNav} />
      <HtmlPageInner4 />
      {isBottomNavVisible && <LandingPage />}
      {isBottomNavVisible && <PageComponents />}
      {isBottomNavVisible && <FootListUpper />}
      {isBottomNavVisible && <FootList />}
      {isBottomNavVisible && <FootPageDown />}
      {isBottomNavVisible && <Footer />}
    </div>
  );
};
