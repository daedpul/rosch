
import LandingPage from "../src/pages/landingPage/landingPage"
import NavigationBar from "./pages/navigationBar/navigationBar";
import CustomFooter from "../src/pages/footer/footer"
import Hierarchy from "../src/pages/companyHierarchy/hierarchy";
import SnapImage from "./pages/landingPage/snapImages";
import { Route, Routes } from "react-router";

import React from "react";

import { useRef } from "react";



function App() {
  const teamsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <NavigationBar teamsRef={teamsRef} aboutRef={aboutRef} contactRef={contactRef} />
      <SnapImage />
      <LandingPage ref={aboutRef} />
      <Hierarchy ref={teamsRef} />
      <CustomFooter ref={contactRef} />
    </div >
  );
}

export default App;
