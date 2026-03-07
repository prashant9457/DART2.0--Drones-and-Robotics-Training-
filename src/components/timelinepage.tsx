import React, { useEffect } from 'react';
import EventTimeline from './eventtimeline';
import { motion } from 'motion/react';
import { Timer, Hammer } from 'lucide-react';

const TimelinePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-content relative overflow-hidden bg-[#09090b]" style={{ minHeight: '100vh', paddingTop: '100px' }}>
            {/* Background Glows (Grey/White) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-zinc-800/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4">
                {/* Working on it Message */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center py-20 text-center relative z-10"
                >
                    <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 animate-pulse">
                        <Hammer className="text-zinc-500 w-8 h-8" />
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase">
                        Refining the <br /> <span className="text-zinc-500">Timeline_</span>
                    </h1>
                    
                    <div className="flex items-center gap-3 text-zinc-500 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-12">
                        <Timer size={16} /> [ System_Update_in_Progress ]
                    </div>
                    
                    <p className="max-w-[600px] text-zinc-400 text-sm md:text-base leading-relaxed mb-10 opacity-70">
                        We're fine-tuning the DART 2.0 schedule to ensure the most intense and valuable learning experience. The finalized roadmap will be deployed shortly.
                    </p>

                    <div className="w-64 h-[2px] bg-zinc-900 overflow-hidden rounded-full mb-20">
                        <motion.div 
                            className="h-full bg-white/30"
                            initial={{ width: "0%", x: "-100%" }}
                            animate={{ width: "100%", x: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>

                {/* Blurred existing timeline as background context */}
                <div className="opacity-10 pointer-events-none grayscale blur-md select-none">
                    <EventTimeline />
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;
