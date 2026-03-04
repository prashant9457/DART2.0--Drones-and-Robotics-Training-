import { useState, useEffect } from 'react';
import './app.css';
import Home from './components/home';
import WhatIsDart from './components/whatisdart';
import WhyIsDart from './components/whyisdart';
import KeyInsightsSkills from './components/keyinsightsskills';
import EventTimeline from './components/eventtimeline';
import SpeakersTrainers from './components/speakerstrainers';
import Dart1 from './components/dart1';
import HearfromOrganisers from './components/hearfromorganisers';
import Taskforce from './components/taskforce';
import FAQs from './components/faqs';
import ContactandSupport from './components/contactandsupport';
import Sidebar from './components/sidebar';
import TargetCursor from './components/targetcursor';
import Preloader from './components/preloader'; // Import the new component

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