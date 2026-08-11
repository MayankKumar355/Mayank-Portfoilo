import React from 'react';
import { motion } from 'motion/react';
import { ROADMAP } from '../data/portfolioData';
import { 
  Rocket, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface RoadmapProps {
  onSelectBlogTab: () => void;
}

export const Roadmap: React.FC<RoadmapProps> = ({ onSelectBlogTab }) => {
  return (
    <section className="relative py-16 md:py-24 bg-slate-950 text-white border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-lg">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span>ROADMAP & FUTURE STRATEGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Portfolio Growth & Roadmap
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A structured 6-month roadmap transforming this portfolio into a high-traffic Flutter hub with tutorials, monetization, and digital UI kit sales.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP.map((item, idx) => {
            const isActive = item.status === 'active';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-3xl border transition-all relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-b from-blue-950/80 via-slate-900 to-slate-950 border-blue-500/60 shadow-2xl shadow-blue-500/20'
                    : 'bg-slate-900/80 backdrop-blur-xl border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  
                  {/* Top Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.version}
                    </span>

                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.timeline}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Task List */}
                  <div className="space-y-2 border-t border-slate-800/80 pt-4">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Deliverables:
                    </h4>
                    {item.tasks.map((task, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Extra Action if Version 2.0 */}
                {item.version === 'Version 2.0' && (
                  <div className="mt-6 pt-3 border-t border-slate-800">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onSelectBlogTab}
                      className="w-full py-3 rounded-2xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-blue-600/20"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Preview Blog & Tutorials</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

