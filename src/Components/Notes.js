import React, { useEffect, useRef } from "react";
import "./Notes.css";
const Notes = (props) => {
  const divRef = useRef(null);
  // const handleDrag = () => {
  //   if (props.dragOver === props.dragged) return;
  //   let arr = props.arr;
  //   let temp = arr[props.dragged];
  //   console.log(temp);
  //   arr[props.dragged] = arr[props.dragOver];
  //   arr[props.dragOver] = temp;
  //   props.setArr(arr);
  // };
  // useEffect(() => {
  //   divRef.current.addEventListener("dragend", (e) => {
  //     props.setDragged(e.target.id);
  //     handleDrag();
  //   });
  //   return divRef.current.removeEventListener("dragend", () => {});
  // }, []);
  // console.log(props.arr.toString());
  // useEffect(() => {
  //   divRef.current.addEventListener(
  //     "dragover",
  //     (e) => {
  //       console.log(e);
  //       props.setDragOver(e.target.id);
  //     },
  //     []
  //   );
  //   return divRef.current.removeEventListener("dragover", () => {});
  // });
  return (
    <div className="Notes" draggable={true} ref={divRef} id={props.id}>
      {props.value.val}
    </div>
  );
};

export default Notes;
