import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown, ChevronUp, MapPin, Calendar, CheckCircle2, ShieldCheck, Factory, BarChart3, Layers, Compass, ExternalLink } from 'lucide-react';
import { ProjectDetailData } from './ProjectDetailModal';
import CadastralVerificationSandbox from './CadastralVerificationSandbox';
import IndustrialScrubberSandbox from './IndustrialScrubberSandbox';

interface WorkExperienceSectionProps {
  onOpenExperienceDetail: (experience: ProjectDetailData) => void;
}

export interface WorkExperienceItem {
  number: string;
  id: string;
  name: string;
  role: string;
  category: string;
  tagline: string;
  shortDescription: string;
  location: string;
  dates: string;
  visualMarker: string; // Tasteful secondary marker
  keyFact?: string;
  expandedDetails: {
    context: string;
    coreWorkstreams: { title: string; desc: string }[];
    outcomes: string[];
    whatILearned: string;
  };
  modalData: ProjectDetailData;
}

export const WORK_EXPERIENCES: WorkExperienceItem[] = [
  {
    number: '01',
    id: 'landsafe',
    name: 'LANDSAFE',
    role: 'Director of Operations & Co-Founder',
    category: 'PropTech · Land Diligence',
    tagline: 'Improving transparency and efficiency in India’s land ecosystem.',
    shortDescription:
      'Co-founded LANDSAFE to transform opaque, fragmented revenue archives and physical registry records into structured, verifiable land intelligence.',
    location: 'Hyderabad, India',
    dates: 'Aug 2025 – Present',
    visualMarker: 'CADASTRAL MAP',
    keyFact: '40% TAT Reduction · 20+ Properties',
    expandedDetails: {
      context:
        'Land due diligence across India is fraught with information asymmetry, fragmented revenue departments, and inconsistent cadastral maps. LANDSAFE creates a single source of verified truth.',
      coreWorkstreams: [
        {
          title: 'Document Normalization Pipeline',
          desc: 'Ingesting historical deeds, encumbrance certificates, and revenue registers into structured schemas.'
        },
        {
          title: 'Cadastral Verification Logic',
          desc: 'Cross-verifying spatial boundary maps against registered survey numbers to detect geometric overlaps.'
        },
        {
          title: 'Decision Support Artifacts',
          desc: 'Synthesizing verifiable title provenance reports for developers, institutional lenders, and buyers.'
        }
      ],
      outcomes: [
        'Reduced verification TAT by 40% across legal, GIS, and field operations.',
        'Prevented ₹10 Cr+ in property disputes by creating a 30+ parameter property risk assessment compliance framework.',
        'Generated ₹4 lakh in revenue at an early stage; successfully verified 20+ properties across Telangana.'
      ],
      whatILearned:
        'True systems leverage in legacy domains does not come from superficial UI; it requires rigorous data normalization at the root source.'
    },
    modalData: {
      number: '01',
      id: 'landsafe',
      name: 'LANDSAFE REAL ESTATE TECHNOLOGY PVT. LTD.',
      category: 'PropTech · Land Infrastructure',
      thesis: 'Building trust infrastructure for land ownership in India.',
      problem:
        'Land information in India is deeply fragmented across disparate administrative departments, physical registries, and inconsistent survey data, creating massive diligence friction and transaction risk.',
      whatIBuilt: {
        title: 'Land Record Diligence & Cross-Verification Pipeline',
        description:
          'Structured data architecture that ingests historical registry records, normalizes spatial survey data, and cross-checks encumbrance titles.',
        visualType: 'landsafe'
      },
      howItWorks: {
        steps: [
          { step: '01', label: 'Record Ingestion', desc: 'Aggregates historical deeds, encumbrance logs, and cadastral maps.' },
          { step: '02', label: 'Cross-Verification', desc: 'Validates title chains and flags spatial boundary overlap discrepancies.' },
          { step: '03', label: 'Decision Artifact', desc: 'Synthesizes clean, verifiable title reports for institutional buyers.' }
        ]
      },
      whatILearned:
        'True systems leverage in messy legacy domains does not come from superficial UI; it requires rigorous data normalization at the root source.',
      verifiedFacts: [
        { label: 'ROLE', value: 'Director of Operations & Co-Founder' },
        { label: 'DOMAIN', value: 'PropTech Infrastructure' },
        { label: 'DATES', value: 'Aug 2025 – Present' }
      ]
    }
  },
  {
    number: '02',
    id: 'vivek-bio',
    name: 'VIVEK BIO PRODUCTS',
    role: 'Assistant Project Manager',
    category: 'Industrial / Infrastructure',
    tagline: 'Orchestrating capital infrastructure through rigorous cross-workstream coordination.',
    shortDescription:
      'Ground-up execution management for a ₹152 Cr, 100 KLPD greenfield bio-energy facility, synchronizing civil works, heavy mechanical erection, and statutory PESO clearances.',
    location: 'Hyderabad & Telangana, India',
    dates: 'Jul 2024 – Jul 2025',
    visualMarker: '100 KLPD PLANT',
    keyFact: '₹152 Cr · 95%+ Adherence',
    expandedDetails: {
      context:
        'Execution of a 100 KLPD greenfield grain-based ethanol facility with an outlay of ₹152 Crore. Heavy industrial installations require seamless synchronization between OEMs, civil contractors, and statutory regulators.',
      coreWorkstreams: [
        {
          title: 'Critical Path Synchronization',
          desc: 'Dynamic scheduling between heavy structural piling and multi-story distillation tower erection.'
        },
        {
          title: 'OEM & Piping Integration',
          desc: 'Standardized mechanical interfaces across boilers, fermentation tanks, and molecular sieve columns.'
        },
        {
          title: 'Statutory Clearance Roadmap',
          desc: 'Coordinating parallelized documentation for environmental clearances and PESO explosive licenses.'
        }
      ],
      outcomes: [
        'Accelerated commissioning readiness by 20% through cross-functional orchestration for a ₹152 Cr facility.',
        'Reduced project bottlenecks by 30% by designing KPI dashboards enabling proactive risk management.',
        'Managed 20+ vendors and contractor workstreams with 95%+ scheduled adherence.'
      ],
      whatILearned:
        'Execution at scale is about eliminating friction at the handoffs between disciplines. The bottleneck is rarely technical capability; it is coordination latency.'
    },
    modalData: {
      number: '02',
      id: 'vivek-bio',
      name: 'VIVEK BIO PRODUCTS PVT. LTD.',
      category: 'Industrial / Infrastructure',
      thesis: 'Ground-up coordination for a ₹152 Cr, 100 KLPD greenfield grain-based ethanol facility.',
      problem:
        'Large-scale industrial projects encounter severe bottlenecks when cross-discipline dependencies (civil, mechanical, electrical, instrumentation, and regulatory approvals) drift out of synchronization.',
      whatIBuilt: {
        title: 'Master Synchronization & Critical Path Matrix',
        description:
          'Execution tracking protocol synchronizing civil contractors, heavy distillation equipment OEMs, and statutory clearance pipelines.',
        visualType: 'industrial'
      },
      howItWorks: {
        steps: [
          { step: '01', label: 'Critical Path Mapping', desc: 'Sequenced structural handoffs between civil piles and tower erection.' },
          { step: '02', label: 'OEM Interface Alignment', desc: 'Standardized piping interfaces across boilers and distillation columns.' },
          { step: '03', label: 'Statutory Roadmap', desc: 'Parallelized PESO and environmental clearance submissions.' }
        ]
      },
      whatILearned:
        'Execution at scale is about eliminating friction at the handoffs between disciplines. The bottleneck is rarely technical capability; it is coordination latency.',
      verifiedFacts: [
        { label: 'ROLE', value: 'Assistant Project Manager' },
        { label: 'CAPITAL OUTLAY', value: '₹152 Cr' },
        { label: 'DATES', value: 'Jul 2024 – Jul 2025' }
      ]
    }
  },
  {
    number: '03',
    id: 'rashtra',
    name: 'RASHTRA',
    role: 'Political Analyst | Telangana Assembly Elections 2023',
    category: 'Strategy · Research · Analytics',
    tagline: 'Deconstructing grassroots sentiment and ground realities into strategic decisions.',
    shortDescription:
      'Synthesized intelligence across 15 constituencies for 4M+ voters, combining quantitative analytics, qualitative field research, and booth-level voter analysis.',
    location: 'Hyderabad, India',
    dates: 'Jun 2023 – Jul 2024',
    visualMarker: 'FIELD INTELLIGENCE',
    keyFact: '15 Constituencies · 4M+ Voters',
    expandedDetails: {
      context:
        'Electoral and civic environments are flooded with anecdotal noise, echo chambers, and confirmation bias. Replaced intuition with rigorous field sampling and structured hypothesis testing.',
      coreWorkstreams: [
        {
          title: 'Voter Cohort Sampling',
          desc: 'Representative demographic and socioeconomic cohort sampling across 15 regional constituencies.'
        },
        {
          title: 'Issue Salience Decomposition',
          desc: 'Prioritizing local infrastructure and administrative grievances by civic urgency and voter salience.'
        },
        {
          title: 'Executive Strategic Directives',
          desc: 'Synthesizing nuanced field feedback into concise briefing notes for ministers and MLC candidates.'
        }
      ],
      outcomes: [
        'Synthesized intelligence across 15 constituencies to shape campaign narratives and resource allocation.',
        'Developed executive briefing notes for ministers and MLCs, enabling debate preparation.',
        'Built strategic community partnerships strengthening grassroots engagement.'
      ],
      whatILearned:
        'Clarity is power. The strategist’s job is not to deliver more data, but to filter out 95% of noise so leadership can act decisively on the 5% that moves the needle.'
    },
    modalData: {
      number: '03',
      id: 'rashtra',
      name: 'RAJNEETHI STRATEGIES (RASTRA)',
      category: 'Strategy · Research · Analytics',
      thesis: 'Deconstructing grassroots sentiment and ground realities into structured strategic decisions.',
      problem:
        'High-stakes political and civic campaigns are flooded with anecdotal noise, confirmation bias, and chaotic field reports, making strategic resource allocation reactive and error-prone.',
      whatIBuilt: {
        title: 'Field Intelligence & Salience Decomposition Engine',
        description:
          'Methodology combining rigorous sampling, issue salience prioritization, and concise executive tactical directives.',
        visualType: 'strategy'
      },
      howItWorks: {
        steps: [
          { step: '01', label: 'Field Sampling', desc: 'Structured interviews replacing intuition with verifiable data.' },
          { step: '02', label: 'Salience Ranking', desc: 'Weighting voter grievances by urgency and administrative credibility.' },
          { step: '03', label: 'Tactical Directives', desc: 'Producing concise 1-page action briefs for leadership.' }
        ]
      },
      whatILearned:
        'The most valuable strategic model is one that eliminates emotional noise and gives leadership clear permission to prioritize only what truly moves the needle.',
      verifiedFacts: [
        { label: 'ROLE', value: 'Political Analyst' },
        { label: 'CAMPAIGN', value: 'Telangana Assembly 2023' },
        { label: 'DATES', value: 'Jun 2023 – Jul 2024' }
      ]
    }
  }
];

export default function WorkExperienceSection({
  onOpenExperienceDetail
}: WorkExperienceSectionProps) {
  // Track which experience is expanded inline (null or id)
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="py-24 sm:py-36 px-5 sm:px-10 lg:px-20 max-w-[1280px] mx-auto border-t border-[#DEDDD7]">
      {/* Editorial Section Introduction */}
      <div className="space-y-4 mb-20 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
          SELECTED WORK
        </span>
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#171717] font-normal tracking-tight">
          Work Experience
        </h2>
        <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
          A concise overview of where I have actually worked across land infrastructure, large-scale industrial execution, and strategic political analysis.
        </p>
      </div>

      {/* Vertical Editorial Timeline */}
      <div className="relative space-y-16 sm:space-y-20">
        {WORK_EXPERIENCES.map((exp, index) => {
          const isExpanded = expandedId === exp.id;
          const isLast = index === WORK_EXPERIENCES.length - 1;

          return (
            <div key={exp.id} className="relative group">
              {/* Main Editorial Card */}
              <article
                id={exp.id}
                className={`p-7 sm:p-10 rounded-2xl bg-[#FFFFFF] border transition-all duration-300 scroll-mt-24 ${
                  isExpanded
                    ? 'border-[#66705B] shadow-md'
                    : 'border-[#DEDDD7] hover:border-[#66705B]/60 shadow-2xs'
                }`}
              >
                {/* Row 1: Header Meta (Number, Identifier, Role, Category, Dates) */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#E5E4DE] pb-6 mb-6">
                  <div className="flex items-start gap-4">
                    {/* Number in Instrument Serif */}
                    <span className="font-serif text-3xl sm:text-4xl text-[#66705B] font-normal leading-none shrink-0 w-10">
                      {exp.number}
                    </span>

                    <div>
                      {/* Company Name with Subtle Visual Marker */}
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal tracking-tight">
                          {exp.name}
                        </h3>
                        <span className="text-base" title="Visual Identifier">
                          {exp.visualMarker}
                        </span>
                      </div>

                      {/* Role & Category */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 text-xs">
                        <span className="font-semibold text-[#171717]">{exp.role}</span>
                        <span className="text-[#DEDDD7]">·</span>
                        <span className="font-mono text-[#66705B] uppercase tracking-wider text-[11px]">
                          {exp.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dates & Location / Compact Fact */}
                  <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-1 text-xs font-mono text-[#6B6B67] shrink-0 pl-14 sm:pl-0">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#66705B]" />
                      <span>{exp.dates}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-[#66705B]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Row 2: Concise Description & Compact Supporting Fact (Max 1–2 sentences) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-2">
                    <p className="text-base text-[#171717] font-light leading-relaxed">
                      {exp.shortDescription}
                    </p>
                  </div>

                  {/* Compact Fact Badge */}
                  <div className="lg:col-span-4 flex lg:justify-end">
                    {exp.keyFact && (
                      <div className="px-3.5 py-1.5 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE] text-xs font-mono text-[#171717] font-medium tracking-tight">
                        {exp.keyFact}
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 3: Action Triggers (Expand Inline / Read Case Study) */}
                <div className="pt-6 mt-6 border-t border-[#F0EFEA] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="inline-flex items-center gap-2 text-[#171717] hover:text-[#66705B] font-medium transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Collapse view' : 'Explore experience →'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#66705B]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#66705B]" />
                    )}
                  </button>

                  <button
                    onClick={() => onOpenExperienceDetail(exp.modalData)}
                    className="inline-flex items-center gap-1 text-[#6B6B67] hover:text-[#171717] transition-colors cursor-pointer"
                  >
                    <span>Full documentation</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* ============================================================ */}
                {/* EXPANDABLE EDITORIAL DETAILS (Revealed on click) */}
                {/* ============================================================ */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden pt-8 mt-6 border-t border-[#E5E4DE] space-y-8"
                    >
                      {/* Visual Identifier Element */}
                      <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E5E4DE]">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E4DE] text-xs font-mono">
                          <span className="text-[#66705B] font-semibold uppercase tracking-wider">
                            VISUAL IDENTIFIER & SYSTEM ARTIFACT
                          </span>
                          <span className="text-[#6B6B67]">
                            {exp.id === 'landsafe'
                              ? 'Cadastral Provenance Model'
                              : exp.id === 'vivek-bio'
                              ? '100 KLPD Process Blueprint'
                              : 'Cohort Salience Matrix'}
                          </span>
                        </div>

                        {/* Distinct Minimal Editorial Diagrams */}
                        {exp.id === 'landsafe' && (
                          <CadastralVerificationSandbox />
                        )}

                        {exp.id === 'vivek-bio' && (
                          <IndustrialScrubberSandbox />
                        )}

                        {exp.id === 'rashtra' && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                            <div className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#E5E4DE] space-y-1">
                              <span className="font-mono text-[10px] text-[#66705B]">INPUT</span>
                              <div className="font-semibold text-[#171717]">Field Sampling</div>
                              <p className="text-[11px] text-[#6B6B67] leading-relaxed">
                                Replacing campaign echo-chambers with grounded voter cohort sampling.
                              </p>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#E5E4DE] space-y-1">
                              <span className="font-mono text-[10px] text-[#66705B]">ANALYSIS</span>
                              <div className="font-semibold text-[#171717]">Salience Ranking</div>
                              <p className="text-[11px] text-[#6B6B67] leading-relaxed">
                                Quantifying issue importance by civic urgency and political feasibility.
                              </p>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#E5E4DE] space-y-1">
                              <span className="font-mono text-[10px] text-[#66705B]">DECISION</span>
                              <div className="font-semibold text-[#171717]">Executive Memos</div>
                              <p className="text-[11px] text-[#6B6B67] leading-relaxed">
                                Delivering concise 1-page tactical directives for leadership.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Workstreams & What I Learned */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs">
                        <div className="md:col-span-7 space-y-3">
                          <h4 className="font-mono uppercase tracking-wider text-[11px] text-[#66705B] font-semibold">
                            CORE EXECUTION WORKSTREAMS
                          </h4>
                          <div className="space-y-2">
                            {exp.expandedDetails.coreWorkstreams.map((ws, i) => (
                              <div key={i} className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE] space-y-1">
                                <div className="font-semibold text-[#171717]">{ws.title}</div>
                                <p className="text-[#6B6B67] leading-relaxed text-[11px]">{ws.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="md:col-span-5 space-y-4">
                          <div className="space-y-2">
                            <h4 className="font-mono uppercase tracking-wider text-[11px] text-[#66705B] font-semibold">
                              SYSTEM LEARNING
                            </h4>
                            <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#E5E4DE] text-[11px] text-[#171717] leading-relaxed italic">
                              “{exp.expandedDetails.whatILearned}”
                            </div>
                          </div>

                          <button
                            onClick={() => onOpenExperienceDetail(exp.modalData)}
                            className="w-full py-2.5 px-4 rounded-lg bg-[#171717] hover:bg-[#333333] text-white font-medium text-xs font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
                          >
                            <span>Open Detailed Archive</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>

              {/* Vertical Timeline Editorial Connector Arrow (↓) */}
              {!isLast && (
                <div className="flex flex-col items-center justify-center py-3">
                  <div className="w-[1px] h-6 bg-[#DEDDD7]" />
                  <span className="font-serif text-2xl text-[#66705B] select-none">↓</span>
                  <div className="w-[1px] h-6 bg-[#DEDDD7]" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progressive Disclosure Link to Detailed Digital Resume */}
      <div className="pt-14 flex justify-center">
        <button
          onClick={() => {
            document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
          }}
          id="work-view-full-experience-btn"
          className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-[#DEDDD7] bg-white hover:border-[#66705B] text-sm font-medium text-[#171717] hover:text-[#66705B] transition-all shadow-2xs cursor-pointer"
        >
          <span>View full experience & detailed resume</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
