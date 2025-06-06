import React from "react";
import "./SkipCard.css";

const SkipCard = ({ skip }) => {
  return (
    <div className="skip-card">
      <img
        src={skip.imageUrl || "/placeholder.jpg"}
        alt={`${skip.size} Yard Skip`}
        className="skip-image"
      />
      <h3>{skip.size} Yard Skip</h3>
      <p>{skip.hirePeriod || "14 day hire period"}</p>
      <p className="price">£{skip.price}</p>
      <button className="select-button">Select This Skip</button>
    </div>
  );
};

export default SkipCard;
