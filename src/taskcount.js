import React from "react";
import { useTodoContext } from "./todocontext";
function TaskCount() {
  const { tasks } = useTodoContext();
  return (
    <div>
      <h2 className="lead fs-1 text-center text-info">Task Count</h2>
      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}
export default TaskCount;
