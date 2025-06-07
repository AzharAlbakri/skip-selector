export default function SkipComparison() {
  const suggestions = [
    { size: 4, price: 180, label: "Best for garden waste" },
    { size: 6, price: 240, label: "Fits on driveway" },
    { size: 8, price: 310, label: "Popular for renovations" }
  ]

  return (
    <div className="px-4 mt-6">
      <h3 className="text-lg font-semibold mb-3">
        <i className="fas fa-lightbulb text-yellow-400 mr-2"></i>
        Users near you often choose 4 Yard Skip
      </h3>
      <div className="flex flex-wrap gap-4">
        {suggestions.map((s, i) => (
          <div key={i} className="w-[220px] bg-white shadow-md p-4 rounded-2xl">
            <h4 className="text-xl font-bold">
              <i className="fas fa-box text-blue-500 mr-2"></i>
              {s.size} yd
            </h4>
            <p className="text-sm text-gray-600 mb-1">{s.label}</p>
            <p className="text-lg font-medium">
              <i className="fas fa-pound-sign text-green-600 mr-1"></i>
              £{s.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
