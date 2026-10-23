import { useState, useEffect } from 'react';
import { Activity, Cpu, Layers, Sparkles, Terminal, Radio } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function BuildingNow() {
  const { buildingNow } = PORTFOLIO_DATA;
  const [liveUptime, setLiveUptime] = useState('99.98%');
  const [activeCycle, setActiveCycle] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCycle((prev) => (prev % 4) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="building-now" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#1a1f2c]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              LIVE SYSTEM TELEMETRY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            WHAT I’M BUILDING NOW
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal">
            Real-time dashboard of current focus areas across software leverage, venture scaling, and cognitive models.
          </p>
        </div>

        {/* Currently Exploring Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11141e] border border-[#23293a] text-xs font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-emerald-400">CURRENTLY EXPLORING:</span>
          <span className="text-zinc-400">CLOSED-LOOP AGENT PIPELINES</span>
        </div>
      </div>

      {/* Dashboard Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {buildingNow.map((item, idx) => {
          const isFocused = activeCycle === idx + 1;

          return (
            <div
              key={item.category}
              className={`rounded-2xl bg-[#0d0f15] border p-6 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                isFocused
                  ? 'border-emerald-500/50 bg-[#10131d]'
                  : 'border-[#1e2330] hover:border-zinc-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1b202e] text-[11px] font-mono">
                  <span className="text-zinc-500">CORE 0{idx + 1}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${
                      isFocused
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                        : 'bg-zinc-900 text-zinc-400'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {item.category}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-normal">
                  {item.currentFocus}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1a1f2c]">
                <p className="text-[10px] font-mono uppercase text-zinc-500 mb-1">
                  STACK & PRIMITIVES:
                </p>
                <p className="text-[11px] font-mono text-emerald-400/90 font-medium">
                  {item.tech}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* System Status Banner */}
      <div className="mt-8 p-4 rounded-xl bg-[#090b10] border border-[#1b202e] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-3">
          <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>HARITH.OS CORE STATUS: OPERATIONAL</span>
        </div>
        <div className="flex items-center gap-6">
          <span>PIPELINE HEALTH: OPTIMAL</span>
          <span className="text-emerald-400">STATE: ITERATING IN PUBLIC</span>
        </div>
      </div>
    </section>
  );
}
