import React, { createContext, useContext, useState } from "react";
const TodoContext = createContext();
export const useTodoContext = () => {
  return useContext(TodoContext);
};
export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <TodoContext.Provider value={{ tasks, addTask,}}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;
