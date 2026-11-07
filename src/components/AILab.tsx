import { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Play, CheckCircle2, ArrowRight, Activity, Terminal, RefreshCw, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function AILab() {
  const { aiLab } = PORTFOLIO_DATA;
  const [filterType, setFilterType] = useState<string>('ALL');

  // Interactive Agent Loop Simulator State
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [simulationLog, setSimulationLog] = useState<string>(
    'Ready. Click "RUN SIMULATION" to trace an autonomous decision cycle.'
  );

  const steps = [
    { label: 'INPUT', desc: 'Raw Messy Signal Ingestion' },
    { label: 'AI / AGENT', desc: 'Decomposition & Context Synthesis' },
    { label: 'DECISION', desc: 'Deterministic Constraint Evaluation' },
    { label: 'ACTION', desc: 'Executable API / Workflow Trigger' },
    { label: 'FEEDBACK', desc: 'Closed-Loop Verification & Log' },
  ];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);
    setSimulationLog('Stage 1: Ingesting unstructured real-world document batch...');

    setTimeout(() => {
      setActiveStep(1);
      setSimulationLog('Stage 2: LLM Agent extracting spatial survey coordinates & verifying encumbrance flags...');
    }, 700);

    setTimeout(() => {
      setActiveStep(2);
      setSimulationLog('Stage 3: Cross-verifying against statutory rules; no hallucination allowed...');
    }, 1400);

    setTimeout(() => {
      setActiveStep(3);
      setSimulationLog('Stage 4: Automated alert dispatched to legal diligence pipeline...');
    }, 2100);

    setTimeout(() => {
      setActiveStep(4);
      setSimulationLog('Stage 5: Closed-loop verification logged. Agent memory state updated.');
      setIsSimulating(false);
    }, 2800);
  };

  const filteredExperiments =
    filterType === 'ALL'
      ? aiLab
      : aiLab.filter((item) => item.type === filterType);

  return (
    <section id="ai-lab" className="py-24 sm:py-36 px-5 sm:px-10 lg:px-20 max-w-[1280px] mx-auto border-t border-[#DEDDD7]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
            EXPERIMENTS & AUTOMATION · AI LAB
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#171717] font-normal tracking-tight">
            AI Lab
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
            Active exploration of agentic architectures, proactive networking copilots, and self-correcting automation pipelines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-[#EFECE6] p-1.5 rounded-xl border border-[#DEDDD7] self-start md:self-auto">
          {['ALL', 'BUILD', 'EXPERIMENT', 'EXPLORATION'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterType(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                filterType === cat
                  ? 'bg-[#171717] text-white shadow-xs'
                  : 'text-[#6B6B67] hover:text-[#171717]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Agent Loop Simulator Widget */}
      <div className="mb-14 rounded-2xl bg-[#EFECE6] border border-[#DEDDD7] p-6 sm:p-8 overflow-hidden shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#DCD7CA]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#F7F6F2] border border-[#DEDDD7]">
              <Cpu className="w-5 h-5 text-[#66705B]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#66705B] font-semibold block">
                INTERACTIVE PIPELINE TRACER
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-[#171717]">
                Autonomous Closed-Loop Agent Architecture
              </h4>
            </div>
          </div>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171717] hover:bg-[#333333] text-white text-xs font-mono tracking-wider transition-colors cursor-pointer shadow-xs disabled:opacity-50 self-start sm:self-auto"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#98A38C]" />
                <span>EXECUTING CYCLE...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#98A38C]" />
                <span>TRACE EXECUTION CYCLE</span>
              </>
            )}
          </button>
        </div>

        {/* 5-Stage Stepper Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-6">
          {steps.map((st, idx) => {
            const isDone = activeStep > idx;
            const isCurrent = activeStep === idx && isSimulating;
            return (
              <div
                key={st.label}
                className={`p-3.5 rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-[#FFFFFF] border-[#66705B] ring-2 ring-[#66705B]/20 shadow-sm'
                    : isDone
                    ? 'bg-[#F2F0E8] border-[#DEDDD7]'
                    : 'bg-[#F7F6F2] border-[#DEDDD7] opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono text-[#66705B] font-bold">
                    0{idx + 1}
                  </span>
                  {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-[#66705B]" />}
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-[#66705B] animate-ping" />
                  )}
                </div>
                <div className="text-xs font-bold text-[#171717] tracking-tight">
                  {st.label}
                </div>
                <div className="text-[10px] text-[#6B6B67] mt-0.5 leading-snug">
                  {st.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Simulation Console Stream */}
        <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#DEDDD7] flex items-center gap-3 text-xs font-mono">
          <Terminal className="w-4 h-4 text-[#66705B] shrink-0" />
          <span className="text-[#6B6B67] shrink-0">LOG:</span>
          <span className="text-[#171717] truncate">{simulationLog}</span>
        </div>
      </div>

      {/* Grid of AI Lab Experiments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperiments.map((exp) => (
          <div
            key={exp.id}
            className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DEDDD7] hover:border-[#66705B] transition-all flex flex-col justify-between shadow-xs group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2 py-0.5 rounded bg-[#F0F2EE] text-[10px] font-mono text-[#66705B] font-bold uppercase">
                  {exp.type}
                </span>
                <span className="text-[10px] font-mono text-[#8C8A82]">
                  {exp.status}
                </span>
              </div>

              <h4 className="font-serif text-2xl text-[#171717] group-hover:text-[#66705B] transition-colors mb-2">
                {exp.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#6B6B67] leading-relaxed mb-6 font-light">
                {exp.description}
              </p>
            </div>

            <div>
              <div className="pt-4 border-t border-[#EFECE6] flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F7F6F2] text-[#6B6B67] border border-[#E8E6DF]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
