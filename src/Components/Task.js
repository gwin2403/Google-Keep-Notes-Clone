import React, { useState } from "react";
import Notes from "./Notes";
import "./Task.css";
export default function Task() {
  const [arr, setArr] = useState([
    { data: "this a text" },
    { data: "the data " },
    { data: "make dish today" },
    { data: "go to site" },
    { data: "finish project today" },
    { data: "start new project" },
  ]);
  const [dragged, setDragged] = useState();
  const [dragOver, setDragOver] = useState();
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
        {arr.map((val, i) => (
          <Notes
            value={val}
            id={i}
            key={i}
            dragged={dragged}
            setDragged={setDragged}
            dragOver={dragOver}
            setDragOver={setDragOver}
            setArr={setArr}
            arr={arr}
          />
        ))}
      </div>
    </div>
  );
}
