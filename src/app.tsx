import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Preloader from './components/preloader';
import MainLayout from './components/mainlayout';
import LandingPage from './components/landingpage';
import InsightsPage from './components/insightspage';
import TimelinePage from './components/timelinepage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer for the animation duration (e.g., 3.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;