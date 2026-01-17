import { useEffect } from 'react';
import { useStore } from '../store/useStore';

export default function useStats() {
  const {
    streak,
    totalScore,
    todayScore,
    todayCompleted,
    questHistory,
    badges,
    normalizeStats,
  } = useStore();
  
  // Normalize stats on mount and when date changes
  useEffect(() => {
    normalizeStats();
    
    // Check every minute if date changed
    const interval = setInterval(() => {
      normalizeStats();
    }, 60000);
    
    return () => clearInterval(interval);
  }, [normalizeStats]);
  
  const getWeeklyStats = () => {
    const last7Days = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().slice(0, 10);
      
      const dayQuests = questHistory.filter(q => q.date === dateStr);
      
      last7Days.push({
        date: dateStr,
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        count: dayQuests.length,
        points: dayQuests.reduce((sum, q) => sum + q.points, 0),
      });
    }
    
    return last7Days;
  };
  
  const getQuestTypeBreakdown = () => {
    const breakdown = {};
    
    questHistory.forEach(quest => {
      if (!breakdown[quest.type]) {
        breakdown[quest.type] = { count: 0, points: 0 };
      }
      breakdown[quest.type].count++;
      breakdown[quest.type].points += quest.points;
    });
    
    return Object.entries(breakdown).map(([type, data]) => ({
      type,
      ...data,
    }));
  };
  
  return {
    streak,
    totalScore,
    todayScore,
    todayCompleted,
    questHistory,
    badges,
    weeklyStats: getWeeklyStats(),
    questTypeBreakdown: getQuestTypeBreakdown(),
  };
}