import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ArrowRight, X, Clock, Tag } from 'lucide-react';
import { PORTFOLIO_DATA, ArticleItem } from '../data/portfolioData';

export default function ThinkingSection() {
  const { articles } = PORTFOLIO_DATA;
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="thinking" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#1a1f2c]">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
            ESSAYS & THESES
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          THINKING
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
          Observations on complex systems, operational friction, and leveraging automation to solve non-linear problems.
        </p>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedArticle(item)}
            className="p-8 rounded-2xl bg-[#0d0f15] border border-[#1e2330] hover:border-zinc-700 flex flex-col justify-between transition-all duration-200 cursor-pointer group shadow-lg"
          >
            <div>
              {/* Meta row */}
              <div className="flex items-center justify-between gap-4 mb-4 text-xs font-mono">
                <span className="text-emerald-400 font-semibold uppercase tracking-wider">
                  {item.topic}
                </span>
                <div className="flex items-center gap-2 text-zinc-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.readingTime}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                {item.shortThesis}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1a1f2c] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="px-2 py-0.5 rounded bg-[#151924] text-[10px] text-zinc-400 font-semibold uppercase">
                {item.status}
              </span>
              <span className="text-zinc-300 group-hover:text-emerald-400 flex items-center gap-1">
                <span>VIEW THESIS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-xs font-mono text-zinc-500">
        NOTE: Content represents working theses and essay drafts. Not represented as external commercial publications.
      </div>

      {/* Thesis Preview Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#0d0f15] border border-[#232a3d] p-6 sm:p-8 shadow-2xl text-zinc-100"
            >
              <div className="flex items-start justify-between pb-4 mb-4 border-b border-[#1c2232]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                      {selectedArticle.topic}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs font-mono text-zinc-400">{selectedArticle.readingTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedArticle.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    CORE THESIS
                  </p>
                  <p className="text-sm text-zinc-200 leading-relaxed p-4 rounded-xl bg-[#121622] border border-[#1d2334]">
                    “{selectedArticle.shortThesis}”
                  </p>
                </div>

                <div>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                    PRIMARY ARGUMENTS & SYSTEM TAKEAWAYS
                  </p>
                  <ul className="space-y-2.5">
                    {selectedArticle.coreTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#090b10] border border-[#1a1f2c] text-center text-xs font-mono text-zinc-500">
                  Full article draft in progress. Detailed essay publication coming soon.
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
