import React from 'react';
import Home from './home';
import WhatIsDart from './whatisdart';
import WhyIsDart from './whyisdart';
import KeyInsightsSkills from './keyinsightsskills';
import EventTimeline from './eventtimeline';
import SpeakersTrainers from './speakerstrainers';
import Dart1 from './dart1';
import HearfromOrganisers from './hearfromorganisers';
import Taskforce from './taskforce';
import FAQs from './faqs';
import ContactandSupport from './contactandsupport';

const LandingPage: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default LandingPage;
