import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, FileText, ExternalLink, Calendar, MapPin, CheckCircle2, Award, BookOpen, Briefcase, Cpu, Layers } from 'lucide-react';

export default function ResumeSection() {
  const handleDownloadResume = () => {
    // Triggers browser print/save dialog formatted cleanly for PDF export
    window.print();
  };

  return (
    <section id="resume" className="py-24 sm:py-36 px-5 sm:px-10 lg:px-20 max-w-[1280px] mx-auto border-t border-[#DEDDD7]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DEDDD7]">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
            CURRICULUM VITAE
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#171717] font-normal tracking-tight">
            Resume
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B67] font-light leading-relaxed">
            Verified professional background, operating accomplishments, educational pedigree, and technical capabilities.
          </p>
        </div>

        {/* Download Resume Button */}
        <div className="shrink-0">
          <button
            onClick={handleDownloadResume}
            id="download-full-resume-btn"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#171717] hover:bg-[#333333] text-white font-medium text-xs font-mono tracking-wider transition-colors shadow-xs cursor-pointer group"
          >
            <span>DOWNLOAD FULL RESUME ↓</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PROFESSIONAL SUMMARY */}
      {/* ============================================================ */}
      <div className="py-12 border-b border-[#DEDDD7]">
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold mb-4">
          PROFESSIONAL SUMMARY
        </h3>
        <p className="text-base sm:text-lg text-[#171717] font-light leading-relaxed max-w-4xl">
          High-agency operator with 3+ years of experience across startups, infrastructure, and consulting. Co-founded a tech-led venture, managed execution for a ₹152 Cr capital project, and drove data-led political strategies for 4M+ voters. Skilled in navigating ambiguity, stakeholder alignment, and end-to-end execution.
        </p>
      </div>

      {/* ============================================================ */}
      {/* EXPERIENCE (Primary Hierarchy) */}
      {/* ============================================================ */}
      <div className="py-16 border-b border-[#DEDDD7] space-y-16">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold mb-2">
            WORK EXPERIENCE
          </h3>
          <p className="text-xs font-mono text-[#6B6B67]">
            VERIFIED OPERATING RECORD · 01 TO 03
          </p>
        </div>

        {/* 01 — LANDSAFE */}
        <article className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#66705B] font-semibold">01</span>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal tracking-tight">
                LANDSAFE REAL ESTATE TECHNOLOGY PVT. LTD.
              </h4>
              <div className="text-sm font-medium text-[#171717]">
                Director of Operations & Co-Founder
              </div>
            </div>
            <div className="text-xs font-mono text-[#6B6B67] shrink-0 sm:text-right">
              <div>Aug 2025 – Present</div>
              <div>Hyderabad, India</div>
            </div>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-[#6B6B67] font-light leading-relaxed max-w-4xl pl-5 list-disc marker:text-[#66705B]">
            <li>
              <strong className="text-[#171717] font-normal">Reduced verification TAT by 40%</strong> by building due diligence workflows across legal, GIS, and field operations.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Prevented ₹10 Cr+ in property disputes</strong> by creating a 30+ parameter property risk assessment compliance framework.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Generated ₹4 lakh in revenue</strong> at an early stage by leading customer acquisition, sales, and end-to-end service delivery.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Designed a property health report</strong> by synthesizing 74 years of legal precedents into a scalable risk assessment workflow.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Scaled the LANDSAFE partner ecosystem</strong> by expanding legal and surveying networks across Telangana.
            </li>
          </ul>
        </article>

        <div className="w-full h-[1px] bg-[#EBEAE5]" />

        {/* 02 — VIVEK BIO PRODUCTS PVT. LTD. */}
        <article className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#66705B] font-semibold">02</span>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal tracking-tight">
                VIVEK BIO PRODUCTS PVT. LTD.
              </h4>
              <div className="text-sm font-medium text-[#171717]">
                Assistant Project Manager
              </div>
            </div>
            <div className="text-xs font-mono text-[#6B6B67] shrink-0 sm:text-right">
              <div>Jul 2024 – Jul 2025</div>
              <div>Hyderabad, India</div>
            </div>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-[#6B6B67] font-light leading-relaxed max-w-4xl pl-5 list-disc marker:text-[#66705B]">
            <li>
              <strong className="text-[#171717] font-normal">Accelerated commissioning readiness by 20%</strong> by orchestrating cross-functional activities for a ₹152 Cr ethanol facility.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Reduced project bottlenecks by 30%</strong> by designing KPI dashboards enabling proactive risk management.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Improved cross-functional productivity by 25%</strong> by implementing daily reviews and ownership-based execution tracking.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Managed 20+ vendors and cross-functional teams</strong>, ensuring on-time delivery of critical equipment with zero path delays.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Achieved 95%+ scheduled adherence</strong> by coordinating engineering, procurement, and contractor workstreams.
            </li>
          </ul>
        </article>

        <div className="w-full h-[1px] bg-[#EBEAE5]" />

        {/* 03 — RAJNEETHI STRATEGIES (RASTRA) */}
        <article className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#66705B] font-semibold">03</span>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal tracking-tight">
                RAJNEETHI STRATEGIES (RASTRA)
              </h4>
              <div className="text-sm font-medium text-[#171717]">
                Political Analyst | Telangana Assembly Elections 2023
              </div>
            </div>
            <div className="text-xs font-mono text-[#6B6B67] shrink-0 sm:text-right">
              <div>Jun 2023 – Jul 2024</div>
              <div>Hyderabad, India</div>
            </div>
          </div>

          <ul className="space-y-3 text-sm sm:text-base text-[#6B6B67] font-light leading-relaxed max-w-4xl pl-5 list-disc marker:text-[#66705B]">
            <li>
              <strong className="text-[#171717] font-normal">Synthesized intelligence from 15 constituencies</strong> into actionable insights that guided campaign strategy.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Built strategic partnerships with community leaders</strong>, strengthening grassroots engagement and voter outreach.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Performed booth-level voter analysis</strong> to optimize constituency prioritization and campaign resource development.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Developed executive briefing notes for ministers and MLCs</strong>, enabling informed debate preparation.
            </li>
            <li>
              <strong className="text-[#171717] font-normal">Researched political and policy issues</strong> to shape media messaging and campaign narratives for senior leadership.
            </li>
          </ul>
        </article>
      </div>

      {/* ============================================================ */}
      {/* INTERNSHIP (Tata Sikorsky Aerospace) */}
      {/* ============================================================ */}
      <div className="py-12 border-b border-[#DEDDD7] space-y-6">
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
          INTERNSHIP
        </h3>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-[#171717] font-normal">
                TATA SIKORSKY AEROSPACE LTD.
              </h4>
              <div className="text-sm font-medium text-[#171717]">
                Project Intern
              </div>
            </div>
            <div className="text-xs font-mono text-[#6B6B67]">
              Feb 2023 – Apr 2023 · Hyderabad, India
            </div>
          </div>

          <ul className="space-y-2 text-sm text-[#6B6B67] font-light leading-relaxed max-w-4xl pl-5 list-disc marker:text-[#66705B]">
            <li>Analyzed machining expenditure patterns, identifying high-impact tool-optimization opportunities.</li>
            <li>Optimized machining parameters using Taguchi Analysis, increasing tool life by 30%.</li>
            <li>Executed validation trials, generating annualized savings of approximately $310K.</li>
            <li>Improved machining efficiency, increasing output from 20 to 25 components per tool.</li>
          </ul>
        </div>
      </div>

      {/* ============================================================ */}
      {/* EDUCATION */}
      {/* ============================================================ */}
      <div className="py-16 border-b border-[#DEDDD7] space-y-10">
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
          EDUCATION
        </h3>

        <div className="space-y-8">
          {/* Masters' Union */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h4 className="font-serif text-xl sm:text-2xl text-[#171717] font-normal">
                MASTERS’ UNION
              </h4>
              <span className="text-xs font-mono text-[#6B6B67]">
                2026 – Present · Gurugram, India
              </span>
            </div>
            <div className="text-sm text-[#171717] font-medium">
              PGP in Technology & Business Management
            </div>
            <p className="text-xs sm:text-sm text-[#6B6B67] font-light leading-relaxed">
              Won 1st Position at Masters’ Union Startup Weekend Challenge; awarded ₹5,000 prize.
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#EBEAE5]" />

          {/* Vasavi College of Engineering */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h4 className="font-serif text-xl sm:text-2xl text-[#171717] font-normal">
                VASAVI COLLEGE OF ENGINEERING
              </h4>
              <span className="text-xs font-mono text-[#6B6B67]">
                2019 – 2023 · Hyderabad, India
              </span>
            </div>
            <div className="text-sm text-[#171717] font-medium">
              BE Mechanical Engineering <span className="font-mono text-xs text-[#66705B]">· CGPA: 8.62 / 10</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#6B6B67] font-light leading-relaxed pl-5 list-disc marker:text-[#66705B]">
              <li>
                <strong className="text-[#171717] font-normal">Head Convenor — Operations, Euphoria Tech Fest:</strong> Managed operations for a 1,000+ attendee technical festival with 50+ volunteers.
              </li>
              <li>
                <strong className="text-[#171717] font-normal">Class Representative — Mechanical Department:</strong> Represented 120+ students for four years.
              </li>
            </ul>
          </div>

          <div className="w-full h-[1px] bg-[#EBEAE5]" />

          {/* School Level Pedigree */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="space-y-1">
              <h5 className="font-semibold text-[#171717]">NARAYANA JUNIOR COLLEGE</h5>
              <p className="text-[#6B6B67]">State Board MPC Class XII · 2016–2019</p>
              <p className="font-mono text-xs text-[#66705B] font-medium">97.3%</p>
            </div>

            <div className="space-y-1">
              <h5 className="font-semibold text-[#171717]">ALL SAINTS HIGH SCHOOL</h5>
              <p className="text-[#6B6B67]">SSC Board Class X</p>
              <p className="font-mono text-xs text-[#66705B] font-medium">9.2 / 10</p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PROJECTS IN RESUME */}
      {/* ============================================================ */}
      <div className="py-14 border-b border-[#DEDDD7] space-y-8">
        <div className="space-y-1">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
            KEY CV PROJECTS
          </h3>
          <p className="text-xs text-[#6B6B67] font-mono">
            ENGINEERING OPTIMIZATION & STATUTORY DOSSIERS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#DEDDD7] space-y-3">
            <span className="text-[10px] font-mono text-[#66705B] uppercase font-bold">
              MANUFACTURING & OPTIMIZATION
            </span>
            <h4 className="font-serif text-xl text-[#171717]">
              Carbide Tool-Life Optimization Project
            </h4>
            <div className="text-xs text-[#6B6B67] font-medium">
              Tata Sikorsky — Project Intern
            </div>
            <ul className="space-y-1.5 text-xs text-[#6B6B67] leading-relaxed pl-4 list-disc marker:text-[#66705B]">
              <li>Improved cutting-tool life by 30%.</li>
              <li>Reduced manufacturing expenditure by ₹21.8 lakh.</li>
              <li>Increased output from 20 to 25 components per tool cycle.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#DEDDD7] space-y-3">
            <span className="text-[10px] font-mono text-[#66705B] uppercase font-bold">
              GOVERNANCE & STATUTORY DOSSIER
            </span>
            <h4 className="font-serif text-xl text-[#171717]">
              Legislative Council Nomination Profile Development
            </h4>
            <div className="text-xs text-[#6B6B67] font-medium">
              Telangana Legislative Council
            </div>
            <ul className="space-y-1.5 text-xs text-[#6B6B67] leading-relaxed pl-4 list-disc marker:text-[#66705B]">
              <li>Developed comprehensive MLC candidate profile and nomination dossier for submission.</li>
              <li>Structured life-event documentation and supporting records aligned with statutory requirements.</li>
              <li>Delivered final nomination-ready profile used during official submission process.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* ACHIEVEMENTS & CERTIFICATIONS */}
      {/* ============================================================ */}
      <div className="py-14 border-b border-[#DEDDD7] grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Achievements */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
            KEY ACHIEVEMENTS
          </h3>
          <ul className="space-y-3 text-sm text-[#171717] font-light leading-relaxed pl-5 list-disc marker:text-[#66705B]">
            <li>
              Co-founded <strong className="font-medium">LANDSAFE</strong> and successfully executed verification of 20+ properties.
            </li>
            <li>
              Won <strong className="font-medium">1st Position</strong> at Masters’ Union Startup Weekend Challenge; awarded ₹5,000 prize.
            </li>
            <li>
              Secured <strong className="font-medium">Institute Rank 3</strong> among 150 students; awarded Bronze Medal in Mechanical Engineering Year I.
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
            CERTIFICATIONS
          </h3>
          <div className="space-y-3 text-sm">
            <div className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#DEDDD7]">
              <div className="font-medium text-[#171717]">Stock Valuation with Comparable Analysis</div>
              <div className="text-xs font-mono text-[#6B6B67] mt-0.5">Coursera · July 2022</div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#DEDDD7]">
              <div className="font-medium text-[#171717]">Design Practice</div>
              <div className="text-xs font-mono text-[#6B6B67] mt-0.5">NPTEL (IIT Kanpur) · April 2022</div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SOCIAL IMPACT (AIESEC) */}
      {/* ============================================================ */}
      <div className="py-12 border-b border-[#DEDDD7] space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
          SOCIAL IMPACT
        </h3>
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h4 className="font-serif text-xl text-[#171717] font-normal">
              AIESEC IN HYDERABAD
            </h4>
            <span className="text-xs font-mono text-[#6B6B67]">
              Aug 2024 – Sep 2024
            </span>
          </div>
          <ul className="space-y-2 text-sm text-[#6B6B67] font-light leading-relaxed pl-5 list-disc marker:text-[#66705B]">
            <li>Drove international exchange operations, facilitating overseas volunteering opportunities for student applicants.</li>
            <li>Spearheaded applicant acquisition initiatives, expanding participation in international volunteering programs.</li>
          </ul>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SKILLS */}
      {/* ============================================================ */}
      <div className="pt-12 space-y-6">
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#66705B] font-semibold">
          SKILLS
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#DEDDD7] space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#66705B] font-semibold block">
              BUSINESS SKILLS
            </span>
            <p className="text-sm sm:text-base text-[#171717] font-light leading-relaxed">
              Strategic Planning · Business Operations · Market Research · Process Optimization · Business Analysis
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#DEDDD7] space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#66705B] font-semibold block">
              TECHNICAL SKILLS
            </span>
            <p className="text-sm sm:text-base text-[#171717] font-light leading-relaxed">
              Microsoft Excel · Google Sheets · Power BI · Claude Skills · Canva · Meta Business Suite · Notion · ANOVA · Microsoft Office
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
