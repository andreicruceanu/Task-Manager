import { Badges } from "../badge/Badges";
import { DateContainer } from "../date-container/DateContainer";
import "./TaskCard.css";

export const TaskCard = ({ id, name, status, dueDate }) => {
  const getColor = () => {
    switch (status) {
      case "Todo":
        return "grey";
      case "In Progress":
        return "blue";
      case "Completed":
        return "green";
      case "Pending":
        return "orange";
      default:
        return "grey";
    }
  };
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{id}</p>
        <Badges label={status} color={getColor()} />
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
