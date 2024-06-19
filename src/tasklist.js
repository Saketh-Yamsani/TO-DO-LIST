import React from "react";
import { useTodoContext } from "./todocontext";
function TaskList() {
  const { tasks,} = useTodoContext();
  return (
    <div>
      <h2 className="lead fs-1 text-center text-info">Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
