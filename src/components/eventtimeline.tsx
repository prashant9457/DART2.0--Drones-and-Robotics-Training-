import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Wrench, Coffee, Trophy, UserCheck, Calendar, Clock } from 'lucide-react';
import StaggeredMenu, { type StaggeredMenuItem } from './staggeredmenu';
import './timeline.css';

interface Event {
  time: string;
  title: string;
  type: 'lecture' | 'practical' | 'break' | 'event';
}

interface DayPlan {
  day: string;
  dateLabel: string;
  events: Event[];
}

const schedule: DayPlan[] = [
  {
    day: "Day 01",
    dateLabel: "Kickoff & Core",
    events: [
      { time: '09:00 am - 11:00 am', title: 'Inauguration', type: 'event' },
      { time: '11:00 am - 12:00 pm', title: 'Core Concepts Lecture', type: 'lecture' },
      { time: '12:00 pm - 01:00 pm', title: 'Lunch Break', type: 'break' },
      { time: '01:00 pm - 04:30 pm', title: 'Hands-on training', type: 'practical' },
    ]
  },
  {
    day: "Day 02",
    dateLabel: "Autonomous Flight",
    events: [
      { time: '09:00 am - 12:00 pm', title: 'Simulations & Navigation', type: 'practical' },
      { time: '12:00 pm - 01:00 pm', title: 'Lunch Break', type: 'break' },
      { time: '01:00 pm - 04:30 pm', title: 'Hardware Integration', type: 'practical' },
    ]
  },
  {
    day: "Day 03",
    dateLabel: "Precision Controls",
    events: [
      { time: '09:00 am - 12:00 pm', title: 'Sensor Fusion Training', type: 'practical' },
      { time: '12:00 pm - 01:00 pm', title: 'Lunch Break', type: 'break' },
      { time: '01:00 pm - 04:30 pm', title: 'Deep Dive: Tuning', type: 'practical' },
    ]
  },
  {
    day: "Day 04",
    dateLabel: "Advanced Missions",
    events: [
      { time: '09:00 am - 12:00 pm', title: 'Robotics Software Lecture', type: 'lecture' },
      { time: '12:00 pm - 01:00 pm', title: 'Lunch Break', type: 'break' },
      { time: '01:00 pm - 04:30 pm', title: 'Mission Scaling Tests', type: 'practical' },
    ]
  },
  {
    day: "Day 05",
    dateLabel: "Grand Finale",
    events: [
      { time: '09:00 am - 10:00 am', title: 'Pre-flight Checkups', type: 'lecture' },
      { time: '10:00 am - 04:30 pm', title: 'Main Competition & Closing', type: 'event' },
    ]
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'lecture': return <BookOpen size={16} />;
    case 'practical': return <Wrench size={16} />;
    case 'break': return <Coffee size={16} />;
    case 'event': return <Trophy size={16} />;
    default: return <UserCheck size={16} />;
  }
};

const EventTimeline: React.FC = () => {
  const menuItems: StaggeredMenuItem[] = schedule.map((day, idx) => ({
    label: day.day,
    ariaLabel: `View ${day.day}`,
    link: `#day-${idx}`
  }));

  return (
    <section id="timeline" className="section py-20 min-h-screen">
      <div className="section-header text-center mb-12 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-4xl lg:text-7xl font-black mb-6 uppercase tracking-tighter"
        >
          Upskill yourself in <span className="text-zinc-500">5 days</span><br/>intense learning plan.
        </motion.h2>
        <div className="h-1 w-24 bg-zinc-800 mx-auto rounded-full mb-10"></div>
        
        <div className="flex justify-center mb-10">
          <StaggeredMenu 
            items={menuItems}
            position="center"
            colors={['#18181b', '#27272a']}
            accentColor="#ffffff"
            logoUrl=""
            displaySocials={false}
            isFixed={false}
          />
        </div>
      </div>

      <div className="timeline-stacked-layout max-w-[1100px] mx-auto flex flex-col gap-16 px-4">
        {schedule.map((dayPlan, dayIdx) => (
          <motion.div 
            key={dayIdx}
            id={`day-${dayIdx}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="big-day-card relative overflow-hidden bg-white/[0.02] border border-white/5 rounded-[40px] p-8 lg:p-12 backdrop-blur-3xl group hover:border-red-600/20 transition-all duration-500"
          >
            {/* Background Decor */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-[60px] rounded-full group-hover:bg-white/10 transition-colors"></div>
            
            <div className="day-header-v3 flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 border-b border-white/5 pb-8">
              <div>
                <span className="text-zinc-500 font-black tracking-[0.2em] text-sm uppercase mb-2 block">{dayPlan.dateLabel}</span>
                <h2 className="text-6xl font-black text-white m-0 tracking-tighter">{dayPlan.day}</h2>
              </div>
              <div className="flex items-center gap-2 text-white/30 font-mono text-sm uppercase tracking-widest">
                <Calendar size={14} /> 2025 Workshop Session
              </div>
            </div>

            <div className="events-grid-v3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {dayPlan.events.map((evt, evtIdx) => (
                <motion.div
                  key={evtIdx}
                  whileHover={{ scale: 1.02 }}
                  className={`small-event-card p-6 rounded-3xl border border-white/10 transition-all flex flex-col justify-between min-h-[140px] bg-zinc-900/40 hover:bg-zinc-800/40`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-black tracking-widest text-white/40">
                      {getIcon(evt.type)} {evt.type}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 font-bold uppercase">
                      <Clock size={12} /> {evt.time.split(' - ')[0]}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-zinc-300 transition-colors leading-tight">
                      {evt.title}
                    </h4>
                    <span className="text-[11px] text-white/40 font-mono italic">{evt.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center opacity-20 hover:opacity-100 transition-opacity duration-1000">
         <div className="nav-brand text-5xl grayscale">DART <span className="text-white">2.0</span></div>
         <p className="text-[10px] tracking-[0.5em] uppercase mt-4 text-white/50">Engineering Perfection</p>
      </div>
    </section>
  );
};

export default EventTimeline;
