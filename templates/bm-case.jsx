/* global React, Frame, Grain, TemplateFooter */
// Template 3 — CASE STUDY / Étude de cas
// Big metric with multi-stop gradient, before/after tape, proofs.
// Supports theme="dark" (default) and theme="light".

const TemplateCase = ({ data, showLogo, accent = "cyan", theme = "dark" }) => {
  const {
    sector, clientName, headline, headlineEm,
    metric, metricUnit, metricLabel,
    deltaLabel, before, after, proofs, footerHandle
  } = data;
  const isLight = theme === "light";

  // Theme-aware tokens
  const ink = isLight ? "#0A0A0E" : "#F5F5F7";
  const ink2 = isLight ? "#2A2A34" : "#D8D8E0";
  const mute = isLight ? "#5A5A66" : "#9A9AA8";
  const beforeColor = isLight ? "#9A9AA8" : "#9A9AA8";
  const surfaceBg = isLight ? "rgba(255,255,255,0.7)" : "rgba(20,20,28,0.55)";
  const surfaceBorder = isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.16)";
  const dashedBorder = isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.16)";
  const chipBg = isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)";
  const chipBorder = isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.12)";
  const dividerCol = isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.2)";

  // Italic + accent colors
  const italicColor = isLight ? "#5B2DE6" : "#B794FF";
  const accentTeal = isLight ? "#007D78" : "#00E0D5";
  const accentMauve = isLight ? "#5B2DE6" : "#B794FF";

  // Big metric gradient stops — keep contrast on cream
  const metricGrad = isLight ?
  "linear-gradient(120deg, #0A0A0E 0%, #007D78 40%, #5B2DE6 75%, #A88B00 100%)" :
  "linear-gradient(120deg, #FFFFFF 0%, #00E0D5 40%, #B794FF 75%, #FFE94A 100%)";
  const unitGrad = isLight ?
  "linear-gradient(120deg, #007D78, #5B2DE6, #A88B00)" :
  "linear-gradient(120deg, #00E0D5, #B794FF, #FFE94A)";
  const deltaTapeBg = isLight ?
  "linear-gradient(135deg, rgba(0,125,120,0.16), rgba(91,45,230,0.14))" :
  "linear-gradient(135deg, rgba(0,224,213,0.18), rgba(139,92,255,0.18))";

  return (
    <Frame theme={theme} accent={accent}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: isLight ?
        `
              radial-gradient(800px 600px at 90% 100%, rgba(0,224,213,0.22), transparent 55%),
              radial-gradient(700px 600px at 0% 0%,  rgba(139,92,255,0.16), transparent 55%)
            ` :
        `
              radial-gradient(800px 600px at 90% 100%, rgba(0,224,213,0.18), transparent 55%),
              radial-gradient(700px 600px at 0% 0%,  rgba(139,92,255,0.18), transparent 55%)
            `
      }} />

      {/* Top bar */}
      <div style={{
        position: "absolute", top: 56, left: 64, right: 64, zIndex: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          letterSpacing: "0.14em", textTransform: "uppercase", color: ink,
          display: "inline-flex", alignItems: "center", gap: 12,
          padding: "10px 16px", background: surfaceBg,
          border: `1px solid ${surfaceBorder}`, backdropFilter: "blur(12px)", borderRadius: 999,
          fontSize: "13px", fontWeight: 500, whiteSpace: "nowrap",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: 999, background: accentTeal,
            boxShadow: `0 0 10px ${accentTeal}`
          }} />
          ÉTUDE DE CAS
          <span style={{ width: 1, height: 12, background: dividerCol }} />
          {sector}
        </div>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          letterSpacing: "0.14em", color: mute, fontSize: "13px", fontWeight: 500,
          whiteSpace: "nowrap",
        }}>
          CLIENT — {clientName}
        </div>
      </div>

      {/* Headline */}
      <div style={{ position: "absolute", top: 130, left: 64, right: 64, zIndex: 10 }}>
        <h1 style={{
          fontFamily: "'Geist', sans-serif",
          lineHeight: 1.05,
          letterSpacing: "-0.03em", margin: 0, color: ink, textWrap: "balance",
          fontWeight: 600, textAlign: "left", fontSize: "44px",
        }}>
          {headline}{" "}
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic", color: italicColor, fontWeight: 400,
            fontSize: "60px", letterSpacing: "-0.02em",
          }}>{headlineEm}</span>
        </h1>
      </div>

      {/* Big metric */}
      <div style={{
        position: "absolute", top: 320, left: 64, right: 64, zIndex: 10, textAlign: "left"
      }}>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase",
          color: mute, marginBottom: 18
        }}>{metricLabel}</div>
        <div style={{ display: "inline-flex", alignItems: "flex-start", gap: 8, maxWidth: "100%" }}>
          <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 600,

            background: metricGrad,
            WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
            filter: isLight ?
            "drop-shadow(0 8px 32px rgba(91,45,230,0.18))" :
            "drop-shadow(0 8px 32px rgba(139,92,255,0.3))",
            whiteSpace: "nowrap", lineHeight: "0.9", letterSpacing: "-0.04em", fontSize: "240px",
            paddingBottom: "12px"
          }}>{metric}</div>
          <div style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic", fontWeight: 400,
            fontSize: 120, lineHeight: 1, letterSpacing: "-0.03em",
            background: unitGrad,
            WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
            marginTop: 32
          }}>{metricUnit}</div>
        </div>
      </div>

      {/* Before / After tape */}
      <div style={{
        position: "absolute", left: 64, right: 64, bottom: 230, zIndex: 10,
        display: "grid", gridTemplateColumns: "1fr auto 1fr auto", gap: 0,
        background: surfaceBg,
        border: `1px solid ${surfaceBorder}`,
        backdropFilter: "blur(12px)", borderRadius: 18, overflow: "hidden"
      }}>
        <div style={{ padding: "22px 28px", display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{
            fontFamily: "'Geist Mono', monospace",
            letterSpacing: "0.18em", color: mute, fontSize: "13px", fontWeight: 500,
          }}>AVANT</div>
          <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 500,
            lineHeight: 1, letterSpacing: "-0.02em", color: beforeColor,
            fontSize: "32px", textDecoration: "line-through", textDecorationThickness: "2px",
          }}>{before}</div>
        </div>
        <div style={{
          display: "flex", alignItems: "center", padding: "0 16px",
          borderLeft: `1px dashed ${dashedBorder}`,
          borderRight: `1px dashed ${dashedBorder}`
        }}>
          <svg width="36" height="14" viewBox="0 0 36 14" fill="none">
            <path d="M2 7 H32 M26 1 L34 7 L26 13" stroke={accentTeal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ padding: "22px 28px", display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{
            fontFamily: "'Geist Mono', monospace",
            letterSpacing: "0.18em", color: accentTeal, fontSize: "13px", fontWeight: 500,
          }}>APRÈS</div>
          <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 700,
            lineHeight: 1, letterSpacing: "-0.02em", color: ink, fontSize: "32px",
          }}>{after}</div>
        </div>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center", padding: "20px 28px",
          background: deltaTapeBg,
          borderLeft: `1px solid ${surfaceBorder}`, gap: 6, minWidth: 140,
        }}>
          <div style={{
            fontFamily: "'Geist Mono', monospace",
            letterSpacing: "0.18em", color: mute, textTransform: "uppercase",
            fontSize: "13px", fontWeight: 500,
          }}>DELTA</div>
          <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 700,
            lineHeight: 1, letterSpacing: "-0.02em", color: accentTeal, fontSize: "38px",
            whiteSpace: "nowrap",
          }}>{deltaLabel}</div>
        </div>
      </div>

      {/* Proof chips */}
      <div style={{
        position: "absolute", left: 64, right: 64, bottom: 142, zIndex: 10,
        display: "flex", gap: 10, flexWrap: "wrap"
      }}>
        {proofs.map((p, i) =>
        <div key={i} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "10px 16px",
          background: chipBg,
          border: `1px solid ${chipBorder}`,
          borderRadius: 999,
          fontFamily: "'Geist Mono', monospace",
          fontSize: 14, letterSpacing: "0.08em", color: ink2, textTransform: "uppercase",
          fontWeight: 500,
        }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: accentMauve }} />
            {p}
          </div>
        )}
      </div>

      <Grain opacity={isLight ? 0.25 : 0.5} />
      <TemplateFooter showLogo={showLogo} handle={footerHandle} isDark={!isLight} accent={accentTeal} />
    </Frame>);

};

Object.assign(window, { TemplateCase });