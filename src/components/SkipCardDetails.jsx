export default function SkipCardDetails({ skip, onClose }) {
  return (
    <div className="fixed bottom-0 md:right-0 md:top-0 md:w-1/3 w-full bg-white p-6 shadow-lg z-50 rounded-t-3xl md:rounded-l-3xl">
      <button onClick={onClose} className="float-right text-gray-400">✖</button>
      <img src={skip.image} className="w-full h-40 object-contain" />
      <h2 className="text-2xl font-bold">{skip.size} Yard Skip</h2>
      <ul className="mt-2 text-sm text-gray-700">
        <li>📐 Dimensions: {skip.dimensions}</li>
        <li>✅ Ideal For: {skip.use}</li>
        <li>⏳ Hire Period: {skip.period} days</li>
        <li>💷 Price: £{skip.price}</li>
      </ul>
      <div className="flex gap-2 mt-4">
        <button className="px-4 py-2 bg-[#0072ff] text-white rounded-xl">Confirm & Continue</button>
        <button className="px-4 py-2 text-[#0072ff] border border-[#0072ff] rounded-xl">Show Next Best Option</button>
      </div>
    </div>
  )
}
