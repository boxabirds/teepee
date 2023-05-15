import React from "react";
import { useNavigate } from "react-router-dom";

const MainMenuScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToProposals = () => {
    navigate("/proposals-and-agreements");
  };

  return (
    <div>
      <button onClick={handleGoToProposals}>Go to Proposals & Agreements</button>
    </div>
  );
};

export default MainMenuScreen;
