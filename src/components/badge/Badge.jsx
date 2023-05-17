import "./Badge.css";

export const Badges = ({ label }) => {
  const BADGE_COLORS = ["grey", "black", "blue", "orange", "black", "green"];
  const getColor = () => {
    switch (label) {
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
  const badgeColor = BADGE_COLORS.includes(getColor(label))
    ? getColor(label)
    : "grey";
  return (
    <div className={`badge ${badgeColor}`}>
      <p>{label}</p>
    </div>
  );
};
