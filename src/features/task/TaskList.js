import React from "react";
import { useSelector } from "react-redux";
// import { newTask, completeTask, deleteTask } from "./taskClice";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.task.tasks);
  return (
    <>
      {/* <h3>TaskList</h3> */}
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
