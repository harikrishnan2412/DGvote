import React from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";

const AdminPanel = () => {
  const { contract } = useContract(
    "0x490c2B6178D1AB291C4254B17e3e4DeDf15268F2"
  );
  return <div>AdminPanel</div>;
};

export default AdminPanel;
