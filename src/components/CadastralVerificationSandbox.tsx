import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, CheckCircle2, AlertTriangle, Layers, MapPin, Search, ShieldCheck } from 'lucide-react';

export default function CadastralVerificationSandbox() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeLayer, setActiveLayer] = useState<'all' | 'revenue' | 'cadastral'>('all');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [verifiedState, setVerifiedState] = useState<boolean>(true);

  const handleSimulateCheck = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedState(true);
    }, 800);
  };

  return (
    <div className="mt-8 rounded-2xl bg-[#F2F0E8] border border-[#DEDDD7] p-5 sm:p-7 overflow-hidden shadow-xs">
      {/* Sandbox Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#DEDDD7]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#66705B] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-[#66705B] uppercase font-semibold">
              INTERACTIVE DEMO · CADASTRAL RECONCILIATION ENGINE
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-serif text-[#171717] mt-0.5">
            Legacy Registry Archive vs. Normalized Vector Truth
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#E5E3DC] p-1 rounded-lg text-[11px] font-mono">
            <button
              onClick={() => setActiveLayer('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeLayer === 'all' ? 'bg-[#171717] text-white' : 'text-[#6B6B67] hover:text-[#171717]'
              }`}
            >
              DUAL VIEW
            </button>
            <button
              onClick={() => setActiveLayer('revenue')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeLayer === 'revenue' ? 'bg-[#171717] text-white' : 'text-[#6B6B67] hover:text-[#171717]'
              }`}
            >
              RAW REVENUE
            </button>
            <button
              onClick={() => setActiveLayer('cadastral')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeLayer === 'cadastral' ? 'bg-[#171717] text-white' : 'text-[#6B6B67] hover:text-[#171717]'
              }`}
            >
              NORMALIZED
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Visual Canvas Container */}
      <div className="relative my-6 rounded-xl overflow-hidden border border-[#DEDDD7] bg-[#EAE8E0] h-[260px] sm:h-[300px] select-none">
        {/* Layer 1 (Left - Raw Fragmented Deeds) */}
        <div
          className="absolute inset-0 bg-[#E8E4DA] p-6 flex flex-col justify-between"
          style={{ clipPath: activeLayer === 'cadastral' ? 'inset(0 100% 0 0)' : activeLayer === 'revenue' ? 'none' : `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="flex items-center justify-between text-xs font-mono text-[#8C827A]">
            <span className="flex items-center gap-1.5 font-bold">
              <AlertTriangle className="w-3.5 h-3.5 text-[#B45309]" />
              UNSTRUCTURED HISTORICAL ARCHIVE (1984–2021)
            </span>
            <span className="text-[10px] bg-[#DDD8CD] px-2 py-0.5 rounded">TELANGANA REVENUE DEPT</span>
          </div>

          {/* Graphical Representation of Fragmented Records */}
          <div className="grid grid-cols-3 gap-3 my-auto opacity-70">
            <div className="p-3 bg-[#DCD7CA] rounded-lg border border-[#C8C2B3] text-[11px] font-mono space-y-1">
              <div className="text-[10px] text-[#7A7268]">DOC #4928/2004</div>
              <div className="text-[#3A352F] font-bold">SY NO. 142/A (2.14 AC)</div>
              <div className="text-[10px] text-[#A8422B]">⚠️ Overlapping Boundary Clause</div>
            </div>
            <div className="p-3 bg-[#DCD7CA] rounded-lg border border-[#C8C2B3] text-[11px] font-mono space-y-1">
              <div className="text-[10px] text-[#7A7268]">PAHANI ENTRY 1998</div>
              <div className="text-[#3A352F] font-bold">KHATA NO. 318</div>
              <div className="text-[10px] text-[#7A7268]">Physical Stamp Seal Incomplete</div>
            </div>
            <div className="p-3 bg-[#DCD7CA] rounded-lg border border-[#C8C2B3] text-[11px] font-mono space-y-1">
              <div className="text-[10px] text-[#7A7268]">ENCUMBRANCE CERT</div>
              <div className="text-[#3A352F] font-bold">NIL LIEN REPORTED</div>
              <div className="text-[10px] text-[#B45309]">Unlinked Mortgage Caveat</div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-[#8C827A] flex items-center justify-between">
            <span>STATUS: 3 INCONSISTENCIES DETECTED</span>
            <span>HIGH TRANSACTION RISK</span>
          </div>
        </div>

        {/* Layer 2 (Right - Clean GIS Vector & Verified Cadastral Bounds) */}
        <div
          className="absolute inset-0 bg-[#FFFFFF] p-6 flex flex-col justify-between"
          style={{ clipPath: activeLayer === 'revenue' ? 'inset(0 0 0 100%)' : activeLayer === 'cadastral' ? 'none' : `inset(0 0 0 ${sliderPos}%)` }}
        >
          <div className="flex items-center justify-between text-xs font-mono text-[#66705B]">
            <span className="flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#66705B]" />
              LANDSAFE RECONCILED VECTOR SCHEMA
            </span>
            <span className="text-[10px] bg-[#F0F2EE] text-[#66705B] px-2 py-0.5 rounded font-bold">CADASTRAL VERIFIED</span>
          </div>

          {/* Clean Vector Cadastral Grid */}
          <div className="grid grid-cols-3 gap-3 my-auto">
            <div className="p-3 bg-[#F8F9F6] rounded-lg border border-[#D5DDD0] text-[11px] font-mono space-y-1">
              <div className="text-[10px] text-[#66705B]">PARCEL BOUNDARY</div>
              <div className="text-[#171717] font-bold">GPS: 17.3850° N, 78.4867° E</div>
              <div className="text-[10px] text-[#66705B]">Polygon Closure Error: 0.00%</div>
            </div>
            <div className="p-3 bg-[#F8F9F6] rounded-lg border border-[#D5DDD0] text-[11px] font-mono space-y-1">
              <div className="text-[10px] text-[#66705B]">PROVENANCE SCORE</div>
              <div className="text-[#171717] font-bold">98.4 / 100 CLEAN TITLE</div>
              <div className="text-[10px] text-[#66705B]">40-Year Continuous Chain</div>
            </div>
            <div className="p-3 bg-[#F8F9F6] rounded-lg border border-[#D5DDD0] text-[11px] font-mono space-y-1">
              <div className="text-[10px] text-[#66705B]">DILIGENCE REPORT</div>
              <div className="text-[#171717] font-bold">READY FOR DISBURSEMENT</div>
              <div className="text-[10px] text-[#66705B]">₹10 Cr+ Exposure Protected</div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-[#66705B] flex items-center justify-between">
            <span>AUDIT STATUS: DETERMINISTIC COMPLIANCE PASSED</span>
            <span>40% FASTER CLOSING TAT</span>
          </div>
        </div>

        {/* Slider Divider Bar (when dual view active) */}
        {activeLayer === 'all' && (
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#171717] cursor-ew-resize z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#171717] text-white flex items-center justify-center text-[10px] font-mono font-bold shadow-md">
              ⇆
            </div>
          </div>
        )}
      </div>

      {/* Slider Controls & Telemetry */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        {activeLayer === 'all' && (
          <div className="w-full sm:w-1/2 flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#6B6B67] shrink-0">DRAG SLIDER:</span>
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="w-full accent-[#66705B] cursor-pointer"
            />
            <span className="text-[11px] font-mono text-[#171717] shrink-0 w-8 text-right">{sliderPos}%</span>
          </div>
        )}

        <div className="w-full sm:w-auto flex items-center justify-end gap-3 ml-auto">
          <button
            onClick={handleSimulateCheck}
            disabled={isVerifying}
            className="px-4 py-2 rounded-lg bg-[#171717] hover:bg-[#333333] text-white text-xs font-mono tracking-wider transition-colors cursor-pointer flex items-center gap-2"
          >
            {isVerifying ? (
              <>
                <span className="w-3 h-3 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                <span>CROSS-VERIFYING 30+ RULES...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-3.5 h-3.5 text-[#98A38C]" />
                <span>RE-RUN PIPELINE AUDIT</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
