import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ChevronRight, Cpu, Layers, AlertCircle, Sparkles, BookOpen } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b0d13] border border-[#222838] shadow-2xl p-6 sm:p-10 text-zinc-100"
          id="case-study-modal-container"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between pb-6 mb-8 border-b border-[#1c2130]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
                  CASE STUDY ARCHIVE / {project.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.name}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
                ROLE: <span className="text-zinc-200">{project.role}</span> | FOCUS: <span className="text-zinc-200">{project.keyMetric}</span>
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-[#141722] hover:bg-[#1f2436] text-zinc-400 hover:text-white border border-[#242b3d] transition-colors cursor-pointer"
              aria-label="Close Case Study Modal"
              id="close-case-study-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 7 Structured Sections */}
          <div className="space-y-10">
            {/* 01 — THE PROBLEM */}
            <div className="p-6 rounded-2xl bg-[#10131d] border border-[#1b2130]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-bold">
                  01
                </span>
                <h3 className="text-sm sm:text-base font-mono uppercase tracking-wider font-bold text-white">
                  THE PROBLEM
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* 02 — CONTEXT */}
            <div className="p-6 rounded-2xl bg-[#10131d] border border-[#1b2130]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-bold">
                  02
                </span>
                <h3 className="text-sm sm:text-base font-mono uppercase tracking-wider font-bold text-white">
                  CONTEXT
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {caseStudy.context}
              </p>
            </div>

            {/* 03 — MY ROLE */}
            <div className="p-6 rounded-2xl bg-[#10131d] border border-[#1b2130]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-bold">
                  03
                </span>
                <h3 className="text-sm sm:text-base font-mono uppercase tracking-wider font-bold text-white">
                  MY ROLE
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {caseStudy.roleDetails}
              </p>
            </div>

            {/* 04 — APPROACH */}
            <div className="p-6 rounded-2xl bg-[#10131d] border border-[#1b2130]">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-bold">
                  04
                </span>
                <h3 className="text-sm sm:text-base font-mono uppercase tracking-wider font-bold text-white">
                  APPROACH
                </h3>
              </div>
              <div className="space-y-3">
                {caseStudy.approach.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 05 — SYSTEM ARCHITECTURE DIAGRAM */}
            <div className="p-6 rounded-2xl bg-[#10131d] border border-[#1b2130]">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-bold">
                  05
                </span>
                <h3 className="text-sm sm:text-base font-mono uppercase tracking-wider font-bold text-white">
                  SYSTEM
                </h3>
              </div>

              {/* Animated Interactive Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {caseStudy.systemComponents.map((comp, cIdx) => (
                  <div
                    key={comp.name}
                    className="p-4 rounded-xl bg-[#090b10] border border-[#202738] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-emerald-400">
                          COMPONENT 0{cIdx + 1}
                        </span>
                        <Cpu className="w-3.5 h-3.5 text-zinc-500" />
                      </div>
                      <p className="text-xs font-mono font-bold text-white mb-2">{comp.name}</p>
                      <p className="text-xs text-zinc-400 leading-relaxed">{comp.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-[#0a0d14] border border-[#171b26] text-center text-xs font-mono text-zinc-500">
                SYSTEM INTERACTION: CLOSED-LOOP VERIFICATION & CONTINUOUS SYNCHRONIZATION
              </div>
            </div>

            {/* 06 — OUTCOME */}
            <div className="p-6 rounded-2xl bg-[#10131d] border border-[#1b2130]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-bold">
                  06
                </span>
                <h3 className="text-sm sm:text-base font-mono uppercase tracking-wider font-bold text-white">
                  OUTCOME
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {caseStudy.outcome}
              </p>
            </div>

            {/* 07 — WHAT I LEARNED */}
            <div className="p-6 rounded-2xl bg-[#121622] border border-[#263148]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-bold">
                  07
                </span>
                <h3 className="text-sm sm:text-base font-mono uppercase tracking-wider font-bold text-emerald-300">
                  WHAT I LEARNED
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic">
                “{caseStudy.whatILearned}”
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-8 pt-6 border-t border-[#1c2130] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-500">
              DOCUMENT IDENTIFIER: CS-{project.id.toUpperCase()}
            </span>
            <div className="flex items-center gap-3">
              {project.id === 'cold-connect' && (
                <button
                  onClick={() => {
                    onClose();
                    const el = document.getElementById('cold-connect');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-mono font-bold uppercase tracking-wider text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>LAUNCH INTERACTIVE DEMO</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono uppercase tracking-wider text-white transition-colors cursor-pointer"
              >
                CLOSE CASE STUDY
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
