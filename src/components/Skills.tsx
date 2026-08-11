import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../data/portfolioData';
import { 
  Smartphone, 
  Code2, 
  Flame, 
  Network, 
  GitBranch, 
  UploadCloud, 
  CheckCircle2, 
  Sparkles,
  Cpu
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core', 'Backend', 'Tools', 'Deployment'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-blue-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-amber-400" />;
      case 'Network': return <Network className="w-6 h-6 text-indigo-400" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-purple-400" />;
      case 'UploadCloud': return <UploadCloud className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="skills-section" className="relative py-16 md:py-24 bg-slate-950 text-slate-100 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>TECHNICAL MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Skills & Expertise Matrix
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Proven mastery in cross-platform app development, state management, backend APIs, and Play Store publishing.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg shadow-blue-600/30 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={skill.name}
                whileHover={{ y: -5 }}
                className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Row: Icon + Name + Percentage */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                      {getIcon(skill.icon)}
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-blue-400">
                        {skill.percentage}%
                      </span>
                      <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                        {skill.experience}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    {skill.name}
                  </h3>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-slate-950 rounded-full h-2.5 mb-4 overflow-hidden p-0.5 border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-400 h-full rounded-full"
                    />
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {skill.description}
                  </p>

                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Category: {skill.category}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Flutter Architecture Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 rounded-3xl text-white shadow-2xl border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Clean Architecture & Best Practices</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              State Management & Architecture Expert
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every app is structured using modular clean architecture (Domain, Data, Presentation layers), Riverpod/Provider state isolation, null safety, and automated unit testing for 99.9% crash-free sessions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="p-4 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-slate-800 text-center">
              <div className="text-xl font-black text-cyan-300">60 FPS</div>
              <div className="text-[10px] text-slate-400 font-medium">Smooth UI</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-slate-800 text-center">
              <div className="text-xl font-black text-emerald-400">0 Null Safety</div>
              <div className="text-[10px] text-slate-400 font-medium">Bugs Saved</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

