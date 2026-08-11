import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  Github, 
  Smartphone, 
  CheckCircle2, 
  Star, 
  Sparkles, 
  ArrowUpRight
} from 'lucide-react';

interface ProjectsProps {
  onOpenWhatsApp: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenWhatsApp }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'E-Commerce & Retail', 'Social & Communication', 'Utility & Weather', 'Lifestyle & Plant Care'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects-section" className="relative py-16 md:py-24 bg-slate-900/90 text-slate-100 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

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
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            High-Performance Flutter Apps
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Explore 100% production-ready Flutter apps with clean code, Firebase backend, Razorpay, and Play Store deployment.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectCategoryTab"
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

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 25, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                whileHover={{ y: -6 }}
                className="bg-slate-950/80 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  
                  {/* Project Banner Image */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    {/* Category Pill */}
                    <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold text-blue-400 border border-slate-700/80 shadow">
                      {project.category}
                    </span>

                    {/* Rating Tag */}
                    <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{project.rating}</span>
                    </span>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-extrabold tracking-tight text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    
                    {/* Short Description */}
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* 3 Key Bullet Features */}
                    <div className="space-y-2 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>3 Key Features:</span>
                      </h4>
                      <div className="space-y-1.5">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-semibold border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

                {/* Action Buttons: [Live Demo] and [GitHub] */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    id={`btn-live-demo-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-bold text-xs bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25 border border-blue-400/20 transition-all cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    id={`btn-github-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-bold text-xs bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </motion.a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Project Simulator Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenWhatsApp={onOpenWhatsApp}
      />

    </section>
  );
};

