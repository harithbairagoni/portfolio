import { motion, useTransform, MotionValue } from 'motion/react';

interface HeroAbstractSystemProps {
  scrollYProgress: MotionValue<number>;
  isReducedMotion?: boolean;
}

export default function HeroAbstractSystem({
  scrollYProgress,
  isReducedMotion = false
}: HeroAbstractSystemProps) {
  // Sculpture container opacity (dissolves as it transitions into the real work bridge)
  const sculptureOpacity = useTransform(
    scrollYProgress,
    [0, 0.74, 0.82],
    [1, 1, 0]
  );

  // Subtle rotation tied directly to scroll progress
  const sculptureRotate = useTransform(scrollYProgress, [0, 0.8], [0, 90]);

  // Stage 02: Discipline Nodes activation & convergence
  // Node distance from center: starts at 130px, tightens to 110px, converges to 26px
  const nodeDistance = useTransform(
    scrollYProgress,
    [0.18, 0.38, 0.52, 0.62],
    [130, 120, 100, 26]
  );

  // Opacity of discipline labels & connectors in Stage 02
  const disciplinesOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.28, 0.52, 0.58],
    [0, 1, 1, 0]
  );

  // Central BUILD emblem in Stage 03
  const buildEmblemOpacity = useTransform(
    scrollYProgress,
    [0.54, 0.60, 0.74, 0.80],
    [0, 1, 1, 0]
  );
  const buildEmblemScale = useTransform(
    scrollYProgress,
    [0.54, 0.62],
    [0.75, 1]
  );

  // Stage 03: Sequential reveal of PRODUCTS, SYSTEMS, BUSINESSES
  const productsOpacity = useTransform(
    scrollYProgress,
    [0.54, 0.60, 0.74, 0.80],
    [0, 1, 1, 0]
  );
  const systemsOpacity = useTransform(
    scrollYProgress,
    [0.60, 0.66, 0.74, 0.80],
    [0, 1, 1, 0]
  );
  const businessesOpacity = useTransform(
    scrollYProgress,
    [0.66, 0.72, 0.74, 0.80],
    [0, 1, 1, 0]
  );

  // Metaphor flow rail: IDEA → SYSTEM → PRODUCT → IMPACT
  const flowRailOpacity = useTransform(
    scrollYProgress,
    [0.58, 0.64, 0.74, 0.80],
    [0, 1, 1, 0]
  );

  // Stage 04: Real-world venture preview labels
  const stage4BridgeOpacity = useTransform(
    scrollYProgress,
    [0.76, 0.82, 0.98, 1],
    [0, 1, 1, 0.6]
  );
  const venture1Opacity = useTransform(scrollYProgress, [0.78, 0.84], [0, 1]);
  const venture2Opacity = useTransform(scrollYProgress, [0.84, 0.90], [0, 1]);
  const venture3Opacity = useTransform(scrollYProgress, [0.90, 0.96], [0, 1]);

  if (isReducedMotion) {
    // Static editorial sculpture for reduced motion
    return (
      <div className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center select-none">
        <svg
          viewBox="0 0 440 440"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Static Concentric Circles */}
          <circle cx="220" cy="220" r="180" stroke="#DEDDD7" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="220" cy="220" r="125" stroke="#E6E5DF" strokeWidth="1" />
          <circle cx="220" cy="220" r="60" stroke="#66705B" strokeWidth="1.25" />
          <circle cx="220" cy="220" r="28" fill="#FAF9F5" stroke="#171717" strokeWidth="1" />
          <circle cx="220" cy="220" r="3" fill="#171717" />
          {/* Subtle Axes */}
          <line x1="220" y1="35" x2="220" y2="405" stroke="#EAE9E3" strokeWidth="0.75" />
          <line x1="35" y1="220" x2="405" y2="220" stroke="#EAE9E3" strokeWidth="0.75" />
          {/* Tripartite Discipline Nodes */}
          <circle cx="220" cy="90" r="7" fill="#FAF9F5" stroke="#66705B" strokeWidth="1.5" />
          <circle cx="330" cy="285" r="7" fill="#FAF9F5" stroke="#66705B" strokeWidth="1.5" />
          <circle cx="110" cy="285" r="7" fill="#FAF9F5" stroke="#66705B" strokeWidth="1.5" />
          {/* Labels */}
          <text x="220" y="72" textAnchor="middle" className="font-mono text-[10px] uppercase fill-[#171717] tracking-widest font-semibold">
            Technology
          </text>
          <text x="345" y="302" textAnchor="start" className="font-mono text-[10px] uppercase fill-[#171717] tracking-widest font-semibold">
            Strategy
          </text>
          <text x="95" y="302" textAnchor="end" className="font-mono text-[10px] uppercase fill-[#171717] tracking-widest font-semibold">
            Execution
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[420px] lg:max-w-[460px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* ============================================================ */}
      {/* 1. EDITORIAL ABSTRACT SCULPTURE (Stages 01 - 03) */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: sculptureOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Rotating Geometric System */}
        <motion.div
          style={{ rotate: sculptureRotate }}
          className="w-full h-full relative flex items-center justify-center"
        >
          <svg
            viewBox="0 0 440 440"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Concentric Calibration Rings */}
            <circle
              cx="220"
              cy="220"
              r="190"
              stroke="#DEDDD7"
              strokeWidth="1"
              strokeDasharray="3 6"
              className="opacity-70"
            />
            <circle
              cx="220"
              cy="220"
              r="135"
              stroke="#E8E7E1"
              strokeWidth="1"
              className="opacity-80"
            />
            <circle
              cx="220"
              cy="220"
              r="80"
              stroke="#DEDDD7"
              strokeWidth="0.75"
              strokeDasharray="2 4"
            />
            <circle
              cx="220"
              cy="220"
              r="40"
              stroke="#66705B"
              strokeWidth="1.25"
              className="opacity-90"
            />

            {/* Subtle Crosshair Lines */}
            <line x1="220" y1="30" x2="220" y2="410" stroke="#ECEBE5" strokeWidth="0.75" />
            <line x1="30" y1="220" x2="410" y2="220" stroke="#ECEBE5" strokeWidth="0.75" />

            {/* Editorial Calibration Marks & Degree Readings */}
            <text x="220" y="24" textAnchor="middle" className="font-mono text-[8px] fill-[#6B6B67] tracking-widest">
              000° / SYS
            </text>
            <text x="424" y="223" textAnchor="start" className="font-mono text-[8px] fill-[#6B6B67] tracking-widest">
              090°
            </text>
            <text x="220" y="424" textAnchor="middle" className="font-mono text-[8px] fill-[#6B6B67] tracking-widest">
              180°
            </text>
            <text x="16" y="223" textAnchor="end" className="font-mono text-[8px] fill-[#6B6B67] tracking-widest">
              270°
            </text>

            {/* Central Anchor Dot */}
            <circle cx="220" cy="220" r="3.5" fill="#171717" />
          </svg>
        </motion.div>

        {/* Dynamic Tripartite Discipline System Overlay (Counter-rotates / Stays Level) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Node 1: TECHNOLOGY (Top: angle -90°) */}
          <motion.div
            style={{
              y: useTransform(nodeDistance, (d) => -d),
              x: 0,
            }}
            className="absolute flex flex-col items-center"
          >
            <div className="w-4 h-4 rounded-full bg-[#FAF9F5] border-2 border-[#66705B] flex items-center justify-center shadow-2xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
            </div>
            <motion.div
              style={{ opacity: disciplinesOpacity }}
              className="mt-2.5 px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#DEDDD7] shadow-2xs whitespace-nowrap"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-[#171717]">
                TECHNOLOGY
              </span>
            </motion.div>
          </motion.div>

          {/* Node 2: STRATEGY (Bottom Right: angle 30°) */}
          <motion.div
            style={{
              x: useTransform(nodeDistance, (d) => d * 0.866),
              y: useTransform(nodeDistance, (d) => d * 0.5),
            }}
            className="absolute flex flex-col items-center"
          >
            <div className="w-4 h-4 rounded-full bg-[#FAF9F5] border-2 border-[#66705B] flex items-center justify-center shadow-2xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
            </div>
            <motion.div
              style={{ opacity: disciplinesOpacity }}
              className="mt-2.5 px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#DEDDD7] shadow-2xs whitespace-nowrap"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-[#171717]">
                STRATEGY
              </span>
            </motion.div>
          </motion.div>

          {/* Node 3: EXECUTION (Bottom Left: angle 150°) */}
          <motion.div
            style={{
              x: useTransform(nodeDistance, (d) => -d * 0.866),
              y: useTransform(nodeDistance, (d) => d * 0.5),
            }}
            className="absolute flex flex-col items-center"
          >
            <div className="w-4 h-4 rounded-full bg-[#FAF9F5] border-2 border-[#66705B] flex items-center justify-center shadow-2xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
            </div>
            <motion.div
              style={{ opacity: disciplinesOpacity }}
              className="mt-2.5 px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#DEDDD7] shadow-2xs whitespace-nowrap"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-[#171717]">
                EXECUTION
              </span>
            </motion.div>
          </motion.div>

          {/* Stage 02 Connecting Metaphor Label */}
          <motion.div
            style={{ opacity: disciplinesOpacity }}
            className="absolute bottom-6 font-mono text-[10px] tracking-[0.18em] text-[#66705B] uppercase font-semibold text-center"
          >
            DIFFERENT DISCIPLINES → CONNECTED SYSTEM
          </motion.div>

          {/* ============================================================ */}
          {/* Stage 03: Central Convergence Emblem: "BUILD" */}
          {/* ============================================================ */}
          <motion.div
            style={{
              opacity: buildEmblemOpacity,
              scale: buildEmblemScale
            }}
            className="absolute flex flex-col items-center justify-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FAF9F5] border-2 border-[#171717] flex flex-col items-center justify-center shadow-md relative group">
              <span className="font-serif text-xl sm:text-2xl text-[#171717] font-normal tracking-wide">
                BUILD
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#66705B] uppercase mt-0.5">
                NEXUS
              </span>
              {/* Subtle halo pulse */}
              <div className="absolute -inset-2 rounded-full border border-[#66705B]/30 animate-pulse pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 2. STAGE 03 OUTCOMES REVEAL: PRODUCTS, SYSTEMS, BUSINESSES */}
      {/* ============================================================ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {/* Sequential Outcome 1: PRODUCTS */}
        <motion.div
          style={{ opacity: productsOpacity }}
          className="absolute top-10 sm:top-12 px-4 py-2 rounded-xl bg-[#FAF9F5] border border-[#DEDDD7] shadow-xs flex items-center gap-2.5"
        >
          <span className="w-2 h-2 rounded-full bg-[#66705B]" />
          <div>
            <span className="font-serif text-base sm:text-lg text-[#171717] block leading-tight font-normal">
              PRODUCTS
            </span>
            <span className="font-mono text-[9px] text-[#6B6B67] uppercase tracking-wider block">
              Tangible interfaces · User workflows
            </span>
          </div>
        </motion.div>

        {/* Sequential Outcome 2: SYSTEMS */}
        <motion.div
          style={{ opacity: systemsOpacity }}
          className="absolute right-4 sm:right-6 bottom-16 sm:bottom-20 px-4 py-2 rounded-xl bg-[#FAF9F5] border border-[#DEDDD7] shadow-xs flex items-center gap-2.5"
        >
          <span className="w-2 h-2 rounded-full bg-[#66705B]" />
          <div>
            <span className="font-serif text-base sm:text-lg text-[#171717] block leading-tight font-normal">
              SYSTEMS
            </span>
            <span className="font-mono text-[9px] text-[#6B6B67] uppercase tracking-wider block">
              Operational pipelines · Orchestration
            </span>
          </div>
        </motion.div>

        {/* Sequential Outcome 3: BUSINESSES */}
        <motion.div
          style={{ opacity: businessesOpacity }}
          className="absolute left-4 sm:left-6 bottom-16 sm:bottom-20 px-4 py-2 rounded-xl bg-[#FAF9F5] border border-[#DEDDD7] shadow-xs flex items-center gap-2.5"
        >
          <span className="w-2 h-2 rounded-full bg-[#66705B]" />
          <div>
            <span className="font-serif text-base sm:text-lg text-[#171717] block leading-tight font-normal">
              BUSINESSES
            </span>
            <span className="font-mono text-[9px] text-[#6B6B67] uppercase tracking-wider block">
              Sustainable value · Strategic scale
            </span>
          </div>
        </motion.div>

        {/* Metaphor Flow Rail */}
        <motion.div
          style={{ opacity: flowRailOpacity }}
          className="absolute -bottom-4 px-3.5 py-1 rounded-full bg-[#FAF9F5] border border-[#DEDDD7] text-[10px] font-mono tracking-widest text-[#66705B] uppercase font-semibold shadow-2xs whitespace-nowrap"
        >
          IDEA → SYSTEM → PRODUCT → IMPACT
        </motion.div>
      </div>

      {/* ============================================================ */}
      {/* 3. STAGE 04: TRANSITION INTO REAL WORK EXPERIENCE */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: stage4BridgeOpacity }}
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-auto p-4"
      >
        <div className="w-full max-w-sm space-y-3.5">
          <div className="text-center space-y-1 mb-2">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#66705B] font-bold block">
              CROSS-DISCIPLINARY EXECUTION
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[#171717] font-normal">
              Real-World Systems
            </h4>
          </div>

          {/* Sequential Label 1: LANDSAFE */}
          <motion.div
            style={{ opacity: venture1Opacity }}
            className="p-3 rounded-xl bg-[#FAF9F5] border border-[#DEDDD7] shadow-2xs flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-base">🏗️</span>
              <div>
                <span className="font-serif text-sm font-semibold text-[#171717] block leading-tight">
                  LANDSAFE
                </span>
                <span className="font-mono text-[10px] text-[#6B6B67] uppercase tracking-wider">
                  PropTech · Land Diligence Systems
                </span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#66705B] font-bold">01</span>
          </motion.div>

          {/* Sequential Label 2: VIVEK BIO PRODUCTS */}
          <motion.div
            style={{ opacity: venture2Opacity }}
            className="p-3 rounded-xl bg-[#FAF9F5] border border-[#DEDDD7] shadow-2xs flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-base">⚙️</span>
              <div>
                <span className="font-serif text-sm font-semibold text-[#171717] block leading-tight">
                  VIVEK BIO PRODUCTS
                </span>
                <span className="font-mono text-[10px] text-[#6B6B67] uppercase tracking-wider">
                  Industrial Scale · ₹152 Cr Facility
                </span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#66705B] font-bold">02</span>
          </motion.div>

          {/* Sequential Label 3: RASHTRA */}
          <motion.div
            style={{ opacity: venture3Opacity }}
            className="p-3 rounded-xl bg-[#FAF9F5] border border-[#DEDDD7] shadow-2xs flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-base">📊</span>
              <div>
                <span className="font-serif text-sm font-semibold text-[#171717] block leading-tight">
                  RASHTRA
                </span>
                <span className="font-mono text-[10px] text-[#6B6B67] uppercase tracking-wider">
                  Civic Research & Analytics (4M+ Voters)
                </span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#66705B] font-bold">03</span>
          </motion.div>

          <div className="pt-2 text-center">
            <span className="font-mono text-[10px] tracking-widest text-[#66705B] uppercase font-semibold animate-pulse">
              WORK EXPERIENCE BELOW ↓
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
