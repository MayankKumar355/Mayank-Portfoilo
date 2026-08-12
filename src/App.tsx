import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Roadmap } from './components/Roadmap';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { WhatsAppDialog } from './components/WhatsAppDialog';
import { MasterSheetDrawer } from './components/MasterSheetDrawer';
import { CustomCursor } from './components/CustomCursor';
import { HindiSongPlayer } from './components/HindiSongPlayer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState<boolean>(false);
  const [isMasterSheetOpen, setIsMasterSheetOpen] = useState<boolean>(false);

  // Sync dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleOpenWhatsApp = () => setIsWhatsAppOpen(true);
  const handleOpenMasterSheet = () => setIsMasterSheetOpen(true);

  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-200 ${
      isDarkMode 
        ? 'dark bg-slate-950 text-slate-100' 
        : 'bg-white text-slate-800'
    }`}>
      
      {/* Gemini Custom Cursor & Following Background Linear/Radial Gradient Animation */}
      <CustomCursor />
      
      {/* Old Hindi Songs Player Bar */}
      <HindiSongPlayer />

      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenMasterSheet={handleOpenMasterSheet}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Dynamic View Rendering */}
      <main>
        {activeTab === 'home' && (
          <>
            <Hero
              onViewProjects={() => {
                setActiveTab('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenWhatsApp={handleOpenWhatsApp}
              onOpenMasterSheet={handleOpenMasterSheet}
            />
            <About
              onOpenWhatsApp={handleOpenWhatsApp}
              onViewProjects={() => {
                setActiveTab('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <Projects onOpenWhatsApp={handleOpenWhatsApp} />
            <Skills />
            <Roadmap onSelectBlogTab={() => setActiveTab('blog')} />
            <Contact onOpenWhatsApp={handleOpenWhatsApp} />
          </>
        )}

        {activeTab === 'about' && (
          <>
            <About
              onOpenWhatsApp={handleOpenWhatsApp}
              onViewProjects={() => setActiveTab('projects')}
            />
            <Skills />
          </>
        )}

        {activeTab === 'projects' && (
          <Projects onOpenWhatsApp={handleOpenWhatsApp} />
        )}

        {activeTab === 'skills' && (
          <Skills />
        )}

        {activeTab === 'contact' && (
          <Contact onOpenWhatsApp={handleOpenWhatsApp} />
        )}

        {activeTab === 'blog' && (
          <>
            <BlogSection />
            <Roadmap onSelectBlogTab={() => {}} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenMasterSheet={handleOpenMasterSheet}
      />

      {/* Interactive Overlays */}
      <WhatsAppDialog
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />

      <MasterSheetDrawer
        isOpen={isMasterSheetOpen}
        onClose={() => setIsMasterSheetOpen(false)}
      />

    </div>
  );
}
