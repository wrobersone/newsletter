import React from "react";
import "./style.css";
import Popular from "./popular/Popular";

const Main = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="mainContent">
            <Popular />
          </div>
          <div className="sideContent"></div>
        </div>
      </main>
    </>
  );
};

export default Main;
