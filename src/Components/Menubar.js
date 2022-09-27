import React, { useContext } from "react";
import { NavContext } from "../context/NavProvider";
import "./Menubar.css";
// import { useState } from "react";

export default function Menubar() {
  const [nav, setNav] = useContext(NavContext);
  return (
    <div className="Menu-01">
      <div className="Menu-02" onClick={() => setNav("keep")}>
        <div className="Menu-03">
          <span class="material-symbols-outlined menu-icons">lightbulb</span>
        </div>
        <div className="Menu-04">
          <p>Notes</p>
        </div>
      </div>
      <div className="Menu-02" onClick={() => setNav("Remainders")}>
        <div className="Menu-03">
          <span class="material-symbols-outlined menu-icons">
            notifications
          </span>
        </div>
        <div className="Menu-04">
          <p>Reminders</p>
        </div>
      </div>
      <div className="Menu-02" onClick={() => setNav("Edit labels")}>
        <div className="Menu-03">
          <span class="material-symbols-outlined menu-icons">edit</span>
        </div>
        <div className="Menu-04">
          <p>Edit labels</p>
        </div>
      </div>
      <div className="Menu-02" onClick={() => setNav("Archive")}>
        <div className="Menu-03">
          <span class="material-symbols-outlined menu-icons">archive</span>
        </div>
        <div className="Menu-04">
          <p>Archive</p>
        </div>
      </div>
      <div className="Menu-02" onClick={() => setNav("Bin")}>
        <div className="Menu-03">
          <span class="material-symbols-outlined menu-icons">delete</span>
        </div>
        <div className="Menu-04">
          <p>Bin</p>
        </div>
      </div>
    </div>
  );
}
