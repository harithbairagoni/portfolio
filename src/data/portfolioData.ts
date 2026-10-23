export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  role: string;
  keyMetric: string;
  tagline: string;
  description: string;
  flowStages: string[];
  workstreams?: { title: string; desc: string; icon: string }[];
  caseStudy: {
    problem: string;
    context: string;
    roleDetails: string;
    approach: string[];
    systemComponents: { name: string; detail: string }[];
    outcome: string;
    whatILearned: string;
  };
}

export interface OSNode {
  id: string;
  name: string;
  shortDesc: string;
  details: string;
  color: string;
  x: number; // percentage
  y: number; // percentage
  relatedProjects: string[];
  metrics: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  organization: string;
  phase: 'ENGINEERING' | 'STRATEGY' | 'EXECUTION' | 'ENTREPRENEURSHIP' | 'AI SYSTEMS';
  tag: string;
  summary: string;
  details: string[];
}

export interface ThinkingPrinciple {
  number: string;
  title: string;
  essence: string;
  explanation: string;
  mentalModel: string;
  actionItem: string;
}

export interface AILabExperiment {
  id: string;
  title: string;
  type: 'EXPERIMENT' | 'BUILD' | 'EXPLORATION';
  description: string;
  architecture: string[];
  status: string;
  tags: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  topic: string;
  readingTime: string;
  shortThesis: string;
  status: 'THESIS DRAFT' | 'UPCOMING';
  coreTakeaways: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Bairagoni Harith',
    headline: 'I BUILD SYSTEMS FOR THE REAL WORLD.',
    eyebrow: 'SYSTEMS / STRATEGY / TECHNOLOGY / EXECUTION',
    supportingText:
      'Strategy, technology and execution — applied to complex problems across infrastructure, governance, proptech and emerging AI systems.',
    primaryPositioning:
      'I build systems that turn messy real-world problems into executable solutions.',
    secondaryPositioning: 'Strategy × Technology × Execution × AI',
    email: 'harithgoud2@gmail.com',
    status: 'BUILDING',
  },

  osNodes: [
    {
      id: 'strategy',
      name: 'STRATEGY',
      shortDesc: 'Analytical problem decomposition & high-stakes decision architecture.',
      details: 'Breaking down multifaceted real-world dynamics into clear variables, decision trees, and leverage points.',
      color: '#10b981', // emerald
      x: 18,
      y: 40,
      relatedProjects: ['cold-connect', 'political-strategy', 'landsafe'],
      metrics: 'Decision Trees & Synthesis',
    },
    {
      id: 'industrial-execution',
      name: 'INDUSTRIAL EXECUTION',
      shortDesc: 'Large-scale infrastructure coordination & multi-workstream delivery.',
      details: 'Ground-level orchestration of complex capital infrastructure, regulatory compliance, and cross-functional teams.',
      color: '#38bdf8', // sky
      x: 38,
      y: 20,
      relatedProjects: ['ethanol-plant'],
      metrics: '₹152 Cr / 100 KLPD Scale',
    },
    {
      id: 'proptech',
      name: 'PROPTECH',
      shortDesc: 'Transforming opaque land ecosystems into transparent decision systems.',
      details: 'Co-founding LANDSAFE to structure fragmented title data and land intelligence across India.',
      color: '#a78bfa', // violet
      x: 62,
      y: 22,
      relatedProjects: ['landsafe'],
      metrics: 'Information → Action',
    },
    {
      id: 'ai-automation',
      name: 'AI & AUTOMATION',
      shortDesc: 'Self-correcting agent loops, workflow acceleration & leverage multipliers.',
      details: 'Designing proactive AI systems and operational pipelines that remove human friction from complex workflows.',
      color: '#34d399', // mint
      x: 82,
      y: 42,
      relatedProjects: ['cold-connect', 'ai-lab'],
      metrics: 'Input → Agent → Action',
    },
    {
      id: 'global-community',
      name: 'GLOBAL / COMMUNITY EXPERIENCE',
      shortDesc: 'Cross-cultural leadership, stakeholder alignment & global outreach.',
      details: 'Collaborating across international networks and mobilizing diverse teams around shared objectives.',
      color: '#f59e0b', // amber
      x: 50,
      y: 74,
      relatedProjects: ['aiesec'],
      metrics: 'Cross-Border Collaboration',
    },
  ] as OSNode[],

  projects: [
    {
      id: 'cold-connect',
      name: 'COLD CONNECT',
      category: 'AI Systems / Workflow Product / Networking Intelligence',
      role: 'Product Designer & Systems Architect',
      keyMetric: '3-Stage Preparation Pipeline',
      tagline: '“Never walk into a networking conversation unprepared.”',
      description:
        'A specialized conversation preparation intelligence system helping ambitious MBA students and young professionals deconstruct executive targets, rehearse 60-second pitches with real-time feedback, and automate post-meeting follow-ups.',
      flowStages: [
        '01. Know Them',
        '02. Meet Them',
        '03. Stay Connected',
      ],
      workstreams: [
        {
          title: 'Context Synthesis (Know Them)',
          desc: 'Ingests target profile data, uncovers non-obvious career trajectory points, extracts conversational hooks, and flags strategic taboos.',
          icon: 'Compass',
        },
        {
          title: 'Pitch Studio (Meet Them)',
          desc: 'Structures a disciplined 3-part pitch (Hook, Proof, Ask), with countdown timer, voice cadence monitor, and rubric evaluation.',
          icon: 'Mic',
        },
        {
          title: 'Relationship Cadence (Stay Connected)',
          desc: 'Captures conversation takeaways, generates tailored follow-up correspondence, and schedules multi-touch touchpoints.',
          icon: 'Send',
        },
      ],
      caseStudy: {
        problem:
          'Ambitious professionals and MBA students often secure rare 20-minute executive conversations but walk in unprepared—resorting to superficial small talk or unfocused rambling, wasting valuable connection leverage.',
        context:
          'High-stakes networking (recruiting, venture pitches, executive mentorship) has zero margin for unforced errors. Most candidates spend 2 hours frantically reading disjointed LinkedIn profiles without a structured methodology for turning context into rapport.',
        roleDetails:
          'Conceived, designed, and prototyped Cold Connect as an end-to-end product demonstrating Product Thinking, AI Application, User-Centric Design, and Workflow Engineering.',
        approach: [
          'Deconstructed conversation readiness into 3 deterministic operational checkpoints: Pre-meeting intelligence, live 60-second delivery, and post-meeting follow-up.',
          'Built specialized few-shot prompt schemas that extract non-obvious conversational hooks while explicitly filtering out taboo topics.',
          'Engineered an interactive practice environment with optimal speech rate tracking (130-140 WPM) and multi-axis rubric scoring.',
        ],
        systemComponents: [
          { name: 'Target Entity Ingestion Layer', detail: 'Parses executive background, industry vectors, and user meeting intent.' },
          { name: 'Context Synthesis & Taboo Filter', detail: 'LLM pipeline generating trajectory briefings, conversational hooks, and strategic taboos.' },
          { name: 'Rehearsal Studio & Rubric Engine', detail: 'Real-time countdown timer, teleprompter checklist, and 4-axis delivery analysis.' },
          { name: 'Memory & Follow-up Orchestrator', detail: 'Converts conversation notes into tailored email/LinkedIn drafts and cadence reminders.' },
        ],
        outcome:
          'Developed a fully functional interactive product prototype embedded directly inside the portfolio. Note: All contact entities and sample data are tagged as DEMO DATA with strict adherence to zero fabricated metrics.',
        whatILearned:
          'Great AI products do not simply slap a chatbot on a problem; they deconstruct the human psychological anxiety curve into discrete, repeatable steps with tangible feedback.',
      },
    },
    {
      id: 'landsafe',
      name: 'LANDSAFE',
      category: 'PropTech / Real Estate / Systems',
      role: 'Director & Co-Founder',
      keyMetric: 'Data Pipeline Architecture',
      tagline: 'Improving transparency and efficiency in India’s land ecosystem.',
      description:
        'Building systems aimed at improving transparency and efficiency in India’s land ecosystem by turning opaque, unverified land records into clean structured intelligence.',
      flowStages: [
        'Fragmented Information',
        'Structured Data Pipeline',
        'Decision Support Engine',
      ],
      workstreams: [
        {
          title: 'Document Digitization',
          desc: 'Ingesting historical land registries, encumbrance certificates, and physical records.',
          icon: 'FileText',
        },
        {
          title: 'Verification Logic',
          desc: 'Validating title chains, statutory compliance, and cadastral boundary alignments.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Decision Interface',
          desc: 'Presenting verifiable title reports and risk vectors for institutional stakeholders.',
          icon: 'Compass',
        },
      ],
      caseStudy: {
        problem:
          'Land information in India is deeply fragmented across disparate administrative departments, physical registries, and inconsistent survey data, creating massive diligence friction and transaction risk.',
        context:
          'Indian real estate transactions suffer from information asymmetry. Buyers, developers, and financial institutions face costly delays verifying title clarity, spatial coordinates, and encumbrance histories.',
        roleDetails:
          'As Director & Co-Founder, spearheaded the foundational system architecture, product discovery with real estate stakeholders, and structured data methodologies.',
        approach: [
          'Deconstructed the statutory land due-diligence lifecycle into discrete legal and spatial checkpoints.',
          'Established a multi-layer verification protocol to cross-examine registry logs, cadastral maps, and revenue archives.',
          'Designed intuitive visual decision artifacts so non-technical decision-makers can evaluate risk instantly.',
        ],
        systemComponents: [
          { name: 'Ingestion Layer', detail: 'Consolidates multi-source records into normalized data models.' },
          { name: 'Cross-Verification Engine', detail: 'Correlates revenue records against survey maps to detect discrepancies.' },
          { name: 'Report Generation System', detail: 'Synthesizes clean risk indicators and structured title summaries.' },
        ],
        outcome:
          'Established an operational framework for transparent land intelligence. Detailed case study and technical benchmarks coming soon.',
        whatILearned:
          'True systems leverage in messy legacy domains does not come from superficial UI; it requires rigorous data normalization at the root source.',
      },
    },
    {
      id: 'ethanol-plant',
      name: 'ETHANOL PLANT EXECUTION',
      category: 'Industrial Execution / Infrastructure',
      role: 'Project Execution & Coordination',
      keyMetric: '₹152 Cr | 100 KLPD Scale',
      tagline: 'Orchestrating capital infrastructure through rigorous cross-workstream coordination.',
      description:
        'Ground-up execution management for a ₹152 Crore, 100 KLPD (Kilo Litres Per Day) greenfield ethanol production facility, synchronizing civil, mechanical, and regulatory workstreams under tight timelines.',
      flowStages: ['Complexity', 'Coordination', 'Execution'],
      workstreams: [
        {
          title: 'Civil & Structural',
          desc: 'Heavy foundation piles, distillation tower structures, and boiler house civil works.',
          icon: 'Building2',
        },
        {
          title: 'Mechanical & Piping',
          desc: 'High-pressure steam lines, fermentation tank farms, and cooling towers alignment.',
          icon: 'Cog',
        },
        {
          title: 'Distillation & Fermentation',
          desc: 'Grain handling systems, liquefaction, yeast propagation, and molecular sieve dehydration.',
          icon: 'Layers',
        },
        {
          title: 'Statutory & Commissioning',
          desc: 'Environmental clearances, PESO approvals, factory inspectorate, and trial batch runs.',
          icon: 'CheckCircle2',
        },
      ],
      caseStudy: {
        problem:
          'Large-scale industrial projects encounter severe bottlenecks when cross-discipline dependencies (civil, mechanical, electrical, instrumentation, and regulatory approvals) drift out of synchronization.',
        context:
          'Execution of a 100 KLPD greenfield grain-based ethanol plant with an outlay of ₹152 Crore. The project required seamless alignment between OEM vendors, engineering contractors, and regulatory bodies.',
        roleDetails:
          'Orchestrated multi-workstream tracking, dependency resolution, site-level vendor coordination, and schedule risk mitigation across mechanical and civil units.',
        approach: [
          'Decomposed the master project timeline into critical-path dependency matrices.',
          'Instituted daily operational synchronization loops between structural contractors and process equipment OEMs.',
          'Built responsive escalation buffers for material delivery and regulatory inspections.',
        ],
        systemComponents: [
          { name: 'Critical Path Tracker', detail: 'Dynamic monitoring of sequential dependencies between civil handoffs and heavy equipment erection.' },
          { name: 'OEM Integration Matrix', detail: 'Standardized interface specifications across boilers, distillation columns, and water treatment units.' },
          { name: 'Regulatory Clearance Roadmap', detail: 'Parallelized documentation pipelines for state pollution control and industrial licensing.' },
        ],
        outcome:
          'Successfully maintained multi-stream synchronization on a ₹152 Cr / 100 KLPD installation. Detailed case study coming soon.',
        whatILearned:
          'Execution at scale is about eliminating friction at the handoffs between disciplines. The bottleneck is rarely technical capability; it is coordination latency.',
      },
    },
    {
      id: 'political-strategy',
      name: 'POLITICAL STRATEGY & ANALYTICS',
      category: 'Strategy / Analytics / Political Intelligence',
      role: 'Strategic Analyst & Research',
      keyMetric: 'Decomposition & Decision Support',
      tagline: 'Deconstructing grassroots sentiment and ground realities into strategic decisions.',
      description:
        'Applied quantitative analytics, qualitative field research, and structured problem decomposition to provide objective decision support in dynamic political environments.',
      flowStages: [
        'Field Intelligence',
        'Data Decomposition',
        'Strategic Action Plans',
      ],
      workstreams: [
        {
          title: 'Voter Sentiment Mapping',
          desc: 'Structured sampling and cohort analysis across demographic segments.',
          icon: 'PieChart',
        },
        {
          title: 'Issue Prioritization',
          desc: 'Ranking local socioeconomic constraints by civic urgency and political salience.',
          icon: 'Target',
        },
        {
          title: 'Executive Briefings',
          desc: 'Translating nuanced polling and field feedback into actionable tactical directives.',
          icon: 'FileSpreadsheet',
        },
      ],
      caseStudy: {
        problem:
          'Electoral and civic environments are flooded with anecdotal noise and cognitive bias, making high-stakes resource allocation error-prone and reactive.',
        context:
          'High-stakes political strategy engagements requiring rapid situational analysis, ground reality verification, and strategic messaging alignment across constituencies.',
        roleDetails:
          'Focused on analytical thinking, ground research synthesis, hypothesis testing, and producing structured decision frameworks for leadership.',
        approach: [
          'Replaced anecdotal intuition with structured qualitative interview protocols and regional data synthesis.',
          'Segmented voter concerns by grievance type, local leadership credibility, and administrative delivery.',
          'Synthesized findings into crisp visual executive memos highlighting high-leverage intervention opportunities.',
        ],
        systemComponents: [
          { name: 'Research Decomposition Engine', detail: 'Deconstructs massive qualitative survey sets into categorizable sentiment vectors.' },
          { name: 'Constituency Decision Matrix', detail: 'Maps ground issues against resource allocation feasibility.' },
          { name: 'Briefing Protocol', detail: 'Strict signal-to-noise ratio in strategic recommendations.' },
        ],
        outcome:
          'Delivered rigorous analytical frameworks and strategic decision support. Note: Electoral results and sensitive metrics are confidential. Detailed case study coming soon.',
        whatILearned:
          'Clarity is power. The strategist’s job is not to deliver more data, but to filter out 95% of noise so leadership can act on the 5% that decides the outcome.',
      },
    },
    {
      id: 'aiesec',
      name: 'AIESEC GLOBAL EXPERIENCE',
      category: 'Global Outreach / Leadership / Community',
      role: 'Leadership & International Outreach',
      keyMetric: 'Cross-Border Collaboration',
      tagline: 'Mobilizing cross-cultural teams and facilitating international exchange programs.',
      description:
        'Active leadership within the world’s largest youth-run organization, coordinating global talent exchanges, driving partnerships, and aligning diverse cultural perspectives around shared goals.',
      flowStages: [
        'Stakeholder Outreach',
        'Cross-Cultural Alignment',
        'Global Delivery',
      ],
      workstreams: [
        {
          title: 'International Talent Exchange',
          desc: 'Facilitating seamless cross-border mobility and youth leadership development.',
          icon: 'Globe',
        },
        {
          title: 'Partnership Building',
          desc: 'Negotiating value propositions with corporate and social sector sponsors.',
          icon: 'Users',
        },
        {
          title: 'Team Development',
          desc: 'Fostering ownership and execution discipline among young volunteers.',
          icon: 'Sparkles',
        },
      ],
      caseStudy: {
        problem:
          'Navigating cross-border operational coordination with zero command-and-control authority requires exceptional influence, shared purpose, and structured systems.',
        context:
          'Engaging with international stakeholders, coordinating cross-cultural student exchanges, and driving localized community impact through global frameworks.',
        roleDetails:
          'Led outreach initiatives, stakeholder communication, team coordination, and partner engagement programs.',
        approach: [
          'Built predictable communication protocols across distributed and multicultural team members.',
          'Standardized onboarding and partner liaison workflows to eliminate logistical delays.',
          'Emphasized values-driven leadership and shared accountability.',
        ],
        systemComponents: [
          { name: 'Exchange Pipeline', detail: 'End-to-end milestone tracker for international applicant vetting and placement.' },
          { name: 'Cultural Integration Framework', detail: 'Structured peer support system for incoming exchange participants.' },
          { name: 'Partnership Lifecycle', detail: 'Standard operating procedures for institutional sponsorship.' },
        ],
        outcome:
          'Strengthened cross-border cooperation and expanded leadership reach. Detailed case study coming soon.',
        whatILearned:
          'In volunteer and mission-driven organizations, you cannot rely on formal authority. True leadership is about designing systems where the right behavior is the easiest behavior.',
      },
    },
  ] as ProjectItem[],

  timeline: [
    {
      year: '2019 – 2023',
      title: 'B.Tech in Mechanical Engineering',
      organization: 'Vasavi College of Engineering',
      phase: 'ENGINEERING',
      tag: 'First Principles & Physical Systems',
      summary:
        'Trained in core engineering principles, thermodynamics, fluid mechanics, design of machine elements, and systems engineering.',
      details: [
        'Built a solid analytical foundation in mathematics, mechanics, and physical constraints.',
        'Developed intuition for how energy, materials, and forces interact in complex assemblies.',
        'Applied structured problem-solving to engineering design challenges.',
      ],
    },
    {
      year: '2020 – 2022',
      title: 'Global Outreach & Team Leadership',
      organization: 'AIESEC',
      phase: 'STRATEGY',
      tag: 'Cross-Border Collaboration',
      summary:
        'Engaged in international youth leadership, managing global talent exchange operations and cross-cultural initiatives.',
      details: [
        'Operated across multicultural teams with shared organizational objectives.',
        'Honed interpersonal negotiation, partner outreach, and youth mobilization skills.',
        'Developed a global perspective on talent systems and collaborative execution.',
      ],
    },
    {
      year: '2022 – 2023',
      title: 'Political Strategy & Analytics',
      organization: 'Strategic Advisory & Research',
      phase: 'STRATEGY',
      tag: 'Problem Decomposition & Intelligence',
      summary:
        'Applied quantitative methods and field research decomposition to strategic advisory and decision-support systems.',
      details: [
        'Dissected complex qualitative voter feedback into clean actionable intelligence.',
        'Formulated objective decision trees for leadership under time-sensitive constraints.',
        'Learned to isolate critical levers amid high volumes of contradictory signals.',
      ],
    },
    {
      year: '2023 – 2024',
      title: 'Industrial Execution Manager',
      organization: 'Greenfield Ethanol Facility (₹152 Cr / 100 KLPD)',
      phase: 'EXECUTION',
      tag: 'Large-Scale Capital Coordination',
      summary:
        'Ground-level orchestration of multi-disciplinary workstreams (civil, piping, distillation, statutory) on a massive industrial scale.',
      details: [
        'Synchronized OEM equipment deliveries with structural foundation readiness.',
        'Maintained critical-path schedules across dozens of simultaneous subcontractor activities.',
        'Gained deep respect for the physical reality of capital deployment and industrial engineering.',
      ],
    },
    {
      year: '2024',
      title: 'Director & Co-Founder',
      organization: 'LANDSAFE (PropTech / Systems)',
      phase: 'ENTREPRENEURSHIP',
      tag: 'Transforming Messy Land Realities',
      summary:
        'Co-founded LANDSAFE to bring transparency, structured data pipelines, and decision confidence to India’s land ecosystem.',
      details: [
        'Spearheaded system architecture to convert fragmented land records into verifiable intelligence.',
        'Worked directly with institutional stakeholders and real estate professionals to refine user workflows.',
        'Architected operational pipelines combining regulatory knowledge with data engineering.',
      ],
    },
    {
      year: 'Present',
      title: 'AI, Automation & Systems Building',
      organization: 'Independent Lab & Venture Exploration',
      phase: 'AI SYSTEMS',
      tag: 'Autonomous Workflows & Leverage Multipliers',
      summary:
        'Building proactive AI agents, automation pipelines, and decision-support tools that convert messy operational friction into autonomous systems.',
      details: [
        'Developing modular agent loops with closed-loop verification and human-in-the-loop controls.',
        'Automating high-cognition business workflows, research synthesis, and data validation.',
        'Exploring the intersection of real-world domain expertise and autonomous software leverage.',
      ],
    },
  ] as JourneyMilestone[],

  principles: [
    {
      number: '01',
      title: 'DECOMPOSE THE PROBLEM',
      essence: 'Break complexity into systems, constraints and decisions.',
      explanation:
        'A problem rarely fails because it is unsolvable; it fails because it is addressed as an undifferentiated monolith. I isolate the boundary conditions, separate variables from constants, and reduce the core dilemma to discrete, addressable trade-offs.',
      mentalModel: 'First Principles × Constraint Mapping',
      actionItem: 'Never brainstorm solutions before explicitly mapping the failure modes and hard physical/statutory limits.',
    },
    {
      number: '02',
      title: 'FIND THE LEVER',
      essence: 'Identify the variable that can disproportionately change the outcome.',
      explanation:
        'In any complex system, 80% of activities generate only marginal change, while a single leverage point can alter the entire state space. Whether it is sequencing civil handoffs on an industrial site or structuring clean land registries, I focus relentless attention on the critical constraint.',
      mentalModel: 'Theory of Constraints (Goldratt) × High-Leverage Activities',
      actionItem: 'Ask: “If I could only optimize one single metric this week, which one makes all others irrelevant?”',
    },
    {
      number: '03',
      title: 'BUILD THE SYSTEM',
      essence: 'Move from one-off execution toward repeatable processes.',
      explanation:
        'Heroic individual effort does not scale. If a problem is solved once with sweat, it must be codified into a reliable operating model, SOP, or automated protocol so that anyone on the team can achieve the same standard with zero variance.',
      mentalModel: 'Feedback Loops & Standard Operating Procedures (SOPs)',
      actionItem: 'Document every successful manual execution as a reproducible blueprint before moving to the next task.',
    },
    {
      number: '04',
      title: 'AUTOMATE THE REPETITION',
      essence: 'Use AI and automation where they create genuine leverage.',
      explanation:
        'Automation applied to an inefficient process only magnifies the chaos. Once a system is proven manually, I deploy AI agents, scripts, and autonomous logic to absorb cognitive fatigue, eliminate latency, and increase throughput.',
      mentalModel: 'Human-in-the-Loop AI × Orchestrated Agent Pipelines',
      actionItem: 'Automate only what is deterministic or verifiable; use AI where contextual synthesis provides disproportionate acceleration.',
    },
    {
      number: '05',
      title: 'SHIP',
      essence: 'Ideas only matter when they become reality.',
      explanation:
        'An elegant strategy on a whiteboard has zero market value. Real capability is measured by concrete artifacts operating under real-world pressure — whether pouring concrete on a ₹152 Cr plant or pushing production code for an AI pipeline.',
      mentalModel: 'Bias for Action × Reality Distortion by Execution',
      actionItem: 'Shorten the cycle between conception, testing, and real-world deployment to the absolute minimum.',
    },
  ] as ThinkingPrinciple[],

  aiLab: [
    {
      id: 'exp-cold-connect',
      title: 'Cold Connect: Networking Intelligence Engine',
      type: 'BUILD',
      description:
        '3-stage preparation pipeline transforming target digital footprints into executive dossiers, rehearsed 60-second pitches with real-time feedback, and automated follow-up cadences.',
      architecture: ['Target Ingestion', 'Hook & Taboo Extraction', 'Speech Pacing Monitor', 'Post-Meeting CRM Sync'],
      status: 'Live Prototype',
      tags: ['Product Design', 'Conversational AI', 'Speech Rubrics', 'Cold Connect'],
    },
    {
      id: 'exp-1',
      title: 'Autonomous Research & Decision Agent',
      type: 'BUILD',
      description:
        'A modular multi-step AI agent that decomposes complex domain queries, gathers distributed signals, validates contradictions, and compiles verifiable executive memos.',
      architecture: ['Query Decomposition', 'Context Retrieval', 'Critique Loop', 'Action Synthesis'],
      status: 'Functional Prototype',
      tags: ['Agentic Workflows', 'Decision Support', 'LLMs'],
    },
    {
      id: 'exp-2',
      title: 'Land Title Document Parsing Pipeline',
      type: 'EXPERIMENT',
      description:
        'Automating the extraction, OCR normalization, and cross-checking of non-standard legal land records and encumbrance certificates into structured JSON schemas.',
      architecture: ['Document Ingestion', 'Vision OCR', 'Schema Normalization', 'Anomaly Detection'],
      status: 'Active Exploration',
      tags: ['PropTech', 'Vision AI', 'OCR'],
    },
    {
      id: 'exp-3',
      title: 'Connected Fitness & Bio-Telemetry Automation',
      type: 'BUILD',
      description:
        'Proactive health agent synchronizing biometric streams with dynamic calendar scheduling, sleep optimization signals, and adaptive training routines.',
      architecture: ['Wearable Telemetry', 'Pattern Synthesis', 'Proactive Triggering', 'Notification Action'],
      status: 'Personal Beta',
      tags: ['Connected Health', 'Telemetry', 'Automation'],
    },
    {
      id: 'exp-4',
      title: 'Multi-Stream Industrial Dependency Monitor',
      type: 'EXPLORATION',
      description:
        'Simulating critical-path risk mitigation in industrial capital construction by mapping contractor logs and procurement lead-times to identify bottlenecks early.',
      architecture: ['Schedule Graph', 'Lead Time Predictor', 'Bottleneck Scorer', 'Executive Alert'],
      status: 'Concept / Modeling',
      tags: ['Industrial Systems', 'Graph Theory', 'Operations'],
    },
    {
      id: 'exp-5',
      title: 'Proactive Workflow & Context Assistant',
      type: 'BUILD',
      description:
        'An ambient desktop assistant that detects repetitive email and document tasks, pre-generating actionable drafts and contextual links before being asked.',
      architecture: ['Context Listener', 'Intent Prediction', 'Draft Generation', 'One-Click Execution'],
      status: 'Internal Dogfooding',
      tags: ['Proactive UX', 'Automation', 'Productivity'],
    },
    {
      id: 'exp-6',
      title: 'AI-Powered Business Intelligence Pipeline',
      type: 'EXPERIMENT',
      description:
        'Self-healing automated data extraction from messy spreadsheet exports into unified operational dashboards with automated outlier detection.',
      architecture: ['File Drop Ingestion', 'Fuzzy Mapping', 'Validation Rules', 'Live KPI Refresh'],
      status: 'Exploratory Lab',
      tags: ['Data Pipelines', 'ETL', 'Automation'],
    },
  ] as AILabExperiment[],

  articles: [
    {
      id: 'article-1',
      title: 'Deconstructing High-CapEx Execution Systems',
      topic: 'Industrial Operations',
      readingTime: '6 min read',
      shortThesis:
        'Why large physical infrastructure projects fail at inter-discipline handoffs, and how adopting digital agile dependency trees prevents coordination collapse.',
      status: 'THESIS DRAFT',
      coreTakeaways: [
        'The primary cause of schedule overruns is coordination latency, not technical failure.',
        'Physical civil milestones must be decoupled from sensitive electrical and instrumentation handoffs.',
        'Real-time transparency between vendors creates self-policing accountability.',
      ],
    },
    {
      id: 'article-2',
      title: 'The Data Bottleneck in Indian Real Estate',
      topic: 'PropTech & Governance',
      readingTime: '8 min read',
      shortThesis:
        'Examining the structural fault lines in land record management across India and why transparency requires structured data pipelines over cosmetic software wrappers.',
      status: 'THESIS DRAFT',
      coreTakeaways: [
        'Disparate administrative silos create severe information asymmetries.',
        'Digitization without semantic normalization reproduces physical errors digitally.',
        'Institutional buyers require verifiable risk indices rather than raw document dumps.',
      ],
    },
    {
      id: 'article-3',
      title: 'From Prompting to Autonomous Feedback Loops',
      topic: 'AI Architecture',
      readingTime: '5 min read',
      shortThesis:
        'Moving beyond linear prompt-response chatbots toward resilient agent systems equipped with evaluation steps, self-correction, and human escalation gates.',
      status: 'THESIS DRAFT',
      coreTakeaways: [
        'Zero-shot LLM outputs degrade rapidly as task complexity scales.',
        'Deterministic validation rules must bracket probabilistic AI outputs.',
        'The highest leverage lies in closed-loop systems that learn from correction actions.',
      ],
    },
    {
      id: 'article-4',
      title: 'The Mechanical Mindset in Software & Strategy',
      topic: 'Mental Models',
      readingTime: '7 min read',
      shortThesis:
        'How training in thermodynamics, mechanical tolerances, and fluid dynamics provides a superior mental model for software architecture and business scaling.',
      status: 'UPCOMING',
      coreTakeaways: [
        'Conservation of energy applies to human organizational bandwidth.',
        'Friction in a mechanical bearing is identical to operational friction in a startup.',
        'Safety factors and redundancy must be built into critical mission paths.',
      ],
    },
  ] as ArticleItem[],

  buildingNow: [
    {
      category: 'AI & Autonomous Systems',
      currentFocus: 'Agentic workflows with closed-loop feedback and deterministic error containment.',
      status: 'Active Prototyping',
      tech: 'LLMs, Tool Calling, Vector Memory, Node/TS',
    },
    {
      category: 'PropTech Intelligence',
      currentFocus: 'Deepening data structuring pipelines for land registries and diligence reports at LANDSAFE.',
      status: 'Scaling System Architecture',
      tech: 'Data Ingestion, Document Processing, Geocoding',
    },
    {
      category: 'Operations & Execution Tooling',
      currentFocus: 'Synthesizing industrial-grade execution frameworks into rapid-deployment operating manuals.',
      status: 'Codification',
      tech: 'SOP Engine, Dependency Graphs',
    },
    {
      category: 'Systems Thinking & Writing',
      currentFocus: 'Documenting frameworks on problem decomposition, high-stakes coordination, and technology leverage.',
      status: 'Editorial Drafting',
      tech: 'Essays, Frameworks, Visual Blueprints',
    },
  ],

  faqKnowledge: [
    {
      question: 'Who is Bairagoni Harith?',
      answer:
        'Bairagoni Harith is a systems thinker, strategist, and execution-oriented builder. He operates at the intersection of Strategy, Technology, Industrial Execution, and AI to turn messy real-world problems into executable solutions.',
    },
    {
      question: 'What is Harith\'s primary positioning?',
      answer:
        '“I build systems that turn messy real-world problems into executable solutions.” His secondary positioning is Strategy × Technology × Execution × AI.',
    },
    {
      question: 'What has Harith built?',
      answer:
        'Harith is Co-Founder & Director of LANDSAFE (a PropTech venture structuring India\'s land ecosystem), orchestrated execution on a ₹152 Cr / 100 KLPD greenfield ethanol plant, led strategic analytics and research in political strategy, built global outreach programs in AIESEC, and is actively developing AI agent experiments in his AI Lab.',
    },
    {
      question: 'What is LANDSAFE?',
      answer:
        'LANDSAFE is a PropTech venture where Harith serves as Director & Co-Founder. It builds systems aimed at improving transparency and efficiency in India’s land ecosystem by transforming fragmented, opaque land records into structured data pipelines and decision-support engines.',
    },
    {
      question: 'Tell me about the ethanol plant project.',
      answer:
        'Harith managed project execution and coordination on a ₹152 Crore, 100 KLPD (Kilo Litres Per Day) greenfield ethanol production facility. He synchronized multiple interconnected workstreams (Civil & Structural, Mechanical & Piping, Distillation & Fermentation, and Statutory Commissioning) to manage complexity, coordination, and execution at scale.',
    },
    {
      question: 'What is his experience in Political Strategy & Analytics?',
      answer:
        'Harith worked on strategic analytics, field intelligence synthesis, problem decomposition, and decision support for high-stakes political environments, replacing anecdotal noise with structured qualitative and quantitative frameworks.',
    },
    {
      question: 'What is his educational background?',
      answer:
        'Harith completed his Bachelor of Technology (B.Tech) in Mechanical Engineering at Vasavi College of Engineering (2019–2023). This provides his strong foundational grounding in first-principles physical systems, thermodynamics, and mechanical constraints.',
    },
    {
      question: 'How does Harith approach problems?',
      answer:
        'Harith follows 5 core principles: 01 — Decompose the Problem (break complexity into systems, constraints, and decisions); 02 — Find the Lever (identify the variable that disproportionately changes the outcome); 03 — Build the System (move from one-off effort to repeatable processes); 04 — Automate the Repetition (apply AI and automation where they create genuine leverage); 05 — Ship (ideas only matter when they become reality).',
    },
    {
      question: 'Why should I work with Harith?',
      answer:
        'Because Harith combines three rare traits: 1) High-level strategic thinking and problem decomposition; 2) Ground-level execution capability across high-stakes physical and organizational systems (e.g. ₹152 Cr plant, founding LANDSAFE); 3) Modern software and AI proficiency to automate repetitive friction and build compounding leverage.',
    },
  ],
};
