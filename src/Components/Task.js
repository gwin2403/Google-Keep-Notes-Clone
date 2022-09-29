import React, { useState } from "react";
import useStorage from "../hooks/useStorage";
import Notes from "./Notes";
import "./Task.css";
export default function Task() {
  const [dragged, setDragged] = useState();
  const [dragOver, setDragOver] = useState();
  const [input, setInput] = useState();
  const [value, setValue, addValue, updateValue, deleteValue] = useStorage(
    "keep",
    [{ val: "Create new Note" }]
  );
  const handleBlur = () => {
    if (input === "") return;
    addValue(input);
    setInput("");
  };
  return (
    <div className="Task-input">
      <div className="Task-01">
        <div className="Task-02">
          <input
            type="text"
            placeholder="Take a note..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onBlur={handleBlur}
          ></input>
          <span class="material-symbols-outlined Task-icons">check_box</span>
          <span class="material-symbols-outlined Task-icons">brush</span>
          <span class="material-symbols-outlined Task-icons">image</span>
        </div>
      </div>
      <div className="NotesConatainer">
        {value.map((val, i) => (
          <Notes
            value={val}
            id={i}
            key={i}
            dragged={dragged}
            setDragged={setDragged}
            dragOver={dragOver}
            setDragOver={setDragOver}
          />
        ))}
      </div>
    </div>
  );
}
