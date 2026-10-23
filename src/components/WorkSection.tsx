import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown, ChevronUp, Sparkles, ShieldCheck, Factory, Compass, FileCheck } from 'lucide-react';
import ColdConnectDemo from './ColdConnectDemo';
import { ProjectDetailData } from './ProjectDetailModal';

interface WorkSectionProps {
  onOpenProjectDetail: (project: ProjectDetailData) => void;
}

export const WORK_PROJECTS: ProjectDetailData[] = [
  {
    number: '01',
    id: 'cold-connect',
    name: 'COLD CONNECT',
    category: 'AI × NETWORKING',
    thesis: 'An AI-powered networking copilot designed to help professionals research who they’re meeting, sharpen their pitch, and stay connected after the conversation.',
    problem:
      'Ambitious professionals and MBA students often secure rare 20-minute executive conversations but walk in unprepared—resorting to superficial small talk or unfocused rambling, wasting valuable connection leverage.',
    whatIBuilt: {
      title: '3-Stage Preparation Pipeline',
      description: 'End-to-end interactive workflow software comprising Target Context Synthesis, 60s Rehearsal Studio with cadence monitoring, and automated multi-touch follow-up cadences.',
      visualType: 'coldconnect',
    },
    howItWorks: {
      steps: [
        { step: '01', label: 'Know Them', desc: 'Synthesizes career trajectory, hooks, and strategic taboos to avoid.' },
        { step: '02', label: 'Meet Them', desc: 'Structures 3-part pitch with 60s countdown timer and 130-140 WPM pace tracking.' },
        { step: '03', label: 'Stay Connected', desc: 'Generates tailored email & LinkedIn drafts and cadence reminders.' },
      ],
    },
    whatILearned:
      'Great AI products do not simply slap a chatbot on a problem; they deconstruct the human psychological anxiety curve into discrete, repeatable steps with tangible feedback.',
    verifiedFacts: [
      { label: 'STATUS', value: 'Live Prototype' },
      { label: 'METHOD', value: '3-Stage Pipeline' },
      { label: 'DATA NOTE', value: 'Portfolio Demo · Simulated Data' },
    ],
  },
  {
    number: '02',
    id: 'landsafe',
    name: 'LANDSAFE',
    category: 'PROPTECH × INFRASTRUCTURE',
    thesis: 'Building trust infrastructure for land ownership in India.',
    problem:
      'Land information in India is deeply fragmented across disparate administrative departments, physical registries, and inconsistent survey data, creating massive diligence friction and transaction risk.',
    whatIBuilt: {
      title: 'Land Record Diligence & Cross-Verification Pipeline',
      description: 'Structured data architecture that ingests historical registry records, normalizes spatial survey data, and cross-checks encumbrance titles.',
      visualType: 'landsafe',
    },
    howItWorks: {
      steps: [
        { step: '01', label: 'Record Ingestion', desc: 'Aggregates historical deeds, encumbrance logs, and cadastral maps.' },
        { step: '02', label: 'Cross-Verification', desc: 'Validates title chains and flags spatial boundary overlap discrepancies.' },
        { step: '03', label: 'Decision Artifact', desc: 'Synthesizes clean, verifiable title reports for institutional buyers.' },
      ],
    },
    whatILearned:
      'True systems leverage in messy legacy domains does not come from superficial UI; it requires rigorous data normalization at the root source.',
    verifiedFacts: [
      { label: 'DOMAIN', value: 'PropTech Infrastructure' },
      { label: 'FOUNDATION', value: 'Co-Founder & Director' },
      { label: 'DATA INTEGRITY', value: 'Zero Hallucinated Metrics' },
    ],
  },
  {
    number: '03',
    id: 'industrial-execution',
    name: 'INDUSTRIAL EXECUTION',
    category: 'INFRASTRUCTURE',
    thesis: 'Ground-up coordination for a ₹152 Cr, 100 KLPD greenfield grain-based ethanol facility.',
    problem:
      'Large-scale industrial projects encounter severe bottlenecks when cross-discipline dependencies (civil, mechanical, electrical, instrumentation, and regulatory approvals) drift out of synchronization.',
    whatIBuilt: {
      title: 'Master Synchronization & Critical Path Matrix',
      description: 'Execution tracking protocol synchronizing civil contractors, heavy distillation equipment OEMs, and statutory clearance pipelines.',
      visualType: 'industrial',
    },
    howItWorks: {
      steps: [
        { step: '01', label: 'Critical Path Mapping', desc: 'Sequenced structural handoffs between civil piles and tower erection.' },
        { step: '02', label: 'OEM Interface Alignment', desc: 'Standardized piping interfaces across boilers and distillation columns.' },
        { step: '03', label: 'Statutory Roadmap', desc: 'Parallelized PESO and environmental clearance submissions.' },
      ],
    },
    whatILearned:
      'Execution at scale is about eliminating friction at the handoffs between disciplines. The bottleneck is rarely technical capability; it is coordination latency.',
    verifiedFacts: [
      { label: 'CAPITAL OUTLAY', value: '₹152 Cr' },
      { label: 'CAPACITY', value: '100 KLPD' },
      { label: 'SECTOR', value: 'Bio-Energy Infrastructure' },
    ],
  },
  {
    number: '04',
    id: 'strategy-analytics',
    name: 'STRATEGY & ANALYTICS',
    category: 'STRATEGY × ANALYTICS',
    thesis: 'Deconstructing grassroots sentiment and ground realities into structured strategic decisions.',
    problem:
      'High-stakes political and civic campaigns are flooded with anecdotal noise, confirmation bias, and chaotic field reports, making strategic resource allocation reactive and error-prone.',
    whatIBuilt: {
      title: 'Field Intelligence & Salience Decomposition Engine',
      description: 'Methodology combining rigorous sampling, issue salience prioritization, and concise executive tactical directives.',
      visualType: 'strategy',
    },
    howItWorks: {
      steps: [
        { step: '01', label: 'Field Sampling', desc: 'Structured interviews replacing intuition with verifiable data.' },
        { step: '02', label: 'Salience Ranking', desc: 'Weighting voter grievances by urgency and administrative credibility.' },
        { step: '03', label: 'Tactical Directives', desc: 'Producing concise 1-page action briefs for leadership.' },
      ],
    },
    whatILearned:
      'The most valuable strategic model is one that eliminates emotional noise and gives leadership clear permission to prioritize only what truly moves the needle.',
    verifiedFacts: [
      { label: 'DOMAIN', value: 'Electoral Strategy & Intelligence' },
      { label: 'METHOD', value: 'Decomposition & Cohort Sampling' },
      { label: 'OUTPUT', value: 'Direct Decision Support' },
    ],
  },
];

export default function WorkSection({ onOpenProjectDetail }: WorkSectionProps) {
  // Cold Connect interactive drawer state
  const [isColdConnectExpanded, setIsColdConnectExpanded] = useState<boolean>(false);

  return (
    <section id="work" className="py-24 sm:py-36 px-6 sm:px-10 max-w-6xl mx-auto border-t border-[#DEDDD7]">
      {/* Section Header */}
      <div className="space-y-4 mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
          WORK
        </span>
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#171717] font-normal tracking-tight">
          Selected work
        </h2>
        <p className="text-base sm:text-lg text-[#6B6B67] font-light max-w-xl">
          Four representative projects across AI workflows, land infrastructure, industrial execution, and strategy.
        </p>
      </div>

      {/* 4 Projects List: Editorial Rows */}
      <div className="space-y-24 sm:space-y-32">
        {/* ============================================================ */}
        {/* 01 — COLD CONNECT (Featured) */}
        {/* ============================================================ */}
        <article className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Metadata & Title */}
            <div className="lg:col-span-4 space-y-3">
              <span className="font-serif text-4xl sm:text-5xl text-[#66705B] block font-normal">
                01
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#171717] tracking-tight font-normal">
                COLD CONNECT
              </h3>
              <div className="text-xs font-mono uppercase tracking-wider text-[#66705B] font-medium">
                AI × NETWORKING
              </div>
            </div>

            {/* Description & Headline */}
            <div className="lg:col-span-8 space-y-5">
              <h4 className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal leading-snug">
                Never walk into a networking conversation unprepared.
              </h4>
              <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
                “An AI-powered networking copilot designed to help professionals research who they’re meeting, sharpen their pitch, and stay connected after the conversation.”
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-sm">
                <button
                  onClick={() => setIsColdConnectExpanded((prev) => !prev)}
                  id="try-cold-connect-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171717] text-[#FFFFFF] font-medium hover:bg-[#333333] transition-colors cursor-pointer"
                >
                  <span>{isColdConnectExpanded ? 'Hide Cold Connect' : 'Try Cold Connect'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenProjectDetail(WORK_PROJECTS[0])}
                  className="inline-flex items-center gap-1.5 text-[#6B6B67] hover:text-[#171717] transition-colors cursor-pointer text-xs font-mono uppercase tracking-wider"
                >
                  <span>Read case study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Cold Connect Experience */}
          <div className="pt-4">
            {isColdConnectExpanded ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#6B6B67] px-1">
                  <span>INTERACTIVE PRODUCT PROTOTYPE</span>
                  <span>SIMULATED DEMO DATA</span>
                </div>
                <ColdConnectDemo />
              </motion.div>
            ) : (
              /* Strong visual preview when collapsed */
              <div
                onClick={() => setIsColdConnectExpanded(true)}
                className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-[#DEDDD7] hover:border-[#66705B]/60 transition-all cursor-pointer group shadow-2xs"
              >
                <div className="flex items-center justify-between border-b border-[#E5E4DE] pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#66705B]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold">
                      KNOW THEM → MEET THEM → STAY CONNECTED
                    </span>
                  </div>
                  <span className="text-xs text-[#66705B] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium">
                    Click to launch interactive prototype →
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-1.5">
                    <span className="font-mono text-[10px] text-[#66705B]">STAGE 01</span>
                    <h5 className="font-semibold text-[#171717]">Research & Hooks</h5>
                    <p className="text-[#6B6B67] leading-relaxed">
                      Deep context extraction: non-obvious career hooks, strategic questions, and topics to avoid.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-1.5">
                    <span className="font-mono text-[10px] text-[#66705B]">STAGE 02</span>
                    <h5 className="font-semibold text-[#171717]">60s Pitch Rehearsal</h5>
                    <p className="text-[#6B6B67] leading-relaxed">
                      Structured 3-part pitch with countdown rehearsal timer, cadence tracking, and rubric feedback.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-1.5">
                    <span className="font-mono text-[10px] text-[#66705B]">STAGE 03</span>
                    <h5 className="font-semibold text-[#171717]">Stay Connected</h5>
                    <p className="text-[#6B6B67] leading-relaxed">
                      Meeting notes synthesis into tailored follow-up emails, short LinkedIn notes, and scheduled touchpoints.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>

        {/* ============================================================ */}
        {/* 02 — LANDSAFE */}
        {/* ============================================================ */}
        <article className="space-y-8 pt-12 border-t border-[#DEDDD7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Metadata & Title */}
            <div className="lg:col-span-4 space-y-3">
              <span className="font-serif text-4xl sm:text-5xl text-[#66705B] block font-normal">
                02
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#171717] tracking-tight font-normal">
                LANDSAFE
              </h3>
              <div className="text-xs font-mono uppercase tracking-wider text-[#66705B] font-medium">
                PROPTECH × INFRASTRUCTURE
              </div>
            </div>

            {/* Description & Headline */}
            <div className="lg:col-span-8 space-y-5">
              <h4 className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal leading-snug">
                “Building trust infrastructure for land ownership in India.”
              </h4>
              <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
                Transforming opaque, fragmented revenue archives and physical deeds into verified, structured land intelligence for developers, institutions, and buyers.
              </p>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenProjectDetail(WORK_PROJECTS[1])}
                  id="explore-landsafe-btn"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#171717] hover:text-[#66705B] transition-colors cursor-pointer"
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Strong Visual: Title Chain & Cadastral Verification Interface */}
          <div
            onClick={() => onOpenProjectDetail(WORK_PROJECTS[1])}
            className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-[#DEDDD7] hover:border-[#66705B]/60 transition-all cursor-pointer shadow-2xs group"
          >
            <div className="flex items-center justify-between border-b border-[#E5E4DE] pb-4 mb-6">
              <span className="text-xs font-mono uppercase text-[#66705B] font-semibold">
                SYSTEM ARTEFACT · TITLE CHAIN & CADASTRAL PROVENANCE PIPELINE
              </span>
              <span className="text-xs text-[#6B6B67] group-hover:text-[#171717] flex items-center gap-1">
                <span>View architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                <div className="text-[10px] font-mono text-[#66705B] uppercase">01 / INGESTION</div>
                <div className="font-semibold text-[#171717]">Historical Deed Registers</div>
                <div className="text-[#6B6B67] text-[11px] leading-relaxed">
                  Parsing encumbrance archives and statutory transfer records into standardized schema.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                <div className="text-[10px] font-mono text-[#66705B] uppercase">02 / VERIFICATION</div>
                <div className="font-semibold text-[#171717]">Cadastral Alignment</div>
                <div className="text-[#6B6B67] text-[11px] leading-relaxed">
                  Cross-referencing revenue maps against registry boundaries to identify boundary disputes.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                <div className="text-[10px] font-mono text-[#66705B] uppercase">03 / ARTIFACT</div>
                <div className="font-semibold text-[#171717]">Verifiable Title Certificate</div>
                <div className="text-[#6B6B67] text-[11px] leading-relaxed">
                  Exporting verifiable risk vectors and clean provenance reports for financial institutions.
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ============================================================ */}
        {/* 03 — INDUSTRIAL EXECUTION */}
        {/* ============================================================ */}
        <article className="space-y-8 pt-12 border-t border-[#DEDDD7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Metadata & Title */}
            <div className="lg:col-span-4 space-y-3">
              <span className="font-serif text-4xl sm:text-5xl text-[#66705B] block font-normal">
                03
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#171717] tracking-tight font-normal">
                INDUSTRIAL EXECUTION
              </h3>
              <div className="text-xs font-mono uppercase tracking-wider text-[#66705B] font-medium">
                INFRASTRUCTURE
              </div>
            </div>

            {/* Description & Headline */}
            <div className="lg:col-span-8 space-y-5">
              <h4 className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal leading-snug">
                ₹152 Cr · 100 KLPD Greenfield Bio-Energy Facility
              </h4>
              <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
                Orchestrating ground-up execution for large-scale industrial bio-energy infrastructure, synchronizing civil works, heavy mechanical erection, and statutory PESO clearances.
              </p>

              {/* Supporting facts presented elegantly */}
              <div className="flex items-center gap-8 py-2">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6B67] block">
                    CAPITAL OUTLAY
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal">
                    ₹152 Cr
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-[#DEDDD7]" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6B67] block">
                    FACILITY SCALE
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal">
                    100 KLPD
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenProjectDetail(WORK_PROJECTS[2])}
                  id="explore-industrial-btn"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#171717] hover:text-[#66705B] transition-colors cursor-pointer"
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Strong Visual: Multi-Workstream Execution Matrix */}
          <div
            onClick={() => onOpenProjectDetail(WORK_PROJECTS[2])}
            className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-[#DEDDD7] hover:border-[#66705B]/60 transition-all cursor-pointer shadow-2xs group"
          >
            <div className="flex items-center justify-between border-b border-[#E5E4DE] pb-4 mb-6">
              <span className="text-xs font-mono uppercase text-[#66705B] font-semibold">
                EXECUTION FLOW · CROSS-DISCIPLINE CRITICAL PATH SYNCHRONIZATION
              </span>
              <span className="text-xs text-[#6B6B67] group-hover:text-[#171717] flex items-center gap-1">
                <span>View details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-1.5">
                <span className="font-mono text-[10px] text-[#66705B]">WORKSTREAM 01</span>
                <h5 className="font-semibold text-[#171717]">Civil & Structural</h5>
                <p className="text-[#6B6B67] text-[11px] leading-relaxed">
                  Piling foundations, heavy boiler houses, and distillation tower load-bearing frames.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-1.5">
                <span className="font-mono text-[10px] text-[#66705B]">WORKSTREAM 02</span>
                <h5 className="font-semibold text-[#171717]">Mechanical Piping</h5>
                <p className="text-[#6B6B67] text-[11px] leading-relaxed">
                  Fermentation tank farms, cooling circuits, and high-pressure steam distribution.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-1.5">
                <span className="font-mono text-[10px] text-[#66705B]">WORKSTREAM 03</span>
                <h5 className="font-semibold text-[#171717]">OEM Distillation</h5>
                <p className="text-[#6B6B67] text-[11px] leading-relaxed">
                  Liquefaction, yeast propagation, and molecular sieve dehydration column packages.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-1.5">
                <span className="font-mono text-[10px] text-[#66705B]">WORKSTREAM 04</span>
                <h5 className="font-semibold text-[#171717]">Statutory & PESO</h5>
                <p className="text-[#6B6B67] text-[11px] leading-relaxed">
                  State pollution clearances, factory inspectorate compliance, and trial batch runs.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ============================================================ */}
        {/* 04 — STRATEGY & ANALYTICS */}
        {/* ============================================================ */}
        <article className="space-y-8 pt-12 border-t border-[#DEDDD7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Metadata & Title */}
            <div className="lg:col-span-4 space-y-3">
              <span className="font-serif text-4xl sm:text-5xl text-[#66705B] block font-normal">
                04
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#171717] tracking-tight font-normal">
                STRATEGY & ANALYTICS
              </h3>
              <div className="text-xs font-mono uppercase tracking-wider text-[#66705B] font-medium">
                STRATEGY × ANALYTICS
              </div>
            </div>

            {/* Description & Headline */}
            <div className="lg:col-span-8 space-y-5">
              <h4 className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal leading-snug">
                Data-driven field strategy, polling intelligence, and decision systems for high-stakes leadership campaigns.
              </h4>
              <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
                Applied quantitative sampling, grassroots cohort research, and hypothesis testing to eliminate anecdotal bias and provide objective decision support.
              </p>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenProjectDetail(WORK_PROJECTS[3])}
                  id="explore-strategy-btn"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#171717] hover:text-[#66705B] transition-colors cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Strong Visual: Decision Support Framework */}
          <div
            onClick={() => onOpenProjectDetail(WORK_PROJECTS[3])}
            className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-[#DEDDD7] hover:border-[#66705B]/60 transition-all cursor-pointer shadow-2xs group"
          >
            <div className="flex items-center justify-between border-b border-[#E5E4DE] pb-4 mb-6">
              <span className="text-xs font-mono uppercase text-[#66705B] font-semibold">
                ANALYTICAL MODEL · GRASSROOTS SENTIMENT TO DIRECTIVE SYNTHESIS
              </span>
              <span className="text-xs text-[#6B6B67] group-hover:text-[#171717] flex items-center gap-1">
                <span>View details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                <span className="font-mono text-[10px] text-[#66705B]">INPUT</span>
                <h5 className="font-semibold text-[#171717]">Voter Cohort Mapping</h5>
                <p className="text-[#6B6B67] leading-relaxed">
                  Rigorous demographic sampling replacing campaign echo-chambers with grounded field sentiment.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                <span className="font-mono text-[10px] text-[#66705B]">PROCESSING</span>
                <h5 className="font-semibold text-[#171717]">Issue Salience Decomposition</h5>
                <p className="text-[#6B6B67] leading-relaxed">
                  Evaluating local socioeconomic constraints by civic urgency and political feasibility.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE] space-y-2">
                <span className="font-mono text-[10px] text-[#66705B]">OUTPUT</span>
                <h5 className="font-semibold text-[#171717]">Executive Directives</h5>
                <p className="text-[#6B6B67] leading-relaxed">
                  Transforming statistical models into clear, actionable candidate briefings and campaign directives.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
