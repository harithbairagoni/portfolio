import { Sparkles, Command } from 'lucide-react';

interface FloatingActionDockProps {
  onOpenAskHarith: () => void;
  onOpenCommandPalette: () => void;
}

export default function FloatingActionDock({
  onOpenAskHarith,
  onOpenCommandPalette,
}: FloatingActionDockProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[90] flex items-center gap-2">
      {/* Quick Command Palette Button */}
      <button
        onClick={onOpenCommandPalette}
        className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#171717] border border-[#DEDDD7] shadow-lg backdrop-blur-md text-xs font-mono transition-all hover:scale-105 cursor-pointer"
        title="Open Command Palette (Cmd + K)"
      >
        <Command className="w-3.5 h-3.5 text-[#66705B]" />
        <span>⌘K</span>
      </button>

      {/* Primary Floating AI Ask Copilot Button */}
      <button
        onClick={onOpenAskHarith}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#171717] hover:bg-[#333333] text-white shadow-xl backdrop-blur-md text-xs font-mono tracking-wider transition-all hover:scale-105 cursor-pointer border border-white/10 group"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#98A38C] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#66705B]" />
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#98A38C] group-hover:rotate-12 transition-transform" />
        <span>ASK HARITH (AI)</span>
      </button>
    </div>
  );
}
