import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Instagram,
  FileCheck
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenWhatsApp: () => void;
  onOpenMasterSheet: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenWhatsApp, onOpenMasterSheet }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 text-left relative overflow-hidden">
      
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-600/30">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm-3.6 12l-4.7 4.7L18.014 24h7.372L18.014 16.629 10.714 12z" />
                </svg>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">MAYANK KUMAR</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Full-Stack Flutter App Developer based in Sanganer, Jaipur. Building cross-platform mobile, web, and desktop applications with clean architecture, Firebase, and Play Store publishing.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <MapPin className="w-4 h-4 text-red-400" />
              <span>Sanganer, Jaipur, Rajasthan - 302029, India</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  PAGE A: Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  PAGE B: About Me
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('projects')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  PAGE C: Projects
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('skills')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  PAGE D: Technical Skills
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  PAGE E: Contact Form
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('blog')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Upgrade Roadmap & Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Master Sheet */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Freelance Inquiries
            </h4>

            <div className="space-y-2 text-xs">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenWhatsApp}
                className="w-full p-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-between transition-colors shadow-lg shadow-emerald-600/20 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Hire Me on WhatsApp (+91)</span>
                </div>
                <span>→</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenMasterSheet}
                className="w-full p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-between hover:bg-amber-500/20 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  <span>Portfolio Master Sheet</span>
                </div>
                <span>View Checklist</span>
              </motion.button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/MayankKumar355" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 transition-colors"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/mayank-kumar355/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/mayankflutterdev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
            </div>

          </div>

        </div>

        {/* Bottom SEO Keywords & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap gap-2 text-[10px]">
            <span>Keywords: flutter developer jaipur</span>
            <span>•</span>
            <span>app developer jaipur</span>
            <span>•</span>
            <span>hire flutter developer</span>
          </div>

          <div className="flex items-center gap-1">
            <span>© 2026 Mayank Kumar. Built with React & Motion.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

