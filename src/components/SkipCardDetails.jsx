export default function SkipCardDetails({ skip, onClose }) {
  return (
    <div className="fixed bottom-0 md:right-0 md:top-0 md:w-1/3 w-full bg-white p-6 shadow-lg z-50 rounded-t-3xl md:rounded-l-3xl overflow-y-auto">
      <button onClick={onClose} className="float-right text-gray-400 text-xl">✖</button>

      <img src={skip.image} alt="Skip" className="w-full h-40 object-contain my-4" />

      <h2 className="text-2xl font-bold text-blue-700 mb-1">{skip.size} Yard Skip</h2>

      <div className="text-lg font-semibold text-gray-800 mb-4">
        £{skip.price} <span className="text-sm text-gray-500">/ {skip.period} day hire</span>
      </div>

      <ul className="space-y-2 text-sm text-gray-700 mb-6">
        <li>
          <i className="fas fa-ruler-combined text-blue-500 mr-2"></i>
          Dimensions: {skip.dimensions}
        </li>
        <li>
          <i className="fas fa-check-circle text-green-500 mr-2"></i>
          Ideal For: {skip.use}
        </li>
        <li>
          <i className="fas fa-clock text-yellow-500 mr-2"></i>
          Hire Period: {skip.period} days
        </li>
        <li>
          <i className="fas fa-sterling-sign text-purple-500 mr-2"></i>
          Price: £{skip.price}
        </li>
      </ul>

      <p className="text-xs text-gray-500 italic mb-6 leading-relaxed">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification.
        Colours may vary. Options and/or accessories may be featured at additional cost.
      </p>

      <div className="flex gap-3 justify-between">
        <button
          onClick={onClose}
          className="w-40 flex-1 py-2 bg-gray-100 border border-gray-400 text-gray-700 rounded-xl hover:bg-gray-200"
        >
          Back
        </button>
        <button
          className="w-60 px-4 py-2 rounded-lg font-medium transition-colors duration-300 bg-blue-600 text-white hover:bg-blue-700"
        >
          Confirm & Continue
        </button>
      </div>
    </div>
  );
}
