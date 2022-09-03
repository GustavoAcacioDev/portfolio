import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';

/* ROTAS*/
import LandingPage from "./containers/landingPage";
import LandingPagePT from "./containers/landingPagePT";
import PortfolioPage from "./containers/portfolio";
import PortfolioPagePT from "./containers/portfolioPT";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/pt' element={<LandingPagePT />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/portfolioPT' element={<PortfolioPagePT />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Routing;