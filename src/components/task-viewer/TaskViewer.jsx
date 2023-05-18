import { TaskCard } from "../task-card/TaskCard";
import "./TaskViewer.css";

export const TaskViewer = ({ taskList, clickOpenModal }) => {
  return (
    <div className="task-viewer-contaier">
      <div className="control-panel-container">
        <div>
          <h3 className="control-panel-title">Tasks</h3>
          <p className="control-panel-subtitle">Your tasks in your space.</p>
        </div>
        <button onClick={clickOpenModal} className="btn-primaty">
          Create Task
        </button>
      </div>
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
