/* global React */
// Boom Maker — shared building blocks for all LinkedIn templates
// Loaded BEFORE any individual template file.

// ---- Boom Maker logo (full wordmark + BM mark from the brand SVG) ----
const BMLogo = ({ color = "currentColor", style }) =>
<svg viewBox="0 0 412.33 95.79" style={style} aria-label="Boom Maker">
    <g fill={color}>
      <path d="M35.98,59.85c1.7,2.18,2.55,4.67,2.55,7.46,0,4.04-1.41,7.24-4.23,9.6-2.82,2.36-6.75,3.54-11.8,3.54H0v-48.3h21.74c4.91,0,8.75,1.12,11.53,3.37,2.77,2.25,4.16,5.3,4.16,9.15,0,2.85-.75,5.21-2.24,7.09s-3.47,3.19-5.95,3.92c2.8.6,5.05,1.99,6.74,4.16ZM11.77,51.69h7.71c1.93,0,3.41-.42,4.44-1.27,1.03-.85,1.55-2.1,1.55-3.75s-.52-2.91-1.55-3.78c-1.03-.87-2.51-1.31-4.44-1.31h-7.71v10.11ZM25.01,69.61c1.08-.89,1.62-2.19,1.62-3.89s-.56-3.03-1.69-3.99c-1.12-.96-2.67-1.45-4.64-1.45h-8.53v10.67h8.67c1.97,0,3.5-.45,4.58-1.34Z" />
      <path d="M55.7,77.77c-3.78-2.11-6.79-5.06-9.01-8.84-2.23-3.78-3.34-8.04-3.34-12.76s1.11-8.97,3.34-12.73c2.22-3.76,5.23-6.7,9.01-8.81,3.78-2.11,7.95-3.17,12.49-3.17s8.7,1.06,12.49,3.17c3.78,2.11,6.77,5.05,8.95,8.81,2.18,3.76,3.27,8,3.27,12.73s-1.1,8.98-3.3,12.76c-2.2,3.78-5.18,6.73-8.94,8.84-3.76,2.11-7.91,3.17-12.45,3.17s-8.7-1.06-12.49-3.17ZM77.44,66.35c2.32-2.57,3.47-5.96,3.47-10.18s-1.16-7.67-3.47-10.22c-2.32-2.55-5.4-3.82-9.25-3.82s-7.01,1.26-9.32,3.78c-2.32,2.52-3.48,5.94-3.48,10.25s1.16,7.67,3.48,10.22c2.32,2.55,5.42,3.82,9.32,3.82s6.94-1.29,9.25-3.85Z" />
      <path d="M109.78,77.77c-3.78-2.11-6.79-5.06-9.01-8.84-2.23-3.78-3.34-8.04-3.34-12.76s1.11-8.97,3.34-12.73c2.22-3.76,5.23-6.7,9.01-8.81,3.78-2.11,7.95-3.17,12.49-3.17s8.7,1.06,12.49,3.17c3.78,2.11,6.77,5.05,8.94,8.81,2.18,3.76,3.27,8,3.27,12.73s-1.1,8.98-3.3,12.76c-2.2,3.78-5.19,6.73-8.95,8.84-3.76,2.11-7.91,3.17-12.45,3.17s-8.7-1.06-12.49-3.17ZM131.52,66.35c2.32-2.57,3.48-5.96,3.48-10.18s-1.16-7.67-3.48-10.22-5.4-3.82-9.25-3.82-7.01,1.26-9.32,3.78c-2.32,2.52-3.48,5.94-3.48,10.25s1.16,7.67,3.48,10.22c2.32,2.55,5.42,3.82,9.32,3.82s6.94-1.29,9.25-3.85Z" />
      <path d="M293.05,72.4h-16.63l-2.67,8.53h-11.36l16.12-48.3h12.56l16.86,48.3h-12.23l-2.67-8.53ZM290.26,63.32l-5.52-17.68-5.46,17.68h10.98Z" />
      <path d="M333.7,80.93l-14.98-21.33v21.33h-10.85v-48.3h10.85v21.19l14.85-21.19h12.76l-17.26,23.67,17.89,24.63h-13.26Z" />
      <path d="M357.65,42.06v9.77h14.53v9.08h-14.53v10.6h16.44v9.43h-27.29v-48.3h27.29v9.43h-16.44Z" />
      <path d="M400.08,80.93l-9.27-18.23h-2.6v18.23h-10.85v-48.3h18.21c3.51,0,6.5.66,8.98,1.99,2.47,1.33,4.32,3.15,5.55,5.47,1.23,2.32,1.84,4.9,1.84,7.74,0,3.21-.84,6.08-2.51,8.6-1.67,2.52-4.14,4.31-7.39,5.37l10.28,19.13h-12.25ZM388.21,54.38h6.73c1.99,0,3.48-.53,4.47-1.58.99-1.05,1.49-2.55,1.49-4.47s-.5-3.28-1.49-4.34c-.99-1.05-2.49-1.58-4.47-1.58h-6.73v11.97Z" />
      <path d="M242.45,15.97v63.84c0,.48-.39.87-.87.87h-6.73c-.48,0-.87-.39-.87-.87v-45.43c0-.78-.89-1.22-1.51-.76l-26.77,19.95c-.31.23-.73.23-1.04,0l-26.77-19.95c-.62-.47-1.51-.02-1.51.76v45.43c0,.48-.39.87-.87.87h-6.73c-.48,0-.87-.39-.87-.87V15.97c0-.72.82-1.13,1.39-.7l35.36,26.43c.31.23.73.23,1.04,0l35.36-26.43c.57-.43,1.39-.02,1.39.7Z" />
      <path d="M227.76,46.1v33.72c0,.48-.39.87-.87.87h-6.73c-.48,0-.87-.39-.87-.87v-15.32c0-.78-.89-1.22-1.51-.76l-12.09,9.03c-.31.23-.73.23-1.04,0l-12.08-9.03c-.62-.47-1.51-.02-1.51.76v15.32c0,.48-.39.87-.87.87h-6.73c-.48,0-.87-.39-.87-.87v-33.72c0-.72.82-1.13,1.39-.7l20.67,15.5c.31.23.73.23,1.04,0l20.68-15.51c.57-.43,1.39-.02,1.39.7Z" />
      <path d="M255.82,95.79h-101.28c-1.55,0-2.81-1.26-2.81-2.81V2.81c0-1.55,1.26-2.81,2.81-2.81h101.28c1.55,0,2.81,1.26,2.81,2.81v90.17c0,1.55-1.26,2.81-2.81,2.81ZM159.2,89.79h91.95c.81,0,1.47-.66,1.47-1.47V7.47c0-.81-.66-1.47-1.47-1.47h-91.95c-.81,0-1.47.66-1.47,1.47v80.84c0,.81.66,1.47,1.47,1.47Z" />
    </g>
  </svg>;


// ---- Frame: 1080×1080 wrapper for all templates ----
const Frame = ({ children, theme = "dark", accent = "violet", style }) => {
  const accentMap = {
    violet: { primary: "#8B5CFF", secondary: "#B794FF" },
    cyan: { primary: "#00E0D5", secondary: "#5BF2EC" },
    boom: { primary: "#FFE94A", secondary: "#FFF38A" },
    pink: { primary: "#FF4FA6", secondary: "#FF8AC4" }
  };
  const a = accentMap[accent] || accentMap.violet;
  const isDark = theme === "dark";
  return (
    <div className={`bm-frame ${isDark ? "is-dark" : "is-light"}`} style={{
      width: 1080, height: 1080, position: "relative", overflow: "hidden",
      background: isDark ? "#07070A" : "#F5F4EE",
      color: isDark ? "#F5F5F7" : "#0A0A0E",
      fontFamily: "'Geist','Helvetica Neue',Arial,sans-serif",
      "--acc": a.primary, "--acc2": a.secondary,
      "--cyan": "#00E0D5", "--violet": "#8B5CFF", "--violet2": "#B794FF", "--boom": "#FFE94A",
      "--ink": isDark ? "#F5F5F7" : "#0A0A0E",
      "--ink2": isDark ? "#D8D8E0" : "#2A2A34",
      "--mute": isDark ? "#9A9AA8" : "#5A5A66",
      "--line": isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
      "--lineStrong": isDark ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.16)",
      "--surface": isDark ? "#14141C" : "#FFFFFF",
      "--bg": isDark ? "#07070A" : "#F5F4EE",
      ...style
    }}>
      {children}
    </div>);

};

// ---- Grain overlay ----
const Grain = ({ opacity = 0.4 }) =>
<div style={{
  position: "absolute", inset: 0, pointerEvents: "none", zIndex: 30, opacity,
  backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"
}} />;


// ---- Footer with logo + handle (handle param kept for back-compat but ignored) ----
const TemplateFooter = ({ showLogo, isDark = true, accent = "#00E0D5" }) =>
<div style={{
  position: "absolute", left: 64, right: 64, bottom: 56,
  display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 20
}}>
    {showLogo ?
  <BMLogo color={isDark ? "#F5F5F7" : "#0A0A0E"} style={{ height: 28, width: "auto" }} /> :
  <div />}
    <div style={{
    fontFamily: "'Geist Mono', monospace",
    fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase",
    fontWeight: 500,
    color: isDark ? "#D8D8E0" : "#2A2A34",
    display: "flex", alignItems: "center", gap: 10
  }}>
      <span style={{
      width: 7, height: 7, borderRadius: 999,
      background: accent, boxShadow: `0 0 10px ${accent}`
    }} />
      <span style={{ display: "inline-flex", alignItems: "baseline" }}>
        <span>boommaker</span><span style={{ color: accent, fontWeight: 600 }}>.io</span>
      </span>
    </div>
  </div>;


// Accent → color map (used by templates)
const accentColors = {
  violet: { primary: "#8B5CFF", secondary: "#B794FF" },
  cyan: { primary: "#00E0D5", secondary: "#5BF2EC" },
  boom: { primary: "#FFE94A", secondary: "#FFF38A" },
  pink: { primary: "#FF4FA6", secondary: "#FF8AC4" }
};

Object.assign(window, { BMLogo, Frame, Grain, TemplateFooter, accentColors });