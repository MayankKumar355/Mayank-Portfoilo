import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { 
  X, 
  Github, 
  Smartphone, 
  CheckCircle2, 
  Star, 
  Download, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenWhatsApp: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenWhatsApp }) => {
  if (!project) return null;

  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const currentScreen = project.mockupScreens[activeScreenIndex] || project.mockupScreens[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40"
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 my-auto z-50 text-slate-100"
        >
          
          {/* Header Bar */}
          <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-600/30">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white flex items-center gap-2">
                  {project.title}
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {project.category}
                  </span>
                </h3>
                <p className="text-xs text-slate-400">Live Interactive Flutter App Frame Demo</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              id="btn-close-project-modal"
              onClick={onClose}
              className="p-2 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Modal Content Grid */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Simulated Mobile Phone Shell */}
            <div className="md:col-span-5 flex flex-col items-center">
              
              {/* Phone Outer Shell */}
              <div className="w-full max-w-[280px] h-[480px] bg-slate-950 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800 relative flex flex-col justify-between">
                
                {/* Phone Notch */}
                <div className="w-28 h-4 bg-slate-900 rounded-b-xl mx-auto z-20 flex items-center justify-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-8 h-1 rounded-full bg-slate-800" />
                </div>

                {/* Screen Display Area */}
                <motion.div 
                  key={activeScreenIndex}
                  initial={{ opacity: 0.8, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`w-full h-full my-2 rounded-[28px] bg-gradient-to-br ${currentScreen.color} p-4 text-white flex flex-col justify-between overflow-hidden relative shadow-inner`}
                >
                  
                  {/* App Screen Top Bar */}
                  <div className="flex items-center justify-between text-xs font-bold pt-1 opacity-90">
                    <span>9:41</span>
                    <span>Flutter 3.x</span>
                    <span>100%</span>
                  </div>

                  {/* Simulated Screen Content Body */}
                  <div className="my-auto space-y-3 text-left">
                    <div className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm">
                      {currentScreen.title}
                    </div>

                    <h4 className="font-extrabold text-base leading-snug">
                      {project.title}
                    </h4>

                    <p className="text-xs text-white/90 font-normal leading-relaxed">
                      {currentScreen.description}
                    </p>

                    {/* Interactive UI Mock element */}
                    <div className="p-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 space-y-2 text-xs">
                      <div className="flex items-center justify-between font-bold text-[11px]">
                        <span>State: Riverpod/Provider</span>
                        <span className="text-emerald-300">Active</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-400 h-full w-4/5 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Screen Bottom Bar / Action */}
                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs font-semibold">
                    <span>Screen {activeScreenIndex + 1} of {project.mockupScreens.length}</span>
                    <button 
                      onClick={() => setActiveScreenIndex((prev) => (prev + 1) % project.mockupScreens.length)}
                      className="px-2.5 py-1 rounded-lg bg-white text-slate-900 font-bold text-[11px] cursor-pointer hover:bg-slate-100 transition-colors"
                    >
                      Next Screen →
                    </button>
                  </div>

                </motion.div>

                {/* Phone Home Bar */}
                <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto" />
              </div>

              {/* Screen Selector Buttons */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {project.mockupScreens.map((screen, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeScreenIndex === idx
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {screen.title}
                  </button>
                ))}
              </div>

            </div>

            {/* Right Column: Detailed Info & Tech Stack */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                
                {/* Rating & Downloads Badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{project.rating} Rating</span>
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs">
                    <Download className="w-3.5 h-3.5" />
                    <span>{project.downloadsOrUsers}</span>
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Play Store Tested</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 pt-1">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                    Key Features Implemented:
                  </h4>
                  <div className="space-y-1.5">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-2">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                    Tech Stack & Architecture:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 text-xs font-semibold border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-bold text-xs bg-slate-800 text-white hover:bg-slate-700 transition-all cursor-pointer border border-slate-700"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenWhatsApp}
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/25 cursor-pointer font-bold"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Order Similar App</span>
                </motion.button>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};

