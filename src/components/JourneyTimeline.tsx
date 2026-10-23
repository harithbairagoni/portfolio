import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check, ArrowRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, JourneyMilestone } from '../data/portfolioData';

export default function JourneyTimeline() {
  const { timeline } = PORTFOLIO_DATA;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(4); // Default to LANDSAFE expanded

  const evolutionPhases = [
    { label: 'ENGINEERING', desc: 'First Principles & Physics' },
    { label: 'STRATEGY', desc: 'Decomposition & Influence' },
    { label: 'EXECUTION', desc: '₹152 Cr Infrastructure' },
    { label: 'ENTREPRENEURSHIP', desc: 'Founding LANDSAFE' },
    { label: 'AI SYSTEMS', desc: 'Autonomous Leverage' },
  ];

  const toggleMilestone = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="journey" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#1a1f2c]">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
            TRAJECTORY & ACCELERATION
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          JOURNEY
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
          An evolving progression from physical mechanical engineering to high-stakes capital execution, venture creation, and autonomous AI systems.
        </p>
      </div>

      {/* Visual Evolution Header Rail */}
      <div className="mb-16 p-6 rounded-2xl bg-[#0d0f15] border border-[#1e2330] overflow-x-auto">
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
          EVOLUTION TRAJECTORY
        </p>
        <div className="flex items-center justify-between min-w-[700px] gap-2">
          {evolutionPhases.map((phase, idx) => (
            <div key={phase.label} className="flex items-center gap-3">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-[#18202d] border border-emerald-500/60 flex items-center justify-center text-[10px] font-mono text-emerald-400 font-bold">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold tracking-wider text-white">
                    {phase.label}
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono">{phase.desc}</span>
              </div>
              {idx < evolutionPhases.length - 1 && (
                <ArrowRight className="w-4 h-4 text-zinc-600 shrink-0 ml-2" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l border-[#202535] ml-4 sm:ml-8 space-y-10">
        {timeline.map((item, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div key={item.title + item.year} className="relative group">
              {/* Timeline Node Dot */}
              <div
                onClick={() => toggleMilestone(idx)}
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  isExpanded
                    ? 'bg-emerald-400 text-black ring-4 ring-emerald-500/20 scale-110'
                    : 'bg-[#12151f] border border-zinc-600 text-zinc-400 hover:border-emerald-400'
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current" />
              </div>

              {/* Milestone Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer ${
                  isExpanded
                    ? 'bg-[#0e1119] border-emerald-500/50 shadow-xl'
                    : 'bg-[#0b0d13] border-[#1c2130] hover:border-zinc-700'
                }`}
                onClick={() => toggleMilestone(idx)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#161a25] border border-[#23293a] text-emerald-400 font-semibold">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      PHASE: {item.phase}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 italic">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-mono text-zinc-400 mb-3">
                      {item.organization}
                    </p>
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {item.summary}
                    </p>
                  </div>

                  <div className="p-1 rounded-lg bg-zinc-800/40 text-zinc-400 group-hover:text-white transition-colors shrink-0 mt-1">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-emerald-400' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Expandable Deep Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pt-6 mt-6 border-t border-[#1c2230]"
                    >
                      <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                        TACTICAL CAPABILITIES & ARTIFACTS
                      </p>
                      <ul className="space-y-2.5">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
