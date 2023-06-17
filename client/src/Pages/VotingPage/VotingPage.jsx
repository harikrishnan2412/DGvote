import React, { useState, useEffect } from "react";

import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import Header from "../../components/header/Header";

const VotingPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const { contract } = useContract(
    "0x28598F1F5A5a85558405B9CA6a7135079FB361cF"
  );
  const { mutateAsync: vote, isLoading2 } = useContractWrite(contract, "vote");

  const call = async (form) => {
    try {
      console.log("form", form);
      const data = await vote({ args: [form] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  const { data, isLoading } = useContractRead(contract, "getCandidates");

  const getCampaigns = async () => {
    const campaigns = await contract.call("getCandidates");
    const parsedCampaigns = campaigns.map((campaign, i) => ({
      name: campaign,
      id: i,
    }));
    return parsedCampaigns;
  };

  useEffect(() => {
    getCampaigns();
  }, []); // Fetch campaigns when component mounts

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform vote submission logic
    call(selectedOption);
  };

  return (
    <div>
      <Header 
        path1='/complain'
        navlink1='see complaints'
        path2='/complainform'
        navlink2='post complains'

      />

      <h1>Voting Page</h1>
      <form onSubmit={handleSubmit}>
        <h3>Vote for your preferred option:</h3>
        {isLoading ? (
          <p>Loading campaigns...</p>
        ) : (
          data.map((campaign) => (
            <label key={campaign.id}>
              <input
                type="radio"
                name="option"
                value={campaign.id}
                checked={selectedOption === campaign.id.toString()}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {campaign.name}
            </label>
          ))
        )}
        <br />
        <br />
        <button type="submit" onSubmit={handleSubmit}>
          Submit Vote
        </button>
      </form>
    </div>
  );
};

export default VotingPage;
