import { useState } from 'react';
import { useStore } from '../store/useStore';
import Wheel from '../components/Wheel';
import QuestCard from '../components/QuestCard';
import StatsBar from '../components/StatsBar';
import Confetti from '../components/Confetti';
import ShareButton from '../components/ShareButton';
import useQuests from '../hooks/useQuests';

export default function Spin() {
  const { completeQuest } = useStore();
  const { currentQuest, isSpinning, spinQuest, clearQuest } = useQuests();
  const [showConfetti, setShowConfetti] = useState(false);
  
  const handleComplete = () => {
    if (!currentQuest) return;
    
    completeQuest(currentQuest);
    setShowConfetti(true);
  };
  
  const handleSkip = () => {
    clearQuest();
  };
  
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Stats Bar */}
        <div className="mb-8">
          <StatsBar />
        </div>
        
        {/* Main Content */}
        {!currentQuest ? (
          <div className="mb-8">
            <Wheel onSpin={spinQuest} isSpinning={isSpinning} />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Quest Card */}
            <QuestCard
              quest={currentQuest}
              onComplete={handleComplete}
              onSkip={handleSkip}
            />
            
            {/* Share Section */}
            <div className="card text-center max-w-lg mx-auto">
              <h3 className="text-lg font-semibold mb-4">Share Your Progress</h3>
              <ShareButton
                className="justify-center"
                shareData={{
                  text: `I'm on a ${useStore.getState().streak}-day streak on SpinBreak! Join me for quick wellness breaks.,`
                }}
              />
            </div>
          </div>
        )}
        
        {/* Confetti */}
        <Confetti 
          active={showConfetti} 
          onComplete={() => {
            setShowConfetti(false);
            clearQuest();
          }}
        />
      </div>
    </div>
  );
}