import React, { useState, useEffect } from "react";

import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import Header from "../../components/header/Header";
import "./VotingPage.css";

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
    <div className="votinpagebody">
      <Header
        path1="/complain"
        navlink1="Feed"
        path2="/complainform"
        navlink2="Complaint"
      />
      <form className="pref" onSubmit={handleSubmit}>
        <h3>Vote for your preferred option:</h3>
        <div className="option-wrapper">
          {isLoading ? (
            <p>Loading campaigns...</p>
          ) : (
            <div className="inputalign">
              {data.map((campaign) => (
                <label key={campaign.id} className="option-label">
                  {campaign.name}
                  <input
                    type="radio"
                    name="option"
                    className="input-dot"
                    value={campaign.id}
                    checked={selectedOption === campaign.id.toString()}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <span className="custom-radio"></span>
                </label>
              ))}
            </div>
          )}
        </div>
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
