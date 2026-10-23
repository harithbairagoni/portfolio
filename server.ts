import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

// Structured knowledge base for system grounding
const PORTFOLIO_GROUNDING_FACTS = `
PROFILE:
- Name: Bairagoni Harith
- Primary Positioning: "I build systems that turn messy real-world problems into executable solutions."
- Secondary Positioning: Strategy × Technology × Execution × AI
- Email: harithgoud2@gmail.com
- Status: Building
- Core Pillars: Strategy, Industrial Execution, PropTech, AI & Automation, Global / Community Experience

EDUCATION:
- 2019–2023: B.Tech in Mechanical Engineering, Vasavi College of Engineering. Grounded in thermodynamics, machine design, physical constraints, and first-principles systems engineering.

EXPERIENCES & PROJECTS:
1. COLD CONNECT:
   - Product: Cold Connect (“Never walk into a networking conversation unprepared.”)
   - Role: Product Designer & Systems Architect
   - Category: AI Systems / Workflow Product / Networking Intelligence
   - Purpose: Helps ambitious MBA students, operators, and young professionals prepare for important networking conversations.
   - Core 3-Stage Architecture:
     * 01 — KNOW THEM: Research the target person, uncover non-obvious career trajectory points, extract high-leverage conversational hooks, generate relevant strategic questions, and flag sensitive taboos to avoid.
     * 02 — MEET THEM: Prepare a personalized 60-second 3-part pitch (Hook, Proof, Ask) and rehearse with a live countdown timer, voice cadence tracking (120-140 WPM target), and multi-axis objective rubric feedback.
     * 03 — STAY CONNECTED: Capture meeting takeaway notes, generate tailored follow-up emails and LinkedIn messages with zero generic fluff, and manage multi-touch relationship cadences (T+2h, T+30d, T+90d).
   - Why Harith Built This: Address the common failure mode in MBA networking and recruiting where candidates secure rare 20-minute executive meetings but walk in unprepared, resorting to superficial small talk or unfocused rambling. It turns an ambiguous anxiety-inducing interaction into a deterministic, high-leverage preparation pipeline.
   - Evidence of: Product Thinking, AI Application, User-Centric Design, Workflow Engineering, Rapid Prototyping, and Systems Thinking.
   - Grounding Rule: All sample personas (e.g. Sarah Chen, Marcus Vance, Priya Nair) are explicitly marked as DEMO DATA. No unverified customer metrics or adoption claims exist.

2. LANDSAFE:
   - Role: Director & Co-Founder
   - Category: PropTech / Real Estate / Systems
   - Description: Building systems aimed at improving transparency and efficiency in India’s land ecosystem.
   - Core Transformation: Fragmented information → structured data → decision support.
   - Key Work: Solving land diligence friction across fragmented administrative records, building structured data pipelines, title chain verification protocols, and risk indicator summaries.
   - Note: No unverified metrics or external claims.

2. ETHANOL PLANT EXECUTION:
   - Category: Industrial Execution / Infrastructure
   - Role: Project Execution & Coordination
   - Scale: ₹152 Cr outlay, 100 KLPD (Kilo Litres Per Day) greenfield plant.
   - Core Flow: Complexity → Coordination → Execution.
   - Workstreams: Civil & Structural (heavy foundation piles, distillation tower structures), Mechanical & Piping (steam lines, fermentation tank farms), Distillation & Fermentation (grain handling, liquefaction, dehydration), and Statutory & Commissioning (environmental clearances, PESO approvals, factory inspections).
   - Core Focus: Eliminating coordination latency across multi-discipline dependencies and OEM contractors.

3. POLITICAL STRATEGY & ANALYTICS:
   - Category: Strategy / Analytics / Political Intelligence
   - Role: Strategic Analyst & Research
   - Focus: Analytical thinking, field research, problem decomposition, decision support, and strategic communication.
   - Core Flow: Field Intelligence → Data Decomposition → Strategic Action Plans.
   - Key Work: Decomposing qualitative voter feedback into objective sentiment vectors, issue prioritization, executive briefing memos.
   - Note: Electoral results and numerical outcomes are confidential.

4. AIESEC:
   - Category: Global Outreach / Leadership / Community
   - Role: Leadership & International Outreach
   - Focus: International student exchange operations, cross-cultural team leadership, partner outreach, and youth mobilization.

JOURNEY TIMELINE:
- Evolution: ENGINEERING → STRATEGY → EXECUTION → ENTREPRENEURSHIP → AI SYSTEMS
- 2019–2023: Mechanical Engineering at Vasavi College of Engineering
- 2020–2022: AIESEC / Global Outreach
- 2022–2023: Political Strategy & Analytics
- 2023–2024: Industrial Execution (₹152 Cr / 100 KLPD greenfield ethanol plant)
- 2024: LANDSAFE (Director & Co-Founder)
- Present: AI / Automation / Systems Building (proactive agents, closed-loop feedback systems)

HOW HARITH THINKS (5 PRINCIPLES):
01 — DECOMPOSE THE PROBLEM: Break complexity into systems, constraints and decisions.
02 — FIND THE LEVER: Identify the variable that can disproportionately change the outcome.
03 — BUILD THE SYSTEM: Move from one-off execution toward repeatable processes.
04 — AUTOMATE THE REPETITION: Use AI and automation where they create genuine leverage.
05 — SHIP: Ideas only matter when they become reality.

AI LAB (EXPERIMENTAL FOCUS):
- AI agents with closed-loop verification
- Workflow automation & proactive desktop assistants
- Data-driven decision support engines
- Connected fitness and bio-telemetry automation
- Land title document OCR & schema normalization pipeline
- Core Agent Loop: INPUT → AI / AGENT → DECISION → ACTION → FEEDBACK
- Note: Experiments are strictly marked as EXPERIMENT, BUILD, or EXPLORATION, not deployed enterprise products.

WHAT HARITH IS BUILDING NOW:
- AI & Autonomous Systems (agentic workflows with closed-loop validation)
- PropTech Intelligence (scaling land record structuring at LANDSAFE)
- High-leverage execution tooling (operational SOPs and dependency graphs)
- Systems writing and mental models documentation
`;

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Profile photo upload persistence endpoint
  app.post("/api/upload-profile-photo", (req, res) => {
    try {
      const { dataUrl } = req.body;
      if (!dataUrl || typeof dataUrl !== "string") {
        res.status(400).json({ error: "dataUrl string required." });
        return;
      }
      const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        res.status(400).json({ error: "Invalid data URL format." });
        return;
      }
      const buffer = Buffer.from(matches[2], "base64");
      const publicDir = path.join(process.cwd(), "public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(path.join(publicDir, "P1052201.JPG"), buffer);
      fs.writeFileSync(path.join(publicDir, "profile.jpg"), buffer);
      console.log("Successfully saved profile photo to public directory.");
      res.json({ success: true, url: "/P1052201.JPG" });
    } catch (err: any) {
      console.error("Failed to save profile photo:", err);
      res.status(500).json({ error: err.message });
    }
  });

  app.post("/api/ask-harith", async (req, res) => {
    try {
      const { question, conversationHistory = [] } = req.body;

      if (!question || typeof question !== "string" || !question.trim()) {
        res.status(400).json({ error: "Question parameter is required." });
        return;
      }

      const trimmedQuestion = question.trim();

      // Check if Gemini API key is configured
      if (process.env.GEMINI_API_KEY) {
        try {
          const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
            httpOptions: {
              headers: {
                "User-Agent": "aistudio-build",
              },
            },
          });

          const systemPrompt = `You are the interactive AI persona representing Bairagoni Harith's portfolio operating system (HARITH.OS).
Your task is to answer user queries with high intellectual fidelity, conciseness, and precision, based STRICTLY AND EXCLUSIVELY on the verified portfolio facts provided below.

CRITICAL CONSTRAINTS:
1. Answer ONLY from the structured knowledge provided.
2. If the user asks about something NOT in the portfolio (e.g. personal relationships, fabricated metrics, companies not listed, unrelated world trivia, or unverified achievements), you MUST respond politely:
   "The portfolio does not contain that information. I can only provide details regarding Harith's verified work in Strategy, Industrial Execution (₹152 Cr ethanol plant), PropTech (LANDSAFE), AI & Automation, and his problem-solving principles."
3. Do NOT hallucinate achievements, clients, awards, revenue, or metrics not explicitly listed.
4. Tone: Highly intelligent, systems-focused, minimal, professional, direct, editorial. Keep answers concise (2 to 4 punchy sentences or clear bullet points).

PORTFOLIO VERIFIED FACTS:
${PORTFOLIO_GROUNDING_FACTS}
`;

          const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

          // Include recent conversation turns for context
          if (Array.isArray(conversationHistory)) {
            for (const msg of conversationHistory.slice(-4)) {
              if (msg.role === "user" || msg.role === "assistant") {
                contents.push({
                  role: msg.role === "assistant" ? "model" : "user",
                  parts: [{ text: msg.content }],
                });
              }
            }
          }

          contents.push({
            role: "user",
            parts: [{ text: trimmedQuestion }],
          });

          const response = await ai.models.generateContent({
            model: "gemini-3.8-flash",
            contents: contents as any,
            config: {
              systemInstruction: systemPrompt,
              temperature: 0.2, // Low temperature for high factual adherence
            },
          });

          const answerText = response.text?.trim() || "The portfolio does not contain that information.";
          res.json({ answer: answerText, source: "gemini" });
          return;
        } catch (apiError) {
          console.error("Gemini API call failed, invoking structured fallback engine:", apiError);
          // Fall through to deterministic grounding engine
        }
      }

      // Deterministic Grounding Fallback Engine
      const qLower = trimmedQuestion.toLowerCase();
      let fallbackAnswer = "";

      if (qLower.includes("who") || qLower.includes("about") || qLower.includes("intro") || qLower.includes("harith")) {
        if (qLower.includes("landsafe")) {
          fallbackAnswer = "At LANDSAFE, Harith is Director & Co-Founder. LANDSAFE is a PropTech venture building systems to improve transparency and efficiency in India’s land ecosystem by turning fragmented, opaque records into structured data pipelines and decision-support engines.";
        } else if (qLower.includes("ethanol") || qLower.includes("plant") || qLower.includes("152")) {
          fallbackAnswer = "Harith managed project execution and coordination on a ₹152 Crore, 100 KLPD (Kilo Litres Per Day) greenfield ethanol production facility. He synchronized multiple interconnected workstreams—Civil & Structural, Mechanical & Piping, Distillation & Fermentation, and Statutory Clearances—to eliminate coordination latency across heavy infrastructure.";
        } else if (qLower.includes("politics") || qLower.includes("political") || qLower.includes("strategy")) {
          fallbackAnswer = "In Political Strategy & Analytics, Harith applied quantitative methods, qualitative research decomposition, and analytical problem-solving to provide objective strategic decision support for leadership under high-noise conditions.";
        } else if (qLower.includes("education") || qLower.includes("college") || qLower.includes("engineering")) {
          fallbackAnswer = "Harith graduated with a B.Tech in Mechanical Engineering from Vasavi College of Engineering (2019–2023), establishing his foundation in first-principles physical systems, thermodynamics, and rigorous constraint-based thinking.";
        } else if (qLower.includes("approach") || qLower.includes("think") || qLower.includes("principles")) {
          fallbackAnswer = "Harith operates by 5 core principles: 01 — Decompose the Problem (break complexity into systems, constraints, and decisions); 02 — Find the Lever (identify high-impact variables); 03 — Build the System (convert one-off wins into repeatable SOPs); 04 — Automate the Repetition (apply AI and scripts for genuine leverage); 05 — Ship (ideas only matter when made reality).";
        } else if (qLower.includes("why work") || qLower.includes("hire") || qLower.includes("work with")) {
          fallbackAnswer = "Harith brings a rare synthesis: high-level strategic reasoning, proven execution capability across physical and capital constraints (₹152 Cr plant, co-founding LANDSAFE), and autonomous AI systems engineering to turn complex chaos into scalable leverage.";
        } else {
          fallbackAnswer = "Bairagoni Harith is a systems thinker and execution-oriented builder. His primary positioning is: 'I build systems that turn messy real-world problems into executable solutions,' operating across Strategy, Technology, Industrial Execution, and AI.";
        }
      } else if (qLower.includes("what has harith built") || qLower.includes("built") || qLower.includes("projects") || qLower.includes("portfolio")) {
        fallbackAnswer = "Harith has co-founded LANDSAFE (PropTech structuring India’s land diligence), coordinated execution of a ₹152 Cr / 100 KLPD greenfield ethanol infrastructure plant, conducted analytics in political strategy, led global youth exchanges at AIESEC, and experiments with autonomous AI agent workflows in his AI Lab.";
      } else if (qLower.includes("ai") || qLower.includes("automation") || qLower.includes("agent") || qLower.includes("lab")) {
        fallbackAnswer = "In his AI Lab, Harith builds and explores autonomous agent loops, land title OCR normalization pipelines, proactive workflow assistants, and connected bio-telemetry automation, adhering to the cycle: Input → AI / Agent → Decision → Action → Feedback.";
      } else if (qLower.includes("contact") || qLower.includes("email") || qLower.includes("reach")) {
        fallbackAnswer = "You can connect with Harith directly via email at harithgoud2@gmail.com or through LinkedIn to discuss systems, infrastructure, strategy, or emerging AI technologies.";
      } else {
        fallbackAnswer = "The portfolio does not contain that information. You can ask about Harith's work with LANDSAFE, the ₹152 Cr ethanol plant, his political strategy analytics, his 5 thinking principles, or his AI Lab explorations.";
      }

      res.json({ answer: fallbackAnswer, source: "grounded-fallback" });
    } catch (err: any) {
      console.error("Error in /api/ask-harith:", err);
      res.status(500).json({
        error: "Failed to process question",
        answer: "The portfolio does not contain that information.",
      });
    }
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
