import { TaskCard } from "../task-card/TaskCard";
import "./TaskViewer.css";

export const TaskViewer = ({ taskList }) => {
  return (
    <div className="task-viewer-contaier">
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
