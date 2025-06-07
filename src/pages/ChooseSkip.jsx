import React, { useEffect, useState } from "react";
import { fetchSkips } from "../services/skipService";
import SkipCard from "../components/SkipCard";
import "./ChooseSkip.css";

import HeaderSteps from '../components/HeaderSteps'
import RulerSlider from '../components/RulerSlider'
import SkipComparison from '../components/SkipComparison'
import SkipCardDetails from '../components/SkipCardDetails'
import ChatAssistant from '../components/ChatAssistant'

export default function ChooseSkip() {
  const [selectedSkip, setSelectedSkip] = useState(null)

  return (
    
    <div className="min-h-screen bg-[#f7faff] text-gray-800 font-[Poppins]">
      <HeaderSteps currentStep="Select Skip" />
      <RulerSlider onSelectSkip={setSelectedSkip} />
      <SkipComparison />
      {selectedSkip && (
        <SkipCardDetails skip={selectedSkip} onClose={() => setSelectedSkip(null)} />
      )}
      <ChatAssistant />
    </div>
  )
}
