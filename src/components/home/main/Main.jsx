import React from "react";
import "./style.css";
import Popular from "./popular/Popular";
import Ppost from "./Ppost/Ppost";
import Lifestyle from "./lifestyle/Lifestyle";
import Music from "./music/Music";
import Side from "../side/Side";

const Main = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="mainContent">
            <Popular />
            <Ppost />
            <Lifestyle />
            <Music />
          </div>
          <div className="sideContent">
            <Side />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
