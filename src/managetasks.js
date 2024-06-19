import React from "react";
import AddTask from "./addtask";
import TaskList from "./tasklist";
import TaskCount from "./taskcount";
import 'bootstrap/dist/css/bootstrap.css';
function ManageTasks() {
  return (
    <div>
      <h1 className="text-center">To-Do List</h1>
      <div className="row">
        <div className="col-sm-4 border p-4 text-center">
          <AddTask />
        </div>
        <div className="col-sm-4 border p-4 text-center">
          <TaskList />
        </div>
        <div className="col-sm-4 border p-4 text-center">
          <TaskCount />
        </div>
      </div>
    </div>
  );
}
export default ManageTasks;
