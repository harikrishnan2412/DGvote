import React, { useEffect } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import "./AdminPanel.css";
const AdminPanel = () => {
  const { contract } = useContract(
    "0x57Ff8B5851100A1f39BAF05a96597434d2760807"
  );
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
  }, []);
  return (
    <div className="joel">
      {isLoading ? (
        <p>Loading campaigns...</p>
      ) : (
        data.map((campaign) => (
          <div>
            <h1>{campaign.name}</h1>
            <h2>{campaign.voteCount.toString()}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminPanel;
