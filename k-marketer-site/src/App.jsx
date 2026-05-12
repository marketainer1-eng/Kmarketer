import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MarketResearch from './pages/MarketResearch';
import CompetitorAnalysis from './pages/CompetitorAnalysis';
import Checklist from './pages/Checklist';
import DummyHairCase from './pages/DummyHairCase';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market-research" element={<MarketResearch />} />
          <Route path="/competitor-analysis" element={<CompetitorAnalysis />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/dummy-hair-case" element={<DummyHairCase />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
