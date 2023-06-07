import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "./taskSlice";
import "./taskItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li>
        <div className="task-item-col">
          <input
            className="task-item-check"
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(completeTask({ task }))}
          />
          <div className="task-item-title">{task.title}</div>
          <div
            className="trash-icon"
            onClick={() => dispatch(deleteTask({ task }))}
          >
            <FontAwesomeIcon icon={faTrashCan} size="lg" />
          </div>
        </div>
      </li>
    </>
  );
};

export default TaskItem;
