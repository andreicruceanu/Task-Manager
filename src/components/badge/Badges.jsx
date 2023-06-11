import "./Badge.css";

export const Badges = ({ label, color }) => {
  const BADGE_COLORS = ["grey", "blue", "orange", "black", "green"];

  const badgeColor = BADGE_COLORS.includes(color) ? color : "grey";
  return (
    <div className={`badge ${badgeColor}`}>
      <p>{label}</p>
    </div>
  );
};
