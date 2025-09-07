import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './pages/navbar';
import Login from './pages/login';
import SignupPage from './pages/signup';
import Home from './components/home';
import Features from './components/features';
import About from './components/about';
import ExplorePage from './pages/client/explore';

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/explore';

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <main className={hideNavbar ? '' : 'pt-16'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
