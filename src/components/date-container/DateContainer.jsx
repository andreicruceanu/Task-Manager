import "./DateContainer.css";

export const DateContainer = ({ date }) => {
  return (
    <div className="due-date">
      <p>Due Date</p>
      <p>{date.toLocaleDateString()}</p>
    </div>
  );
};
