const { useState, useEffect, useRef } = React;

// -------------------- DATA --------------------
const NAV = [
{ id: "home", label: "home" },
{ id: "work", label: "work" },
{ id: "companies", label: "companies" },
{ id: "contact", label: "contact" }];


const PROJECTS = [
{
  id: "lumen", // QuadTravel
  name: "Travel Management",
  bg: "#FF5A52",
  glow: "rgba(255,90,82,0.45)",
  description:
  "A B2B travel management platform redesigned end-to-end. Cut booking time by 45% and accelerated adoption among travel agencies and corporate clients.",
  tags: ["B2B SaaS", "Travel", "2025"],
  mock: "lumen",
  duration: "1.5 years (ongoing)",
  sector: "B2B SaaS · Travel & Expense",
  role: "Senior UX/UI Designer",
  year: "2024 — Now"
},
{
  id: "atlas", // Sentinel — Govt dashboards
  name: "Sentinel",
  bg: "#7C5CFF",
  glow: "rgba(124,92,255,0.45)",
  description:
  "State government dashboards for Assam & Andhra Pradesh. Restructured complex civic data into a usable command surface for officials and field staff.",
  tags: ["GovTech", "Dashboards", "2022"],
  mock: "atlas",
  duration: "1 year 2 months",
  sector: "GovTech · Data dashboards",
  role: "Senior UI Designer",
  year: "2021 — 2022"
},
{
  id: "fern", // Summit — G20
  name: "Summit G20",
  bg: "#1F8A5B",
  glow: "rgba(31,138,91,0.45)",
  description:
  "High-visibility event websites for G20-affiliated programmes. Built to WCAG 2.0 / 2.1 from the ground up and consumed by a global press audience.",
  tags: ["Accessibility", "Web", "2023"],
  mock: "fern",
  duration: "6 months",
  sector: "Public sector · Accessibility",
  role: "Senior UX Designer",
  year: "2023"
},
{
  id: "kiln", // Excise — Liquor tracking SaaS
  name: "Excise",
  bg: "#FFB13C",
  glow: "rgba(255,177,60,0.45)",
  description:
  "A multi-state liquor tracking SaaS used by excise departments. Replaced paper trails with a compliant, audit-ready workflow that field officers actually use.",
  tags: ["GovTech", "SaaS", "2022"],
  mock: "kiln",
  duration: "9 months",
  sector: "Vertical SaaS · Compliance",
  role: "UX/UI Designer",
  year: "2021 — 2022"
}];


const COMPANIES = [
{ name: "QuadLabs", role: "Senior UX/UI Designer", period: "Dec 2024 — Now", note: "B2B travel SaaS" },
{ name: "ANTS Digital", role: "Senior UX Designer", period: "Jun 2022 — Dec 2024", note: "G20 sites · B2B SaaS" },
{ name: "C-Tel Infosystems", role: "Senior UI Designer", period: "May 2021 — Jun 2022", note: "Govt dashboards" },
{ name: "Visionary-art", role: "UI Designer (Freelance)", period: "Nov 2020 — Apr 2021", note: "Web design" },
{ name: "PROPERTYYY.com", role: "Graphic Design Intern", period: "Jul — Oct 2020", note: "Brand & social" }];


// -------------------- NAV --------------------
function TopNav({ active, theme, toggleTheme }) {
  return (
    <div style={{
      position: "fixed", top: 20, left: 0, right: 0, zIndex: 50,
      display: "flex", justifyContent: "center", pointerEvents: "none"
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
        boxShadow: "0 8px 30px rgba(0,0,0,0.18)"
      }}>
        <a href="#home" onClick={(e) => {e.preventDefault();scrollToId("home");}}
        style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 12px 4px 4px", marginRight: 6 }}>
          <Logo />
          <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em", color: "var(--fg)" }}>Khushboo</span>
        </a>
        {NAV.map((n) => {
          const on = active === n.id;
          return (
            <a key={n.id} href={`#${n.id}`}
            onClick={(e) => {e.preventDefault();scrollToId(n.id);}}
            style={{
              padding: "8px 14px", borderRadius: 999,
              fontSize: 14, fontWeight: on ? 600 : 500,
              color: on ? "var(--fg)" : "var(--muted)",
              background: on ? "var(--nav-active)" : "transparent",
              transition: "all 0.2s ease"
            }}>{n.label}</a>);

        })}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </div>);

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
        transition: "background 0.2s ease, transform 0.4s cubic-bezier(.2,.8,.2,1)",
        transform: isDark ? "rotate(0deg)" : "rotate(180deg)"
      }}
      onMouseEnter={(e) => {e.currentTarget.style.background = "var(--nav-border)";}}
      onMouseLeave={(e) => {e.currentTarget.style.background = "var(--nav-active)";}}>
      
      {isDark ?
      // moon
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" fill="currentColor" />
        </svg> :

      // sun
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
      }
    </button>);

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
    </svg>);

}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.offsetTop - 20, behavior: "smooth" });
}

// -------------------- HERO --------------------
function Hero() {
  return (
    <section id="home" data-screen-label="01 Hero" style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "140px 32px 80px", textAlign: "center", overflow: "hidden"
    }}>
      {/* ambient blob */}
      <div aria-hidden style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
        width: 900, height: 600, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(255,46,99,0.18), rgba(0,0,0,0) 70%)",
        filter: "blur(20px)", pointerEvents: "none"
      }} />

      <div style={{ position: "relative", maxWidth: 1300 }}>
        {/* Eyebrow */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 12px", borderRadius: 999,
          border: "1px solid var(--eyebrow-border)",
          fontSize: 13, color: "var(--muted)", marginBottom: 32
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--green)", boxShadow: "0 0 12px var(--green)" }} />
          <span>Open for work</span>
        </div>

        {/* Headline */}
        <h1 className="display" style={{ fontSize: "clamp(44px, 7.5vw, 110px)", margin: "0 auto", color: "var(--fg)", maxWidth: 1000 }}>
          <span style={{ position: "relative" }}>
            I design <PerfectChip>products</PerfectChip>,
            <FloatingBadge text="UX" color="var(--purple)" style={{ top: "-0.7em", left: "1%" }} rotate={-8} />
          </span>
          <span style={{ display: "block", marginTop: 18, color: "var(--muted)", position: "relative" }}>
            not just screens.
            <FloatingBadge text="Research" color="var(--yellow)" textColor="#1a1206" style={{ bottom: "-0.4em", right: "8%" }} rotate={6} />
          </span>
        </h1>

        <p style={{
          marginTop: 64, fontSize: 17, color: "var(--muted)",
          maxWidth: 540, marginLeft: "auto", marginRight: "auto", lineHeight: 1.55
        }}>
          I'm <span style={{ color: "var(--fg)" }}>Khushboo Kumari</span> — a Senior Product Designer based in Delhi.
          5+ years shaping B2B SaaS, AI-first UX, and complex data-driven systems. Currently designing the travel management platform at QuadLabs.
        </p>

        <div style={{ marginTop: 36, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollToId("work")} style={{
            padding: "14px 24px", borderRadius: 999, border: "none",
            background: "linear-gradient(135deg, #FF2E63, #B5179E)",
            color: "#fff", fontSize: 15, fontWeight: 600, cursor: "pointer",
            boxShadow: "0 10px 30px rgba(255,46,99,0.35)"
          }}>See selected work →</button>
          <button onClick={() => scrollToId("contact")} style={{
            padding: "14px 24px", borderRadius: 999,
            background: "transparent", color: "var(--fg)",
            border: "1px solid var(--btn-ghost-border)",
            fontSize: 15, fontWeight: 500, cursor: "pointer"
          }}>Get in touch</button>
        </div>
      </div>

      <ScrollHint />
    </section>);

}

function PerfectChip({ children }) {
  return (
    <span style={{
      position: "relative", display: "inline-block",
      padding: "0.04em 0.32em",
      background: "linear-gradient(135deg, #B5179E 0%, #FF2E63 100%)",
      borderRadius: "0.55em",
      color: "#fff",
      transform: "rotate(-3deg)",
      whiteSpace: "nowrap",
      boxShadow: "0 0 60px rgba(255,46,99,0.55), 0 20px 40px rgba(181,23,158,0.45)"
    }}>{children || "perfect"}</span>);

}

function FloatingBadge({ text, color, textColor = "#fff", style, rotate = 0 }) {
  return (
    <span style={{
      position: "absolute", zIndex: 2,
      padding: "6px 16px",
      borderRadius: 999,
      background: color,
      color: textColor,
      fontFamily: "Geist, sans-serif",
      fontSize: "clamp(11px, 1.1vw, 16px)",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: 1.2,
      transform: `rotate(${rotate}deg)`,
      boxShadow: `0 8px 24px ${color}40`,
      whiteSpace: "nowrap",
      ...style
    }}>
      <svg width="14" height="10" viewBox="0 0 14 10" style={{
        position: "absolute", top: -6, left: rotate < 0 ? "auto" : 12, right: rotate < 0 ? 12 : "auto",
        transform: rotate < 0 ? "scaleX(-1)" : "none"
      }}>
        <path d="M0 10 L14 10 L7 0 Z" fill={color} />
      </svg>
      {text}
    </span>);

}

function ScrollHint() {
  return (
    <div style={{
      position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
      fontSize: 11, color: "var(--muted)", letterSpacing: "0.18em", textTransform: "uppercase",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 8
    }} className="mono">
      <span>scroll</span>
      <span style={{ width: 1, height: 28, background: "linear-gradient(to bottom, var(--muted), transparent)" }} />
    </div>);

}

// -------------------- PROJECTS --------------------
function Projects() {
  return (
    <section id="work" data-screen-label="02 Projects" style={{ padding: "120px 32px 80px", maxWidth: 1400, margin: "0 auto" }}>
      <SectionHeader eyebrow="02 — Selected work" title="Things I've shipped" subtitle="B2B SaaS, government dashboards, and accessible web at scale — shipped to production for real businesses and millions of users." />
      <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 64 }}>
        {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </section>);

}

function ProjectCard({ project, index }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={`CaseStudy.html?project=${project.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        display: "block",
        background: project.bg,
        borderRadius: 28,
        padding: "44px 48px 0",
        overflow: "hidden",
        minHeight: 520,
        boxShadow: hover ?
        `0 40px 100px ${project.glow}, 0 0 0 1px rgba(255,255,255,0.12), inset 0 0 60px rgba(255,255,255,0.05)` :
        `0 10px 40px ${project.glow}`,
        transform: hover ? "translateY(-8px) scale(1.005)" : "translateY(0) scale(1)",
        transition: "transform 0.5s cubic-bezier(.2,.8,.2,1), box-shadow 0.5s",
        cursor: "pointer",
        color: "inherit",
        textDecoration: "none"
      }}>
      
      {/* Animated shine sweep */}
      <div aria-hidden style={{
        position: "absolute", top: 0, bottom: 0, width: "40%",
        left: hover ? "120%" : "-40%",
        background: "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
        transition: "left 0.9s cubic-bezier(.2,.8,.2,1)",
        pointerEvents: "none", zIndex: 1
      }} />
      {/* Top row: index + arrow badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 2 }}>
        <span className="mono" style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, letterSpacing: "0.1em" }}>
          PROJECT / 0{index + 1}
        </span>
        <StarBadge hover={hover} />
      </div>

      {/* Title */}
      <h3 className="display" style={{
        fontSize: "clamp(48px, 7vw, 88px)", margin: "16px 0 18px", color: "#fff",
        transform: hover ? "translateX(6px)" : "translateX(0)",
        transition: "transform 0.5s cubic-bezier(.2,.8,.2,1)",
        position: "relative", zIndex: 2
      }}>{project.name}</h3>

      {/* Description */}
      <p style={{
        maxWidth: 620, color: "rgba(255,255,255,0.92)",
        fontSize: 19, lineHeight: 1.45, margin: "0 0 22px",
        position: "relative", zIndex: 2
      }}>{project.description}</p>

      {/* Tags */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", position: "relative", zIndex: 2 }}>
        {project.tags.map((t, i) =>
        <span key={t} style={{
          padding: "6px 14px", borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.4)",
          background: hover ? "rgba(255,255,255,0.12)" : "transparent",
          color: "#fff", fontSize: 13, fontWeight: 500,
          transform: hover ? `translateY(-2px)` : "translateY(0)",
          transition: `transform 0.4s cubic-bezier(.2,.8,.2,1) ${i * 60}ms, background 0.3s`
        }}>{t}</span>
        )}
      </div>

      {/* Mockup area */}
      <div style={{ position: "relative", marginTop: 28, height: 280, overflow: "visible", zIndex: 2 }}>
        <ProjectMock kind={project.mock} hover={hover} />
      </div>

      {/* View pill */}
      <div style={{
        position: "absolute", right: 24, bottom: 24, zIndex: 3,
        padding: hover ? "14px 26px" : "12px 22px",
        borderRadius: 999,
        background: "rgba(10,10,11,0.92)",
        backdropFilter: "blur(8px)",
        color: "#fff", fontSize: 14, fontWeight: 500,
        display: "flex", alignItems: "center", gap: 10,
        transform: hover ? "translateY(-4px) scale(1.06)" : "translateY(0) scale(1)",
        transition: "all 0.4s cubic-bezier(.2,.8,.2,1)",
        boxShadow: hover ? "0 14px 32px rgba(0,0,0,0.55)" : "0 6px 20px rgba(0,0,0,0.4)",
        overflow: "hidden"
      }}>
        <span style={{ transition: "transform 0.4s", transform: hover ? "scale(1.2) rotate(-8deg)" : "scale(1)" }}>👀</span>
        <span>View case study</span>
        <span style={{
          display: "inline-block",
          width: hover ? 18 : 0, opacity: hover ? 1 : 0, overflow: "hidden",
          transition: "width 0.4s, opacity 0.3s",
          whiteSpace: "nowrap"
        }}>→</span>
      </div>
    </a>);

}

function StarBadge({ hover }) {
  // 16-point sunburst path
  const points = 16,cx = 32,cy = 32,rOuter = 30,rInner = 23;
  let path = "";
  for (let i = 0; i < points * 2; i++) {
    const angle = i / (points * 2) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? rOuter : rInner;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    path += (i === 0 ? "M " : " L ") + x.toFixed(2) + " " + y.toFixed(2);
  }
  path += " Z";
  return (
    <div style={{
      width: 64, height: 64, position: "relative", flexShrink: 0,
      transition: "transform 0.7s cubic-bezier(.2,.8,.2,1)",
      transform: hover ? "rotate(90deg) scale(1.15)" : "rotate(0deg) scale(1)"
    }}>
      <svg viewBox="0 0 64 64" width="64" height="64" style={{
        filter: hover ? "drop-shadow(0 6px 14px rgba(0,0,0,0.45))" : "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
        transition: "filter 0.4s"
      }}>
        <path d={path} fill="#0a0a0b" />
      </svg>
      {/* arrow stays upright while badge spins */}
      <div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        transform: hover ? "rotate(-90deg)" : "rotate(0deg)",
        transition: "transform 0.7s cubic-bezier(.2,.8,.2,1)"
      }}>
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M7 17 L17 7 M9 7 L17 7 L17 15" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>);

}

// -------------------- PROJECT MOCKS (placeholders shaped like product screenshots) --------------------
function ProjectMock({ kind, hover }) {
  const tilt = hover ? "perspective(1200px) rotateX(8deg) rotateY(-6deg) translateY(-8px)" : "perspective(1200px) rotateX(12deg) rotateY(-8deg)";
  const common = {
    position: "absolute", borderRadius: 14, background: "#fff",
    boxShadow: "0 30px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.04)",
    transition: "transform 0.5s cubic-bezier(.2,.8,.2,1)",
    overflow: "hidden"
  };
  if (kind === "lumen") {
    return (
      <>
        <div style={{ ...common, width: 220, height: 440, left: "16%", bottom: -180, transform: tilt }}>
          <PhoneMock theme="lumen" />
        </div>
        <div style={{ ...common, width: 560, height: 340, right: "4%", bottom: -120, transform: tilt }}>
          <DashboardMock theme="lumen" />
        </div>
      </>);

  }
  if (kind === "atlas") {
    return (
      <>
        <div style={{ ...common, width: 680, height: 380, left: "50%", marginLeft: -340, bottom: -160, transform: tilt }}>
          <DashboardMock theme="atlas" />
        </div>
      </>);

  }
  if (kind === "fern") {
    return (
      <>
        <div style={{ ...common, width: 240, height: 460, left: "30%", bottom: -200, transform: tilt }}>
          <PhoneMock theme="fern" />
        </div>
        <div style={{ ...common, width: 240, height: 460, left: "52%", bottom: -240, transform: `${tilt} rotate(4deg)` }}>
          <PhoneMock theme="fern2" />
        </div>
      </>);

  }
  if (kind === "kiln") {
    return (
      <>
        <div style={{ ...common, width: 680, height: 380, left: "50%", marginLeft: -340, bottom: -160, transform: tilt }}>
          <DashboardMock theme="kiln" />
        </div>
      </>);

  }
  return null;
}

function PhoneMock({ theme }) {
  if (theme === "lumen") {
    return (
      <div style={{ width: "100%", height: "100%", background: "#0d0d12", color: "#fff", padding: 18, fontSize: 11 }}>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#fff", fontSize: 10, opacity: 0.7 }}>
          <span>9:41</span><span>●●●</span>
        </div>
        <div style={{ marginTop: 24, fontSize: 13, opacity: 0.6 }}>Tonight</div>
        <div style={{ fontSize: 26, fontWeight: 600, marginTop: 4 }}>7h 12m</div>
        <div style={{ marginTop: 18, height: 100, borderRadius: 12, background: "linear-gradient(180deg, rgba(255,90,82,0.4), rgba(255,90,82,0.05))", padding: 10, position: "relative" }}>
          <svg viewBox="0 0 200 80" style={{ width: "100%", height: "100%" }}>
            <path d="M0 60 Q 30 40 50 50 T 100 30 T 150 45 T 200 25" stroke="#FF5A52" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div style={{ marginTop: 14, display: "flex", gap: 8 }}>
          <Stat label="Deep" val="2h 40m" />
          <Stat label="REM" val="1h 50m" />
        </div>
        <div style={{ marginTop: 14, display: "flex", gap: 8 }}>
          <Stat label="Score" val="86" />
          <Stat label="HRV" val="62" />
        </div>
      </div>);

  }
  if (theme === "fern") {
    return (
      <div style={{ width: "100%", height: "100%", background: "#f7fbf9", color: "#0c1f17", padding: 18, fontSize: 11 }}>
        <div style={{ fontSize: 10, opacity: 0.5 }}>Balance</div>
        <div style={{ fontSize: 28, fontWeight: 700, marginTop: 2 }}>$4,218.40</div>
        <div style={{ marginTop: 8, fontSize: 11, color: "#1F8A5B" }}>▲ $124.80 this week</div>
        <div style={{ marginTop: 18, padding: 12, borderRadius: 10, background: "#fff", border: "1px solid #e6efe9" }}>
          <div style={{ fontSize: 10, opacity: 0.5 }}>Round-up jar</div>
          <div style={{ fontWeight: 600, marginTop: 2 }}>$38.42</div>
          <div style={{ height: 5, background: "#e6efe9", borderRadius: 99, marginTop: 8, overflow: "hidden" }}>
            <div style={{ width: "62%", height: "100%", background: "#1F8A5B" }} />
          </div>
        </div>
        <div style={{ marginTop: 12, padding: 12, borderRadius: 10, background: "#fff", border: "1px solid #e6efe9" }}>
          <div style={{ fontSize: 10, opacity: 0.5 }}>Allocation</div>
          <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
            <Bar v="60%" c="#1F8A5B" /><Bar v="25%" c="#4ade80" /><Bar v="15%" c="#a7f3d0" />
          </div>
        </div>
      </div>);

  }
  if (theme === "fern2") {
    return (
      <div style={{ width: "100%", height: "100%", background: "#0c1f17", color: "#e6efe9", padding: 18, fontSize: 11 }}>
        <div style={{ fontSize: 10, opacity: 0.6 }}>This month</div>
        <div style={{ fontSize: 24, fontWeight: 700, marginTop: 2 }}>+ $312.18</div>
        <div style={{ marginTop: 20, height: 140, position: "relative" }}>
          <svg viewBox="0 0 200 120" style={{ width: "100%", height: "100%" }}>
            <path d="M0 100 L20 80 L40 90 L60 60 L80 70 L100 40 L120 50 L140 30 L160 35 L180 20 L200 25 L200 120 L0 120 Z" fill="rgba(74,222,128,0.25)" />
            <path d="M0 100 L20 80 L40 90 L60 60 L80 70 L100 40 L120 50 L140 30 L160 35 L180 20 L200 25" stroke="#4ade80" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <Stat dark label="Saved" val="$3.9k" />
          <Stat dark label="Yield" val="4.8%" />
        </div>
      </div>);

  }
  return null;
}

function DashboardMock({ theme }) {
  if (theme === "atlas") {
    return (
      <div style={{ width: "100%", height: "100%", background: "#0e0f14", color: "#e6e7ee", display: "flex", fontSize: 11 }}>
        <div style={{ width: 56, background: "#0a0b10", borderRight: "1px solid #1c1d26", padding: "16px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: "linear-gradient(135deg, #7C5CFF, #4338ca)" }} />
          {Array.from({ length: 5 }).map((_, i) =>
          <div key={i} style={{ width: 22, height: 22, borderRadius: 6, background: i === 1 ? "#1c1d26" : "transparent", opacity: i === 1 ? 1 : 0.4 }} />
          )}
        </div>
        <div style={{ flex: 1, padding: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 10, opacity: 0.5 }}>Workspace · Atlas</div>
              <div style={{ fontSize: 16, fontWeight: 600, marginTop: 2 }}>Engineering Ops</div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <Pill c="#7C5CFF" t="Run" />
              <Pill t="Filter" />
              <Pill t="⌘K" />
            </div>
          </div>
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <Card t="Open PRs" v="42" trend="+8" />
            <Card t="Incidents" v="2" trend="-3" />
            <Card t="Deploys / wk" v="118" trend="+12%" />
          </div>
          <div style={{ marginTop: 14, background: "#13141c", borderRadius: 10, padding: 12, border: "1px solid #1c1d26" }}>
            <div style={{ fontSize: 10, opacity: 0.5, marginBottom: 8 }}>RECENT</div>
            {["payments-api", "ledger-svc", "checkout-web", "fraud-mlx"].map((r, i) =>
            <div key={r} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderTop: i ? "1px solid #1c1d26" : "none" }}>
                <span>{r}</span>
                <span style={{ opacity: 0.5 }}>{["12s", "1m", "4m", "11m"][i]} ago</span>
              </div>
            )}
          </div>
        </div>
      </div>);

  }
  if (theme === "lumen") {
    return (
      <div style={{ width: "100%", height: "100%", background: "#fff7f5", color: "#2a1c1a", padding: 20, fontSize: 11 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ opacity: 0.5 }}>Weekly summary</div>
            <div style={{ fontSize: 18, fontWeight: 700, marginTop: 2 }}>Sleep is trending up</div>
          </div>
          <Pill t="Last 7 days" c="#FF5A52" />
        </div>
        <div style={{ marginTop: 16, height: 140, background: "#fff", borderRadius: 12, padding: 12, border: "1px solid #ffe4df" }}>
          <svg viewBox="0 0 300 110" style={{ width: "100%", height: "100%" }}>
            {[0, 1, 2, 3, 4, 5, 6].map((i) =>
            <rect key={i} x={20 + i * 40} y={40 + Math.sin(i) * 14} width="22" height={60 - Math.sin(i) * 14} rx="4" fill="#FF5A52" opacity={0.3 + i * 0.1} />
            )}
          </svg>
        </div>
        <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          <Card light t="Avg sleep" v="7h 12m" trend="+18m" />
          <Card light t="Bedtime" v="11:24p" trend="-12m" />
          <Card light t="Score" v="86" trend="+4" />
        </div>
      </div>);

  }
  if (theme === "kiln") {
    return (
      <div style={{ width: "100%", height: "100%", background: "#1c1408", color: "#fef3c7", padding: 18, fontSize: 11 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ opacity: 0.6 }}>Kiln 3 · Cone 6</div>
            <div style={{ fontSize: 18, fontWeight: 700, marginTop: 2 }}>Bisque firing — 04:18 left</div>
          </div>
          <Pill t="● LIVE" c="#FFB13C" />
        </div>
        <div style={{ marginTop: 14, padding: 14, borderRadius: 10, background: "#2a1f0d", border: "1px solid #3d2f15" }}>
          <svg viewBox="0 0 320 100" style={{ width: "100%", height: 100 }}>
            <path d="M0 90 L30 85 L60 78 L100 60 L140 45 L180 30 L220 28 L260 35 L300 50 L320 60" stroke="#FFB13C" strokeWidth="2" fill="none" />
            <path d="M0 90 L30 85 L60 78 L100 60 L140 45 L180 30 L220 28 L260 35 L300 50 L320 60 L320 100 L0 100 Z" fill="rgba(255,177,60,0.15)" />
            <line x1="180" x2="180" y1="0" y2="100" stroke="#FFB13C" strokeDasharray="2 3" opacity="0.5" />
            <circle cx="180" cy="30" r="4" fill="#FFB13C" />
          </svg>
        </div>
        <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
          <Card dark t="Now" v="1248°F" />
          <Card dark t="Target" v="1828°F" />
          <Card dark t="Rate" v="108°/h" />
          <Card dark t="Cost" v="$4.20" />
        </div>
      </div>);

  }
  return null;
}

function Stat({ label, val, dark }) {
  return (
    <div style={{ flex: 1, padding: 10, borderRadius: 8, background: dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.07)" }}>
      <div style={{ fontSize: 9, opacity: 0.5 }}>{label}</div>
      <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>{val}</div>
    </div>);

}
function Bar({ v, c }) {return <div style={{ height: 6, flex: parseFloat(v), background: c, borderRadius: 3 }} />;}
function Pill({ t, c }) {
  return <span style={{ padding: "4px 10px", borderRadius: 99, fontSize: 10, background: c || "rgba(255,255,255,0.08)", color: c ? "#0a0a0b" : "inherit", fontWeight: 600 }}>{t}</span>;
}
function Card({ t, v, trend, light, dark }) {
  const bg = light ? "#fff" : dark ? "#2a1f0d" : "#13141c";
  const border = light ? "1px solid #ffe4df" : dark ? "1px solid #3d2f15" : "1px solid #1c1d26";
  return (
    <div style={{ background: bg, borderRadius: 10, padding: 10, border }}>
      <div style={{ fontSize: 9, opacity: 0.5 }}>{t}</div>
      <div style={{ fontSize: 16, fontWeight: 700, marginTop: 2 }}>{v}</div>
      {trend && <div style={{ fontSize: 10, opacity: 0.6, marginTop: 2 }}>{trend}</div>}
    </div>);

}

// -------------------- SECTION HEADER --------------------
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ maxWidth: 820 }}>
      <div className="mono" style={{ color: "var(--pink)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>{eyebrow}</div>
      <h2 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)", margin: 0, color: "var(--fg)" }}>{title}</h2>
      {subtitle && <p style={{ marginTop: 18, color: "var(--muted)", fontSize: 18, maxWidth: 560, lineHeight: 1.5 }}>{subtitle}</p>}
    </div>);

}

// -------------------- COMPANIES --------------------
function Companies() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="companies" data-screen-label="03 Companies" style={{ padding: "120px 32px", maxWidth: 1400, margin: "0 auto" }}>
      <SectionHeader eyebrow="03 — Where I've been" title="Five years, four teams" subtitle="From small studios designing for state governments to building B2B SaaS for the travel industry. The throughline is shipping product that makes complex work feel simple." />
      <div style={{ marginTop: 64, borderTop: "1px solid var(--line)" }}>
        {COMPANIES.map((c, i) =>
        <div key={c.name}
        onMouseEnter={() => setHovered(i)}
        onMouseLeave={() => setHovered(null)}
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 2fr 1.2fr auto",
          gap: 24,
          padding: "32px 8px",
          borderBottom: "1px solid var(--line)",
          alignItems: "center",
          position: "relative",
          transition: "padding 0.3s",
          paddingLeft: hovered === i ? 24 : 8
        }}>
            <div className="display" style={{
            fontSize: "clamp(32px, 4vw, 56px)",
            color: hovered === i ? "var(--fg)" : "var(--fg-soft)",
            transition: "color 0.3s"
          }}>{c.name}</div>
            <div style={{ color: hovered === i ? "var(--fg)" : "var(--muted)", fontSize: 17, transition: "color 0.3s" }}>{c.role}</div>
            <div className="mono" style={{ color: "var(--muted)", fontSize: 13 }}>{c.period}</div>
            <div style={{ color: "var(--muted)", fontSize: 13, textAlign: "right" }}>{c.note}</div>
            <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
            background: "linear-gradient(180deg, var(--pink), var(--pink-2))",
            transform: hovered === i ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "center",
            transition: "transform 0.3s"
          }} />
          </div>
        )}
      </div>

      {/* Logo strip */}
      <div style={{ marginTop: 80, padding: "28px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
        display: "flex", gap: 64, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        {["QuadLabs", "ANTS Digital", "C-Tel", "Visionary-art", "PROPERTYYY", "Vardhan"].map((l) =>
        <span key={l} className="display" style={{ fontSize: 28, color: "var(--faint)", letterSpacing: "0.02em" }}>{l}</span>
        )}
      </div>
    </section>);

}

// -------------------- CONTACT --------------------
function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "khushboo31k@gmail.com";
  const copy = () => {
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };
  return (
    <section id="contact" data-screen-label="04 Contact" style={{ padding: "120px 32px 60px", maxWidth: 1400, margin: "0 auto" }}>
      <div style={{
        position: "relative",
        borderRadius: 32,
        padding: "80px 48px",
        background: "linear-gradient(135deg, #FF2E63 0%, #B5179E 100%)",
        overflow: "hidden",
        boxShadow: "0 30px 80px rgba(255,46,99,0.35)"
      }}>
        {/* deco */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px", opacity: 0.4, pointerEvents: "none"
        }} />
        <div className="mono" style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          04 — Get in touch
        </div>
        <h2 className="display" style={{ fontSize: "clamp(48px, 8vw, 128px)", margin: "16px 0", color: "#fff", maxWidth: 1100 }}>
          Have an idea? Let's make it real.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 19, maxWidth: 540, lineHeight: 1.5 }}>
          I take on two engagements a quarter. If you're shaping something early and need a designer who codes, I'd love to hear about it.
        </p>

        <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button onClick={copy} style={{
            padding: "16px 26px", borderRadius: 999, border: "none",
            background: "#0a0a0b", color: "#fff", fontSize: 16, fontWeight: 600, cursor: "pointer",
            display: "flex", alignItems: "center", gap: 12
          }}>
            <span>{copied ? "Copied ✓" : email}</span>
            <span style={{ opacity: 0.5 }}>{copied ? "" : "⧉"}</span>
          </button>
          <a href="#" style={{
            padding: "16px 26px", borderRadius: 999,
            background: "rgba(255,255,255,0.15)", color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)",
            fontSize: 16, fontWeight: 500,
            display: "inline-flex", alignItems: "center", gap: 10
          }}>Book a 20-min intro <span>→</span></a>
        </div>

        <div style={{ marginTop: 56, display: "flex", gap: 36, flexWrap: "wrap", color: "rgba(255,255,255,0.85)" }}>
          {[
          { l: "Email", v: "khushboo31k@gmail.com" },
          { l: "Portfolio", v: "khush31.github.io" },
          { l: "LinkedIn", v: "in/khushboo-kumari-" },
          { l: "Based in", v: "West Delhi, India · GMT+5:30" }].
          map((s) =>
          <div key={s.l}>
              <div className="mono" style={{ fontSize: 11, opacity: 0.65, textTransform: "uppercase", letterSpacing: "0.14em" }}>{s.l}</div>
              <div style={{ fontSize: 16, fontWeight: 500, marginTop: 4 }}>{s.v}</div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 40, padding: "28px 8px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        color: "var(--muted)", fontSize: 13, flexWrap: "wrap", gap: 16 }}>
        <div className="mono">© 2026 Khushboo Kumari · All bytes reserved</div>
        <div className="mono" style={{ display: "flex", gap: 18 }}>
          <span>Built by hand</span>
          <span>·</span>
          <span>v3.2.0</span>
        </div>
      </div>
    </section>);

}

// -------------------- APP --------------------
function App() {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(() => {
    try {return localStorage.getItem("theme") || "dark";} catch (e) {return "dark";}
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {localStorage.setItem("theme", theme);} catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => t === "dark" ? "light" : "dark");

  useEffect(() => {
    const sections = ["home", "work", "companies", "contact"];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = sections[0];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && el.offsetTop <= y) cur = s;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <TopNav active={active} theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Projects />
      <Companies />
      <Contact />
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);