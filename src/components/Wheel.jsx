import { useState } from 'react';
import { questEnvironments } from '../data/quests';

export default function Wheel({ onSpin, isSpinning }) {
  const [selectedEnv, setSelectedEnv] = useState(null);
  
  const categories = [
    { id: 'desk', name: 'At Desk', emoji: '🖥️', description: 'Sitting, camera-safe' },
    { id: 'office', name: 'Office', emoji: '🏢', description: 'Subtle movements' },
    { id: 'anywhere', name: 'Anywhere', emoji: '🌍', description: 'Any space' },
    { id: 'privacy', name: 'Privacy', emoji: '🏠', description: 'Home/private' },
    { id: 'space', name: 'Need Space', emoji: '💪', description: 'Floor space' },
  ];
  
  const handleCategoryClick = (envId) => {
    if (isSpinning) return;
    setSelectedEnv(envId);
    setTimeout(() => onSpin(envId), 100);
  };
  
  const handleCenterClick = () => {
    if (isSpinning) return;
    setSelectedEnv('random');
    setTimeout(() => onSpin('random'), 100);
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-8">Choose Your Quest Type</h2>
      
      {/* Wheel Container */}
      <div className="relative">
        {/* Category Buttons in Circle */}
        <div className="relative w-96 h-96 mx-auto">
          {/* Center Button (Surprise Me) */}
          <button
            onClick={handleCenterClick}
            disabled={isSpinning}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-accent to-accent2 hover:scale-110 transition-all duration-300 shadow-2xl flex flex-col items-center justify-center text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed z-10 ${selectedEnv === 'random' ? 'ring-4 ring-warn' : ''}`}
          >
            <span className="text-6xl mb-2">🎲</span>
            <span className="text-lg font-bold">SPIN</span>
            <span className="text-sm">Surprise Me!</span>
          </button>
          
          {/* Category Buttons - Positioned in Circle */}
          {/* Top */}
          <button
            onClick={() => handleCategoryClick('desk')}
            disabled={isSpinning}
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-blue-500 hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-xl flex flex-col items-center justify-center text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${selectedEnv === 'desk' ? 'ring-4 ring-warn scale-110' : ''}`}
          >
            <span className="text-3xl">{categories[0].emoji}</span>
            <span className="text-xs mt-1">{categories[0].name}</span>
          </button>
          
          {/* Top Right */}
          <button
            onClick={() => handleCategoryClick('office')}
            disabled={isSpinning}
            className={`absolute top-12 right-8 w-24 h-24 rounded-full bg-teal-500 hover:bg-teal-600 hover:scale-110 transition-all duration-300 shadow-xl flex flex-col items-center justify-center text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${selectedEnv === 'office' ? 'ring-4 ring-warn scale-110' : ''}`}
          >
            <span className="text-3xl">{categories[1].emoji}</span>
            <span className="text-xs mt-1">{categories[1].name}</span>
          </button>
          
          {/* Bottom Right */}
          <button
            onClick={() => handleCategoryClick('anywhere')}
            disabled={isSpinning}
            className={`absolute bottom-12 right-8 w-24 h-24 rounded-full bg-yellow-500 hover:bg-yellow-600 hover:scale-110 transition-all duration-300 shadow-xl flex flex-col items-center justify-center text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${selectedEnv === 'anywhere' ? 'ring-4 ring-warn scale-110' : ''}`}
          >
            <span className="text-3xl">{categories[2].emoji}</span>
            <span className="text-xs mt-1">{categories[2].name}</span>
          </button>
          
          {/* Bottom */}
          <button
            onClick={() => handleCategoryClick('privacy')}
            disabled={isSpinning}
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-red-500 hover:bg-red-600 hover:scale-110 transition-all duration-300 shadow-xl flex flex-col items-center justify-center text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${selectedEnv === 'privacy' ? 'ring-4 ring-warn scale-110' : ''}`}
          >
            <span className="text-3xl">{categories[3].emoji}</span>
            <span className="text-xs mt-1">{categories[3].name}</span>
          </button>
          
          {/* Bottom Left */}
          <button
            onClick={() => handleCategoryClick('space')}
            disabled={isSpinning}
            className={`absolute bottom-12 left-8 w-24 h-24 rounded-full bg-purple-500 hover:bg-purple-600 hover:scale-110 transition-all duration-300 shadow-xl flex flex-col items-center justify-center text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${selectedEnv === 'space' ? 'ring-4 ring-warn scale-110' : ''}`}
          >
            <span className="text-3xl">{categories[4].emoji}</span>
            <span className="text-xs mt-1">{categories[4].name}</span>
          </button>
          
          {/* Top Left */}
          <button
            onClick={() => handleCategoryClick('office')}
            disabled={isSpinning}
            className={`absolute top-12 left-8 w-24 h-24 rounded-full bg-teal-500 hover:bg-teal-600 hover:scale-110 transition-all duration-300 shadow-xl flex flex-col items-center justify-center text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${selectedEnv === 'office' ? 'ring-4 ring-warn scale-110' : ''}`}
          >
            <span className="text-3xl">{categories[1].emoji}</span>
            <span className="text-xs mt-1">{categories[1].name}</span>
          </button>
          
          {/* Decorative Circle Background */}
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-700 opacity-30"></div>
        </div>
      </div>
      
      {/* Description */}
      <div className="text-center mt-8">
        {selectedEnv && !isSpinning && (
          <div className="inline-block px-6 py-3 bg-panel2 rounded-full border border-gray-700">
            <p className="text-accent font-semibold">
              {selectedEnv === 'random' 
                ? '🎲 Any random quest - surprise!' 
                :` ${categories.find(c => c.id === selectedEnv)?.emoji} ${categories.find(c => c.id === selectedEnv)?.description}`
              }
            </p>
          </div>
        )}
        {!selectedEnv && (
          <p className="text-muted">
            Pick a category or click the center for a random quest
          </p>
        )}
      </div>
    </div>
  );
}