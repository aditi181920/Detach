import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Spin from './pages/Spin';
import Profile from './pages/Profile';
import Friends from './pages/Friends';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spin" element={<Spin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted text-sm">
          <p>SpinBreak • Break the scroll, refresh your mind</p>
          <p className="mt-2">Built with React • Vite • Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;