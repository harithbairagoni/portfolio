export interface DemoContact {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  industry: string;
  meetingGoal: string;
  avatarInitials: string;
  headline: string;
  dossier: {
    trajectory: string[];
    coreFocus: string;
    conversationHooks: {
      hook: string;
      context: string;
      source: string;
    }[];
    highImpactQuestions: {
      question: string;
      rationale: string;
    }[];
    strategicTaboos: string[];
  };
  pitchTemplate: {
    hook: string;
    proof: string;
    ask: string;
    fullScript: string;
    speakingPoints: string[];
    estimatedDurationSec: number;
    wordCount: number;
  };
  sampleFeedback: {
    overallScore: number;
    scores: {
      clarity: number;
      relevance: number;
      hookStrength: number;
      pacing: number;
    };
    strengths: string[];
    critique: string[];
    revisedOpeningSuggestion: string;
  };
  followUp: {
    emailSubject: string;
    emailBody: string;
    linkedInNote: string;
    cadence: {
      timing: string;
      action: string;
      purpose: string;
    }[];
  };
}

export const DEMO_CONTACTS: DemoContact[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen [DEMO DATA]',
    role: 'Partner, Climate & Industrial Tech',
    company: 'Horizon Venture Partners [DEMO DATA]',
    location: 'San Francisco / New York',
    industry: 'Venture Capital / Industrial Decarbonization',
    meetingGoal: '15-min informational interview on industrial decarbonization & PropTech systems',
    avatarInitials: 'SC',
    headline: 'Investing in deep tech, hard asset decarbonization, and physical systems transformation. Ex-McKinsey Principal, HBS.',
    dossier: {
      trajectory: [
        'B.S. in Chemical Engineering from Stanford → 6 years in consulting (McKinsey Operations Practice).',
        'Led due diligence on multiple industrial energy storage and biofuels investments at Horizon.',
        'Recently co-authored Horizon\'s whitepaper: "The Physical Constraint: Decarbonizing Tier-2 Industrial Infrastructure".'
      ],
      coreFocus: 'Physical infrastructure bottlenecks, capital intensity vs. software leverage, brownfield asset retrofits.',
      conversationHooks: [
        {
          hook: 'Physical vs. Software Constraints in Heavy Industry',
          context: 'Her recent thesis emphasizes that software without boots-on-the-ground operational alignment fails in heavy industrial facilities.',
          source: 'Horizon Q3 LP Letter [DEMO DATA]'
        },
        {
          hook: 'Bio-refinery & Ethanol Supply Chain Logistics',
          context: 'Horizon recently looked into biofuel feedstock tracking and grain aggregation bottlenecks across developing markets.',
          source: 'Recent Podcast Interview [DEMO DATA]'
        },
        {
          hook: 'Mechanical Engineering First-Principles Diligence',
          context: 'Values founders and operators who understand thermodynamics, piping, and physical procurement, not just slide decks.',
          source: 'Panel at Climate Tech Summit [DEMO DATA]'
        }
      ],
      highImpactQuestions: [
        {
          question: 'In your recent LP letter on industrial decarbonization, you highlighted procurement lead times as the primary risk. How do you evaluate startups that bridge software scheduling with physical EPC contractors?',
          rationale: 'Shows you read her primary thesis and understand the exact boundary where software meets heavy industry.'
        },
        {
          question: 'When evaluating hard asset execution like bio-refineries, where do you see the biggest discrepancy between software promises and field reality on the ground?',
          rationale: 'Positions you as someone with direct ground-level industrial plant experience (₹152 Cr plant background).'
        },
        {
          question: 'Horizon prioritizes capital efficiency in heavy sectors. Does your team favor venture-scale software layers on existing assets or vertically integrated developers?',
          rationale: 'Probes investment philosophy at an institutional level rather than asking basic career questions.'
        }
      ],
      strategicTaboos: [
        'Do NOT ask: "Can you review my resume or help me get a job at Horizon?" (Breaks professional rapport immediately; focus on thesis alignment first).',
        'Do NOT pitch purely theoretical AI SaaS without addressing hardware or regulatory bottlenecks (she specializes in physical operations).'
      ]
    },
    pitchTemplate: {
      hook: 'Hi Sarah, thank you for making the time. I know you specialize in the collision of heavy industrial assets and technology at Horizon.',
      proof: 'My background is Mechanical Engineering, and I spent the last year coordinating execution on a ₹152 Cr, 100 KLPD greenfield ethanol plant—managing the messy reality across civil piles, high-pressure steam piping, and OEM vendors. At the same time, I co-founded LANDSAFE to structure India’s opaque land documentation into clean decision matrices.',
      ask: 'I’ve been following your thesis on industrial bottlenecks. Today, I’d love to test two specific hypotheses I’ve formed on where operational coordination breaks down between field engineers and software tools.',
      fullScript: 'Hi Sarah, thank you for making the time. I know you specialize in the collision of heavy industrial assets and technology at Horizon. My background is Mechanical Engineering, and I spent the last year coordinating execution on a ₹152 Cr, 100 KLPD greenfield ethanol plant—managing the messy reality across civil piles, high-pressure steam piping, and OEM vendors. At the same time, I co-founded LANDSAFE to structure India’s opaque land documentation into clean decision matrices. I’ve been following your thesis on industrial bottlenecks. Today, I’d love to test two specific hypotheses I’ve formed on where operational coordination breaks down between field engineers and software tools.',
      speakingPoints: [
        'Acknowledge her hard-asset thesis (10 seconds)',
        'State your unique edge: Mechanical Eng + ₹152 Cr plant execution + LANDSAFE founder (25 seconds)',
        'Deliver crisp, non-transactional ask: test 2 hypotheses on industrial operational bottlenecks (15 seconds)',
        'Yield conversation gracefully (5 seconds)'
      ],
      estimatedDurationSec: 52,
      wordCount: 114
    },
    sampleFeedback: {
      overallScore: 94,
      scores: {
        clarity: 95,
        relevance: 98,
        hookStrength: 92,
        pacing: 91
      },
      strengths: [
        'Laser-targeted to Sarah\'s exact thesis on physical vs software industrial bottlenecks.',
        'High credibility anchor: mentions ₹152 Cr greenfield plant and LANDSAFE without bragging.',
        'Non-needy closing ask: asking to test hypotheses on operations shows intellectual peerage.'
      ],
      critique: [
        'Make sure not to rush through the transition from ethanol plant to LANDSAFE.',
        'Keep the ending pause confident—pause after "software tools" to let her respond.'
      ],
      revisedOpeningSuggestion: '"Hi Sarah, really appreciate the time. I saw your recent piece on why software alone struggles in heavy industry—having worked boots-on-the-ground in a 100 KLPD plant, it resonated deeply."'
    },
    followUp: {
      emailSubject: 'Notes from our conversation: Industrial execution bottlenecks & software leverage',
      emailBody: `Hi Sarah,

Thank you for the thoughtful conversation today. Your observation on how OEM contractor procurement latency distorts software scheduling was particularly sharp.

As promised, here are the two quick notes from our discussion:
1. The coordination matrix we used during the 100 KLPD ethanol plant commissioning to align civil foundations with mechanical piping deliveries.
2. A 1-page summary of how we structured opaque title records at LANDSAFE into normalized schemas for institutional diligence.

No reply needed—just wanted to share what we touched upon. I'll keep you posted as our research into industrial agent workflows develops.

Best regards,
Harith`,
      linkedInNote: 'Hi Sarah, great speaking today about industrial decarbonization and field bottlenecks. Appreciated your perspective on EPC coordination. Looking forward to staying in touch!',
      cadence: [
        {
          timing: 'T+2 Hours',
          action: 'Send structured follow-up email with promised references',
          purpose: 'Reinforce reliability and responsiveness.'
        },
        {
          timing: 'T+30 Days',
          action: 'Share relevant industrial data point or milestone update',
          purpose: 'Maintain top-of-mind relevance without asking for favors.'
        },
        {
          timing: 'T+90 Days',
          action: 'Quarterly check-in on joint area of interest (biofuels / land diligence)',
          purpose: 'Establish long-term relationship trajectory.'
        }
      ]
    }
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance [DEMO DATA]',
    role: 'VP of Strategy & Corporate Development',
    company: 'Apex Infrastructure Group [DEMO DATA]',
    location: 'Chicago / Houston',
    industry: 'Energy & Heavy Infrastructure',
    meetingGoal: 'Discussion on capital project risk management & operational systems',
    avatarInitials: 'MV',
    headline: 'Spearheading capital allocation, EPC joint ventures, and plant asset acquisitions across North America and emerging markets.',
    dossier: {
      trajectory: [
        '15+ years managing large-scale capital infrastructure projects ($200M+ EPC portfolios).',
        'Expert in contractor risk modeling, multi-tier procurement, and operational commissioning.',
        'Passionate mentor to engineers transitioning into strategic management.'
      ],
      coreFocus: 'Reducing execution delay risks, contractor interface management, structured governance.',
      conversationHooks: [
        {
          hook: 'Cross-Discipline Interface Management',
          context: 'Marcus frequently posts about the "invisible handoff tax" when civil, mechanical, and electrical contractors misalign during commissioning.',
          source: 'Infrastructure Executive Keynote [DEMO DATA]'
        },
        {
          hook: 'Emerging Market EPC Dynamics',
          context: 'Apex is currently evaluating joint ventures in South Asia for biofuels and grain processing.',
          source: 'Apex Quarterly Investor Call [DEMO DATA]'
        }
      ],
      highImpactQuestions: [
        {
          question: 'In large-scale capital projects, the critical path often slips during the civil-to-mechanical handoff. In your experience at Apex, what early warning metrics best flag interface friction before milestones slip?',
          rationale: 'Proves you understand physical engineering project controls and speaks directly to his day-to-day headache.'
        },
        {
          question: 'How does Apex balance strict statutory compliance with aggressive commissioning timelines in greenfield expansions?',
          rationale: 'Draws on your direct experience with environmental and statutory approvals on the ₹152 Cr plant.'
        }
      ],
      strategicTaboos: [
        'Do NOT talk about software as a silver bullet; Marcus values field discipline and contract structure first.',
        'Do NOT generalize infrastructure; use specific terms like EPC, commissioning, and statutory clearances.'
      ]
    },
    pitchTemplate: {
      hook: 'Hello Marcus, thank you for connecting. I know Apex is leading major capital infrastructure rollouts across heavy energy sectors.',
      proof: 'With a foundation in Mechanical Engineering, I recently spent over a year coordinating execution on a ₹152 Cr greenfield ethanol plant—holding daily alignment across civil, piping, distillation columns, and statutory inspectors. I’ve seen firsthand how a single misaligned contractor flange or delayed pile foundation can stall weeks of capital progress.',
      ask: 'I’d love to spend 15 minutes asking about how you structure interface management across multi-contractor EPC setups at Apex scale.',
      fullScript: 'Hello Marcus, thank you for connecting. I know Apex is leading major capital infrastructure rollouts across heavy energy sectors. With a foundation in Mechanical Engineering, I recently spent over a year coordinating execution on a ₹152 Cr greenfield ethanol plant—holding daily alignment across civil, piping, distillation columns, and statutory inspectors. I’ve seen firsthand how a single misaligned contractor flange or delayed pile foundation can stall weeks of capital progress. I’d love to spend 15 minutes asking about how you structure interface management across multi-contractor EPC setups at Apex scale.',
      speakingPoints: [
        'State respect for Apex capital scale (8 seconds)',
        'Anchor your credibility in ₹152 Cr plant execution & mechanical background (25 seconds)',
        'Specific problem: interface risk between civil & mechanical contractors (12 seconds)',
        'Direct inquiry into his structural approach (10 seconds)'
      ],
      estimatedDurationSec: 55,
      wordCount: 118
    },
    sampleFeedback: {
      overallScore: 92,
      scores: {
        clarity: 94,
        relevance: 96,
        hookStrength: 90,
        pacing: 88
      },
      strengths: [
        'Direct alignment with his domain: contractor interfaces and capital project risk.',
        'Strong technical credibility: mentioning specific piping and pile foundation friction points.',
        'Respectful, professional tone appropriate for a senior corporate VP.'
      ],
      critique: [
        'Ensure you enunciate "₹152 Cr greenfield plant" clearly so the scale registers.',
        'Slightly trim the contractor list to keep delivery brisk under 50 seconds.'
      ],
      revisedOpeningSuggestion: '"Marcus, thanks for the time. Given Apex’s scale in capital delivery, I’m eager to compare notes on EPC contractor interface controls."'
    },
    followUp: {
      emailSubject: 'Thank you Marcus: Contractor interface management insights',
      emailBody: `Hi Marcus,

Really enjoyed our conversation today regarding EPC contractor interface controls and how you manage handoffs between civil foundations and mechanical equipment.

Your insight regarding daily contractor standups tied to physical milestone sign-offs resonated with what we experienced on the ₹152 Cr greenfield plant.

Thank you again for the generous mentorship. I will keep your advice in mind as we evaluate large-scale systems.

Warm regards,
Harith`,
      linkedInNote: 'Marcus, thank you for the invaluable insights on capital project execution today. Greatly appreciated your perspectives on interface risk management!',
      cadence: [
        {
          timing: 'T+4 Hours',
          action: 'Send brief thank-you email with gratitude for mentorship',
          purpose: 'Establish professional courtesy.'
        },
        {
          timing: 'T+45 Days',
          action: 'Send brief note updating on a project control framework',
          purpose: 'Demonstrate that his advice was acted upon.'
        }
      ]
    }
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair [DEMO DATA]',
    role: 'Chief Product Officer',
    company: 'UrbanGrid Technologies [DEMO DATA]',
    location: 'Bengaluru / Singapore',
    industry: 'PropTech / Spatial Intelligence / Enterprise Data',
    meetingGoal: 'Exchange notes on land record digitization & spatial decision systems',
    avatarInitials: 'PN',
    headline: 'Building enterprise spatial data infrastructure and automated registry workflows for municipal and real estate enterprises.',
    dossier: {
      trajectory: [
        'Ex-VP Product at leading Southeast Asian mapping unicorn.',
        '10+ years scaling enterprise data pipelines from fragmented public registries.',
        'Deep expertise in spatial geometry, cadastral map vectorization, and data compliance.'
      ],
      coreFocus: 'Turning unstructured government records into queryable geospatial intelligence.',
      conversationHooks: [
        {
          hook: 'Cadastral Boundary Reconciliation',
          context: 'Priya recently spoke on the technical challenge of reconciling century-old village revenue maps with modern satellite coordinates.',
          source: 'Geospatial World Forum [DEMO DATA]'
        },
        {
          hook: 'Enterprise Land Title Diligence Friction',
          context: 'UrbanGrid is exploring land provenance verification tools for commercial developers.',
          source: 'Tech In Asia Feature [DEMO DATA]'
        }
      ],
      highImpactQuestions: [
        {
          question: 'When vectorizing legacy revenue cadastral maps, how do you handle localized coordinate distortions without breaking statutory validity with local registrars?',
          rationale: 'Shows deep technical familiarity with the exact PropTech problem LANDSAFE tackles.'
        },
        {
          question: 'In enterprise PropTech, customers often want an all-in-one platform, but the data layers are fragmented. How did you determine your initial wedge at UrbanGrid?',
          rationale: 'Explores product strategy and go-to-market prioritization.'
        }
      ],
      strategicTaboos: [
        'Do NOT gloss over data accuracy; she is a spatial data purist who understands precision down to coordinate decimals.',
        'Do NOT talk about blockchain for land titles unless asked; focus on actual administrative reality.'
      ]
    },
    pitchTemplate: {
      hook: 'Hi Priya, really great to connect. I’ve been following UrbanGrid’s work in enterprise spatial data infrastructure.',
      proof: 'As Co-Founder and Director at LANDSAFE, I’ve been tackling India’s land diligence problem head-on. We build pipelines that ingest fragmented historical deeds, pahanis, and cadastral maps—normalizing them into structured decision matrices for institutional developers and lenders. I also bring a mechanical engineering background with direct field execution experience.',
      ask: 'Given your experience scaling data pipelines from messy public records, I’d love to understand how UrbanGrid navigated the balance between algorithmic extraction and statutory compliance validation.',
      fullScript: 'Hi Priya, really great to connect. I’ve been following UrbanGrid’s work in enterprise spatial data infrastructure. As Co-Founder and Director at LANDSAFE, I’ve been tackling India’s land diligence problem head-on. We build pipelines that ingest fragmented historical deeds, pahanis, and cadastral maps—normalizing them into structured decision matrices for institutional developers and lenders. I also bring a mechanical engineering background with direct field execution experience. Given your experience scaling data pipelines from messy public records, I’d love to understand how UrbanGrid navigated the balance between algorithmic extraction and statutory compliance validation.',
      speakingPoints: [
        'Applaud UrbanGrid spatial data scale (10 seconds)',
        'Position LANDSAFE: solving fragmented deeds & cadastral maps (25 seconds)',
        'Ask about algorithmic extraction vs statutory compliance (15 seconds)',
        'Invite her product philosophy (10 seconds)'
      ],
      estimatedDurationSec: 54,
      wordCount: 119
    },
    sampleFeedback: {
      overallScore: 96,
      scores: {
        clarity: 96,
        relevance: 97,
        hookStrength: 95,
        pacing: 94
      },
      strengths: [
        'Immediate founder-to-product-leader peer alignment around land data normalization.',
        'Highlights LANDSAFE as a concrete, live system rather than a theoretical idea.',
        'Sharp strategic question on algorithmic vs statutory compliance—a core dilemma in PropTech.'
      ],
      critique: [
        'Could briefly specify the type of customers LANDSAFE serves (e.g. institutional developers).',
        'Pitch flow is strong and natural.'
      ],
      revisedOpeningSuggestion: '"Hi Priya, excited to talk. Having built LANDSAFE to parse fragmented land registries in India, UrbanGrid’s spatial data approach is something I deeply respect."'
    },
    followUp: {
      emailSubject: 'Great connecting on land data normalization & spatial systems',
      emailBody: `Hi Priya,

Thank you for taking the time to share your perspective today on cadastral map vectorization and the balance between automated OCR extraction and statutory verification.

Your point about establishing a deterministic ground-truth validation layer before running LLM extraction aligns exactly with our product evolution at LANDSAFE.

Would love to stay in touch as both our systems mature. Wishing you and UrbanGrid continued momentum.

Best,
Harith`,
      linkedInNote: 'Priya, fantastic chatting about spatial data systems and land record normalization today. Appreciated your product insights!',
      cadence: [
        {
          timing: 'T+3 Hours',
          action: 'Send follow-up note highlighting mutual technical takeaway',
          purpose: 'Establish credibility as a fellow builder.'
        },
        {
          timing: 'T+60 Days',
          action: 'Share an update on land title extraction algorithms',
          purpose: 'Sustain technical dialogue.'
        }
      ]
    }
  }
];

export const COLD_CONNECT_PRODUCT_INFO = {
  name: 'COLD CONNECT',
  tagline: 'Never walk into a networking conversation unprepared.',
  coreAudience: 'Ambitious MBA students, early-stage operators, and young professionals facing high-stakes executive networking conversations.',
  positioningStatement: 'A specialized conversation preparation intelligence system that transforms loose digital breadcrumbs into executive briefing dossiers, rehearsed 60-second pitches, and automated post-meeting relationship follow-ups.',
  coreStages: [
    {
      number: '01',
      title: 'KNOW THEM',
      subtitle: 'Context Synthesis & Hook Extraction',
      description: 'Research the target, uncover non-obvious career trajectory points, extract conversational hooks, identify high-impact questions, and avoid strategic taboos.'
    },
    {
      number: '02',
      title: 'MEET THEM',
      subtitle: '60-Second Pitch & Live Practice',
      description: 'Generate a personalized 3-part pitch (Hook, Proof, Ask), practice against a live countdown timer with teleprompter cues, and receive instant rubric feedback.'
    },
    {
      number: '03',
      title: 'STAY CONNECTED',
      subtitle: 'Post-Meeting Memory & Follow-up Cadence',
      description: 'Capture conversation takeaways instantly, generate tailored follow-up emails & LinkedIn messages, and schedule multi-touch relationship cadences.'
    }
  ],
  whyIBuiltThis: {
    origin: 'During career transitions and high-stakes networking—especially across MBA recruiting, investor chats, and executive mentoring—most candidates make the same fatal mistake: they enter rare 20-minute meetings unprepared.',
    theProblem: 'People default to superficial questions like "tell me about your background" or ramble through unstructured 5-minute elevator pitches. Crucial rapport is lost, meetings feel transactional, and post-meeting follow-ups are either forgotten or written as generic thank-yous that fade from memory.',
    theSystemicSolution: 'I designed Cold Connect as a repeatable preparation system. Instead of spending 2 hours frantically scrolling through LinkedIn, tweets, and podcast transcripts, the user runs an automated 3-stage pipeline that extracts conversational leverage, structures a disciplined 60-second pitch, and locks in long-term follow-up memory.',
    evidencePillars: [
      {
        pillar: 'PRODUCT THINKING',
        detail: 'Deconstructed the ambiguous networking journey into 3 discrete, deterministic stages with clear user inputs and high-utility outputs.'
      },
      {
        pillar: 'AI APPLICATION',
        detail: 'Applied LLMs not as conversational gimmicks, but as structured schema extractors, persona reasoners, and objective delivery rubrics.'
      },
      {
        pillar: 'USER-CENTRIC DESIGN',
        detail: 'Prioritized high-pressure speed: 60-second practice timer, teleprompter mode, 1-click tailored email copy, and clear taboo warnings.'
      },
      {
        pillar: 'WORKFLOW DESIGN',
        detail: 'Closed the loop from pre-meeting research to in-meeting pitch delivery and post-meeting follow-up cadence.'
      },
      {
        pillar: 'RAPID PROTOTYPING',
        detail: 'Shipped a functional, high-fidelity digital product prototype that validates core user workflows before engineering heavy backend infrastructure.'
      },
      {
        pillar: 'SYSTEMS THINKING',
        detail: 'Treated interpersonal relationship building as an interconnected operational pipeline with feedback loops and cadence triggers.'
      }
    ]
  },
  architecture: {
    overview: 'Cold Connect orchestrates target ingestion, background normalization, multi-prompt persona synthesis, client-side speech pacing, and CRM memory state.',
    layers: [
      {
        name: 'Ingestion & Entity Layer',
        role: 'Target profile ingestion, meeting objective definition, and professional footprint parsing.',
        tech: 'Structured JSON Schema, Target Archetype Registry'
      },
      {
        name: 'Context Synthesis Engine',
        role: 'Extracts trajectory inflection points, discovers common conversational ground, and filters out taboo topics.',
        tech: 'LLM Prompt Pipeline with Few-Shot Persona Grounding'
      },
      {
        name: 'Pitch Generator & Practice Loop',
        role: 'Formats 3-part pitch (Hook, Proof, Ask), runs 60-second timer, computes word cadence & delivery pacing score.',
        tech: 'Interactive Timer State, Speech Rate Estimation (WPM), Real-time Rubric'
      },
      {
        name: 'Feedback & Delivery Coaching',
        role: 'Scores pitch on clarity, target relevance, and hook strength; outputs actionable tactical refinements.',
        tech: '4-Axis Rubric Analyzer, Structured Critique Evaluator'
      },
      {
        name: 'Post-Meeting CRM & Memory Store',
        role: 'Synthesizes conversation highlights into tailored follow-up copy and schedules proactive relationship touches.',
        tech: 'Follow-Up Template Generator, Local Storage Sync, Multi-touch Timeline'
      }
    ]
  }
};
