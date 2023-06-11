import { FilterItem } from "./FilterItem";
import { useContext } from "react";
import { TodoContext } from "../../App";
import { StatusContext } from "../task-viewer/TaskViewer";
import "./TaskFilter.css";

const taskFilterItems = [
  "All Tasks",
  "Todo",
  "In Progress",
  "Pending",
  "Completed",
];

export const TaskFilter = () => {
  const todoItems = useContext(TodoContext);
  const { selectedStatus, setSelectedStatus } = useContext(StatusContext);

  const getCountByStatus = (status) => {
    return todoItems.filter((item) => {
      if (status === "All Tasks") {
        return true;
      }
      return item.status === status;
    }).length;
  };

  console.log(selectedStatus);
  return (
    <div className="filter-container">
      {taskFilterItems.map((item, index) => (
        <FilterItem
          active={selectedStatus === item}
          name={item}
          key={index}
          value={getCountByStatus(item)}
          onStatusClick={() => {
            setSelectedStatus(item);
          }}
        />
      ))}
    </div>
  );
};
