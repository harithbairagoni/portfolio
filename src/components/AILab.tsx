import { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Play, CheckCircle2, ArrowRight, Activity, Terminal, RefreshCw } from 'lucide-react';
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
    <section id="ai-lab" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#1a1f2c]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              EXPERIMENTS & AUTOMATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            AI LAB
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
            Active exploration of agentic architectures, proactive assistants, and self-correcting automation pipelines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-[#0d0f15] p-1.5 rounded-xl border border-[#1e2330]">
          {['ALL', 'BUILD', 'EXPERIMENT', 'EXPLORATION'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterType(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider cursor-pointer transition-all ${
                filterType === cat
                  ? 'bg-zinc-800 text-white font-semibold'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Agent Diagram Banner: INPUT → AI / AGENT → DECISION → ACTION → FEEDBACK */}
      <div className="mb-14 rounded-2xl bg-[#0d0f15] border border-[#1e2330] p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#1b212f]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                CORE AGENT ARCHITECTURE
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Deterministic verification brackets probabilistic AI outputs.
            </p>
          </div>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="px-4 py-2 rounded-lg bg-[#141824] hover:bg-[#1b2132] border border-[#232a3c] text-xs font-mono text-emerald-400 font-semibold flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            {isSimulating ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Play className="w-3.5 h-3.5" />
            )}
            <span>{isSimulating ? 'SIMULATING...' : 'RUN SIMULATION'}</span>
          </button>
        </div>

        {/* 5-Step Pipeline Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx && isSimulating;
            const isPassed = activeStep > idx || (!isSimulating && activeStep === 4);

            return (
              <div
                key={step.label}
                className={`p-4 rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-[#18202d] border-emerald-400 shadow-lg shadow-emerald-500/20'
                    : isPassed
                    ? 'bg-[#11141c] border-emerald-900/60 text-zinc-200'
                    : 'bg-[#090b10] border-[#1b202e] text-zinc-500'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-zinc-500">0{idx + 1}</span>
                  {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <p className={`text-xs font-mono font-bold mb-1 ${isCurrent ? 'text-emerald-400' : 'text-white'}`}>
                  {step.label}
                </p>
                <p className="text-[11px] text-zinc-400 font-sans leading-tight">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Simulation Console Log */}
        <div className="p-3.5 rounded-xl bg-[#090b10] border border-[#1a1f2c] flex items-center gap-3 font-mono text-xs">
          <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-zinc-400 truncate">{simulationLog}</span>
        </div>
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperiments.map((exp) => (
          <div
            key={exp.id}
            className="rounded-2xl bg-[#0d0f15] border border-[#1e2330] hover:border-zinc-700 p-6 flex flex-col justify-between transition-all duration-200 shadow-lg group"
          >
            <div>
              {/* Badge for Type */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase ${
                    exp.type === 'BUILD'
                      ? 'bg-emerald-950/60 border border-emerald-800/50 text-emerald-400'
                      : exp.type === 'EXPERIMENT'
                      ? 'bg-sky-950/60 border border-sky-800/50 text-sky-400'
                      : 'bg-violet-950/60 border border-violet-800/50 text-violet-400'
                  }`}
                >
                  {exp.type}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">{exp.status}</span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                {exp.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                {exp.description}
              </p>

              {/* Architecture Steps */}
              <div className="mb-4">
                <p className="text-[10px] font-mono uppercase text-zinc-500 mb-2">
                  INTERNAL PIPELINE:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.architecture.map((arch) => (
                    <span
                      key={arch}
                      className="px-2 py-0.5 rounded bg-[#131722] border border-[#202738] text-[10px] font-mono text-zinc-300"
                    >
                      {arch}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-[#1a1f2c] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <div className="flex gap-2">
                {exp.tags.slice(0, 2).map((t) => (
                  <span key={t} className="text-zinc-500">
                    #{t}
                  </span>
                ))}
              </div>
              <span className="text-emerald-400/80 group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-xs font-mono text-zinc-500">
        NOTE: Clearly designated as ongoing experiments and explorations. Not claimed as public SaaS deployments.
      </div>
    </section>
  );
}
