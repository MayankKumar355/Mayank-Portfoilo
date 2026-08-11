import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Menu, 
  X, 
  MessageSquare, 
  FileCheck, 
  Sparkles, 
  Compass, 
  Layers, 
  Send,
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenWhatsApp: () => void;
  onOpenMasterSheet: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenWhatsApp,
  onOpenMasterSheet,
  isDarkMode,
  setIsDarkMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'about', label: 'About Me', icon: Layers },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: Sparkles },
    { id: 'contact', label: 'Contact', icon: Send },
    { id: 'blog', label: 'Blog & Roadmap', icon: BookOpen }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl border-b bg-slate-950/85 border-slate-800/80 text-slate-100 transition-colors duration-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
          id="header-brand-logo"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
            {/* Flutter symbol styled icon */}
            <svg className="w-6 h-6 fill-current transform group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
              <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm-3.6 12l-4.7 4.7L18.014 24h7.372L18.014 16.629 10.714 12z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight text-white font-sans bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
                MAYANK KUMAR
              </span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                FLUTTER DEV
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Jaipur, India • Available for Freelance
            </p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800 shadow-inner">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeHeaderPill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-md shadow-blue-600/30 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-4 h-4 z-10" />
                <span className="z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions (WhatsApp CTA, Master Sheet, Theme Toggle) */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Master Sheet Drawer Trigger */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="btn-master-sheet"
            onClick={onOpenMasterSheet}
            className="flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold border bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20 transition-all cursor-pointer"
            title="View Portfolio Master Sheet, Domain & SEO Setup"
          >
            <FileCheck className="w-4 h-4 text-amber-400" />
            <span className="hidden xl:inline">Master Sheet</span>
          </motion.button>

          {/* Hire Me on WhatsApp */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="btn-header-whatsapp"
            onClick={onOpenWhatsApp}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Hire on WhatsApp</span>
          </motion.button>

          {/* Dark / Light Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            id="btn-theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-2xl border border-slate-800 text-slate-300 hover:bg-slate-800/80 transition-colors cursor-pointer"
            title="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="btn-mobile-master-sheet"
            onClick={onOpenMasterSheet}
            className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20"
            title="Master Sheet"
          >
            <FileCheck className="w-5 h-5" />
          </button>

          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-2xl border border-slate-800 text-slate-200 bg-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-3 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-2xl font-semibold text-sm transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                id="btn-mobile-whatsapp-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Hire Me on WhatsApp (+91)</span>
              </button>

              <div className="flex items-center justify-between px-2 pt-2 text-xs text-slate-400">
                <span>Jaipur • Sanganer, Rajasthan</span>
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="font-bold underline text-blue-400"
                >
                  Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

