import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Layers, Compass, ExternalLink } from 'lucide-react';

export interface ProjectDetailData {
  number: string;
  id: string;
  name: string;
  category: string;
  thesis: string;
  problem: string;
  whatIBuilt: {
    title: string;
    description: string;
    visualType: 'landsafe' | 'industrial' | 'strategy' | 'coldconnect';
  };
  howItWorks: {
    steps: { step: string; label: string; desc: string }[];
  };
  whatILearned: string;
  verifiedFacts?: { label: string; value: string }[];
}

interface ProjectDetailModalProps {
  project: ProjectDetailData | null;
  onClose: () => void;
  onOpenColdConnectDemo?: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
  onOpenColdConnectDemo
}: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#171717]/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F7F6F2] border border-[#DEDDD7] rounded-2xl w-full max-w-4xl shadow-xl overflow-hidden my-auto"
        >
          {/* Header Bar */}
          <div className="px-6 sm:px-10 py-6 border-b border-[#DEDDD7] flex items-center justify-between bg-[#FAF9F5]">
            <div className="flex items-center gap-3 text-xs font-mono tracking-wider text-[#6B6B67]">
              <span>PROJECT {project.number}</span>
              <span>·</span>
              <span className="text-[#66705B] font-medium uppercase">{project.category}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#6B6B67] hover:text-[#171717] hover:bg-[#EFECE6] transition-colors cursor-pointer"
              aria-label="Close project view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Details Body */}
          <div className="p-6 sm:p-10 space-y-12 max-h-[80vh] overflow-y-auto">
            {/* Title & Thesis */}
            <div className="space-y-3">
              <h2 className="font-serif text-4xl sm:text-5xl text-[#171717] font-normal tracking-tight">
                {project.name}
              </h2>
              <p className="text-base sm:text-lg text-[#66705B] font-light leading-relaxed max-w-2xl">
                {project.thesis}
              </p>
            </div>

            {/* Verified Facts pill row if applicable */}
            {project.verifiedFacts && project.verifiedFacts.length > 0 && (
              <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-[#FFFFFF] border border-[#DEDDD7]">
                {project.verifiedFacts.map((fact, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6B67] block">
                      {fact.label}
                    </span>
                    <span className="text-lg font-semibold text-[#171717] tracking-tight">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* THE PROBLEM */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#6B6B67] font-medium">
                THE PROBLEM
              </h3>
              <p className="text-sm sm:text-base text-[#171717] leading-relaxed max-w-2xl">
                {project.problem}
              </p>
            </div>

            {/* WHAT I BUILT (Visual Focus) */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#6B6B67] font-medium">
                  WHAT I BUILT
                </h3>
                <p className="text-xs text-[#6B6B67] max-w-xl">
                  {project.whatIBuilt.description}
                </p>
              </div>

              {/* Visual Artifact Box */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#FFFFFF] border border-[#DEDDD7] shadow-xs">
                {project.whatIBuilt.visualType === 'landsafe' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#E5E4DE] pb-4">
                      <div>
                        <span className="text-xs font-mono uppercase text-[#66705B] font-semibold">
                          LAND TITLE VERIFICATION PIPELINE
                        </span>
                        <p className="text-xs text-[#6B6B67]">
                          Statutory due diligence & boundary alignment model
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-[#171717] bg-[#F7F6F2] px-2.5 py-1 rounded-md border border-[#E5E4DE]">
                        VERIFIED METHODOLOGY
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                        <span className="font-mono text-[#66705B] font-medium">01. INGESTION</span>
                        <h4 className="font-semibold text-[#171717]">Record Aggregation</h4>
                        <p className="text-[#6B6B67] leading-relaxed">
                          Normalizing physical registry archives, encumbrance certificates, and revenue survey entries.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                        <span className="font-mono text-[#66705B] font-medium">02. ENGINE</span>
                        <h4 className="font-semibold text-[#171717]">Cadastral Alignment</h4>
                        <p className="text-[#6B6B67] leading-relaxed">
                          Cross-referencing spatial boundaries against registered survey plots to flag geometric overlaps.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                        <span className="font-mono text-[#66705B] font-medium">03. OUTPUT</span>
                        <h4 className="font-semibold text-[#171717]">Diligence Summary</h4>
                        <p className="text-[#6B6B67] leading-relaxed">
                          Synthesizing clear risk vectors and verifiable title chains for institutional lenders and buyers.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.whatIBuilt.visualType === 'industrial' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#E5E4DE] pb-4">
                      <div>
                        <span className="text-xs font-mono uppercase text-[#66705B] font-semibold">
                          SYNCHRONIZATION MATRIX
                        </span>
                        <p className="text-xs text-[#6B6B67]">
                          ₹152 Cr Outlay · 100 KLPD Greenfield Bio-Energy Facility
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-[#171717] bg-[#F7F6F2] px-2.5 py-1 rounded-md border border-[#E5E4DE]">
                        VERIFIED SCALE
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      {[
                        { title: 'Civil Foundations', detail: 'Piling & structural columns for distillation towers' },
                        { title: 'Heavy Mechanical', detail: 'Fermentation tanks, boilers & high-pressure steam lines' },
                        { title: 'OEM Integration', detail: 'Molecular sieve dehydration units & piping interfaces' },
                        { title: 'Clearances & Trial', detail: 'PESO statutory compliance & trial batch runs' }
                      ].map((item, i) => (
                        <div key={i} className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE] space-y-1.5">
                          <span className="font-mono text-[10px] text-[#66705B]">STAGE 0{i + 1}</span>
                          <h4 className="font-semibold text-[#171717]">{item.title}</h4>
                          <p className="text-[#6B6B67] text-[11px] leading-relaxed">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.whatIBuilt.visualType === 'strategy' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#E5E4DE] pb-4">
                      <div>
                        <span className="text-xs font-mono uppercase text-[#66705B] font-semibold">
                          DECISION SUPPORT DECOMPOSITION
                        </span>
                        <p className="text-xs text-[#6B6B67]">
                          Transforming grassroots sentiment into prioritized tactical directives
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-[#171717] bg-[#F7F6F2] px-2.5 py-1 rounded-md border border-[#E5E4DE]">
                        ANALYTICAL RIGOR
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                        <span className="font-mono text-[#66705B] font-medium">FIELD INTELLIGENCE</span>
                        <h4 className="font-semibold text-[#171717]">Voter Cohort Sampling</h4>
                        <p className="text-[#6B6B67] leading-relaxed">
                          Structured demographic sampling replacing anecdotal party intuition with reliable grassroots feedback.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                        <span className="font-mono text-[#66705B] font-medium">ANALYSIS</span>
                        <h4 className="font-semibold text-[#171717]">Issue Salience Ranking</h4>
                        <p className="text-[#6B6B67] leading-relaxed">
                          Weighting voter grievances by urgency, local administrative credibility, and electoral impact.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                        <span className="font-mono text-[#66705B] font-medium">DIRECTIVES</span>
                        <h4 className="font-semibold text-[#171717]">Executive Decision Briefs</h4>
                        <p className="text-[#6B6B67] leading-relaxed">
                          Translating complex qualitative data into focused 1-page campaign action directives.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.whatIBuilt.visualType === 'coldconnect' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#E5E4DE] pb-3">
                      <span className="text-xs font-mono uppercase text-[#66705B] font-semibold">
                        3-STAGE PREPARATION PIPELINE
                      </span>
                      <button
                        onClick={() => {
                          onClose();
                          if (onOpenColdConnectDemo) onOpenColdConnectDemo();
                        }}
                        className="text-xs font-medium text-[#171717] hover:text-[#66705B] flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open Live Demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE]">
                        <span className="font-mono text-[#66705B] font-medium">01. KNOW THEM</span>
                        <p className="text-[#171717] mt-1 font-medium">Trajectory & Hooks</p>
                        <p className="text-[#6B6B67] text-[11px] mt-0.5">Extracts conversational hooks & taboos</p>
                      </div>
                      <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE]">
                        <span className="font-mono text-[#66705B] font-medium">02. MEET THEM</span>
                        <p className="text-[#171717] mt-1 font-medium">60s Pitch Rehearsal</p>
                        <p className="text-[#6B6B67] text-[11px] mt-0.5">Countdown timer & cadence tracking</p>
                      </div>
                      <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE]">
                        <span className="font-mono text-[#66705B] font-medium">03. STAY CONNECTED</span>
                        <p className="text-[#171717] mt-1 font-medium">Follow-Up & Cadence</p>
                        <p className="text-[#6B6B67] text-[11px] mt-0.5">Generated email/LinkedIn drafts</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* HOW IT WORKS */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#6B6B67] font-medium">
                HOW IT WORKS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.howItWorks.steps.map((st, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DEDDD7] space-y-1.5 text-xs">
                    <span className="font-mono text-[#66705B] font-semibold">{st.step}</span>
                    <h4 className="font-semibold text-[#171717]">{st.label}</h4>
                    <p className="text-[#6B6B67] leading-relaxed">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT I LEARNED */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#6B6B67] font-medium">
                WHAT I LEARNED
              </h3>
              <p className="text-sm sm:text-base text-[#171717] leading-relaxed max-w-2xl italic">
                “{project.whatILearned}”
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 sm:px-10 py-4 border-t border-[#DEDDD7] bg-[#FAF9F5] flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#6B6B67]">
              CASE SUMMARY · HARITH GOUD
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#171717] text-[#FFFFFF] text-xs font-medium hover:bg-[#303030] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
