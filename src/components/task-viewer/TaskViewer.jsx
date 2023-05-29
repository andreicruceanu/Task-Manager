import { useState } from "react";
import { ControlPanel } from "../control-panel/ControlPanel";
import { EmptyListMessage } from "../empty-list-message/EmptyListMessage";
import { TaskCard } from "../task-card/TaskCard";
import "./TaskViewer.css";

export const TaskViewer = ({ taskList, addTask }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="task-viewer-contaier">
      <ControlPanel
        addTask={addTask}
        openModal={openModal}
        setOpenModal={setOpenModal}
        taskList={taskList}
      />
      <div className="task-list-container">
        {taskList.length > 0 ? (
          taskList.map((card) => (
            <TaskCard
              key={card.id}
              id={card.id}
              status={card.status}
              name={card.name}
              dueDate={card.dueDate}
            />
          ))
        ) : (
          <EmptyListMessage createTaskClick={setOpenModal} />
        )}
      </div>
    </div>
  );
};
