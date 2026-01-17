import { useStore } from '../store/useStore';

export default function StatsBar() {
  const { streak, totalScore, todayScore, todayCompleted } = useStore();
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="stat-card">
        <div className="text-sm text-muted mb-1">Streak</div>
        <div className="text-2xl font-bold flex items-center gap-2">
          <span>🔥</span>
          <span>{streak}</span>
          <span className="text-sm text-muted">days</span>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="text-sm text-muted mb-1">Total Score</div>
        <div className="text-2xl font-bold flex items-center gap-2">
          <span>⭐</span>
          <span>{totalScore}</span>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="text-sm text-muted mb-1">Today</div>
        <div className="text-2xl font-bold flex items-center gap-2">
          <span>💎</span>
          <span>{todayScore}</span>
          <span className="text-sm text-muted">pts</span>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="text-sm text-muted mb-1">Completed Today</div>
        <div className="text-2xl font-bold flex items-center gap-2">
          <span>✓</span>
          <span>{todayCompleted}</span>
        </div>
      </div>
    </div>
  );
}