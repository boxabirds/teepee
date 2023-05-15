import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/main-menu");
  };

  return (
    <div>
      {/* Replace with your Teepee logo */}
      <h1>Teepee Logo</h1>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default WelcomeScreen;
