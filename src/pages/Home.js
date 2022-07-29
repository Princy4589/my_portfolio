import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Princy Rilan</h1>
          <h2>Développeur React</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
