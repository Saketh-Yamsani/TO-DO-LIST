import React from "react";
import ManageTasks from "./managetasks";
import { TodoProvider } from "./todocontext";
function App() {
  return (
    <TodoProvider>
      <div className="App">
        <ManageTasks />
      </div>
    </TodoProvider>
  );
}
export default App;
