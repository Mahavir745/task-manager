import React, { createContext, useReducer, useState } from "react";

export const taskDataProvider = createContext(
  {
    addTask: [],
    handleAddTask: () => { },
    handleDeleteTask: () => { },
    handleMarkCompleted: () => { },
    handleEditData: () => { },
    handleFilterTask: ()=>{},
  }
);

const allTask = JSON.parse(localStorage.getItem("allTask")) || [];

const HandleTaskProvider = (currentTask, action) => {
  let newTask = currentTask;
  switch (action.type) {
    case "ADD-TASK":
      newTask = [...currentTask, action.payload];
      break;

    case "DELETE-TASK":
      newTask = currentTask.filter(task => task.id !== action.payload);
      break;

    case "MARK-COMPLETED":
      newTask = currentTask.map(task =>
        action.payload === task.id ? { ...task, status: "completed" } : task
      );
      break;

    case "EDIT-DATA":
      newTask = currentTask.map(task =>
        action.payload.id === task.id
          ? {
            ...task,
            title: action.payload.newTitle,
            descrption: action.payload.newDescrption,
            priority: action.payload.newPriority,
            status: action.payload.newStatus,
          }
          : task
      );
      break;

    default:
      throw new Error(`No such action type found: ${action.type}`);
  }
  localStorage.setItem("allTask", JSON.stringify(newTask))
  return newTask;
};

const AddDataStoreProvider = ({ children }) => {
  const [addTask, dispatchAddTask] = useReducer(HandleTaskProvider, allTask);
  const [filterTask,setFilterTask] = useState(allTask);

  const handleAddTask = task => {
    dispatchAddTask({
      type: "ADD-TASK",
      payload: task,
    });
  };

  const handleDeleteTask = id => {
    dispatchAddTask({
      type: "DELETE-TASK",
      payload: id,
    });
  };

  const handleMarkCompleted = id => {
    dispatchAddTask({
      type: "MARK-COMPLETED",
      payload: id,
    });
  };

  const handleEditData = (id, newTitle, newDescrption, newPriority, newStatus) => {
    dispatchAddTask({
      type: "EDIT-DATA",
      payload: { id, newTitle, newDescrption, newPriority, newStatus },
    });
  };

  const handleFilterTask = (priority)=>{
    const newtask = filterTask.filter((task)=> task.priority === priority)
    setFilterTask(newtask)
  }

  return (
    <taskDataProvider.Provider
      value={{
        addTask,
        handleAddTask,
        handleDeleteTask,
        handleMarkCompleted,
        handleEditData,
        handleFilterTask,
      }}
    >
      {children}
    </taskDataProvider.Provider>
  );
};

export default AddDataStoreProvider;

export const getPageData = (addTask = [], page) => {
  let array = [];
  for (let i = (page - 1) * 5; i < page * 5 && i < addTask.length; i++) {
    array.push(addTask[i]);
  }
  return array;
};
