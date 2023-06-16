import React, { useEffect } from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";

const AdminPanel = () => {
  const { contract } = useContract(
    "0x490c2B6178D1AB291C4254B17e3e4DeDf15268F2"
  );
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
  return <div></div>;
};

export default AdminPanel;
