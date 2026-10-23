import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Factory, Layers, Cpu, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA, OSNode } from '../data/portfolioData';

interface HarithOSProps {
  onSelectProject: (projectId: string) => void;
}

export default function HarithOS({ onSelectProject }: HarithOSProps) {
  const { osNodes } = PORTFOLIO_DATA;
  const [activeNodeId, setActiveNodeId] = useState<string>('strategy');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeNode = osNodes.find((n) => n.id === activeNodeId) || osNodes[0];
  const displayedNode = osNodes.find((n) => n.id === (hoveredNodeId || activeNodeId)) || activeNode;

  // Icon mapping
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

  // Node edges/connections
  const connections = [
    { from: 'strategy', to: 'industrial-execution' },
    { from: 'strategy', to: 'proptech' },
    { from: 'strategy', to: 'ai-automation' },
    { from: 'strategy', to: 'global-community' },
    { from: 'industrial-execution', to: 'proptech' },
    { from: 'proptech', to: 'ai-automation' },
  ];

  return (
    <section id="harith-os" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
            ARCHITECTURE / HARITH.OS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          HARITH.OS
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal">
          “An evolving system of experiences, problems and experiments.”
        </p>
      </div>

      {/* Main OS Interactive Canvas Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Visual Map (Desktop SVG Network) */}
        <div className="lg:col-span-8 relative rounded-2xl bg-[#0d0f15] border border-[#1e2330] p-6 sm:p-8 min-h-[460px] sm:min-h-[520px] flex flex-col justify-between overflow-hidden shadow-2xl">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 system-grid-bg opacity-30 pointer-events-none" />

          {/* Top telemetry bar */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#1c212e] text-[11px] font-mono text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              SYSTEM MAP: 5 CONNECTED NODES
            </span>
            <span className="hidden sm:inline text-zinc-400">
              COORDINATES: LATENT KNOWLEDGE SPACE
            </span>
          </div>

          {/* Desktop SVG Canvas */}
          <div className="relative w-full h-[360px] sm:h-[400px] my-auto hidden sm:block">
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
                      stroke={isHighlighted ? 'rgba(16, 185, 129, 0.6)' : 'rgba(255, 255, 255, 0.09)'}
                      strokeWidth={isHighlighted ? '2' : '1'}
                      strokeDasharray={isHighlighted ? 'none' : '4 4'}
                      className="transition-all duration-300"
                    />
                    {isHighlighted && (
                      <circle r="2.5" fill="#34d399">
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          path={`M ${(nodeA.x / 100) * 600},${(nodeA.y / 100) * 360} L ${(nodeB.x / 100) * 600},${(nodeB.y / 100) * 360}`}
                        />
                      </circle>
                    )}
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
                    className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 focus:outline-none`}
                    id={`os-node-${node.id}`}
                  >
                    {/* Ring indicator */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-[#18202d] border-2 border-emerald-400 shadow-lg shadow-emerald-500/20 scale-110'
                          : isHovered
                          ? 'bg-[#151923] border border-zinc-500 scale-105'
                          : 'bg-[#11131a] border border-[#232838] hover:border-zinc-600'
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors ${
                          isActive
                            ? 'text-emerald-300'
                            : isHovered
                            ? 'text-white'
                            : 'text-zinc-400 group-hover:text-zinc-200'
                        }`}
                      />
                    </div>

                    {/* Node label */}
                    <div className="mt-2 px-2.5 py-1 rounded-md bg-[#0a0c12]/90 border border-[#1f2433] text-center whitespace-nowrap">
                      <p
                        className={`text-[11px] font-mono font-semibold tracking-wider uppercase transition-colors ${
                          isActive ? 'text-emerald-400' : 'text-zinc-300'
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
          <div className="sm:hidden flex flex-col gap-3 my-4">
            {osNodes.map((node, idx) => {
              const Icon = getIcon(node.id);
              const isActive = activeNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`p-4 rounded-xl text-left border flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[#161a24] border-emerald-500/60'
                      : 'bg-[#10121a] border-[#202535]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#1a1f2c] border border-zinc-700">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-zinc-400">0{idx + 1} / NODE</p>
                      <p className="text-sm font-bold text-white tracking-wide">{node.name}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-mono ${isActive ? 'text-emerald-400 font-semibold' : 'text-zinc-500'}`}>
                    {isActive ? 'ACTIVE' : 'SELECT'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom helper prompt */}
          <div className="relative z-10 pt-4 border-t border-[#1c212e] flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>HOVER TO INSPECT • CLICK TO FOCUS</span>
            <span className="text-emerald-400/80">LIVE NODE: {displayedNode.name}</span>
          </div>
        </div>

        {/* Node Focus Inspector Card */}
        <div className="lg:col-span-4 rounded-2xl bg-[#0d0f15] border border-[#1e2330] p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[460px]">
          <div className="absolute top-0 right-0 p-6 text-[80px] font-mono font-extrabold text-white/[0.02] pointer-events-none select-none">
            OS
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded bg-[#161a25] border border-[#23293b] text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                NODE INSPECTOR
              </span>
              <span className="text-xs font-mono text-zinc-500">{displayedNode.metrics}</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
              {displayedNode.name}
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-medium">
              {displayedNode.shortDesc}
            </p>

            <div className="p-4 rounded-xl bg-[#11141c] border border-[#1d2230] mb-6">
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                SYSTEM ARCHITECTURE
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {displayedNode.details}
              </p>
            </div>

            {/* Related project hooks */}
            {displayedNode.relatedProjects && displayedNode.relatedProjects.length > 0 && (
              <div>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  LINKED EXECUTION ARTIFACTS
                </p>
                <div className="space-y-2">
                  {displayedNode.relatedProjects.map((projId) => {
                    const matchedProj = PORTFOLIO_DATA.projects.find((p) => p.id === projId);
                    if (!matchedProj) return null;
                    return (
                      <div
                        key={projId}
                        onClick={() => onSelectProject(projId)}
                        className="p-3 rounded-lg bg-[#141824] hover:bg-[#1a2030] border border-[#22283a] hover:border-emerald-500/40 flex items-center justify-between cursor-pointer transition-all group"
                      >
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {matchedProj.name}
                          </p>
                          <p className="text-[11px] font-mono text-zinc-400">
                            {matchedProj.category}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 mt-6 border-t border-[#1c212e]">
            <a
              href="#work"
              className="w-full py-2.5 px-4 rounded-lg bg-[#151923] hover:bg-[#1c2230] border border-[#242b3d] hover:border-zinc-600 text-xs font-mono font-medium text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-all"
            >
              <span>DEEP DIVE IN SELECTED WORK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
