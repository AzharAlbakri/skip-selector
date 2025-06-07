import React from "react";
import { FaTruck, FaTrashAlt } from "react-icons/fa";
import "./SkipCard.css";

const SkipCard = ({ skip }) => {
  const finalPrice = skip.price_before_vat + (skip.price_before_vat * skip.vat / 100);
  const isForbidden = skip.forbidden;
  const roadAllowed = skip.allowed_on_road;
  const heavyWasteAllowed = skip.allows_heavy_waste;

  return (
    <div className={`skip-card ${isForbidden || !roadAllowed ? "disabled" : ""}`}>
      <div className="image-container">
        <img
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
          alt={`${skip.size} Yard Skip`}
          className="skip-image"
        />

        <div className="skip-size-badge">
          {skip.size} {skip.size > 1 ? "Yards" : "Yard"}
        </div>

        {/* Badges only for negative cases */}
        <div className="status-badges">
          {!heavyWasteAllowed && (
            <div className="badge-text red">
              <FaTrashAlt />
              <span>Not Suitable for Heavy Waste</span>
            </div>
          )}
          {!roadAllowed && (
            <div className="badge-text orange">
              <FaTruck />
              <span>Not Allowed On The Road</span>
            </div>
          )}
        </div>
      </div>

      <h3>{skip.size} Yard Skip</h3>
      <p>
        {skip.hire_period_days} {skip.hire_period_days === 1 ? "day" : "days"} hire period
      </p>
      <p className="price">£{finalPrice.toFixed(2)}</p>

      <button
        className="select-button"
        disabled={isForbidden || !roadAllowed}
        title={isForbidden || !roadAllowed ? "This skip is not allowed or forbidden" : "Select this skip"}
      >
        {isForbidden || !roadAllowed ? "Not Available" : "Select This Skip"}
      </button>
    </div>
  );
};

export default SkipCard;
