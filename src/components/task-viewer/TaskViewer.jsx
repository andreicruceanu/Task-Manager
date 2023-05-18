import { ControlPanel } from "../control-panel/ControlPanel";
import { TaskCard } from "../task-card/TaskCard";
import "./TaskViewer.css";

export const TaskViewer = ({ taskList, addTask }) => {
  return (
    <div className="task-viewer-contaier">
      <ControlPanel addTask={addTask} />
      <div className="task-list-container">
        {taskList.length > 0
          ? taskList.map((card) => (
              <TaskCard
                key={card.id}
                id={card.id}
                status={card.status}
                name={card.name}
                dueDate={card.dueDate}
              />
            ))
          : ""}
      </div>
    </div>
  );
};
