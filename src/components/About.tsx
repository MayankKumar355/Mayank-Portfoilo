import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_IMAGE } from '../data/portfolioData';
import { 
  MapPin, 
  Flame, 
  Code, 
  UploadCloud, 
  MessageSquare, 
  Terminal,
  Cpu,
  Smartphone,
  Sparkles
} from 'lucide-react';

interface AboutProps {
  onOpenWhatsApp: () => void;
  onViewProjects: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsApp, onViewProjects }) => {
  return (
    <section id="about-section" className="relative py-16 md:py-24 bg-slate-900/90 text-slate-100 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>ABOUT MAYANK KUMAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Passionate Flutter App Developer from Jaipur
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Building cross-platform Android, iOS & Web apps with clean architecture and blazing fast performance.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: About Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-950 group">
              <img
                src={ABOUT_IMAGE}
                alt="Mayank Kumar Coding on Laptop in Modern Office Studio"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>Flutter 3.x / Dart Workspace</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Coding high-performance mobile apps with Firebase & REST APIs
                </p>
              </div>
            </div>

            {/* Accent Location Badge */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-4 -right-2 bg-slate-900/90 backdrop-blur-xl px-4 py-3 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-white">Sanganer, Jaipur</div>
                <div className="text-[10px] text-slate-400 font-medium">Rajasthan, India</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Bio & Expertise */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="bg-slate-950/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                I am a passionate <strong className="text-blue-400 font-semibold">Flutter Developer</strong> based in <strong className="text-white">Sanganer, Jaipur</strong>. I specialize in building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.
              </p>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                I have rich hands-on experience in <strong className="text-amber-400 font-semibold">Firebase</strong>, <strong className="text-indigo-400 font-semibold">REST APIs</strong>, state management (Riverpod/Provider), and <strong className="text-emerald-400 font-semibold">Play Store Deployment</strong>. My goal is to help startups and businesses launch their apps fast with robust architecture and pixel-perfect UI.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <motion.div 
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-slate-800 flex items-start gap-3 shadow-lg hover:border-slate-700 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Single Codebase iOS & Android</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Save 50% development time and cost with Flutter cross-platform architecture.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-slate-800 flex items-start gap-3 shadow-lg hover:border-slate-700 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-amber-600 text-white shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Firebase & Realtime DB</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Authentication, Firestore database, FCM push notifications, and analytics.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-slate-800 flex items-start gap-3 shadow-lg hover:border-slate-700 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-emerald-600 text-white shrink-0">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Play Store & Web Deploy</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Complete end-to-end publishing, app bundle signing, and store listing optimization.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-slate-800 flex items-start gap-3 shadow-lg hover:border-slate-700 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-purple-600 text-white shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">REST API & Razorpay</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Payment gateway integration, json serialization, and third-party API SDKs.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="btn-about-hire-whatsapp"
                onClick={onOpenWhatsApp}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Discuss Your App Idea on WhatsApp</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="btn-about-projects"
                onClick={onViewProjects}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all cursor-pointer"
              >
                <Code className="w-4 h-4" />
                <span>Explore Portfolio Projects</span>
              </motion.button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

