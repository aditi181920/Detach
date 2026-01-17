export default function Leaderboard({ users = [], currentUser = null }) {
  // Mock leaderboard data for now (will be replaced with Supabase data later)
  const mockUsers = [
    { username: 'QuestMaster', streak: 28, totalScore: 2840, todayScore: 45 },
    { username: 'BreakChamp', streak: 21, totalScore: 1890, todayScore: 30 },
    { username: currentUser || 'You', streak: 12, totalScore: 840, todayScore: 25 },
    { username: 'SpinKing', streak: 15, totalScore: 720, todayScore: 20 },
    { username: 'WellnessWarrior', streak: 9, totalScore: 560, todayScore: 15 },
  ];
  
  const leaderboardData = users.length > 0 ? users : mockUsers;
  const sortedUsers = [...leaderboardData].sort((a, b) => b.totalScore - a.totalScore);
  
  const getRankEmoji = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return `#${index + 1}`;
  };
  
  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span>🏆</span>
        <span>Leaderboard</span>
      </h2>
      
      <div className="space-y-3">
        {sortedUsers.map((user, index) => (
          <div
            key={user.username}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
              user.username === currentUser
                ? 'bg-accent/20 border-2 border-accent'
                : 'bg-panel2 border border-gray-700'
            }`}
          >
            {/* Rank */}
            <div className="text-2xl font-bold w-12 text-center">
              {getRankEmoji(index)}
            </div>
            
            {/* User Info */}
            <div className="flex-1">
              <div className="font-semibold flex items-center gap-2">
                {user.username}
                {user.username === currentUser && (
                  <span className="text-xs px-2 py-0.5 bg-accent text-gray-900 rounded-full">
                    You
                  </span>
                )}
              </div>
              <div className="text-sm text-muted">
                🔥 {user.streak} day streak
              </div>
            </div>
            
            {/* Score */}
            <div className="text-right">
              <div className="font-bold text-lg">{user.totalScore}</div>
              <div className="text-xs text-muted">points</div>
            </div>
            
            {/* Today's Score */}
            <div className="text-right">
              <div className="text-accent font-semibold">+{user.todayScore}</div>
              <div className="text-xs text-muted">today</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-panel2 rounded-xl border border-gray-700 text-center text-sm text-muted">
        💡 Leaderboard updates every 5 minutes. Keep spinning to climb the ranks!
      </div>
    </div>
  );
}