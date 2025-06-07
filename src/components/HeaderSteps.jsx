export default function HeaderSteps({ currentStep }) {
  const steps = [
    { name: 'Postcode', icon: 'fa-map-marker-alt' },
    { name: 'Waste Type', icon: 'fa-dumpster' },
    { name: 'Select Skip', icon: 'fa-truck-loading' },
    { name: 'Permit Check', icon: 'fa-id-card' },
    { name: 'Choose Date', icon: 'fa-calendar-alt' },
    { name: 'Payment', icon: 'fa-credit-card' },
  ];

  const currentIndex = steps.findIndex((step) => step.name === currentStep);

  return (
    <div className="w-full flex justify-center px-4">
      <div className="flex justify-center items-center w-full max-w-6xl py-8 relative">
        {steps.map((step, i) => {
          const isActive = i <= currentIndex;
          const isCurrent = i === currentIndex;

          return (
            <div key={i} className="flex items-center relative">
              {/* النقطة (الدائرة) */}
              <div
                className={`flex flex-col items-center text-center w-32 transition-all duration-300 ${
                  isActive ? 'text-blue-600' : 'text-gray-400 pointer-events-none'
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-xl border-2 transition-all ${
                    isCurrent
                      ? 'bg-blue-100 border-blue-500 text-blue-700 scale-110'
                      : isActive
                      ? 'bg-blue-50 border-blue-300'
                      : 'bg-gray-100 border-gray-300'
                  }`}
                >
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <span className={`mt-2 text-sm ${isCurrent ? 'font-bold' : ''}`}>
                  {step.name}
                </span>
              </div>

              {/* الخط القصير بين الدوائر */}
              {i < steps.length - 1 && (
                <div
                  className={`h-0.5 w-16 mx-2 transition-all duration-300 ${
                    i < currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
