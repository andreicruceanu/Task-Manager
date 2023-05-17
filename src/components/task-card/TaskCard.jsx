import { Badges } from "../badge/Badge";
import { DateContainer } from "../date-container/DateContainer";
import "./TaskCard.css";

export const TaskCard = ({ id, name, status, dueDate }) => {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{id}</p>
        <Badges label={status} />
      </div>
      <div className="card-content">
        <h4>{name}</h4>
      </div>
      <div className="card-footer">
        <DateContainer date={dueDate} />
      </div>
    </div>
  );
};
