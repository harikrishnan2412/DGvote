import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Landing from "./Pages/Landing/Landing";
import Complain from "./Pages/complain.jsx";
import Complainform from "./Pages/complainform/Complainform";
import VotingPage from "./Pages/VotingPage/VotingPage.jsx"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <BrowserRouter>
      <Routes>
      <Route path="/" Component={Landing}/>
      <Route path="/complain" Component={Complain}/>
      <Route path="/complainform" Component={Complainform}/>
      <Route path="/vote" Component={VotingPage}/>
    
      
      </Routes>
    </BrowserRouter>
  </ThirdwebProvider>
);
