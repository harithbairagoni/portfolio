import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Factory, CheckCircle2, AlertCircle, Play, ShieldAlert, Clock, Gauge, ArrowRight } from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  timeline: string;
  outlay: string;
  status: string;
  deliverables: string[];
  riskMitigation: string;
  metric: string;
}

const STAGES: Stage[] = [
  {
    id: 'civil',
    name: '01 · Deep Pile Foundations & Civil Infrastructure',
    timeline: 'Q1-Q2 · Months 1–4',
    outlay: '₹38 Cr Outlay',
    status: 'COMPLETED ON SCHEDULE',
    deliverables: [
      '380+ reinforced concrete bored piles drilled to rock-bed refusal',
      'Mass concrete foundation raft for 45-meter distillation column',
      'Effluent treatment and raw water reservoir earthworks'
    ],
    riskMitigation: 'Zero settlement tolerance verified via ultrasonic cross-hole sonic logging.',
    metric: '100% Structural Quality Assurance'
  },
  {
    id: 'mechanical',
    name: '02 · Heavy Structural Erection & Tank Farms',
    timeline: 'Q2-Q3 · Months 4–8',
    outlay: '₹54 Cr Outlay',
    status: 'ZERO DEFECT RATE',
    deliverables: [
      'Multi-tier structural steel framing for 6-stage distillation system',
      'SS-304 & SS-316L fermentation vessels (8 x 450 kL capacity)',
      'High-pressure steam piping headers with 100% radiographic weld testing'
    ],
    riskMitigation: 'Staggered crane lifts with pre-engineered rigging geometry to prevent downtime.',
    metric: 'Zero Lost-Time Injuries (LTI)'
  },
  {
    id: 'process',
    name: '03 · Process Automation & Fermentation Integration',
    timeline: 'Q3-Q4 · Months 8–11',
    outlay: '₹36 Cr Outlay',
    status: 'INTEGRATED & CALIBRATED',
    deliverables: [
      'Continuous liquefaction and multi-pressure distillation loop',
      'Molecular Sieve Dehydration Unit (MSDU) achieving 99.8% ethanol purity',
      'DCS (Distributed Control System) telemetry across 1,200+ I/O sensor points'
    ],
    riskMitigation: 'Closed-loop thermal recycling to maintain energy consumption < 2.8 kg steam/L.',
    metric: '99.8% Ethanol Purity Baseline'
  },
  {
    id: 'commissioning',
    name: '04 · Statutory Clearances & Full 100 KLPD Ramp',
    timeline: 'Q4 · Months 11–13',
    outlay: '₹24 Cr Outlay',
    status: 'COMMISSIONED & PRODUCING',
    deliverables: [
      'PESO (Petroleum and Explosives Safety Organization) storage licensing',
      'State Pollution Control Board Consent-to-Operate (Zero Liquid Discharge)',
      '100 KLPD steady-state output sustained over 72-hour continuous test run'
    ],
    riskMitigation: 'Strict procedural interlocks preventing vapor buildup or thermal runaway.',
    metric: '100 KLPD Rated Capacity'
  }
];

export default function IndustrialScrubberSandbox() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage = STAGES[activeStageIndex];

  return (
    <div className="mt-8 rounded-2xl bg-[#F2F0E8] border border-[#DEDDD7] p-5 sm:p-7 overflow-hidden shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#DEDDD7]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#66705B] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-[#66705B] uppercase font-semibold">
              INTERACTIVE PIPELINE · ₹152 CR CAPITAL TIMELINE SCRUBBER
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-serif text-[#171717] mt-0.5">
            100 KLPD Greenfield Bio-Refinery & Distillation Execution
          </h4>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono text-[#66705B] bg-[#E5E3DC] px-2.5 py-1 rounded-md font-bold">
            STAGE 0{activeStageIndex + 1} OF 04
          </span>
        </div>
      </div>

      {/* Scrub Bar Stepper */}
      <div className="my-6">
        <div className="grid grid-cols-4 gap-2 mb-3">
          {STAGES.map((s, idx) => {
            const isCurrent = activeStageIndex === idx;
            const isPassed = activeStageIndex > idx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#171717] text-white border-[#171717] shadow-sm'
                    : isPassed
                    ? 'bg-[#E5E3DC] text-[#171717] border-[#D5D3CB]'
                    : 'bg-[#F7F6F2] text-[#6B6B67] border-[#DEDDD7] hover:border-[#BDBBAF]'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider mb-0.5 opacity-80">
                  STAGE 0{idx + 1}
                </div>
                <div className="text-xs font-semibold truncate">
                  {s.id.toUpperCase()}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Timeline Scrub Slider */}
        <div className="flex items-center gap-3 bg-[#E5E3DC] p-3 rounded-xl">
          <span className="text-[11px] font-mono text-[#6B6B67] shrink-0">SCRUB TIMELINE:</span>
          <input
            type="range"
            min="0"
            max="3"
            step="1"
            value={activeStageIndex}
            onChange={(e) => setActiveStageIndex(Number(e.target.value))}
            className="w-full accent-[#66705B] cursor-pointer"
          />
          <span className="text-xs font-mono font-bold text-[#171717] shrink-0">
            {activeStage.timeline.split('·')[0].trim()}
          </span>
        </div>
      </div>

      {/* Active Stage Deep Dive Card */}
      <motion.div
        key={activeStage.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="rounded-xl bg-[#FFFFFF] border border-[#DEDDD7] p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#EFECE6]">
          <div>
            <h5 className="font-serif text-xl sm:text-2xl text-[#171717]">
              {activeStage.name}
            </h5>
            <div className="text-xs font-mono text-[#66705B] mt-1 font-semibold">
              {activeStage.timeline} · {activeStage.outlay}
            </div>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#F0F2EE] text-[#66705B] font-bold self-start">
            ✓ {activeStage.status}
          </span>
        </div>

        {/* Deliverables List */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B6B67]">
            KEY WORKSTREAMS MANAGED:
          </span>
          <ul className="space-y-1.5">
            {activeStage.deliverables.map((d, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                <CheckCircle2 className="w-4 h-4 text-[#66705B] shrink-0 mt-0.5" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Two-column callout: Risk & Proven Metric */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-lg bg-[#F8F7F4] border border-[#E8E6DF] space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6B67] block">
              EXECUTION RISK MITIGATED
            </span>
            <p className="text-xs text-[#171717]">
              {activeStage.riskMitigation}
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-[#F0F2EE] border border-[#DCE3D6] space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#66705B] font-semibold block">
              VERIFIED MILESTONE METRIC
            </span>
            <p className="text-xs font-bold text-[#171717]">
              {activeStage.metric}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
