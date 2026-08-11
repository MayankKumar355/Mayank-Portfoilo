import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MessageSquare, 
  Send, 
  CheckCircle2
} from 'lucide-react';

interface WhatsAppDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppDialog: React.FC<WhatsAppDialogProps> = ({ isOpen, onClose }) => {
  const [inquiryType, setInquiryType] = useState('New Flutter App Development');
  const [customNote, setCustomNote] = useState('');

  const phone = '918005756597'; // WhatsApp Number for Mayank (+91 8005756597)

  const handleLaunchWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Mayank Kumar! I visited your Flutter Developer Portfolio website.\n\nInquiry: ${inquiryType}\n${customNote ? `Note: ${customNote}\n` : ''}\nI want to discuss hiring you for my mobile app project.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-2xl space-y-6 text-left my-auto z-50 text-slate-100"
          >
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">
                    Hire Mayank on WhatsApp
                  </h3>
                  <p className="text-xs text-slate-400">Fast Response Time</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Selection */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  Select Inquiry Type:
                </label>
                <div className="space-y-2">
                  {[
                    'New Flutter App Development',
                    'Convert Existing Web/Figma to Flutter',
                    'Fix Bugs & Upgrade Existing App',
                    'Play Store Deployment & Consulting'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquiryType(type)}
                      className={`w-full p-3 rounded-2xl text-xs font-bold text-left transition-all border flex items-center justify-between cursor-pointer ${
                        inquiryType === type
                          ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300 shadow-md shadow-emerald-500/10'
                          : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span>{type}</span>
                      {inquiryType === type && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Add Quick Project Note (Optional):
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need an E-Commerce app with Razorpay gateway in 3 weeks..."
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-800 bg-slate-950 text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner"
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="space-y-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLaunchWhatsApp}
                className="w-full py-3.5 rounded-2xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Open WhatsApp Chat Now</span>
              </motion.button>
              <p className="text-[11px] text-slate-400 text-center font-medium">
                Will open WhatsApp with your pre-formatted inquiry text.
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

