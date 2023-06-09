import "./App.css";
import "the-new-css-reset/css/reset.css";
import { TaskViewer } from "./components/task-viewer/TaskViewer";
import { useState, createContext } from "react";

const data = [
  {
    id: "T-1",
    name: "Create a Design System for Enum Workspace.",
    status: "Todo",
    dueDate: new Date(2022, 5, 23),
  },
  {
    id: "T-2",
    name: "12 Create a Design System for Enum Workspace.",
    status: "In Progress",
    dueDate: new Date(2022, 7, 24),
  },
  {
    id: "T-3",
    name: "13 Create a Design System for Enum Workspace.",
    status: "Completed",
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: "T-4",
    name: "14 Create a Design System for Enum Workspace.",
    status: "Todo",
    dueDate: new Date(2022, 5, 23),
  },
  {
    id: "T-5",
    name: "15 Create a Design System for Enum Workspace.",
    status: "Completed",
    dueDate: new Date(2022, 6, 13),
  },
  {
    id: "T-6",
    name: "Create a Design System for Enum Workspace.",
    status: "Pending",
    dueDate: new Date(2022, 5, 23),
  },
  {
    id: "T-7",
    name: "16 Create a Design System for Enum Workspace.",
    status: "Todo",
    dueDate: new Date(2022, 5, 23),
  },
];

export const TodoContext = createContext();

function App() {
  const [taskList, setTaskList] = useState(data);

  const addTask = (newTask) => {
    setTaskList((prevState) => [
      ...prevState,
      {
        ...newTask,
        id: `T- ${prevState.length + 1}`,
        dueDate: new Date(newTask.dueDate),
        status: "Todo",
      },
    ]);
  };
  return (
    <div className="app-container">
      <div className="app-content">
        <TodoContext.Provider value={taskList}>
          <TaskViewer taskList={taskList} addTask={addTask} />
        </TodoContext.Provider>
      </div>
    </div>
  );
}

export default App;
