import React, { useState } from "react";
import "./Main.css";
import dot from "../../img/dot.png";
import startDisabled from "../../img/icon-start-disabled.png";
import start from "../../img/icon-start.png";
import resetDisabled from "../../img/icon-reset-disabled.png";
import reset from "../../img/icon-reset.png";

export default function Main() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <article className="wrap">
      <p className="txt-timer">TIMER</p>
      <div className="line"></div>
      <div className="main-timer">
        <button className="count">
          <p>HRS</p>
          <div className="countdown"></div>
        </button>
        <img src={dot} alt="dot" className="dot" />
        <button className="count">
          <p>MIN</p>
          <div className="countdown"></div>
        </button>
        <img src={dot} alt="dot" className="dot" />
        <button className="count">
          <p>SEC</p>
          <div className="countdown"></div>
        </button>
      </div>
      <ul>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: isClicked ? "#5180FF" : "#324577",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
          }}
          className="play-btn"
        >
          <img src={startDisabled} alt="" className="play-icon" />
          <p>START</p>
        </button>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: isClicked ? "#FB7099" : "#324577",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
          }}
          className="play-btn"
        >
          <img src={resetDisabled} alt="" className="play-icon" />
          <p>RESET</p>
        </button>
      </ul>
    </article>
  );
}
