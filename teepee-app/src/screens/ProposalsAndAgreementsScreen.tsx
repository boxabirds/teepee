import React, { useState } from "react";

interface Proposal {
  name: string;
  details: string;
}

const ProposalsAndAgreementsScreen: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [proposalName, setProposalName] = useState("");
  const [proposalDetails, setProposalDetails] = useState("");

  const handleCreateProposal = () => {
    const newProposal: Proposal = {
      name: proposalName,
      details: proposalDetails,
    };
    setProposals([...proposals, newProposal]);
    setProposalName("");
    setProposalDetails("");
  };

  return (
    <div>
      <h2>Create new proposal</h2>
      <input
        type="text"
        value={proposalName}
        onChange={(e) => setProposalName(e.target.value)}
        placeholder="Enter proposal name"
      />
      <textarea
        value={proposalDetails}
        onChange={(e) => setProposalDetails(e.target.value)}
        placeholder="Enter details"
      ></textarea>
      <button onClick={handleCreateProposal}>Send to other parent</button>

      <h2>List of all proposals</h2>
      <ul>
        {proposals.map((proposal, index) => (
          <li key={index}>
            <h3>{proposal.name}</h3>
            <p>{proposal.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProposalsAndAgreementsScreen;
