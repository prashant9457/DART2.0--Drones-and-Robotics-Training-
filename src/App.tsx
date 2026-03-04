import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import WhatIsDart from './components/WhatIsDart';
import WhyIsDart from './components/WhyIsDart';
import KeyInsightsSkills from './components/KeyInsightsSkills';
import EventTimeline from './components/EventTimeline';
import SpeakersTrainers from './components/SpeakersTrainers';
import Dart1 from './components/Dart1';
import HearfromOrganisers from './components/HearfromOrganisers';
import Taskforce from './components/Taskforce';
import FAQs from './components/FAQs';
import ContactandSupport from './components/ContactandSupport';
import Sidebar from './components/Sidebar';
import TargetCursor from './components/TargetCursor';
import Preloader from './components/PreLoader'; // Import the new component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer for the animation duration (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="app-container fade-in-page">
      <Sidebar />
      <main>
        <Home />
        <WhatIsDart />
        <WhyIsDart />
        <KeyInsightsSkills />
        <EventTimeline />
        <SpeakersTrainers />
        <Dart1 />
        <HearfromOrganisers />
        <Taskforce />
        <FAQs />
        <ContactandSupport />
      </main>
      <TargetCursor targetSelector="a, button, .cursor-target" />
    </div>
  );
}

export default App;