import React from "react";
import { useTodoContext } from "./todocontext";
function AddTask() {
  const { addTask } = useTodoContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    addTask(task);
    e.target.reset();
  };
  return (
    <div>
      <h2 className="lead fs-1 text-center text-info">Add Task</h2>
      <form onSubmit={handleSubmit} className="text-center">
        <input type="text" name="task" placeholder="Enter a task..." />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddTask;
