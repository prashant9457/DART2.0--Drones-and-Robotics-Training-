import React from 'react';
import Carousel, { type CarouselItem } from './Carousel';
import { Quote } from 'lucide-react';

const HearfromOrganisers: React.FC = () => {
  const organiserItems: CarouselItem[] = [
    {
      id: 1,
      title: "Core Vision",
      description: "We realized that theoretical knowledge forms the base, but practical implementation is what launches careers. When we built DART 1.0, the goal was simple: get students to build drones.",
      icon: <Quote className="h-[16px] w-[16px] text-white" />
    },
    {
      id: 2,
      title: "DART 2.0 Evolution",
      description: "With DART 2.0, our vision has evolved. We want to forge engineers who understand every signal sent through telemetry arrays and every bit of code driving the ESCs.",
      icon: <Quote className="h-[16px] w-[16px] text-white" />
    },
    {
      id: 3,
      title: "Future of Robotics",
      description: "Our mission is to bridge the gap between imagination and hardware. By the end of this workshop, you won't just know about robotics; you will have breathed life into machines.",
      icon: <Quote className="h-[16px] w-[16px] text-white" />
    }
  ];

  return (
    <section id="organisers" className="section py-20">
      <div className="section-header text-center mb-16 delay-1 animated">
        <h2 className="section-title">Words from the <span className="text-gradient">Core</span></h2>
        <p className="section-subtitle">Why we are building DART 2.0.</p>
      </div>

      <div className="carousel-container-full flex justify-center delay-2 animated px-4">
        <Carousel 
          items={organiserItems} 
          baseWidth={1000} 
          autoplay={true} 
          autoplayDelay={5000}
          pauseOnHover={true}
          loop={true}
        />
      </div>
      
      <div className="organizer-footer mt-12 flex justify-center delay-3 animated">
        <div className="glass-card flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full">
           <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-white">C</div>
           <div>
              <h4 className="m-0 text-base font-semibold">The Organizing Committee</h4>
              <p className="m-0 text-sm text-white/50">DART Workshop Initiative</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HearfromOrganisers;
