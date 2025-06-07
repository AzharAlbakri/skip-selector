import { useState, useEffect } from 'react';
import { fetchSkips } from '../services/skipService';
import SkipCardDetails from './SkipCardDetails';
import './SkipCard.css';

export default function RulerSlider({ onSelectSkip }) {
    const [skips, setSkips] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [selectedSkip, setSelectedSkip] = useState(null);

    useEffect(() => {
        const loadSkips = async () => {
            try {
                const data = await fetchSkips();
                if (Array.isArray(data) && data.length > 0) {
                    setSkips(data);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Failed to fetch skips:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        loadSkips();
    }, []);

    useEffect(() => {
        setImageLoaded(false);
    }, [activeIndex]);

    if (loading) return <div className="text-center p-4 text-gray-600">⏳ Loading skips...</div>;
    if (error || skips.length === 0) return <div className="text-center p-4 text-red-500">❌ No skips available right now.</div>;

    const activeSkip = skips[activeIndex];
    const imageUrl = `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${activeSkip.size}-yarder-skip.jpg`;
    const fallbackImage = "https://via.placeholder.com/256x160?text=No+Image";

    const handleSelect = (skip) => {
        setSelectedSkip({
            ...skip,
            image: imageUrl,
            price: skip.price_before_vat,
            period: skip.hire_period_days,
            use: skip.ideal_for || "General Waste",
            dimensions: skip.dimensions || "Unknown"
        });
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-6 p-6">
                <div className="w-full max-w-xl flex flex-col items-center">
                    <div className="flex items-center gap-4 w-full">
                        <button
                            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                            className="text-2xl px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full"
                        >
                            ◀
                        </button>

                        <input
                            type="range"
                            min="0"
                            max={skips.length - 1}
                            step="1"
                            value={activeIndex}
                            onChange={e => setActiveIndex(parseInt(e.target.value))}
                            className="w-full appearance-none bg-transparent slider"
                        />

                        <button
                            onClick={() => setActiveIndex(Math.min(skips.length - 1, activeIndex + 1))}
                            className="text-2xl px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full"
                        >
                            ▶
                        </button>
                    </div>

                    <div className="relative h-6 mt-2" style={{ width: '76%' }}>
                        <div className="absolute top-0 left-0 w-full flex justify-between">
                            {skips.map((s, i) => (
                                <span key={i} className="text-xs text-gray-500 text-center w-6 -ml-3">
                                    {s.size}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    style={{ minHeight: '370px' }}
                    className={`flex gap-6 w-full max-w-4xl border rounded-xl p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01] min-h-[370px] ${!activeSkip.allowed_on_road || !activeSkip.allows_heavy_waste ? 'opacity-50 pointer-events-none' : ''}`}
                >
                    <div 
                        style={{ minWidth: '370px', width: '500px' }}
                        className="relative w-96 h-[26rem] overflow-hidden rounded-xl shadow-md flex-shrink-0">
                        <span className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded-full z-30">
                            {activeSkip.size} {activeSkip.size === 1 ? 'Yard' : 'Yards'}
                        </span>

                        {!imageLoaded && (
                            <div className="absolute inset-0 animate-pulse bg-gray-300 z-10 rounded-xl"></div>
                        )}

                        <img
                            key={activeSkip.id}
                            src={imageUrl}
                            onError={(e) => (e.currentTarget.src = fallbackImage)}
                            onLoad={() => setImageLoaded(true)}
                            alt={`${activeSkip.size} yarder skip`}
                            className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-700 ease-in-out
                            ${imageLoaded ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-0'}`}
                        />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">{activeSkip.size} Yard Skip</h2>
                            <p className="mb-1">{activeSkip.hire_period_days} day hire period</p>
                            <p className="mb-4 font-semibold">£{activeSkip.price_before_vat}</p>

                            <div className="space-y-1 mb-4">
                                {!activeSkip.allowed_on_road && (
                                    <span className="text-red-600 text-sm flex items-center gap-1">
                                        <i className="fas fa-ban"></i> Not allowed on public roads
                                    </span>
                                )}
                                {!activeSkip.allows_heavy_waste && (
                                    <span className="text-orange-500 text-sm flex items-center gap-1">
                                        <i className="fas fa-dumpster"></i> Heavy waste not allowed
                                    </span>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => handleSelect(activeSkip)}
                                disabled={!activeSkip.allowed_on_road || !activeSkip.allows_heavy_waste}
                                className={`w-full px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${!activeSkip.allowed_on_road || !activeSkip.allows_heavy_waste
                                        ? 'bg-gray-400 text-white cursor-not-allowed'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                            >
                                {!activeSkip.allowed_on_road || !activeSkip.allows_heavy_waste
                                    ? 'Not Available'
                                    : 'Select This Skip'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {selectedSkip && <SkipCardDetails skip={selectedSkip} onClose={() => setSelectedSkip(null)} />}
        </>
    );
}
