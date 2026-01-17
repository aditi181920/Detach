import { Link } from 'react-router-dom';
import { questEnvironments } from '../data/quests';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-panel2 rounded-full text-sm text-muted mb-6">
            30-90 second wellness breaks
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Spin a quick quest.<br />
            <span className="text-accent">Feel better fast.</span>
          </h1>
          
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Your phone pulls you in. SpinBreak pulls you out. Random mini-quests for instant wellness wins.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/spin" className="btn btn-primary text-lg px-8 py-4">
              🎲 Try a Spin
            </Link>
            <Link to="/profile" className="btn btn-secondary text-lg px-8 py-4">
              📊 See How It Works
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-panel">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why SpinBreak Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Action</h3>
              <p className="text-muted">
                30-90 second quests. No thinking, no planning. Just spin and do.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Always Doable</h3>
              <p className="text-muted">
                Pick your environment. Get quests that fit your space and situation.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-2">Streak Motivation</h3>
              <p className="text-muted">
                Build streaks, earn badges, compete with friends. Stay consistent.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quest Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quest Types</h2>
          
          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {questEnvironments.slice(0, 5).map((env) => (
              <div key={env.id} className="card text-center hover:border-accent transition-all">
                <div className="text-5xl mb-3">{env.emoji}</div>
                <h3 className="font-bold mb-2">{env.name}</h3>
                <p className="text-sm text-muted">{env.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/20 to-accent2/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to break the scroll?</h2>
          <p className="text-xl text-muted mb-8">
            No signup needed. Start spinning now.
          </p>
          <Link to="/spin" className="btn btn-primary text-lg px-8 py-4">
            🎡 Start Spinning
          </Link>
        </div>
      </section>
    </div>
  );
}