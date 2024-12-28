import React, { createContext, useReducer, useState } from "react";

export const taskDataProvider = createContext(
  {
    addTask: [],
    editId: null,
    filterData:[],
    setEditId: () => { },
    setFilterData:()=>{ },
    handleAddTask: () => { },
    handleDeleteTask: () => { },
    handleMarkCompleted: () => { },
    handleEditData: () => { },
  }
);

const allTask = JSON.parse(localStorage.getItem("allTask")) || [];

const HandleTaskProvider = (currentTask, action) => {
  let newTask = currentTask;
  switch (action.type) {
    case "ADD-TASK":
      newTask = [action.payload,...currentTask];
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
      newTask = currentTask.map(task => {
        if(action.payload.id === task.id){
          const {newTitle,newDescrption,newPriority,newStatus} = action.payload;

          if (task.title !== newTitle || task.description !== newDescrption || task.priority !== newPriority || task.status !== newStatus) {
            return {
              ...task,
              title: newTitle || task.title,
              description: newDescrption || task.description,
              priority: newPriority || task.priority,
              status: newStatus || task.status,
            };
          }
        }
        return task; 
      });
      break;

    default:
      throw new Error(`No such action type found: ${action.type}`);
  }
  localStorage.setItem("allTask", JSON.stringify(newTask))
  return newTask;
};

const AddDataStoreProvider = ({ children }) => {
  const [addTask, dispatchAddTask] = useReducer(HandleTaskProvider, allTask);
  const [editId, setEditId] = useState(null)
  const [filterData,setFilterData] = useState([]);

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

  return (
    <taskDataProvider.Provider
      value={{
        addTask,
        editId,
        filterData,
        setFilterData,
        setEditId,
        handleAddTask,
        handleDeleteTask,
        handleMarkCompleted,
        handleEditData,
      }}
    >
      {children}
    </taskDataProvider.Provider>
  );
};

export default AddDataStoreProvider;

export const getPageData = (addTask, pageNo) => {
  let array = [];
  for (let i = (pageNo - 1) * 5; i < pageNo * 5; i++) {
    if (i < addTask.length) {
      array.push(addTask[i]);
    }
  }
  return array;
};


