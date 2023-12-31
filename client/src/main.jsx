import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Landing from "./Pages/Landing/Landing";
import Complain from "./Pages/complainbox/Complain.jsx";
import Complainform from "./Pages/complainform/Complainform";
import VotingPage from "./Pages/VotingPage/VotingPage.jsx";
import AdminPanel from "./Pages/Admin/AdminPanel.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider activeChain="mumbai">
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/complain" Component={Complain} />
        <Route path="/complainform" Component={Complainform} />
        <Route path="/vote" Component={VotingPage} />
        <Route path="/admin" Component={AdminPanel} />
      </Routes>
    </BrowserRouter>
  </ThirdwebProvider>
);
