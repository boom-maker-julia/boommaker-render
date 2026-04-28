/* global React, Frame, Grain, TemplateFooter */
// Template 2 — COVER (Carrousel cover slide)
// Big editorial title, italic serif underlined with gradient, slide counter.

const TemplateCover = ({ data, showLogo, accent = "boom" }) => {
  const { kicker, title1, titleEm, title2, subtitle, totalSlides, swipeText } = data;
  return (
    <Frame theme="dark" accent={accent}>
      {/* Mesh gradient */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: `
          radial-gradient(900px 700px at 80% 100%, rgba(255,233,74,0.18), transparent 55%),
          radial-gradient(900px 700px at 20% 0%, rgba(139,92,255,0.35), transparent 55%),
          radial-gradient(700px 600px at 100% 30%, rgba(255,79,166,0.18), transparent 55%)
        `,
      }} />

      {/* Vertical lines */}
      <svg style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.3 }} width="1080" height="1080">
        {[120, 360, 720, 960].map((x, i) => (
          <line key={i} x1={x} y1="0" x2={x} y2="1080" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 8" />
        ))}
      </svg>

      {/* Top bar */}
      <div style={{
        position: "absolute", top: 56, left: 64, right: 64, zIndex: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#F5F5F7",
          display: "inline-flex", alignItems: "center", gap: 12,
        }}>
          <span style={{ display: "inline-block", width: 28, height: 1, background: "#FFE94A" }} />
          {kicker}
        </div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.14em", color: "#D8D8E0",
        }}>
          <span style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 600,
            fontSize: 22, color: "#FFE94A", letterSpacing: "-0.02em",
          }}>01</span>
          <span style={{ opacity: 0.5 }}>/</span>
          <span>{String(totalSlides).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Big title */}
      <div style={{ position: "absolute", left: 64, right: 64, top: 240, zIndex: 10 }}>
        <h1 style={{
          fontFamily: "'Geist', sans-serif",
          fontWeight: 600, fontSize: 156, lineHeight: 0.9,
          letterSpacing: "-0.05em", margin: 0, color: "#F5F5F7", textWrap: "balance",
        }}>
          {title1}<br />
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic", fontWeight: 400, color: "#FFE94A",
            display: "inline-block", position: "relative", paddingRight: "0.1em",
          }}>
            {titleEm}
            <svg viewBox="0 0 600 30" preserveAspectRatio="none" style={{
              position: "absolute", left: 0, right: "0.1em", bottom: -8,
              width: "calc(100% - 0.1em)", height: 18, opacity: 0.9,
            }}>
              <path d="M 5 18 Q 150 4, 300 14 T 595 12"
                stroke="url(#coverGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <defs>
                <linearGradient id="coverGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#B794FF" />
                  <stop offset="50%" stopColor="#FFE94A" />
                  <stop offset="100%" stopColor="#00E0D5" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          {title2 ? <><br />{title2}</> : null}
        </h1>
      </div>

      {/* Subtitle */}
      <div style={{ position: "absolute", left: 64, right: 380, bottom: 200, zIndex: 10 }}>
        <p style={{
          fontSize: 26, lineHeight: 1.4, margin: 0,
          color: "#D8D8E0", textWrap: "pretty", maxWidth: 640, fontWeight: 300,
        }}>{subtitle}</p>
      </div>

      {/* Swipe indicator */}
      <div style={{
        position: "absolute", bottom: 200, right: 64, zIndex: 10,
        display: "flex", alignItems: "center", gap: 14,
        padding: "16px 20px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.18)",
        backdropFilter: "blur(12px)", borderRadius: 999,
        fontFamily: "'Geist Mono', monospace",
        fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F5F5F7",
      }}>
        {swipeText}
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path d="M1 7 H18 M12 1 L18 7 L12 13" stroke="#FFE94A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <Grain opacity={0.5} />
      <TemplateFooter showLogo={showLogo} handle="boommaker.io" isDark accent="#FFE94A" />
    </Frame>
  );
};

Object.assign(window, { TemplateCover });
