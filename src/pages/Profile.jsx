import { useStore } from '../store/useStore';
import useStats from '../hooks/useStats';
import ShareButton from '../components/ShareButton';

export default function Profile() {
  const { username } = useStore();
  const { streak, totalScore, todayScore, badges, weeklyStats, questTypeBreakdown } = useStats();
  
  const badgeData = [
    { id: 'first-quest', name: 'First Quest', emoji: '🎯', description: 'Completed your first quest' },
    { id: 'week-warrior', name: '7-Day Warrior', emoji: '🔥', description: '7-day streak achieved' },
    { id: 'century-club', name: 'Century Club', emoji: '💯', description: '100 total quests' },
    { id: 'point-master', name: 'Point Master', emoji: '⭐', description: '500+ points earned' },
  ];
  
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Profile Header */}
        <div className="card text-center mb-8">
          <div className="text-6xl mb-4">👤</div>
          <h1 className="text-3xl font-bold mb-2">@{username}</h1>
          <p className="text-muted mb-6">Member since {new Date().toLocaleDateString()}</p>
          
          {/* Main Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
            <div>
              <div className="text-3xl font-bold text-accent">{streak}</div>
              <div className="text-sm text-muted">Day Streak</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">{totalScore}</div>
              <div className="text-sm text-muted">Total Points</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">{todayScore}</div>
              <div className="text-sm text-muted">Today</div>
            </div>
          </div>
          
          {/* Share Profile */}
          <ShareButton
            className="justify-center"
            shareData={{
              text: `Check out my SpinBreak profile! ${streak}-day streak, ${totalScore} points earned.,`
            }}
          />
        </div>
        
        {/* Weekly Activity */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-6">This Week</h2>
          <div className="flex justify-between items-end h-40">
            {weeklyStats.map((day, index) => {
              const maxCount = Math.max(...weeklyStats.map(d => d.count), 1);
              const height = (day.count / maxCount) * 100;
              
              return (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className="w-full max-w-[40px] bg-accent rounded-t transition-all hover:bg-accent2"
                    style={{ height: `${height}%`, minHeight: day.count > 0 ? '10%' : '0%' }}
                  ></div>
                  <div className="text-xs text-muted mt-2">{day.day}</div>
                  <div className="text-xs font-semibold">{day.count}</div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Badges */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-6">Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badgeData.map((badge) => (
              <div
                key={badge.id}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  badges.includes(badge.id)
                    ? 'bg-accent/20 border-accent'
                    : 'bg-panel2 border-gray-700 opacity-50'
                }`}
              >
                <div className="text-4xl mb-2">{badge.emoji}</div>
                <div className="font-semibold text-sm mb-1">{badge.name}</div>
                <div className="text-xs text-muted">{badge.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quest Type Breakdown */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Quest Breakdown</h2>
          {questTypeBreakdown.length > 0 ? (
            <div className="space-y-3">
              {questTypeBreakdown.map((item) => (
                <div key={item.type} className="flex items-center justify-between p-3 bg-panel2 rounded-lg">
                  <div className="font-semibold">{item.type}</div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted">{item.count} quests</span>
                    <span className="text-accent font-semibold">{item.points} pts</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted py-8">
              <div className="text-5xl mb-4">🎯</div>
              <p>Complete your first quest to see your breakdown!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}