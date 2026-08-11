import React from 'react';
import { motion } from 'motion/react';
import { 
  HERO_IMAGE 
} from '../data/portfolioData';
import { 
  Smartphone, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  MapPin, 
  Sparkles,
  Zap
} from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onOpenWhatsApp: () => void;
  onOpenMasterSheet: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewProjects,
  onOpenWhatsApp,
  onOpenMasterSheet
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-28 bg-slate-950 text-slate-100 border-b border-slate-800/80">
      
      {/* Background Mesh & Ambient Radial Light Spheres */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg shadow-blue-500/5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-4" />
              <span>Flutter Developer from Sanganer, Jaipur</span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1 font-bold text-emerald-400">
                <MapPin className="w-3.5 h-3.5" /> Jaipur, RJ
              </span>
            </motion.div>

            {/* Main Hero Title */}
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Hi, I'm <span className="text-blue-400">Mayank Kumar</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                I Build High-Performance Flutter Apps
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Full-Stack Flutter Engineer based in Jaipur | 10+ Cross-Platform Apps Built | Available for Freelance & Contract Projects.
            </motion.p>

            {/* Value Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/80 backdrop-blur-xl p-3 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Single Codebase</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/80 backdrop-blur-xl p-3 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Firebase Backend</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/80 backdrop-blur-xl p-3 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Play Store Ready</span>
              </div>
            </motion.div>

            {/* Hero CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                id="btn-hero-view-projects"
                onClick={onViewProjects}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-[#0A66C2] via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-xl shadow-blue-600/30 border border-blue-400/20 transition-all cursor-pointer"
              >
                <Smartphone className="w-5 h-5" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                id="btn-hero-hire-whatsapp"
                onClick={onOpenWhatsApp}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/25 border border-emerald-400/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Hire Me on WhatsApp</span>
              </motion.button>
            </motion.div>

            {/* Master Sheet Quick Banner */}
            <motion.div variants={itemVariants} className="pt-2">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                id="btn-hero-master-sheet-badge"
                onClick={onOpenMasterSheet}
                className="w-full sm:w-auto inline-flex items-center justify-between gap-3 px-4 py-3 rounded-2xl text-xs font-semibold bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Portfolio Master Sheet Verified (Domain, Hosting & SEO Setup)</span>
                </div>
                <span className="font-bold underline text-amber-400">View Details →</span>
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Right Column: Studio Photo Frame & Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            
            {/* Glowing Accent Ring behind Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 rounded-3xl blur-2xl transform rotate-3 scale-105 pointer-events-none" />

            {/* Studio Photo Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl shadow-blue-500/20 bg-slate-900 group">
              
              <img
                src={HERO_IMAGE}
                alt="Mayank Kumar Flutter Developer Studio Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-xl tracking-tight text-white">Mayank Kumar</h3>
                    <p className="text-xs text-blue-400 font-medium">Full-Stack Flutter Engineer</p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              {/* Top Right Badge */}
              <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-700/80 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                <span>Flutter 3.x Expert</span>
              </div>
            </div>

            {/* Floating Card 1: 10+ Apps Built */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-2 sm:-left-6 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3.5 z-20"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white">10+ Apps</div>
                <div className="text-xs text-slate-400 font-medium">Built & Deployed</div>
              </div>
            </motion.div>

            {/* Floating Card 2: Location Jaipur */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -left-2 sm:-left-4 bg-slate-900/90 backdrop-blur-xl px-4 py-3 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3 z-20"
            >
              <MapPin className="w-5 h-5 text-red-400" />
              <div>
                <div className="text-xs font-bold text-white">Jaipur, RJ</div>
                <div className="text-[10px] text-slate-400">Sanganer Hub</div>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Quick Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl"
        >
          
          <div className="p-4 text-center border-r border-slate-800/80 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-blue-400">10+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Mobile & Web Apps</div>
          </div>

          <div className="p-4 text-center border-r border-slate-800/80 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400">100%</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Code Reusability</div>
          </div>

          <div className="p-4 text-center border-r border-slate-800/80 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-amber-400">85%+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Firebase Proficiency</div>
          </div>

          <div className="p-4 text-center">
            <div className="text-2xl sm:text-4xl font-extrabold text-purple-400">Fast MVP</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">2-4 Week Delivery</div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

