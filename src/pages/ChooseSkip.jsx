import React, { useEffect, useState } from "react";
import { fetchSkips } from "../services/skipService";
import SkipCard from "../components/SkipCard";
import "./ChooseSkip.css";

const ChooseSkip = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkips().then((data) => {
      setSkips(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="loading">Loading skips...</div>;

  return (
    <div className="choose-skip-page">
      <h1>Choose Your Skip Size</h1>
      <div className="skip-list">
        {skips.map((skip) => (
          <SkipCard key={skip.size} skip={skip} />
        ))}
      </div>
    </div>
  );
};

export default ChooseSkip;
