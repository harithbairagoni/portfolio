import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Award, Key, CheckCircle, Unlock, Lock } from 'lucide-react';

interface GamificationState {
  viewedPhoto: boolean;
  exploredLandsafe: boolean;
  scrubbedEthanol: boolean;
  triedPitch: boolean;
}

interface DossierClearanceProps {
  unlockedVault: boolean;
  onOpenVault: () => void;
  state: GamificationState;
}

export default function DossierClearance({
  unlockedVault,
  onOpenVault,
  state,
}: DossierClearanceProps) {
  const tasksCompleted = [
    state.viewedPhoto,
    state.exploredLandsafe,
    state.scrubbedEthanol,
    state.triedPitch,
  ].filter(Boolean).length;

  // Level 1: 0-1 tasks, Level 2: 2-3 tasks, Level 3: 4 tasks (Unlocked!)
  const level = tasksCompleted >= 3 ? 3 : tasksCompleted >= 1 ? 2 : 1;
  const isUnlocked = tasksCompleted >= 3 || unlockedVault;

  return (
    <div className="fixed bottom-6 right-6 z-[95]">
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpenVault}
        className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-full shadow-xl backdrop-blur-md border transition-all cursor-pointer ${
          isUnlocked
            ? 'bg-[#171717] text-white border-[#66705B] ring-2 ring-[#66705B]/30'
            : 'bg-[#FFFFFF]/95 text-[#171717] border-[#DEDDD7] hover:border-[#66705B]'
        }`}
      >
        {/* Pulsing state dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isUnlocked ? 'bg-[#98A38C]' : 'bg-[#C4C3BC]'
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              isUnlocked ? 'bg-[#66705B]' : 'bg-[#8C8A82]'
            }`}
          />
        </span>

        {/* Clearance Level Label */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-[#8C8A82] hidden sm:inline">DOSSIER CLEARANCE:</span>
          <span className="font-bold tracking-wider">
            {isUnlocked ? 'LEVEL 3 · UNLOCKED' : `LEVEL 0${level}`}
          </span>
        </div>

        {/* Lock/Unlock Icon */}
        <div
          className={`p-1 rounded-full ${
            isUnlocked ? 'bg-[#262C22] text-[#98A38C]' : 'bg-[#EAE8E0] text-[#6B6B67]'
          }`}
        >
          {isUnlocked ? (
            <Unlock className="w-3.5 h-3.5 text-[#98A38C] animate-pulse" />
          ) : (
            <Lock className="w-3.5 h-3.5" />
          )}
        </div>

        {/* Tooltip on hover if not unlocked */}
        {!isUnlocked && (
          <div className="absolute bottom-full right-0 mb-2 w-56 p-2.5 rounded-xl bg-[#171717] text-white text-[11px] font-mono opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg space-y-1">
            <div className="font-bold text-[#98A38C]">INTERACTIVE PROGRESS: {tasksCompleted}/3</div>
            <div className="text-zinc-400">
              Interact with photo cards, the ₹152 Cr scrubber & LANDSAFE to unlock the Secret Vault.
            </div>
          </div>
        )}
      </motion.button>
    </div>
  );
}
