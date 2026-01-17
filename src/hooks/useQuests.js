import { useState } from 'react';
import { quests, getQuestsByEnvironment } from '../data/quests';

export default function useQuests() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentQuest, setCurrentQuest] = useState(null);
  
  const spinQuest = (environment = 'random') => {
    setIsSpinning(true);
    
    // Simulate wheel spin animation
    setTimeout(() => {
      const availableQuests = getQuestsByEnvironment(environment);
      const randomQuest = availableQuests[Math.floor(Math.random() * availableQuests.length)];
      setCurrentQuest(randomQuest);
      setIsSpinning(false);
    }, 3000); // 3 second spin animation
  };
  
  const clearQuest = () => {
    setCurrentQuest(null);
  };
  
  return {
    currentQuest,
    isSpinning,
    spinQuest,
    clearQuest,
  };
}