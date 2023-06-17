import React, { useEffect } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

const AdminPanel = () => {
  const { contract } = useContract(
    "0x28598F1F5A5a85558405B9CA6a7135079FB361cF"
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
    <div>
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
