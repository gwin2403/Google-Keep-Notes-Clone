import React, { useContext } from "react";
import "./Header.css";
import logo from "./Images/keep.png";
import { useState } from "react";
import { NavContext } from "../context/NavProvider";

function Header() {
  const [tab, setTab] = useContext(NavContext);
  const [focus, setFocus] = useState(false);
  function handleFocus() {
    setFocus((prev) => !prev);
  }
  return (
    <div className="Navbar">
      <div className="Menubar">
        <span class="material-symbols-outlined nav-icons">menu</span>
      </div>
      <div className="Nav-logo">
        {tab === "Keep" && <img src={logo} alt="Logo"></img>}
        <span className="Navbar-heading">{tab}</span>
      </div>

      <div className="Navbar-Search">
        <div
          className={`Navbar-search-01 ${focus ? "active" : ""}`}
          id="Nav-search"
          onFocus={handleFocus}
          onBlur={handleFocus}
        >
          <span className="material-symbols-outlined nav-icons">search</span>
          <div className="Navbar-input">
            <input type="text" placeholder="Search" id="Nav-input"></input>
          </div>
        </div>
      </div>
      <div className="Navbar-more-icons">
        <span className="material-symbols-outlined nav-icons">refresh</span>
        <span className="material-symbols-outlined nav-icons">width_full</span>
        <span className="material-symbols-outlined nav-icons">settings</span>
      </div>
      <div className="Navbar-profile">
        <span className="material-symbols-outlined nav-icons">apps</span>
        <span className="material-symbols-outlined nav-icons">
          account_circle
        </span>
      </div>
    </div>
  );
}
export default Header;
