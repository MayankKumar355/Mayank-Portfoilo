import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  X, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const tags = ['All', 'Flutter', 'Razorpay', 'Riverpod', 'Firebase', 'DevOps'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.snippet.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="blog-section" className="relative py-16 md:py-24 bg-slate-900/90 text-slate-100 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-lg">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>FLUTTER TUTORIALS & ARTICLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Flutter Code Tutorials & Articles
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Publishing daily Flutter tutorials to drive organic search traffic and educate mobile developers.
          </p>

          {/* Search & Tag Filter */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search Flutter tutorials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-800 bg-slate-950/80 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {tags.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-950/80'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeBlogTag"
                        className="absolute inset-0 bg-blue-600 rounded-xl shadow-md -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="z-10">{tag}</span>
                  </button>
                );
              })}
            </div>

          </div>
        </motion.div>

        {/* Posts Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPosts.map((post, idx) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={post.id}
                whileHover={{ y: -5 }}
                className="bg-slate-950/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-blue-400 font-bold">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-3">
                    {post.category}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-3 hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                    {post.snippet}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                        #{t}
                      </span>
                    ))}
                  </div>

                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveArticle(post)}
                  className="w-full py-3 rounded-2xl font-bold text-xs bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-200 border border-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Read Full Tutorial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl my-auto text-left space-y-6 z-50 text-slate-100"
            >
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{activeArticle.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{activeArticle.title}</h3>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold">
                <span>Published: {activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span>By Mayank Kumar (Flutter Dev)</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-3 font-mono">
                <p className="font-sans font-medium text-sm text-slate-200">{activeArticle.snippet}</p>
                <div className="p-4 bg-slate-950 text-emerald-400 rounded-xl font-mono text-[11px] overflow-x-auto border border-slate-800">
                  <p>// Sample Flutter Code Snippet</p>
                  <p>import 'package:flutter/material.dart';</p>
                  <p>import 'package:razorpay_flutter/razorpay_flutter.dart';</p>
                  <br />
                  <p>void openRazorpayCheckout() {'{'}</p>
                  <p>&nbsp;&nbsp;var options = {'{'}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;'key': 'rzp_live_xxx',</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;'amount': 50000, // Rs. 500.00</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;'name': 'Mayank Flutter Store',</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;'description': 'E-Commerce Payment'</p>
                  <p>&nbsp;&nbsp;{'}'};</p>
                  <p>{'}'}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                <span className="text-slate-400">SEO Keyword: "flutter developer jaipur"</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold cursor-pointer transition-colors shadow-lg shadow-blue-600/20"
                >
                  Close Reader
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

