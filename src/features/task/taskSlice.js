import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    idCount: 3,
    tasks: [
      {
        id: 3,
        title: "Task C",
        completed: false,
      },
      {
        id: 2,
        title: "Task B",
        completed: false,
      },
      {
        id: 1,
        title: "Task A",
        completed: false,
      },
    ],
  },
  reducers: {
    newTask: (state, action) => {
      state.idCount++;
      const newItem = {
        id: state.idCount,
        title: action.payload.title,
        completed: false,
      };
      state.tasks = [newItem, ...state.tasks];
    },
    completeTask: (state, action) => {
      console.log(action.payload.task.id);
      const newItem = {
        ...action.payload.task,
        completed: !action.payload.task.completed,
      };
      state.tasks = state.tasks.map((_task) =>
        _task.id === action.payload.task.id ? newItem : _task
      );
    },
    deleteTask: (state, action) => {
      if (action.payload.task.completed) {
        state.tasks = state.tasks.filter(
          (_task) => _task.id !== action.payload.task.id
        );
      } else {
        alert("にチェックしてから削除してください！");
      }
    },
  },
});

// export const selectTask = (state) => state.task.tasks;
export const { newTask, completeTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
