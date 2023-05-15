import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import MainMenuScreen from "./screens/MainMenuScreen";
import ProposalsAndAgreementsScreen from "./screens/ProposalsAndAgreementsScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/main-menu" element={<MainMenuScreen />} />
        <Route path="/proposals-and-agreements" element={<ProposalsAndAgreementsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
