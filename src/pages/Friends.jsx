import Leaderboard from '../components/Leaderboard';
import { useStore } from '../store/useStore';

export default function Friends() {
  const { username } = useStore();
  
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Daily Challenge */}
        <div className="card mb-8 bg-gradient-to-r from-accent/20 to-accent2/20 border-accent">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">🎯</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">Today's Challenge</h2>
              <p className="text-muted">10 squats • Complete for bonus points!</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted">
              23 friends joined • 12 completed
            </div>
            <button className="btn btn-primary">
              Join Challenge
            </button>
          </div>
        </div>
        
        {/* Leaderboard */}
        <Leaderboard currentUser={username} />
        
        {/* Coming Soon Features */}
        <div className="card mt-8 text-center bg-panel2">
          <h3 className="text-xl font-bold mb-4">🚀 Coming Soon</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-panel rounded-lg">
              <div className="text-2xl mb-2">👥</div>
              <h4 className="font-semibold mb-1">Friend Challenges</h4>
              <p className="text-sm text-muted">Send quest challenges to friends</p>
            </div>
            <div className="p-4 bg-panel rounded-lg">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-semibold mb-1">Team Leaderboards</h4>
              <p className="text-sm text-muted">Create teams and compete together</p>
            </div>
            <div className="p-4 bg-panel rounded-lg">
              <div className="text-2xl mb-2">🎁</div>
              <h4 className="font-semibold mb-1">Rewards</h4>
              <p className="text-sm text-muted">Unlock exclusive badges and themes</p>
            </div>
            <div className="p-4 bg-panel rounded-lg">
              <div className="text-2xl mb-2">📱</div>
              <h4 className="font-semibold mb-1">Activity Feed</h4>
              <p className="text-sm text-muted">See what your friends are up to</p>
            </div>
          </div>
          <p className="text-muted mt-6">
            These features require backend (Supabase). Coming in Phase 2!
          </p>
        </div>
      </div>
    </div>
  );
}