import { useState, useEffect } from 'react';

export default function QuestCard({ quest, onComplete, onSkip }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  
  useEffect(() => {
    if (!isTimerRunning || timeLeft === null) return;
    
    if (timeLeft <= 0) {
      setIsTimerRunning(false);
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, isTimerRunning]);
  
  const startTimer = () => {
    setTimeLeft(quest.time);
    setIsTimerRunning(true);
  };
  
  const pauseTimer = () => {
    setIsTimerRunning(false);
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `mins > 0 ? ${mins}:${secs.toString().padStart(2, '0')} : ${secs}s`;
  };
  
  const getProgressPercent = () => {
    if (timeLeft === null) return 0;
    return ((quest.time - timeLeft) / quest.time) * 100;
  };
  
  return (
    <div className="card max-w-lg mx-auto">
      {/* Quest Header */}
      <div className="text-center mb-6">
        <div className="inline-block px-4 py-1 bg-panel2 rounded-full text-sm text-muted mb-3">
          {quest.type} • {quest.time}s
        </div>
        <div className="text-6xl mb-4">{quest.emoji}</div>
        <h2 className="text-2xl font-bold mb-2">{quest.title}</h2>
        {quest.description && (
          <p className="text-muted">{quest.description}</p>
        )}
      </div>
      
      {/* Points Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-warn/20 rounded-full border border-warn">
          <span className="text-xl">⭐</span>
          <span className="font-bold text-warn">+{quest.points} points</span>
        </div>
      </div>
      
      {/* Timer Section */}
      {timeLeft !== null && (
        <div className="mb-6">
          <div className="relative w-40 h-40 mx-auto mb-4">
            {/* Progress Circle */}
            <svg className="transform -rotate-90 w-full h-full">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-panel2"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - getProgressPercent() / 100)}`}
                className="text-accent transition-all duration-1000"
                strokeLinecap="round"
              />
            </svg>
            {/* Timer Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold">{formatTime(timeLeft)}</div>
                <div className="text-xs text-muted mt-1">
                  {timeLeft === 0 ? "Time's up!" : 'remaining'}
                </div>
              </div>
            </div>
          </div>
          
          {/* Timer Controls */}
          <div className="flex gap-3 justify-center">
            {isTimerRunning ? (
              <button onClick={pauseTimer} className="btn btn-secondary">
                ⏸️ Pause
              </button>
            ) : timeLeft > 0 ? (
              <button onClick={() => setIsTimerRunning(true)} className="btn btn-secondary">
                ▶️ Resume
              </button>
            ) : null}
            {timeLeft === 0 && (
              <button onClick={onComplete} className="btn btn-primary">
                ✓ Mark Complete
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Action Buttons */}
      {timeLeft === null && (
        <div className="flex flex-col gap-3">
          <button onClick={startTimer} className="btn btn-secondary w-full">
            ⏱️ Start Timer
          </button>
          <button onClick={onComplete} className="btn btn-primary w-full">
            ✓ I Did It!
          </button>
          <button onClick={onSkip} className="btn btn-secondary w-full text-muted">
            ↻ Spin Again
          </button>
        </div>
      )}
    </div>
  );
}