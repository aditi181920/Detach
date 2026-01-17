import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="bg-panel border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-2xl">🎡</span>
            <span>Reel Roulette</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : 'text-muted'}`}
            >
              Home
            </Link>
            <Link 
              to="/spin" 
              className={`hover:text-accent transition-colors ${isActive('/spin') ? 'text-accent' : 'text-muted'}`}
            >
              Spin
            </Link>
            <Link 
              to="/friends" 
              className={`hover:text-accent transition-colors ${isActive('/friends') ? 'text-accent' : 'text-muted'}`}
            >
              Friends
            </Link>
            <Link 
              to="/profile" 
              className={`hover:text-accent transition-colors ${isActive('/profile') ? 'text-accent' : 'text-muted'}`}
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}