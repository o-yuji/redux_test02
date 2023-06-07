import React, { useState } from "react";
import "./TaskInput.scss";
import { useDispatch } from "react-redux";
import { newTask } from "./taskSlice";

const TaskInput = () => {
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      className="task-add-form"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(newTask({ title: newTitle }));
        setNewTitle("");
      }}
    >
      <input
        className="task-add-input"
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="newTask"
      />
      <button className="task-add-btn">追加</button>
    </form>
  );
};

export default TaskInput;
