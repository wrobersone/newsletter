import React from "react";
import "./style.css";
import Popular from "./popular/Popular";
import Ppost from "./Ppost/Ppost";

const Main = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="mainContent">
            <Popular />
            <Ppost />
          </div>
          <div className="sideContent"></div>
        </div>
      </main>
    </>
  );
};

export default Main;
