export default function HeaderSteps({ currentStep }) {
  const steps = ['Postcode', 'Waste Type', 'Select Skip', 'Date', 'Payment']

  return (
    
    <div className="flex justify-center gap-4 p-4">
      {steps.map((step, i) => {
        const active = step === currentStep
        return (
          <div key={i} className={`flex items-center gap-2`}>
            <div className={`w-5 h-5 rounded-full transition-all duration-300 
              ${active ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] scale-125' : 'bg-gray-300'}`}></div>
            <span className={`text-sm ${active ? 'font-bold text-[#0072ff]' : 'text-gray-500'}`}>{step}</span>
          </div>
        )
      })}
    </div>
  )
}
