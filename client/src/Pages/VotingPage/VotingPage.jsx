import React, { useState, useEffect } from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";

const VotingPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const { contract } = useContract(
    "0x490c2B6178D1AB291C4254B17e3e4DeDf15268F2"
  );
  const { mutateAsync: voting } = useContractWrite(contract, "vote");
  const { data, isLoading } = useContractRead(contract, "getCandidates");

  const publishCampaign = async (form) => {
    try {
      console.log(form.selectedOption);
      const data = await voting([form.selectedOption]);

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

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
    publishCampaign({ selectedOption });
  };

  return (
    <div>
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
