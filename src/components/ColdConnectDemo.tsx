import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Pause,
  RotateCcw,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  Clock,
  Sparkles,
  Users,
  Target,
  Edit3,
  Calendar,
  Home,
  User,
  Menu,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Compass,
  Award,
  Plus,
  Send
} from 'lucide-react';
import { DEMO_CONTACTS, DemoContact } from '../data/coldConnectData';

interface ColdConnectDemoProps {
  initialContactId?: string;
  onOpenAboutProject?: () => void;
}

export default function ColdConnectDemo({
  initialContactId = 'sarah-chen',
  onOpenAboutProject
}: ColdConnectDemoProps) {
  // Navigation tabs within Cold Connect
  const [activeTab, setActiveTab] = useState<'network' | 'upcoming'>('network');
  const [activeBottomNav, setActiveBottomNav] = useState<'home' | 'network' | 'upcoming' | 'profile'>('network');

  // 3 Primary Stages: 1 = KNOW THEM, 2 = MEET THEM, 3 = STAY CONNECTED
  const [activeStage, setActiveStage] = useState<1 | 2 | 3>(1);

  // Selected Demo Persona
  const [selectedContact, setSelectedContact] = useState<DemoContact>(
    DEMO_CONTACTS.find((c) => c.id === initialContactId) || DEMO_CONTACTS[0]
  );

  // Stage 2: 60s Rehearsal Timer & Editable Pitch
  const [editablePitch, setEditablePitch] = useState<string>(
    selectedContact.pitchTemplate?.fullScript || ''
  );
  const [isEditingPitch, setIsEditingPitch] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [checkedPoints, setCheckedPoints] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  // Update pitch when contact changes
  useEffect(() => {
    setEditablePitch(selectedContact.pitchTemplate?.fullScript || '');
    handleResetTimer();
    setShowFeedback(false);
  }, [selectedContact]);

  // Stage 3: Follow-up channel & notes
  const [followUpFormat, setFollowUpFormat] = useState<'email' | 'linkedin'>('email');
  const [userMeetingNotes, setUserMeetingNotes] = useState<string>(
    'Discussed early unit economics in offline-first markets. Agreed to share diligence checklist.'
  );
  const [copiedState, setCopiedState] = useState<boolean>(false);

  // Timer interval handling
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      setShowFeedback(true);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  // Reset timer
  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(60);
    setCheckedPoints([]);
  };

  const handleTogglePoint = (idx: number) => {
    setCheckedPoints((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  // Pace estimation
  const pitchWords = editablePitch.trim() ? editablePitch.trim().split(/\s+/).length : 120;
  const timeElapsed = 60 - timerSeconds;
  const currentWpm = timeElapsed > 3 ? Math.round(pitchWords / (timeElapsed / 60)) : 138;

  // Clean persona labels
  const cleanName = selectedContact.name.replace(/\s*\[DEMO DATA\]/g, '');
  const cleanCompany = selectedContact.company.replace(/\s*\[DEMO DATA\]/g, '');

  return (
    <div
      id="cold-connect-product-shell"
      className="bg-[#FAF9F6] text-[#17201D] border border-[#E4E5E1] rounded-3xl overflow-hidden shadow-xs font-sans max-w-5xl mx-auto transition-all"
    >
      {/* ============================================================ */}
      {/* 1. PRODUCT HEADER (from Cold Connect Screenshot) */}
      {/* ============================================================ */}
      <header className="px-5 py-3.5 sm:px-8 bg-[#FFFFFF] border-b border-[#E4E5E1] flex items-center justify-between">
        {/* Left: Hamburger / Menu Icon */}
        <button
          type="button"
          aria-label="Open Cold Connect menu"
          className="p-2 rounded-xl text-[#004D3F] hover:bg-[#F4F3EF] transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5 stroke-[2.2]" />
        </button>

        {/* Centre: ColdConnect Brand in Deep Forest Green */}
        <div className="flex items-center gap-1.5 cursor-pointer select-none">
          <span className="font-bold text-xl sm:text-2xl text-[#004D3F] tracking-tight font-sans">
            ColdConnect
          </span>
        </div>

        {/* Right: User Avatar / Profile Image */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-[#E4E5E1] overflow-hidden bg-[#F4F3EF] flex items-center justify-center text-xs font-semibold text-[#004D3F] shadow-2xs">
            <img
              src="/P1052201.JPG"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to clean initials if image not yet loaded
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <span className="font-medium text-[11px] text-[#004D3F]">HG</span>
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. COLD CONNECT HERO & PRIMARY ACTIONS */}
      {/* ============================================================ */}
      <div className="px-6 pt-7 pb-5 sm:px-10 sm:pt-9 sm:pb-7 bg-[#FAF9F6] border-b border-[#E4E5E1]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Large Heading in Deep Forest Green */}
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004D3F] tracking-tight leading-tight">
              Make every introduction count.
            </h3>
            <p className="text-sm sm:text-base text-[#46504C] font-normal leading-relaxed">
              Research who you’re meeting, sharpen your pitch in 60 seconds, and stay connected.
            </p>
          </div>

          {/* Action Buttons: Add Connection (Primary CTA) & Schedule Meeting (Secondary) */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              id="cc-add-connection-cta"
              onClick={() => {
                // Cycle persona to simulate adding / switching target
                const currentIndex = DEMO_CONTACTS.findIndex((c) => c.id === selectedContact.id);
                const nextIndex = (currentIndex + 1) % DEMO_CONTACTS.length;
                setSelectedContact(DEMO_CONTACTS[nextIndex]);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[20px] bg-[#004D3F] text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs hover:bg-[#003B30] active:scale-[0.98] cursor-pointer shadow-2xs"
            >
              <Plus className="w-4 h-4 stroke-[2.2]" />
              <span>Add Connection</span>
            </button>

            <button
              type="button"
              id="cc-schedule-meeting-cta"
              onClick={() => {
                setActiveStage(2);
                handleResetTimer();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[20px] bg-[#FFFFFF] hover:bg-[#F4F3EF] text-[#004D3F] border border-[#E4E5E1] font-medium text-sm transition-all duration-200 cursor-pointer shadow-2xs"
            >
              <Calendar className="w-4 h-4 stroke-[2]" />
              <span>Schedule Meeting</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs: My Network & Upcoming Meetings */}
        <div className="flex items-center gap-8 pt-7 border-b border-[#E4E5E1] -mb-[1px]">
          <button
            type="button"
            onClick={() => setActiveTab('network')}
            className={`pb-3 text-sm font-medium transition-colors relative cursor-pointer ${
              activeTab === 'network' ? 'text-[#004D3F]' : 'text-[#46504C] hover:text-[#17201D]'
            }`}
          >
            <span>My Network</span>
            {activeTab === 'network' && (
              <motion.div
                layoutId="cc-active-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#004D3F]"
              />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('upcoming')}
            className={`pb-3 text-sm font-medium transition-colors relative cursor-pointer ${
              activeTab === 'upcoming' ? 'text-[#004D3F]' : 'text-[#46504C] hover:text-[#17201D]'
            }`}
          >
            <span>Upcoming Meetings</span>
            {activeTab === 'upcoming' && (
              <motion.div
                layoutId="cc-active-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#004D3F]"
              />
            )}
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. WORKFLOW PIPELINE (KNOW THEM → MEET THEM → STAY CONNECTED) */}
      {/* ============================================================ */}
      <div className="px-6 py-4 sm:px-10 bg-[#FFFFFF] border-b border-[#E4E5E1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Stage Progress Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: 1, step: '01', title: 'KNOW THEM', desc: 'Person Intelligence' },
            { id: 2, step: '02', title: 'MEET THEM', desc: '60s Pitch Rehearsal' },
            { id: 3, step: '03', title: 'STAY CONNECTED', desc: 'AI Follow-up' }
          ].map((tab) => {
            const isActive = activeStage === tab.id;
            const isCompleted = activeStage > tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveStage(tab.id as 1 | 2 | 3);
                  if (tab.id === 2) handleResetTimer();
                }}
                className={`flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#004D3F] text-white shadow-2xs'
                    : isCompleted
                    ? 'bg-[#F4F3EF] text-[#004D3F] border border-[#E4E5E1]'
                    : 'bg-[#FFFFFF] text-[#46504C] border border-[#E4E5E1] hover:bg-[#F4F3EF]'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? 'bg-white text-[#004D3F]'
                      : isCompleted
                      ? 'bg-[#004D3F] text-white'
                      : 'bg-[#E4E5E1] text-[#46504C]'
                  }`}
                >
                  {isCompleted ? '✓' : tab.id}
                </span>
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Target Profile Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F4F3EF] rounded-xl border border-[#E4E5E1] text-xs self-start sm:self-auto">
          <span className="text-[10px] font-mono uppercase text-[#46504C] px-2 font-medium hidden md:inline">
            Target:
          </span>
          {DEMO_CONTACTS.map((c) => {
            const cFirstName = c.name.replace(/\s*\[DEMO DATA\]/g, '').split(' ')[0];
            const isSelected = selectedContact.id === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedContact(c)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#004D3F] text-white shadow-2xs'
                    : 'text-[#46504C] hover:text-[#17201D]'
                }`}
              >
                {cFirstName}
              </button>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. PRODUCT STAGE CONTENT CANVAS */}
      {/* ============================================================ */}
      <div className="p-6 sm:p-10 space-y-6">
        {/* ------------------------------------------------------------ */}
        {/* STAGE 1: KNOW THEM (Person Intelligence & Context Brief) */}
        {/* ------------------------------------------------------------ */}
        {activeStage === 1 && (
          <motion.div
            key="stage-1"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Person Intelligence Header Card */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E5E1] shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F4F3EF] border border-[#E4E5E1] flex items-center justify-center text-[#004D3F] font-bold text-lg shrink-0 shadow-2xs">
                  {selectedContact.avatarInitials}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-xl font-bold text-[#17201D] tracking-tight">
                      {cleanName}
                    </h4>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#F4F3EF] text-[#004D3F] border border-[#E4E5E1] font-medium">
                      {selectedContact.industry}
                    </span>
                  </div>
                  <p className="text-sm text-[#46504C] mt-1">
                    {selectedContact.role} ·{' '}
                    <strong className="text-[#17201D] font-semibold">{cleanCompany}</strong> ({selectedContact.location})
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FAF9F6] border border-[#E4E5E1] text-xs text-[#46504C]">
                    <Target className="w-3.5 h-3.5 text-[#004D3F] shrink-0" />
                    <span className="font-semibold text-[#004D3F]">Meeting Goal:</span>
                    <span className="text-[#17201D]">{selectedContact.meetingGoal}</span>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-col items-end justify-between md:justify-center gap-1.5 pt-3 md:pt-0 border-t md:border-t-0 border-[#E4E5E1]">
                <span className="text-[11px] font-mono uppercase text-[#46504C]">
                  Person Intelligence
                </span>
                <span className="text-xs font-semibold text-[#004D3F] bg-[#F4F3EF] px-3 py-1 rounded-full border border-[#E4E5E1]">
                  Verified Ingestion
                </span>
              </div>
            </div>

            {/* Dossier Grid: Context, Hooks, Questions & Taboos */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Trajectory & Non-Obvious Conversation Hooks (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Context: Career Trajectory & Inflection Points */}
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E5E1] shadow-2xs space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E4E5E1] pb-3">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-[#004D3F] flex items-center gap-2 font-bold">
                      <Compass className="w-4 h-4 text-[#004D3F]" />
                      CAREER TRAJECTORY & INFLECTION POINTS
                    </h5>
                    <span className="text-[10px] font-mono text-[#46504C]">3 SIGNALS</span>
                  </div>
                  <div className="space-y-2.5">
                    {selectedContact.dossier?.trajectory?.map((point, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E4E5E1] text-xs text-[#17201D] leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-[#004D3F] font-mono font-bold text-xs shrink-0 mt-0.5">
                          0{i + 1}
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversation Hooks */}
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E5E1] shadow-2xs space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E4E5E1] pb-3">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-[#004D3F] flex items-center gap-2 font-bold">
                      <Sparkles className="w-4 h-4 text-[#004D3F]" />
                      NON-OBVIOUS CONVERSATION HOOKS
                    </h5>
                    <span className="text-[10px] font-mono text-[#004D3F] font-medium bg-[#F4F3EF] px-2 py-0.5 rounded">
                      HIGH RAPPORT
                    </span>
                  </div>
                  <div className="space-y-3">
                    {selectedContact.dossier?.conversationHooks?.map((item, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E4E5E1] text-xs space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 font-semibold text-[#17201D]">
                            <span className="text-[#004D3F] font-mono">#{i + 1}</span>
                            <span>{item.hook}</span>
                          </div>
                          <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-[#F4F3EF] text-[#46504C] border border-[#E4E5E1]">
                            {item.source}
                          </span>
                        </div>
                        <p className="text-[#46504C] text-[11px] leading-relaxed pl-5">
                          {item.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Questions to Ask & Strategic Taboos (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Questions to Ask */}
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E5E1] shadow-2xs space-y-4">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-[#004D3F] flex items-center gap-2 font-bold">
                    <MessageSquare className="w-4 h-4 text-[#004D3F]" />
                    QUESTIONS TO ASK
                  </h5>
                  <div className="space-y-3">
                    {selectedContact.dossier?.highImpactQuestions?.map((q, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E4E5E1] space-y-1.5"
                      >
                        <p className="text-xs font-medium text-[#004D3F] leading-relaxed italic">
                          “{q.question}”
                        </p>
                        <p className="text-[11px] text-[#46504C]">
                          <strong className="text-[#17201D] font-medium">Rationale:</strong> {q.rationale}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Taboos to Avoid (Restrained warm alert) */}
                <div className="p-6 rounded-2xl bg-[#FBF6F5] border border-[#F0D5D3] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8A2B29] font-bold">
                    <AlertCircle className="w-4 h-4 text-[#8A2B29]" />
                    <span>STRATEGIC TABOOS TO AVOID</span>
                  </div>
                  <div className="space-y-2">
                    {selectedContact.dossier?.strategicTaboos?.map((taboo, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#FFFFFF] border border-[#F0D5D3] text-xs text-[#521C1A] leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#8A2B29] font-bold mt-0.5">✕</span>
                        <span>{taboo}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-[#8A2B29]/80 font-mono">
                    Keep focus on mutual strategic alignment and forward momentum.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Proceed Action in Deep Forest Green */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E4E5E1]">
              <span className="text-xs font-mono text-[#46504C]">
                BRIEF SYNTHESIZED · 3 MINUTE READ
              </span>
              <button
                type="button"
                onClick={() => {
                  setActiveStage(2);
                  handleResetTimer();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[20px] bg-[#004D3F] text-white hover:bg-[#003B30] font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs cursor-pointer shadow-2xs"
              >
                <span>Proceed to 60s Pitch Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* STAGE 2: MEET THEM (60-Second Pitch & Live Practice) */}
        {/* ------------------------------------------------------------ */}
        {activeStage === 2 && (
          <motion.div
            key="stage-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Top Rehearsal Controller Bar */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E5E1] shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                {/* Large countdown timer */}
                <div
                  className={`px-5 py-3 rounded-2xl font-mono text-3xl font-bold flex items-center gap-2.5 transition-colors ${
                    timerSeconds <= 10
                      ? 'bg-[#FBF6F5] text-[#8A2B29] border border-[#F0D5D3] animate-pulse'
                      : 'bg-[#F4F3EF] text-[#004D3F] border border-[#E4E5E1]'
                  }`}
                >
                  <Clock className="w-6 h-6 text-[#004D3F]" />
                  <span>00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}</span>
                </div>

                <div>
                  <div className="text-sm font-bold text-[#004D3F] flex items-center gap-2">
                    <span>60-SECOND PITCH STUDIO</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#F4F3EF] text-[#004D3F] border border-[#E4E5E1]">
                      Target: 130–140 WPM
                    </span>
                  </div>
                  <p className="text-xs text-[#46504C] mt-1">
                    Live pace tracking:{' '}
                    <strong className="text-[#17201D] font-semibold">{currentWpm} WPM</strong> ({pitchWords} words)
                  </p>
                </div>
              </div>

              {/* Timer Controls: Primary CTA Start Practice in Deep Forest Green */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <button
                  type="button"
                  id="cc-practice-pitch-btn"
                  onClick={() => setIsTimerRunning((prev) => !prev)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-[20px] text-sm font-medium cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs ${
                    isTimerRunning
                      ? 'bg-[#46504C] text-white hover:bg-[#333C38]'
                      : 'bg-[#004D3F] text-white hover:bg-[#003B30] shadow-2xs'
                  }`}
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isTimerRunning ? 'Pause Rehearsal' : 'Start Practice'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetTimer}
                  className="p-2.5 rounded-[20px] bg-[#F4F3EF] hover:bg-[#FFFFFF] text-[#46504C] hover:text-[#004D3F] border border-[#E4E5E1] transition-colors cursor-pointer"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setShowFeedback((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[20px] bg-[#FFFFFF] hover:bg-[#F4F3EF] text-[#004D3F] border border-[#E4E5E1] text-xs font-medium transition-colors cursor-pointer"
                >
                  <Award className="w-4 h-4 text-[#004D3F]" />
                  <span>{showFeedback ? 'Hide AI Feedback' : 'View AI Feedback'}</span>
                </button>
              </div>
            </div>

            {/* Main Studio Grid: Editable Pitch + Live Checkpoints */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Pitch Structure & Clean Editable Text Area (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E5E1] shadow-2xs space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E4E5E1] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#004D3F] font-bold">
                        60-SECOND PITCH SCRIPT
                      </span>
                      <span className="text-[10px] font-mono text-[#004D3F] bg-[#F4F3EF] px-2 py-0.5 rounded border border-[#E4E5E1]">
                        {pitchWords} words
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsEditingPitch((prev) => !prev)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#004D3F] hover:underline font-mono cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>{isEditingPitch ? 'Done' : 'Edit'}</span>
                    </button>
                  </div>

                  {/* Clean White Editable Text Area */}
                  {isEditingPitch ? (
                    <textarea
                      value={editablePitch}
                      onChange={(e) => setEditablePitch(e.target.value)}
                      rows={8}
                      className="w-full p-4 rounded-xl bg-[#FAF9F6] border border-[#004D3F]/40 text-xs text-[#17201D] focus:outline-none focus:ring-1 focus:ring-[#004D3F] font-sans leading-relaxed"
                    />
                  ) : (
                    <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E4E5E1] text-xs text-[#17201D] leading-relaxed font-sans whitespace-pre-line">
                      {editablePitch}
                    </div>
                  )}

                  {/* 3-Part Pitch Architecture */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#F4F3EF] border border-[#E4E5E1] space-y-1">
                      <span className="text-[10px] font-mono text-[#004D3F] font-bold block">
                        01. THE HOOK
                      </span>
                      <p className="text-[#46504C] text-[11px] leading-relaxed">
                        {selectedContact.pitchTemplate?.hook}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#F4F3EF] border border-[#E4E5E1] space-y-1">
                      <span className="text-[10px] font-mono text-[#004D3F] font-bold block">
                        02. THE PROOF
                      </span>
                      <p className="text-[#46504C] text-[11px] leading-relaxed">
                        {selectedContact.pitchTemplate?.proof}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#F4F3EF] border border-[#E4E5E1] space-y-1">
                      <span className="text-[10px] font-mono text-[#004D3F] font-bold block">
                        03. THE ASK
                      </span>
                      <p className="text-[#46504C] text-[11px] leading-relaxed">
                        {selectedContact.pitchTemplate?.ask}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Delivery Checkpoints & Small AI Feedback (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                {/* Delivery Checkpoints during rehearsal */}
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E5E1] shadow-2xs space-y-3.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#004D3F] flex items-center gap-2 font-bold">
                    DELIVERY CHECKPOINTS (TAP WHILE SPEAKING)
                  </span>
                  <div className="space-y-2">
                    {(selectedContact.pitchTemplate?.speakingPoints?.length
                      ? selectedContact.pitchTemplate.speakingPoints
                      : [
                          'Pacing control (130-140 WPM)',
                          'Specific alignment to their portfolio',
                          'Direct mutual ask under 60 seconds',
                          'Zero filler phrases'
                        ]
                    ).map((point, i) => {
                      const isChecked = checkedPoints.includes(i);
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleTogglePoint(i)}
                          className={`w-full text-left p-3 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer border ${
                            isChecked
                              ? 'bg-[#F4F3EF] border-[#004D3F] text-[#004D3F] font-medium'
                              : 'bg-[#FAF9F6] border-[#E4E5E1] text-[#46504C] hover:border-[#004D3F]/40'
                          }`}
                        >
                          <span>{point}</span>
                          <span
                            className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-bold ${
                              isChecked
                                ? 'bg-[#004D3F] text-white'
                                : 'border border-[#E4E5E1] bg-white'
                            }`}
                          >
                            {isChecked ? '✓' : ''}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* AI Feedback with Small Visual Indicators (No giant flashy dashboards) */}
                {showFeedback ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E5E1] shadow-2xs space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-[#E4E5E1] pb-2.5">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#004D3F]" />
                        <span className="text-xs font-mono uppercase text-[#004D3F] font-bold">
                          AI RUBRIC SCORE
                        </span>
                      </div>
                      <span className="text-lg font-bold text-[#004D3F] font-mono">
                        {selectedContact.sampleFeedback?.overallScore || 9.1}/10
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#E4E5E1]">
                        <span className="text-[#46504C] block text-[10px] font-mono">CLARITY</span>
                        <strong className="text-[#17201D]">
                          {selectedContact.sampleFeedback?.scores?.clarity || 9.2} / 10
                        </strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#E4E5E1]">
                        <span className="text-[#46504C] block text-[10px] font-mono">RELEVANCE</span>
                        <strong className="text-[#17201D]">
                          {selectedContact.sampleFeedback?.scores?.relevance || 9.4} / 10
                        </strong>
                      </div>
                    </div>

                    <div className="text-xs space-y-1.5 pt-1">
                      <p className="text-[#46504C] text-[11px] leading-relaxed">
                        <strong className="text-[#004D3F] font-semibold">Strength:</strong>{' '}
                        {selectedContact.sampleFeedback?.strengths?.[0] || 'Crisp hook that connects personal operating experience directly to the target thesis.'}
                      </p>
                      <p className="text-[#46504C] text-[11px] leading-relaxed">
                        <strong className="text-[#17201D] font-semibold">Coaching:</strong>{' '}
                        {selectedContact.sampleFeedback?.critique?.[0] || 'Hold pause for 2 seconds after the ask before clarifying logistics.'}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowFeedback(true)}
                    className="w-full p-4 rounded-2xl bg-[#FFFFFF] border border-dashed border-[#E4E5E1] hover:border-[#004D3F]/60 text-center text-xs text-[#46504C] hover:text-[#004D3F] cursor-pointer transition-colors"
                  >
                    <span>Click to reveal AI Speech Rubric Score →</span>
                  </button>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E4E5E1]">
              <button
                type="button"
                onClick={() => setActiveStage(1)}
                className="inline-flex items-center gap-1.5 text-xs text-[#46504C] hover:text-[#004D3F] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Intelligence Brief</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveStage(3)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[20px] bg-[#004D3F] text-white hover:bg-[#003B30] font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs cursor-pointer shadow-2xs"
              >
                <span>Proceed to Follow-up Cadence</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* ------------------------------------------------------------ */}
        {/* STAGE 3: STAY CONNECTED (Connection Profile & AI Follow-up) */}
        {/* ------------------------------------------------------------ */}
        {activeStage === 3 && (
          <motion.div
            key="stage-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Connection Profile & Cadence (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Connection Profile Card */}
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E5E1] shadow-2xs space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E4E5E1] pb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#004D3F] font-bold">
                      CONNECTION PROFILE
                    </span>
                    <span className="text-[10px] font-mono text-[#004D3F] bg-[#F4F3EF] px-2.5 py-0.5 rounded-full border border-[#E4E5E1] font-medium">
                      CRM SYNCHRONIZED
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between text-[#46504C]">
                      <span>Target</span>
                      <strong className="text-[#17201D]">{cleanName}</strong>
                    </div>
                    <div className="flex items-center justify-between text-[#46504C]">
                      <span>Organization</span>
                      <span className="text-[#17201D] font-medium">{cleanCompany}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#46504C]">
                      <span>Primary Goal</span>
                      <span className="text-[#004D3F] font-mono text-[11px] font-medium">{selectedContact.meetingGoal}</span>
                    </div>
                  </div>

                  {/* Meeting Notes Input */}
                  <div className="pt-2 space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-[#46504C] block font-medium">
                      KEY TAKEAWAY / AGREED NEXT STEPS
                    </label>
                    <textarea
                      value={userMeetingNotes}
                      onChange={(e) => setUserMeetingNotes(e.target.value)}
                      rows={3}
                      className="w-full p-3 rounded-xl bg-[#FAF9F6] border border-[#E4E5E1] text-xs text-[#17201D] focus:outline-none focus:border-[#004D3F] font-sans"
                    />
                  </div>
                </div>

                {/* Scheduled Cadence */}
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E5E1] shadow-2xs space-y-3.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#004D3F] block font-bold">
                    SCHEDULED CADENCE
                  </span>
                  <div className="space-y-2.5 text-xs">
                    {selectedContact.followUp?.cadence?.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E4E5E1] flex items-start justify-between gap-2"
                      >
                        <span className="font-mono text-[#004D3F] text-[11px] shrink-0 font-bold">
                          {item.timing}
                        </span>
                        <div className="text-right">
                          <span className="block font-semibold text-[11px] text-[#17201D]">
                            {item.action}
                          </span>
                          <span className="block text-[10px] text-[#46504C]">
                            {item.purpose}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: AI Follow-up Generator (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E5E1] shadow-2xs space-y-4">
                  {/* Channels & Copy Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E5E1] pb-3.5">
                    <div className="flex items-center gap-1.5 p-1 bg-[#F4F3EF] rounded-xl border border-[#E4E5E1]">
                      <button
                        type="button"
                        onClick={() => setFollowUpFormat('email')}
                        className={`px-3.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                          followUpFormat === 'email'
                            ? 'bg-[#004D3F] text-white shadow-2xs'
                            : 'text-[#46504C] hover:text-[#17201D]'
                        }`}
                      >
                        Email Draft
                      </button>
                      <button
                        type="button"
                        onClick={() => setFollowUpFormat('linkedin')}
                        className={`px-3.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                          followUpFormat === 'linkedin'
                            ? 'bg-[#004D3F] text-white shadow-2xs'
                            : 'text-[#46504C] hover:text-[#17201D]'
                        }`}
                      >
                        LinkedIn Note (300 char)
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const copyContent =
                          followUpFormat === 'email'
                            ? `Subject: ${selectedContact.followUp?.emailSubject}\n\n${selectedContact.followUp?.emailBody}`
                            : selectedContact.followUp?.linkedInNote || '';
                        handleCopy(copyContent);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs text-[#004D3F] bg-[#F4F3EF] hover:bg-[#E4E5E1] border border-[#E4E5E1] transition-colors cursor-pointer px-3.5 py-1.5 rounded-[20px] font-medium"
                    >
                      {copiedState ? (
                        <Check className="w-3.5 h-3.5 text-[#004D3F]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-[#004D3F]" />
                      )}
                      <span>{copiedState ? 'Copied!' : 'Copy to Clipboard'}</span>
                    </button>
                  </div>

                  {/* Body Content in Clean White Card */}
                  <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E4E5E1] text-xs text-[#17201D] leading-relaxed font-sans min-h-[210px] whitespace-pre-line">
                    {followUpFormat === 'email' ? (
                      <>
                        <div className="pb-2.5 mb-3 border-b border-[#E4E5E1] font-mono text-[11px] text-[#004D3F]">
                          <span className="font-semibold text-[#17201D]">SUBJECT: </span>
                          {selectedContact.followUp?.emailSubject}
                        </div>
                        {selectedContact.followUp?.emailBody}
                      </>
                    ) : (
                      selectedContact.followUp?.linkedInNote
                    )}
                  </div>

                  {/* Primary Action CTA: Generate Follow-up */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        const copyContent =
                          followUpFormat === 'email'
                            ? `Subject: ${selectedContact.followUp?.emailSubject}\n\n${selectedContact.followUp?.emailBody}`
                            : selectedContact.followUp?.linkedInNote || '';
                        handleCopy(copyContent);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-[20px] bg-[#004D3F] text-white hover:bg-[#003B30] font-medium text-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs cursor-pointer shadow-2xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Generate & Copy Follow-up</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E4E5E1]">
              <button
                type="button"
                onClick={() => setActiveStage(2)}
                className="inline-flex items-center gap-1.5 text-xs text-[#46504C] hover:text-[#004D3F] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Rehearsal Studio</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStage(1)}
                  className="px-5 py-2.5 rounded-[20px] bg-[#FFFFFF] text-[#46504C] hover:text-[#004D3F] border border-[#E4E5E1] text-xs font-medium transition-colors cursor-pointer shadow-2xs"
                >
                  Start New Target
                </button>
                {onOpenAboutProject && (
                  <button
                    type="button"
                    onClick={onOpenAboutProject}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[20px] bg-[#004D3F] hover:bg-[#003B30] text-white text-xs font-medium shadow-2xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* ============================================================ */}
      {/* 5. BOTTOM NAVIGATION (from Cold Connect Mobile App Screenshot) */}
      {/* ============================================================ */}
      <nav
        aria-label="Cold Connect bottom navigation"
        className="px-6 py-3 bg-[#FFFFFF] border-t border-[#E4E5E1] flex items-center justify-around select-none"
      >
        {[
          { id: 'home', label: 'Home', icon: Home },
          { id: 'network', label: 'Network', icon: Users },
          { id: 'upcoming', label: 'Upcoming', icon: Calendar },
          { id: 'profile', label: 'Profile', icon: User }
        ].map((item) => {
          const isActive = activeBottomNav === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveBottomNav(item.id as any);
                if (item.id === 'network') setActiveTab('network');
                if (item.id === 'upcoming') setActiveTab('upcoming');
              }}
              className={`flex flex-col items-center gap-1 text-xs transition-colors cursor-pointer py-1 px-3 rounded-xl ${
                isActive ? 'text-[#004D3F] font-semibold' : 'text-[#46504C] hover:text-[#17201D]'
              }`}
            >
              <Icon className={`w-5 h-5 stroke-[1.8] ${isActive ? 'text-[#004D3F]' : 'text-[#46504C]'}`} />
              <span className="text-[11px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
