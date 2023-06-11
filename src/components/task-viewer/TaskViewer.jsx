import { createContext, useState } from "react";
import { ControlPanel } from "../control-panel/ControlPanel";
import { EmptyListMessage } from "../empty-list-message/EmptyListMessage";
import { TaskCard } from "../task-card/TaskCard";
import "./TaskViewer.css";

export const StatusContext = createContext();

export const TaskViewer = ({ taskList, addTask }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All Tasks");

  const displayedItems = taskList.filter((item) => {
    if (selectedStatus === "All Tasks") {
      return true;
    }
    return item.status === selectedStatus;
  });

  return (
    <div className="task-viewer-contaier">
      <StatusContext.Provider value={{ selectedStatus, setSelectedStatus }}>
        <ControlPanel
          addTask={addTask}
          openModal={openModal}
          setOpenModal={setOpenModal}
          taskList={taskList}
        />
      </StatusContext.Provider>

      <div className="task-list-container">
        {taskList.length > 0 ? (
          displayedItems.map((card) => (
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
