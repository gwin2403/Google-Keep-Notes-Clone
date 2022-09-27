import React from "react";
import Notes from "./Notes";
import "./Task.css";
export default function Task() {
  return (
    <div className="Task-input">
      <div className="Task-01">
        <div className="Task-02">
          <input type="text" placeholder="Take a note..."></input>
          <span class="material-symbols-outlined Task-icons">check_box</span>
          <span class="material-symbols-outlined Task-icons">brush</span>
          <span class="material-symbols-outlined Task-icons">image</span>
        </div>
      </div>
      <div className="NotesConatainer">
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      </div>
    </div>
  );
}
