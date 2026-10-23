import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sliders, Split, Repeat, Cpu, Rocket, Sparkles, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function HowIThink() {
  const { principles } = PORTFOLIO_DATA;
  const [activePrinciple, setActivePrinciple] = useState<number>(0);
  const [leverPosition, setLeverPosition] = useState<number>(85); // percentage for interactive lever visual

  const getPrincipleIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Split;
      case 1:
        return Sliders;
      case 2:
        return Repeat;
      case 3:
        return Cpu;
      case 4:
        return Rocket;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="how-i-think" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#1a1f2c]">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
            COGNITIVE FRAMEWORK & MENTAL MODELS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          HOW I THINK
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
          Five operational principles refined through mechanical engineering, physical capital projects, and autonomous software systems.
        </p>
      </div>

      {/* Grid Layout: Accordion Principles on Left, Interactive Model Sandbox on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Expandable Principles List */}
        <div className="lg:col-span-7 space-y-4">
          {principles.map((item, idx) => {
            const Icon = getPrincipleIcon(idx);
            const isSelected = activePrinciple === idx;

            return (
              <div
                key={item.number}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden cursor-pointer ${
                  isSelected
                    ? 'bg-[#0d1017] border-emerald-500/60 shadow-xl'
                    : 'bg-[#090b10] border-[#1c2232] hover:border-zinc-700'
                }`}
                onClick={() => setActivePrinciple(idx)}
              >
                <div className="p-6 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-emerald-400 text-black shadow-md'
                          : 'bg-[#131620] border border-[#23293a] text-zinc-400'
                      }`}
                    >
                      {item.number}
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-emerald-400/90 font-medium">
                        {item.essence}
                      </p>
                    </div>
                  </div>

                  <div className="p-1 rounded-lg text-zinc-500 shrink-0 mt-1">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? 'rotate-180 text-emerald-400' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Explanation */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6 pt-2 border-t border-[#171c26] space-y-4"
                    >
                      <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                        {item.explanation}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-lg bg-[#11141e] border border-[#1b2230]">
                          <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">
                            MENTAL MODEL
                          </span>
                          <span className="text-xs font-mono text-zinc-200 font-semibold">
                            {item.mentalModel}
                          </span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#11141e] border border-[#1b2230]">
                          <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">
                            TACTICAL DIRECTIVE
                          </span>
                          <span className="text-xs text-zinc-300">
                            {item.actionItem}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right: Interactive Principle Sandbox / Visual Simulator */}
        <div className="lg:col-span-5 rounded-2xl bg-[#0d0f15] border border-[#1e2330] p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#1c2130] mb-6">
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                INTERACTIVE PRINCIPLE VISUALIZER
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                ACTIVE: {principles[activePrinciple].number}
              </span>
            </div>

            <h4 className="text-xl font-bold text-white mb-2">
              {principles[activePrinciple].title}
            </h4>
            <p className="text-xs font-mono text-zinc-400 mb-6">
              {principles[activePrinciple].mentalModel}
            </p>

            {/* Principle-Specific Interactive Component */}
            {activePrinciple === 0 && (
              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#11141d] border border-[#1c2230] space-y-2">
                  <span className="text-zinc-400 uppercase text-[10px] block">
                    MONOLITHIC COMPLEXITY
                  </span>
                  <div className="p-2 rounded bg-rose-950/40 border border-rose-900/40 text-rose-300">
                    “The land registry problem in India is unsolvable.”
                  </div>
                </div>
                <div className="flex justify-center text-zinc-600">↓ DECOMPOSED INTO ATOMS ↓</div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-lg bg-[#141724] border border-zinc-800 text-zinc-300">
                    <p className="text-[10px] text-zinc-500">ATOM 1</p>
                    <p className="text-[11px] font-bold">Revenue Docs</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#141724] border border-zinc-800 text-zinc-300">
                    <p className="text-[10px] text-zinc-500">ATOM 2</p>
                    <p className="text-[11px] font-bold">Cadastral Maps</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#141724] border border-zinc-800 text-zinc-300">
                    <p className="text-[10px] text-zinc-500">ATOM 3</p>
                    <p className="text-[11px] font-bold">Court Encumbrance</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 text-center">
                  ✓ Monolith reduced to 3 deterministic data pipelines
                </div>
              </div>
            )}

            {activePrinciple === 1 && (
              <div className="space-y-5 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-xs text-zinc-400 mb-2">
                    <span>LEVERAGE VARIABLE POSITION:</span>
                    <span className="text-emerald-400 font-bold">{leverPosition}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={leverPosition}
                    onChange={(e) => setLeverPosition(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                    <span>Low Leverage (Busywork)</span>
                    <span>High Leverage (Critical Bottleneck)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#11141e] border border-[#1b2230] space-y-2">
                  <span className="text-zinc-500 text-[10px] uppercase">PROJECTED OUTPUT MULTIPLIER:</span>
                  <p className="text-2xl font-bold text-emerald-400">
                    {Math.round((leverPosition / 10) ** 1.8)}x Outcome Shift
                  </p>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                    {leverPosition > 70
                      ? 'Targeting the single critical path (e.g. Civil foundation handoff to heavy piping OEM).'
                      : 'Distracted by marginal tasks that do not shift the master delivery schedule.'}
                  </p>
                </div>
              </div>
            )}

            {activePrinciple === 2 && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#11141e] border border-[#1d2332] flex items-center justify-between">
                  <div>
                    <span className="text-zinc-500 text-[10px]">HEROIC INDIVIDUAL SWEAT:</span>
                    <p className="text-zinc-300 font-semibold">1x Single Execution (Expires)</p>
                  </div>
                  <span className="text-rose-400 font-bold">Linear</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#151d2c] border border-emerald-500/40 flex items-center justify-between">
                  <div>
                    <span className="text-emerald-400 text-[10px]">CODIFIED OPERATING SYSTEM (SOP):</span>
                    <p className="text-white font-semibold">∞ Repeatable by Any Team Member</p>
                  </div>
                  <span className="text-emerald-400 font-bold">Compounding</span>
                </div>
              </div>
            )}

            {activePrinciple === 3 && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#11141e] border border-[#1b2230] space-y-2">
                  <span className="text-zinc-400 text-[10px] uppercase">AUTOMATION RULE</span>
                  <p className="text-zinc-200 text-xs leading-relaxed">
                    “Never automate an unverified process. Optimize first, verify deterministically, then unleash autonomous agents.”
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                  <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    Human Judgment
                  </div>
                  <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-400">
                    AI Execution Loops
                  </div>
                </div>
              </div>
            )}

            {activePrinciple === 4 && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-2 text-center">
                  <Rocket className="w-8 h-8 text-emerald-400 mx-auto mb-1" />
                  <p className="text-sm font-bold text-white uppercase">SHIPPED IS BETTER THAN PERFECT</p>
                  <p className="text-xs text-zinc-400 font-sans">
                    Reality provides feedback that theoretical brainstorming cannot replicate.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 mt-6 border-t border-[#1c2130] text-[11px] font-mono text-zinc-500 flex items-center justify-between">
            <span>OPERATIONAL RIGOR</span>
            <span className="text-emerald-400">SYSTEMS OVER OPINIONS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
