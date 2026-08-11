import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO_DATA, INITIAL_CHECKLIST } from '../data/portfolioData';
import { ChecklistItem } from '../types';
import { 
  X, 
  FileCheck, 
  Globe, 
  Search, 
  CheckSquare, 
  Square, 
  Copy, 
  Check, 
  ListTodo
} from 'lucide-react';

interface MasterSheetDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MasterSheetDrawer: React.FC<MasterSheetDrawerProps> = ({ isOpen, onClose }) => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(() => {
    const saved = localStorage.getItem('mayank_master_checklist');
    return saved ? JSON.parse(saved) : INITIAL_CHECKLIST;
  });

  const [copiedTitle, setCopiedTitle] = useState(false);
  const [copiedDesc, setCopiedDesc] = useState(false);

  const toggleChecklist = (id: string) => {
    const updated = checklist.map(item => item.id === id ? { ...item, completed: !item.completed } : item);
    setChecklist(updated);
    localStorage.setItem('mayank_master_checklist', JSON.stringify(updated));
  };

  const completedCount = checklist.filter(c => c.completed).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  const handleCopy = (text: string, type: 'title' | 'desc') => {
    navigator.clipboard.writeText(text);
    if (type === 'title') {
      setCopiedTitle(true);
      setTimeout(() => setCopiedTitle(false), 2000);
    } else {
      setCopiedDesc(true);
      setTimeout(() => setCopiedDesc(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40"
          />

          {/* Drawer Body */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-50 w-full max-w-xl bg-slate-900 h-full overflow-y-auto p-6 sm:p-8 shadow-2xl border-l border-slate-800 text-left flex flex-col justify-between space-y-6 text-slate-100"
          >
            
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-500/20">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white">
                      PORTFOLIO MASTER SHEET
                    </h3>
                    <p className="text-xs text-slate-400">Domains, Hosting, SEO & Final Checklist</p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Section 1: Basic Setup */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  <Globe className="w-4 h-4" />
                  <span>1. Basic Setup & Domain Info</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-slate-400">Primary Domain:</span>
                    <span className="font-bold text-blue-400">{SEO_DATA.domain}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-slate-400">Secondary Domain:</span>
                    <span className="font-bold text-slate-300">{SEO_DATA.secondaryDomain}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-slate-400">Hosting:</span>
                    <span className="font-bold text-emerald-400">{SEO_DATA.hosting}</span>
                  </div>
                </div>
              </div>

              {/* Section 5: SEO & Money Keywords */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  <Search className="w-4 h-4" />
                  <span>5. SEO & Money Keywords Config</span>
                </div>

                <div className="space-y-2 text-xs">
                  
                  {/* Meta Title */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-400">SEO Meta Title:</span>
                      <button
                        onClick={() => handleCopy(SEO_DATA.metaTitle, 'title')}
                        className="text-blue-400 hover:underline text-[10px] font-bold flex items-center gap-1 cursor-pointer"
                      >
                        {copiedTitle ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedTitle ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <p className="font-bold text-white leading-tight">{SEO_DATA.metaTitle}</p>
                  </div>

                  {/* Meta Description */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-400">SEO Description:</span>
                      <button
                        onClick={() => handleCopy(SEO_DATA.metaDescription, 'desc')}
                        className="text-blue-400 hover:underline text-[10px] font-bold flex items-center gap-1 cursor-pointer"
                      >
                        {copiedDesc ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedDesc ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <p className="text-slate-300">{SEO_DATA.metaDescription}</p>
                  </div>

                  {/* Keywords List */}
                  <div className="pt-1">
                    <span className="font-bold text-slate-400 block mb-1">Target Ranking Keywords:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {SEO_DATA.keywords.map((kw, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-[11px]">
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Section 6: Final Checklist Tracker */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <ListTodo className="w-4 h-4" />
                    <span>6. Final Checklist ({completedCount}/{checklist.length})</span>
                  </div>
                  <span className="text-xs font-black text-emerald-400">{progressPercent}% Ready</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-emerald-500 h-full rounded-full"
                  />
                </div>

                {/* Interactive Items */}
                <div className="space-y-2 pt-1 max-h-60 overflow-y-auto pr-1">
                  {checklist.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleChecklist(item.id)}
                      className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center gap-3 ${
                        item.completed
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-slate-300 line-through opacity-80'
                          : 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      {item.completed ? (
                        <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                      <span>{item.task}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-2xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer shadow-lg shadow-blue-600/20"
              >
                Close Master Sheet
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

