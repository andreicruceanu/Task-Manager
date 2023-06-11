import { Badges } from "../badge/Badges";
import "./TaskFilter.css";

export const FilterItem = ({ name, value, active, onStatusClick }) => {
  return (
    <div
      className={`filter-item-container ${active ? "active" : ""}`}
      onClick={onStatusClick}
    >
      <p className={`filter-name ${active && "active"}`}>{name}</p>
      <Badges label={value} color={active ? "blue" : "black"} />
    </div>
  );
};
