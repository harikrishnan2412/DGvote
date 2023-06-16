import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Landing from "./Pages/Landing/Landing";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  </ThirdwebProvider>
);
