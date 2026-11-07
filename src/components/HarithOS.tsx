import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Factory, Layers, Cpu, Globe, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HarithOSProps {
  onSelectProject?: (projectId: string) => void;
}

export default function HarithOS({ onSelectProject }: HarithOSProps) {
  const { osNodes } = PORTFOLIO_DATA;
  const [activeNodeId, setActiveNodeId] = useState<string>('strategy');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeNode = osNodes.find((n) => n.id === activeNodeId) || osNodes[0];
  const displayedNode = osNodes.find((n) => n.id === (hoveredNodeId || activeNodeId)) || activeNode;

  const getIcon = (id: string) => {
    switch (id) {
      case 'strategy':
        return Compass;
      case 'industrial-execution':
        return Factory;
      case 'proptech':
        return Layers;
      case 'ai-automation':
        return Cpu;
      case 'global-community':
        return Globe;
      default:
        return Compass;
    }
  };

  const connections = [
    { from: 'strategy', to: 'industrial-execution' },
    { from: 'strategy', to: 'proptech' },
    { from: 'strategy', to: 'ai-automation' },
    { from: 'strategy', to: 'global-community' },
    { from: 'industrial-execution', to: 'proptech' },
    { from: 'proptech', to: 'ai-automation' },
  ];

  return (
    <section id="harith-os" className="py-24 sm:py-36 px-5 sm:px-10 lg:px-20 max-w-[1280px] mx-auto border-t border-[#DEDDD7]">
      {/* Editorial Header */}
      <div className="space-y-4 mb-16 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
          SYSTEM ARCHITECTURE · INTERACTIVE KNOWLEDGE GRAPH
        </span>
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#171717] font-normal tracking-tight">
          HARITH.OS
        </h2>
        <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
          An evolving system connecting strategy, physical execution, PropTech infrastructure, and autonomous AI agents.
        </p>
      </div>

      {/* Main Interactive Blueprint Canvas Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Visual Map (Desktop Blueprint Canvas) */}
        <div className="lg:col-span-8 relative rounded-2xl bg-[#EFECE6] border border-[#DEDDD7] p-6 sm:p-8 min-h-[460px] sm:min-h-[520px] flex flex-col justify-between overflow-hidden shadow-xs">
          {/* Subtle architectural dot grid background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: 'radial-gradient(#C8C4B8 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Top telemetry bar */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#DCD7CA] text-xs font-mono text-[#6B6B67]">
            <span className="flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#66705B] animate-pulse" />
              SYSTEM MAP: 5 CONNECTED DOMAIN NODES
            </span>
            <span className="hidden sm:inline text-[#8C8A82]">
              COORDINATES: LATENT EXPERIENCE SPACE
            </span>
          </div>

          {/* Desktop SVG Canvas */}
          <div className="relative w-full h-[340px] sm:h-[380px] my-auto hidden sm:block">
            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {connections.map(({ from, to }, idx) => {
                const nodeA = osNodes.find((n) => n.id === from);
                const nodeB = osNodes.find((n) => n.id === to);
                if (!nodeA || !nodeB) return null;

                const isHighlighted =
                  displayedNode.id === from || displayedNode.id === to;

                return (
                  <g key={`${from}-${to}-${idx}`}>
                    <line
                      x1={`${nodeA.x}%`}
                      y1={`${nodeA.y}%`}
                      x2={`${nodeB.x}%`}
                      y2={`${nodeB.y}%`}
                      stroke={isHighlighted ? '#66705B' : '#D0CBC0'}
                      strokeWidth={isHighlighted ? '2' : '1'}
                      strokeDasharray={isHighlighted ? 'none' : '4 4'}
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Interactive Node Anchors */}
            {osNodes.map((node) => {
              const Icon = getIcon(node.id);
              const isActive = activeNodeId === node.id;
              const isHovered = hoveredNodeId === node.id;

              return (
                <div
                  key={node.id}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <button
                    onClick={() => setActiveNodeId(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    className="group relative flex flex-col items-center cursor-pointer transition-all duration-300 focus:outline-none"
                    id={`os-node-${node.id}`}
                  >
                    {/* Ring indicator */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-[#171717] text-white border-2 border-[#171717] shadow-lg scale-110'
                          : isHovered
                          ? 'bg-[#FFFFFF] text-[#171717] border border-[#66705B] scale-105 shadow-sm'
                          : 'bg-[#F7F6F2] text-[#6B6B67] border border-[#DEDDD7] hover:border-[#66705B]'
                      }`}
                    >
                      <Icon className="w-6 h-6 transition-colors" />
                    </div>

                    {/* Node label */}
                    <div className="mt-2 px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#DEDDD7] text-center whitespace-nowrap shadow-xs">
                      <p
                        className={`text-[10px] font-mono font-bold tracking-wider uppercase transition-colors ${
                          isActive ? 'text-[#66705B]' : 'text-[#171717]'
                        }`}
                      >
                        {node.name}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Interactive Experience */}
          <div className="sm:hidden flex flex-col gap-2.5 my-4">
            {osNodes.map((node, idx) => {
              const Icon = getIcon(node.id);
              const isActive = activeNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`p-3.5 rounded-xl text-left border flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[#171717] text-white border-[#171717]'
                      : 'bg-[#FFFFFF] text-[#171717] border-[#DEDDD7]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-[#333333]' : 'bg-[#F7F6F2]'}`}>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#98A38C]' : 'text-[#66705B]'}`} />
                    </div>
                    <div>
                      <p className={`text-[10px] font-mono ${isActive ? 'text-zinc-400' : 'text-[#6B6B67]'}`}>
                        0{idx + 1} / NODE
                      </p>
                      <p className="text-xs font-bold tracking-wide">{node.name}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#98A38C]' : 'text-[#6B6B67]'}`}>
                    {isActive ? 'ACTIVE' : 'INSPECT'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom helper prompt */}
          <div className="relative z-10 pt-4 border-t border-[#DCD7CA] flex items-center justify-between text-xs font-mono text-[#6B6B67]">
            <span>HOVER TO PREVIEW · CLICK TO FOCUS</span>
            <span className="text-[#66705B] font-bold">NODE: {displayedNode.name}</span>
          </div>
        </div>

        {/* Node Focus Inspector Card */}
        <div className="lg:col-span-4 rounded-2xl bg-[#FFFFFF] border border-[#DEDDD7] p-6 sm:p-7 flex flex-col justify-between shadow-xs relative overflow-hidden min-h-[460px] sm:min-h-[520px]">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EFECE6]">
              <span className="px-2.5 py-1 rounded bg-[#F0F2EE] text-[10px] font-mono text-[#66705B] font-bold uppercase tracking-wider">
                NODE INSPECTOR
              </span>
              <span className="text-xs font-mono text-[#6B6B67]">{displayedNode.metrics}</span>
            </div>

            <h3 className="font-serif text-3xl font-normal text-[#171717] mb-2">
              {displayedNode.name}
            </h3>

            <p className="text-sm text-[#6B6B67] leading-relaxed mb-6 font-light">
              {displayedNode.shortDesc}
            </p>

            <div className="p-4 rounded-xl bg-[#F7F6F2] border border-[#E8E6DF] mb-6">
              <p className="text-[10px] font-mono text-[#66705B] font-bold uppercase tracking-wider mb-2">
                SYSTEM ARCHITECTURE
              </p>
              <p className="text-xs text-[#333333] leading-relaxed">
                {displayedNode.details}
              </p>
            </div>

            {/* Related project hooks */}
            {displayedNode.relatedProjects && displayedNode.relatedProjects.length > 0 && (
              <div>
                <p className="text-[10px] font-mono text-[#6B6B67] uppercase tracking-wider mb-2">
                  LINKED EXECUTION ARTIFACTS
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {displayedNode.relatedProjects.map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-md bg-[#F2F0E8] border border-[#E0DDCF] text-[11px] font-mono text-[#171717]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-[#EFECE6] flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#6B6B67]">
              VERIFIED SYSTEMS THESIS
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#66705B] font-bold">
              <span>EXPLORE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
