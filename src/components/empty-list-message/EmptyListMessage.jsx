import "./EmtyListMessage.css";
import taskIcon from "../../assets/icons/tasks-icon.png";

export const EmptyListMessage = ({ createTaskClick }) => {
  return (
    <div className="empty-list-container">
      <div className="empty-list-message">
        <img src={taskIcon} alt="task-icon" className="empty-list-icon" />
        <h3 className="view-title">No Tasks Yet</h3>
        <p className="subtitle">Get productive. Create a Task Now.</p>
        <button
          className="btn-primary btn-xl"
          onClick={() => createTaskClick(true)}
        >
          Create Task
        </button>
      </div>
    </div>
  );
};
