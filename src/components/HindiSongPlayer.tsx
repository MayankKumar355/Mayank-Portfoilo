import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play, Pause, SkipBack, SkipForward, ListMusic,
  ChevronDown, ChevronUp, Radio, Disc, Sparkles, Volume2, VolumeX
} from 'lucide-react';

export interface Song {
  id: number;
  title: string;
  movie: string;
  artist: string;
  year: string;
  duration: string;
  youtubeId: string;
  thumbnail: string;
}

const OLD_HINDI_SONGS: Song[] = [
  { id: 1, title: "Pehla Nasha", movie: "Jo Jeeta Wahi Sikandar", artist: "Udit Narayan, Sadhana", year: "1992", duration: "4:51", youtubeId: "plx_3T7uM2o", thumbnail: "https://img.youtube.com/vi/plx_3T7uM2o/mqdefault.jpg" },
  { id: 2, title: "Tujhe Dekha To", movie: "Dilwale Dulhania Le Jayenge", artist: "Kumar Sanu, Lata Mangeshkar", year: "1995", duration: "5:02", youtubeId: "cT9x7gXQ3aY", thumbnail: "https://img.youtube.com/vi/cT9x7gXQ3aY/mqdefault.jpg" },
  { id: 3, title: "Chura Ke Dil Mera", movie: "Main Khiladi Tu Anari", artist: "Kumar Sanu, Alka Yagnik", year: "1994", duration: "5:40", youtubeId: "K7A4V0f3H4c", thumbnail: "https://img.youtube.com/vi/K7A4V0f3H4c/mqdefault.jpg" },
  { id: 4, title: "Tum Mile Dil Khile", movie: "Criminal", artist: "Kumar Sanu, Alka Yagnik", year: "1995", duration: "5:12", youtubeId: "j1s6w1XoG4Q", thumbnail: "https://img.youtube.com/vi/j1s6w1XoG4Q/mqdefault.jpg" },
  { id: 5, title: "Ek Din Aap", movie: "Yes Boss", artist: "Kumar Sanu, Alka Yagnik", year: "1997", duration: "4:26", youtubeId: "v9V1o8aP8aI", thumbnail: "https://img.youtube.com/vi/v9V1o8aP8aI/mqdefault.jpg" },
  { id: 6, title: "Chaiyya Chaiyya", movie: "Dil Se", artist: "Sukhwinder Singh, Sapna", year: "1998", duration: "6:54", youtubeId: "P95QU_DIdBk", thumbnail: "https://img.youtube.com/vi/P95QU_DIdBk/mqdefault.jpg" },
  { id: 7, title: "Pardesi Pardesi", movie: "Raja Hindustani", artist: "Udit Narayan, Alka Yagnik", year: "1996", duration: "7:30", youtubeId: "qP2EvY6V7ZQ", thumbnail: "https://img.youtube.com/vi/qP2EvY6V7ZQ/mqdefault.jpg" },
  { id: 8, title: "Tum Paas Aaye", movie: "Kuch Kuch Hota Hai", artist: "Kumar Sanu, Alka Yagnik", year: "1998", duration: "5:47", youtubeId: "oS5d7p7o1iM", thumbnail: "https://img.youtube.com/vi/oS5d7p7o1iM/mqdefault.jpg" },
  { id: 9, title: "Sandese Aate Hai", movie: "Border", artist: "Sonu Nigam, Roop Kumar", year: "1997", duration: "10:30", youtubeId: "yZ9z6YhF6kQ", thumbnail: "https://img.youtube.com/vi/yZ9z6YhF6kQ/mqdefault.jpg" },
  { id: 10, title: "Tip Tip Barsa Pani", movie: "Mohra", artist: "Udit Narayan, Alka Yagnik", year: "1994", duration: "5:48", youtubeId: "1C3A7y5X8xM", thumbnail: "https://img.youtube.com/vi/1C3A7y5X8xM/mqdefault.jpg" }
];

export const HindiSongPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const currentSong = OLD_HINDI_SONGS[currentSongIndex];
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleTogglePlay = () => setIsPlaying(!isPlaying);
  const handleNext = () => {
    setCurrentSongIndex((p) => (p === OLD_HINDI_SONGS.length - 1? 0 : p + 1));
    setIsPlaying(true);
  };
  const handlePrev = () => {
    setCurrentSongIndex((p) => (p === 0? OLD_HINDI_SONGS.length - 1 : p - 1));
    setIsPlaying(true);
  };

  return (
    <div className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 border-b border-amber-500/30 text-slate-100 relative z-30 shadow-2xl">
      <div className="absolute top-0 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent blur-sm" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-lg overflow-hidden border border-amber-500/50 relative">
              <img src={currentSong.thumbnail} alt={currentSong.title} className={`w-full h-full object-cover ${isPlaying? 'scale-110' : ''}`} />
              {isPlaying && <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><motion.div animate={{rotate:360}} transition={{repeat:Infinity,duration:3,ease:"linear"}}><Disc className="w-6 h-6 text-amber-400" /></motion.div></div>}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text- font-black uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1"><Sparkles className="w-2.5 h-2.5" />90s Hindi Hits</span>
                <span className="text-xs text-slate-400 font-mono">{currentSong.year}</span>
              </div>
              <h4 className="text-sm font-bold text-amber-100 truncate">{currentSong.title} <span className="text-xs font-normal text-slate-400 hidden md:inline">• {currentSong.movie}</span></h4>
              <p className="text-xs text-slate-400 truncate">{currentSong.artist}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button whileTap={{scale:0.9}} onClick={handlePrev} className="p-1.5 rounded-full text-slate-300 hover:text-amber-300 hover:bg-slate-800"><SkipBack className="w-5 h-5" /></motion.button>
            <motion.button whileTap={{scale:0.9}} onClick={handleTogglePlay} className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 flex items-center justify-center shadow-lg"><>{isPlaying? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}</></motion.button>
            <motion.button whileTap={{scale:0.9}} onClick={handleNext} className="p-1.5 rounded-full text-slate-300 hover:text-amber-300 hover:bg-slate-800"><SkipForward className="w-5 h-5" /></motion.button>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={()=>setIsMuted(!isMuted)} className="p-1.5 hidden sm:block text-slate-400 hover:text-amber-300">{isMuted? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}</button>
            <motion.button onClick={()=>setShowPlaylist(!showPlaylist)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border ${showPlaylist?'bg-amber-500 text-slate-950':'bg-slate-900 border-amber-500/30 text-amber-300'}`}><ListMusic className="w-4 h-4" />Songs ({OLD_HINDI_SONGS.length}){showPlaylist?<ChevronUp className="w-3.5 h-3.5"/>:<ChevronDown className="w-3.5 h-3.5"/>}</motion.button>
          </div>
        </div>
      </div>

      {/* HIDDEN BUT WORKING AUDIO - NO VIDEO BOX */}
      <div className="w-0 h-0 overflow-hidden absolute">
        <iframe
          ref={iframeRef}
          key={currentSong.youtubeId + (isPlaying? '-play' : '-pause')}
          src={`https://www.youtube.com/embed/${currentSong.youtubeId}?autoplay=${isPlaying?1:0}&mute=${isMuted?1:0}&enablejsapi=1&playsinline=1`}
          allow="autoplay; encrypted-media"
          width="10" height="10"
        />
      </div>

      <AnimatePresence>
        {showPlaylist && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="border-t border-amber-500/20 bg-slate-950/95 backdrop-blur-2xl overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {OLD_HINDI_SONGS.map((song, idx) => (
                <button key={song.id} onClick={()=>{setCurrentSongIndex(idx); setIsPlaying(true);}} className={`p-2.5 rounded-xl border text-left flex items-center justify-between gap-3 ${idx===currentSongIndex?'bg-amber-500/15 border-amber-500/70':'bg-slate-900/80 border-slate-800'}`}>
                  <div className="flex items-center gap-2.5 min-w-0"><img src={song.thumbnail} alt={song.title} className="w-9 h-9 rounded object-cover"/><div className="min-w-0"><p className="text-xs font-bold truncate text-white">{song.title}</p><p className="text- text-slate-400 truncate">{song.movie} ({song.year})</p></div></div>
                  {idx===currentSongIndex && isPlaying? <div className="flex gap-0.5"><span className="w-1 h-3 bg-amber-400 animate-bounce rounded-full"/><span className="w-1 h-4 bg-amber-300 animate-bounce delay-100 rounded-full"/><span className="w-1 h-2 bg-amber-500 animate-bounce delay-200 rounded-full"/></div> : <Play className="w-3.5 h-3.5 text-slate-500" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};