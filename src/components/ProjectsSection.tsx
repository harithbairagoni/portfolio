import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import ColdConnectDemo from './ColdConnectDemo';
import { ProjectDetailData } from './ProjectDetailModal';

interface ProjectsSectionProps {
  onOpenProjectDetail: (project: ProjectDetailData) => void;
}

export const COLD_CONNECT_PROJECT_DATA: ProjectDetailData = {
  number: '01',
  id: 'cold-connect',
  name: 'COLD CONNECT',
  category: 'AI × PRODUCT',
  thesis: 'An AI-powered networking copilot designed to help professionals research who they’re meeting, sharpen their pitch, and stay connected.',
  problem:
    'Ambitious professionals and MBA students often secure rare 20-minute executive conversations but walk in unprepared—resorting to superficial small talk or unfocused rambling, wasting valuable connection leverage.',
  whatIBuilt: {
    title: '3-Stage Preparation Pipeline',
    description:
      'End-to-end interactive workflow software comprising Target Context Synthesis, 60s Rehearsal Studio with cadence monitoring, and automated multi-touch follow-up cadences.',
    visualType: 'coldconnect'
  },
  howItWorks: {
    steps: [
      { step: '01', label: 'Know Them', desc: 'Synthesizes career trajectory, hooks, and strategic taboos to avoid.' },
      { step: '02', label: 'Meet Them', desc: 'Structures 3-part pitch with 60s countdown timer and 130-140 WPM pace tracking.' },
      { step: '03', label: 'Stay Connected', desc: 'Generates tailored email & LinkedIn drafts and cadence reminders.' }
    ]
  },
  whatILearned:
    'Great AI products do not simply slap a chatbot on a problem; they deconstruct the human psychological anxiety curve into discrete, repeatable steps with tangible feedback.',
  verifiedFacts: [
    { label: 'STATUS', value: 'Interactive Prototype' },
    { label: 'METHOD', value: '3-Stage Pipeline' },
    { label: 'INTEGRITY', value: 'Zero Hallucinated Metrics' }
  ]
};

export default function ProjectsSection({ onOpenProjectDetail }: ProjectsSectionProps) {
  // Cold Connect interactive preview is expanded by default to give an immediate authentic feel
  const [isColdConnectExpanded, setIsColdConnectExpanded] = useState<boolean>(true);

  return (
    <section id="projects" className="py-24 sm:py-36 px-5 sm:px-10 lg:px-20 max-w-[1280px] mx-auto border-t border-[#DEDDD7]">
      {/* Section Header */}
      <div className="space-y-4 mb-20 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
          PROJECTS
        </span>
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#171717] font-normal tracking-tight">
          Things I’ve built, experimented with and explored.
        </h2>
        <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
          Focused software products and intelligent workflows engineered to solve concrete friction points.
        </p>
      </div>

      {/* Featured Single Flagship Project: COLD CONNECT */}
      <article className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Project Identity & Metas */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-serif text-4xl sm:text-5xl text-[#66705B] block font-normal">
              01
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#171717] tracking-tight font-normal">
              COLD CONNECT
            </h3>
            <div className="text-xs font-mono uppercase tracking-wider text-[#66705B] font-medium">
              AI × PRODUCT
            </div>
          </div>

          {/* Right: Headlines & Actions */}
          <div className="lg:col-span-8 space-y-5">
            <h4 className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal leading-snug">
              Never walk into a networking conversation unprepared.
            </h4>
            <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
              “An AI-powered networking copilot designed to help professionals research who they’re meeting, sharpen their pitch, and stay connected.”
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm">
              <button
                onClick={() => setIsColdConnectExpanded((prev) => !prev)}
                id="try-cold-connect-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171717] text-[#FFFFFF] font-medium hover:bg-[#333333] transition-colors cursor-pointer"
              >
                <span>{isColdConnectExpanded ? 'COLLAPSE DEMO' : 'TRY COLD CONNECT →'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenProjectDetail(COLD_CONNECT_PROJECT_DATA)}
                id="about-cold-connect-btn"
                className="inline-flex items-center gap-1.5 text-[#6B6B67] hover:text-[#171717] transition-colors cursor-pointer text-xs font-mono uppercase tracking-wider"
              >
                <span>ABOUT THE PROJECT →</span>
              </button>
            </div>
          </div>
        </div>

        {/* Embedded Product Interface */}
        <div className="pt-4">
          {isColdConnectExpanded ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#6B6B67] px-1">
                <span>INTERACTIVE PRODUCT PROTOTYPE</span>
                <span>AUTHENTIC PRODUCT UI · SIMULATED DATA</span>
              </div>
              {/* Cold Connect Product Demo with Dedicated SaaS Aesthetic */}
              <ColdConnectDemo
                onOpenAboutProject={() => onOpenProjectDetail(COLD_CONNECT_PROJECT_DATA)}
              />
            </motion.div>
          ) : (
            /* Collapsed Visual Teaser with Cold Connect Brand Styling */
            <div
              onClick={() => setIsColdConnectExpanded(true)}
              className="p-8 sm:p-10 rounded-2xl bg-[#FAF9F6] border border-[#E4E5E1] hover:border-[#004D3F]/50 transition-all cursor-pointer group shadow-2xs text-[#17201D]"
            >
              <div className="flex items-center justify-between border-b border-[#E4E5E1] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#004D3F]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#004D3F] font-bold">
                    KNOW THEM → MEET THEM → STAY CONNECTED
                  </span>
                </div>
                <span className="text-xs text-[#004D3F] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium font-mono">
                  Click to launch interactive product demo →
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4E5E1] space-y-1.5 shadow-2xs">
                  <span className="font-mono text-[10px] text-[#004D3F] font-bold">STAGE 01</span>
                  <h5 className="font-bold text-[#17201D]">Know Them</h5>
                  <p className="text-[#46504C] leading-relaxed text-[11px]">
                    Simulated networking brief with trajectory analysis, conversational hooks, and strategic taboos.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4E5E1] space-y-1.5 shadow-2xs">
                  <span className="font-mono text-[10px] text-[#004D3F] font-bold">STAGE 02</span>
                  <h5 className="font-bold text-[#17201D]">Meet Them</h5>
                  <p className="text-[#46504C] leading-relaxed text-[11px]">
                    Live editable 60s pitch with rehearsal timer, pace tracking (WPM), and simulated AI rubric scoring.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4E5E1] space-y-1.5 shadow-2xs">
                  <span className="font-mono text-[10px] text-[#004D3F] font-bold">STAGE 03</span>
                  <h5 className="font-bold text-[#17201D]">Stay Connected</h5>
                  <p className="text-[#46504C] leading-relaxed text-[11px]">
                    Automated post-meeting email and LinkedIn note drafts with multi-touch relationship cadences.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
