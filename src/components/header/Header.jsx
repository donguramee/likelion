import React from "react";
import wenivLogo from "../../img/weniv-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <img src={wenivLogo} alt="weniv-logo" className="logo" />
    </div>
  );
}
