import { Modal } from "../modal/Modal";
import "./ControlPanel.css";
import { CreateTaskForm } from "../create-task-from/CreateTaskForm";
import { TaskFilter } from "../task-filter/TaskFilter.jsx";

export const ControlPanel = ({
  setOpenModal,
  openModal,
  addTask,
  taskList,
}) => {
  const clickOpenModal = () => setOpenModal(true);

  const closeModal = () => setOpenModal(false);

  const handleAddTask = (task) => {
    addTask(task);
    closeModal();
  };

  return (
    <div className="control-panel-container">
      <div className="task-details-row">
        <div>
          <h3 className="control-panel-title">Tasks</h3>
          <p className="control-panel-subtitle">Your tasks in your space.</p>
        </div>

        {taskList.length > 0 && (
          <button onClick={clickOpenModal} className="btn-primary">
            Create Task
          </button>
        )}
      </div>
      <div>
        <TaskFilter />
      </div>

      <Modal openModal={openModal} closeModal={closeModal}>
        <h3 className="create-task-title">Create Task</h3>
        <CreateTaskForm addTask={handleAddTask} />
      </Modal>
    </div>
  );
};
