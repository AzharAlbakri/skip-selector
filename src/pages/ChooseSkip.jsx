import React, { useEffect, useState } from "react";
import { fetchSkips } from "../services/skipService";
import SkipCard from "../components/SkipCard";
import "./ChooseSkip.css";

import HeaderSteps from "../components/HeaderSteps";
import RulerSlider from "../components/RulerSlider";
import SkipComparison from "../components/SkipComparison";
import SkipCardDetails from "../components/SkipCardDetails";
import ChatAssistant from "../components/ChatAssistant";

export default function ChooseSkip() {
  const [selectedSkip, setSelectedSkip] = useState(null);

  return (
    <div className="min-h-screen bg-[#f7faff] text-gray-800 font-[Poppins]">
      <HeaderSteps currentStep="Select Skip" />

      {/* العنوان والوصف */}
      <div className="text-center py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Select the skip size that best suits your needs
        </p>
      </div>

      <RulerSlider onSelectSkip={setSelectedSkip} />
      <SkipComparison />

      {selectedSkip && (
        <SkipCardDetails skip={selectedSkip} onClose={() => setSelectedSkip(null)} />
      )}

      <ChatAssistant />
    </div>
  );
}
