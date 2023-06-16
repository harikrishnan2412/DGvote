import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Landing from "./Pages/Landing/Landing";
import Complain from "./Pages/complain.jsx";
import Complainform from "./Pages/complainform/Complainform";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <BrowserRouter>
      
      <Complainform />
    </BrowserRouter>
  </ThirdwebProvider>
);
