const { useState, useEffect } = React;

// -------------------- DATA --------------------
// Each project gets a full case study record. Replace placeholder copy with your real content.
const STUDIES = {
  lumen: {
    name: "QuadTravel",
    tagline: "Redesigning a B2B travel management platform that cut booking time by 45%.",
    bg: "#FF5A52",
    glow: "rgba(255,90,82,0.55)",
    fg: "#fff",
    duration: "1.5 years (ongoing)",
    sector: "B2B SaaS · Travel & Expense",
    role: "Senior UX/UI Designer",
    year: "2024 — Now",
    team: "Cross-functional · Product, Engineering, Business",
    platforms: "Web · Admin · Agent portal",
    company: "QuadLabs Technologies · Gurugram",
    overview:
      "QuadTravel is the booking and operations spine for travel agencies and corporate buyers. I lead UX for the platform — designing intuitive, scalable interfaces that compress complex booking, expense and approval workflows into something a non-technical agent can fly through.",
    problem:
      "The legacy platform had grown organically across a decade. Agents juggled flights, hotels, transfers and reporting across modules that each had their own conventions. Booking a single multi-city trip required jumping between five screens, and onboarding a new agency took weeks of training. The business needed faster bookings, faster onboarding, and a UI that could carry AI-driven features without becoming overwhelming.",
    research: [
      "Shadowed agents at three partner travel agencies over a full booking cycle",
      "Interviewed corporate travel admins and finance owners on expense pain points",
      "Audited the existing platform module-by-module against task-completion times",
      "Benchmarked workflow patterns from Sabre, Amadeus and consumer travel apps",
    ],
    process:
      "I worked with product, engineering and the business team to reframe the platform around the trip, not the inventory. We mapped agent journeys end-to-end, identified the friction hotspots, and rebuilt the booking surface as a single guided flow with intelligent defaults. AI suggestions for fares, policies and routing were layered in without taking control away from the agent.",
    solution: [
      "Unified booking surface — flights, hotels and transfers in one continuous flow.",
      "Policy-aware fare search that surfaces only compliant options for corporate users.",
      "An approvals inbox that turns multi-stakeholder sign-off into a single thread.",
      "Re-skinned design system with accessible contrast, density modes, and AI-ready slots.",
    ],
    impact: [
      { v: "−45%", l: "Average booking time" },
      { v: "↑", l: "Adoption among travel agencies" },
      { v: "Faster", l: "Release cycles with engineering" },
      { v: "One", l: "Unified design system" },
    ],
    learnings:
      "In a platform this old, restraint is the hardest discipline. Every team has a wishlist; every wishlist adds a button. The redesign worked because we said no to features that didn't accelerate a real booking. AI features only shipped if they could be turned off without breaking the underlying flow.",
  },
  atlas: {
    name: "Sentinel",
    tagline: "State government dashboards used by officials in Assam and Andhra Pradesh.",
    bg: "#7C5CFF",
    glow: "rgba(124,92,255,0.55)",
    fg: "#fff",
    duration: "1 year 2 months",
    sector: "GovTech · Data dashboards",
    role: "Senior UI Designer",
    year: "2021 — 2022",
    team: "Product · Engineering · Government stakeholders",
    platforms: "Web · Tablet",
    company: "C-Tel Infosystems · New Delhi",
    overview:
      "Sentinel is the executive cockpit for two state governments. It pulls together civic data — health, revenue, infrastructure, public services — into a single, role-based view that helps officials understand what is happening in their state at a glance.",
    problem:
      "Government dashboards typically collapse under their own weight. Officials needed signal, not 40-column tables. The existing tools required a daily IT briefing just to interpret. We needed an interface that worked for a senior official, a district officer, and a field operator — without compromising depth.",
    research: [
      "Stakeholder interviews with officials across two state administrations",
      "Field visits with district-level officers to observe daily workflows",
      "Audited 30+ existing reports and identified the metrics that actually drove decisions",
      "Accessibility review against state digital service guidelines",
    ],
    process:
      "We worked closely with government stakeholders to translate dense data tables into a layered information hierarchy: headline metric, supporting trend, contextual breakdown. I designed role-based dashboards so the chief secretary, a department head and a field officer each landed on a screen tuned to their decisions.",
    solution: [
      "A modular dashboard system with role-specific landing pages.",
      "Drill-down patterns that move from state → district → block without losing context.",
      "Stakeholder-friendly visualisations — readable in a print-out, not just on a screen.",
      "Accessible colour and typography so the dashboards work in a sunlit field office.",
    ],
    impact: [
      { v: "2", l: "State governments live" },
      { v: "↑", l: "Stakeholder adoption" },
      { v: "Faster", l: "Time to insight for officials" },
      { v: "WCAG", l: "Compliant patterns throughout" },
    ],
    learnings:
      "Designing for government means designing for many literacies in one screen. A pattern that worked for the chief secretary failed for the district officer, and vice versa. The role-based landing pages were the unlock — same underlying data, different doorway.",
  },
  fern: {
    name: "Summit G20",
    tagline: "Accessible event websites for G20-affiliated programmes, built to WCAG 2.0 and 2.1.",
    bg: "#1F8A5B",
    glow: "rgba(31,138,91,0.55)",
    fg: "#fff",
    duration: "6 months",
    sector: "Public sector · Accessibility",
    role: "Senior UX Designer",
    year: "2023",
    team: "Product · Engineering · Editorial",
    platforms: "Web · Multi-language",
    company: "ANTS Digital · Gurugram",
    overview:
      "I led UX for a set of high-visibility event websites tied to India's G20 presidency. The sites had to look ceremonial, perform on slow networks, and meet WCAG 2.0 and 2.1 from the first line of code. The audience: global press, diplomats, and the public.",
    problem:
      "Most event sites treat accessibility as a checkbox at the end. We had to design the opposite — accessibility-first, with ceremonial visual weight that didn't compromise contrast, motion safety or keyboard navigation. Plus multi-language, plus a tight government delivery timeline.",
    research: [
      "Reviewed WCAG 2.0 and 2.1 success criteria line-by-line with engineering",
      "Tested existing event sites with screen reader and keyboard-only users",
      "Audited multi-language layouts for Devanagari, Tamil and English co-existence",
      "Performance budgets benchmarked against rural network speeds",
    ],
    process:
      "We built the system from contrast tokens and motion-safe defaults outward. Every component — hero, schedule, speaker grid, press kit — shipped with its accessibility behaviour spec'd alongside the visual. I worked with editorial to ensure every image had meaningful alt text in three languages.",
    solution: [
      "An accessibility-first component library that engineering reused across sites.",
      "Multi-language layouts that hold visual hierarchy across scripts.",
      "Schedule and speaker patterns that read cleanly to screen readers.",
      "Press kits and resource pages designed for download, print and reshare.",
    ],
    impact: [
      { v: "WCAG 2.1", l: "Compliance across all sites" },
      { v: "Global", l: "Press and diplomatic audience" },
      { v: "3", l: "Languages supported by default" },
      { v: "0", l: "Accessibility regressions at launch" },
    ],
    learnings:
      "When accessibility is in the design tokens, it stops being a sprint at the end of the project. Once the team trusted the system, we shipped a four-site portfolio faster than the original single-site estimate.",
  },
  kiln: {
    name: "Excise",
    tagline: "A multi-state liquor tracking SaaS that replaced paper trails with auditable workflows.",
    bg: "#FFB13C",
    glow: "rgba(255,177,60,0.55)",
    fg: "#1a1206",
    duration: "9 months",
    sector: "Vertical SaaS · Compliance",
    role: "UX/UI Designer",
    year: "2021 — 2022",
    team: "Product · Engineering · Excise department stakeholders",
    platforms: "Web · Mobile (field officers)",
    company: "C-Tel Infosystems · New Delhi",
    overview:
      "Excise is the operational system used by state excise departments to track liquor movement — from manufacturer to warehouse to retail. I designed both the back-office console and the mobile experience for inspectors in the field.",
    problem:
      "Compliance lived in paper registers and shared Excel sheets. Inspectors had to record stock at the truck, then re-enter the same data into a desktop system back at the office. Errors were frequent, audits were slow, and the gap between physical movement and the digital record was wide enough to hide problems.",
    research: [
      "Visited warehouses and inspection points to observe the manual workflow",
      "Interviewed field inspectors about their daily route and pain points",
      "Mapped the chain of custody from manufacturer to point-of-sale across stakeholders",
      "Reviewed compliance reports to understand which errors were costing time",
    ],
    process:
      "I designed the system around the field officer — the person who actually creates the data. The mobile experience had to work on a low-end Android phone, in a noisy warehouse, with one hand. Every input on the back-office console was checked against what could realistically be captured in the field.",
    solution: [
      "A mobile-first capture flow with QR scanning and offline support.",
      "A back-office console where supervisors approve or flag entries with one tap.",
      "Audit trails that show exactly who recorded what, when, and where.",
      "Reports designed to be exported for compliance review without extra cleanup.",
    ],
    impact: [
      { v: "Multi", l: "States rolled out" },
      { v: "↓", l: "Compliance error rate" },
      { v: "Audit", l: "Ready trails by default" },
      { v: "Field", l: "Tested with inspectors" },
    ],
    learnings:
      "Vertical SaaS lives or dies on the realism of the field workflow. The console UI was easy — the win came from sitting in a warehouse and seeing what inspectors actually do when their hands are full. Once we knew that, the rest of the design wrote itself.",
  },
};

const PROJECT_ORDER = ["lumen", "atlas", "fern", "kiln"];

// -------------------- HELPERS --------------------
function getProjectId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("project") || "lumen";
}

// -------------------- NAV --------------------
function TopNav({ project, theme, toggleTheme }) {
  return (
    <div style={{
      position: "fixed", top: 20, left: 0, right: 0, zIndex: 50,
      display: "flex", justifyContent: "center", pointerEvents: "none",
    }}>
      <nav style={{
        pointerEvents: "auto",
        display: "flex", alignItems: "center", gap: 6,
        padding: "10px 10px 10px 18px",
        background: "var(--nav-bg)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid var(--nav-border)",
        borderRadius: 999,
        boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
      }}>
        <a href="Portfolio.html" style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 12px 4px 4px", marginRight: 6 }}>
          <Logo />
          <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em", color: "var(--fg)" }}>Khushboo</span>
        </a>
        <a href="Portfolio.html#work" style={{ padding: "8px 14px", borderRadius: 999, fontSize: 14, color: "var(--muted)" }}>← all work</a>
        <span style={{ padding: "8px 14px", borderRadius: 999, fontSize: 14, fontWeight: 600, color: "var(--fg)", background: "var(--nav-active)" }}>{project.name}</span>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </div>
  );
}

function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      style={{
        marginLeft: 4,
        width: 38, height: 38, borderRadius: 999,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "var(--nav-active)",
        border: "1px solid var(--nav-border)",
        color: "var(--fg)", cursor: "pointer",
        fontFamily: "inherit",
        transition: "background 0.2s ease, transform 0.4s cubic-bezier(.2,.8,.2,1)",
        transform: isDark ? "rotate(0deg)" : "rotate(180deg)",
      }}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" fill="currentColor" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
      )}
    </button>
  );
}

function Logo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF2E63" />
          <stop offset="100%" stopColor="#B5179E" />
        </linearGradient>
      </defs>
      <path d="M6 26 L17 7 L28 26 L23 26 L17 15 L11 26 Z" fill="url(#lg)" />
      <path d="M14 22 L20 22 L17 17 Z" fill="var(--bg)" />
    </svg>
  );
}

// -------------------- HERO --------------------
function StudyHero({ p }) {
  return (
    <section style={{ padding: "140px 32px 32px", maxWidth: 1400, margin: "0 auto" }}>
      <div className="mono" style={{ color: "var(--muted)", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 24 }}>
        Case study · {p.year}
      </div>
      <h1 className="display" style={{ fontSize: "clamp(72px, 14vw, 220px)", margin: 0, color: "var(--fg)" }}>{p.name}</h1>
      <p style={{ marginTop: 24, fontSize: "clamp(18px, 2vw, 24px)", color: "var(--fg)", maxWidth: 820, lineHeight: 1.4 }}>{p.tagline}</p>

      <div style={{
        marginTop: 56,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 32,
        padding: "28px 0",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}>
        <Meta label="Duration" value={p.duration} />
        <Meta label="Sector" value={p.sector} />
        <Meta label="My role" value={p.role} />
        <Meta label="Company" value={p.company} />
        <Meta label="Team" value={p.team} />
        <Meta label="Platforms" value={p.platforms} />
      </div>
    </section>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 500, color: "var(--fg)" }}>{value}</div>
    </div>
  );
}

// -------------------- HERO IMAGE --------------------
function HeroImage({ p }) {
  return (
    <section style={{ padding: "32px 32px", maxWidth: 1400, margin: "0 auto" }}>
      <ImagePlaceholder bg={p.bg} fg={p.fg} label="Hero / cover image" sub="Recommended: 2400 × 1400 · 16:9 product hero shot" height={600} />
    </section>
  );
}

// -------------------- CONTENT BLOCKS --------------------
function SectionBlock({ eyebrow, title, children, p }) {
  return (
    <section style={{ padding: "80px 32px", maxWidth: 1400, margin: "0 auto" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 280px) minmax(0, 1fr)",
        gap: 48,
        alignItems: "start",
      }} className="case-grid">
        <div>
          <div className="mono" style={{ fontSize: 11, color: p.bg, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>{eyebrow}</div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: 0, color: "var(--fg)" }}>{title}</h2>
        </div>
        <div style={{ fontSize: 19, lineHeight: 1.6, color: "var(--fg-soft)" }}>
          {children}
        </div>
      </div>
    </section>
  );
}

// -------------------- IMAGE PLACEHOLDER --------------------
function ImagePlaceholder({ bg, fg = "#fff", label, sub, height = 420 }) {
  return (
    <div style={{
      width: "100%",
      height,
      borderRadius: 24,
      background: bg,
      position: "relative",
      overflow: "hidden",
      boxShadow: `0 20px 60px ${bg}44`,
    }}>
      {/* diagonal stripes pattern */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0 14px, transparent 14px 28px)`,
      }} />
      {/* center label */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center", color: fg, padding: 32,
      }}>
        <div className="mono" style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.75, marginBottom: 8 }}>Drop image here</div>
        <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 6 }}>{label}</div>
        {sub && <div className="mono" style={{ fontSize: 12, opacity: 0.7 }}>{sub}</div>}
      </div>
    </div>
  );
}

// -------------------- IMAGE GRID --------------------
function ImageGrid({ p }) {
  return (
    <section style={{ padding: "32px 32px", maxWidth: 1400, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="img-grid">
        <ImagePlaceholder bg={p.bg} fg={p.fg} label="Key screen — 01" sub="1600 × 1000" height={420} />
        <ImagePlaceholder bg={p.bg} fg={p.fg} label="Key screen — 02" sub="1600 × 1000" height={420} />
      </div>
    </section>
  );
}

function FullBleedImage({ p, label, sub, height = 520 }) {
  return (
    <section style={{ padding: "32px 32px", maxWidth: 1400, margin: "0 auto" }}>
      <ImagePlaceholder bg={p.bg} fg={p.fg} label={label} sub={sub} height={height} />
    </section>
  );
}

// -------------------- IMPACT --------------------
function Impact({ p }) {
  return (
    <section style={{ padding: "80px 32px", maxWidth: 1400, margin: "0 auto" }}>
      <div className="mono" style={{ fontSize: 11, color: p.bg, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>05 — Impact</div>
      <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: 0, color: "var(--fg)", marginBottom: 48 }}>By the numbers</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 24,
      }}>
        {p.impact.map((m, i) => (
          <div key={i} style={{
            padding: "32px 28px",
            borderRadius: 20,
            border: "1px solid var(--line)",
            background: "var(--nav-active)",
          }}>
            <div className="display" style={{ fontSize: 64, color: p.bg, lineHeight: 1 }}>{m.v}</div>
            <div style={{ marginTop: 12, color: "var(--muted)", fontSize: 15 }}>{m.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// -------------------- NEXT PROJECT --------------------
function NextProject({ currentId }) {
  const idx = PROJECT_ORDER.indexOf(currentId);
  const nextId = PROJECT_ORDER[(idx + 1) % PROJECT_ORDER.length];
  const next = STUDIES[nextId];
  return (
    <section style={{ padding: "60px 32px 120px", maxWidth: 1400, margin: "0 auto" }}>
      <a href={`CaseStudy.html?project=${nextId}`} style={{
        display: "block",
        borderRadius: 28,
        padding: "60px 48px",
        background: next.bg,
        color: next.fg,
        boxShadow: `0 20px 60px ${next.glow}`,
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="mono" style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.7 }}>Next case study →</div>
        <div className="display" style={{ fontSize: "clamp(56px, 9vw, 128px)", marginTop: 12 }}>{next.name}</div>
        <div style={{ marginTop: 8, fontSize: 18, maxWidth: 600, opacity: 0.9 }}>{next.tagline}</div>
      </a>
    </section>
  );
}

// -------------------- FOOTER --------------------
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "32px", maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "space-between", color: "var(--muted)", fontSize: 13, flexWrap: "wrap", gap: 16 }}>
      <div className="mono">© 2026 Khushboo Kumari · All bytes reserved</div>
      <a href="Portfolio.html" className="mono" style={{ color: "var(--muted)" }}>← Back to portfolio</a>
    </footer>
  );
}

// -------------------- NOT FOUND --------------------
function NotFound({ id }) {
  return (
    <div style={{ padding: 120, textAlign: "center" }}>
      <h1 className="display" style={{ fontSize: 80, margin: 0 }}>404</h1>
      <p style={{ marginTop: 12, color: "var(--muted)" }}>Project “{id}” not found.</p>
      <a href="Portfolio.html" style={{ display: "inline-block", marginTop: 24, padding: "12px 22px", borderRadius: 999, background: "var(--fg)", color: "var(--bg)", fontWeight: 600 }}>← Back to portfolio</a>
    </div>
  );
}

// -------------------- APP --------------------
function App() {
  const [id, setId] = useState(getProjectId());
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || "dark"; } catch (e) { return "dark"; }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    const onPop = () => setId(getProjectId());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const p = STUDIES[id];
  if (!p) return <NotFound id={id} />;

  // update page title
  useEffect(() => {
    document.title = `${p.name} — Case study · Khushboo Kumari`;
  }, [p.name]);

  return (
    <div>
      <TopNav project={p} theme={theme} toggleTheme={toggleTheme} />
      <StudyHero p={p} />
      <HeroImage p={p} />

      <SectionBlock eyebrow="01 — Overview" title="What we built" p={p}>
        <p style={{ margin: 0 }}>{p.overview}</p>
      </SectionBlock>

      <SectionBlock eyebrow="02 — Problem" title="Why it mattered" p={p}>
        <p style={{ margin: 0 }}>{p.problem}</p>
      </SectionBlock>

      <ImageGrid p={p} />

      <SectionBlock eyebrow="03 — Research" title="How I got my bearings" p={p}>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
          {p.research.map((r, i) => (
            <li key={i} style={{ display: "flex", gap: 16, paddingLeft: 0 }}>
              <span className="mono" style={{ color: p.bg, fontSize: 13, paddingTop: 6, minWidth: 28 }}>0{i + 1}</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock eyebrow="04 — Process" title="The path we took" p={p}>
        <p style={{ margin: 0 }}>{p.process}</p>
      </SectionBlock>

      <FullBleedImage p={p} label="Process artifact — flows, sketches, frames" sub="Replace with sketches, flows, or Figma exports" height={560} />

      <SectionBlock eyebrow="05 — Solution" title="What it became" p={p}>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
          {p.solution.map((s, i) => (
            <li key={i} style={{ display: "flex", gap: 16, paddingLeft: 0 }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: p.bg, marginTop: 12, flexShrink: 0 }} />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </SectionBlock>

      <FullBleedImage p={p} label="Final UI — hero screen" sub="2400 × 1500 · primary product shot" height={560} />

      <Impact p={p} />

      <SectionBlock eyebrow="06 — Learnings" title="What I’d tell my past self" p={p}>
        <p style={{ margin: 0 }}>{p.learnings}</p>
      </SectionBlock>

      <NextProject currentId={id} />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Responsive grid tweaks
const styleEl = document.createElement("style");
styleEl.textContent = `
  @media (max-width: 880px) {
    .case-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
    .img-grid { grid-template-columns: 1fr !important; }
  }
`;
document.head.appendChild(styleEl);
