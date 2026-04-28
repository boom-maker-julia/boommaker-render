/* global React, Frame, Grain, TemplateFooter */
// Template 3 — CASE STUDY / Étude de cas
// Big metric with multi-stop gradient, before/after tape, proofs.

const TemplateCase = ({ data, showLogo, accent = "cyan" }) => {
  const {
    sector, clientName, headline, headlineEm,
    metric, metricUnit, metricLabel,
    deltaLabel, before, after, proofs, footerHandle,
  } = data;

  return (
    <Frame theme="dark" accent={accent}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: `
          radial-gradient(800px 600px at 90% 100%, rgba(0,224,213,0.18), transparent 55%),
          radial-gradient(700px 600px at 0% 0%, rgba(139,92,255,0.18), transparent 55%)
        `,
      }} />

      <div style={{
        position: "absolute", top: 56, left: 64, right: 64, zIndex: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F5F5F7",
          display: "inline-flex", alignItems: "center", gap: 14,
          padding: "10px 16px", background: "rgba(20,20,28,0.6)",
          border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(12px)", borderRadius: 999,
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: 999, background: "#00E0D5",
            boxShadow: "0 0 10px #00E0D5",
          }} />
          ÉTUDE DE CAS
          <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.2)" }} />
          {sector}
        </div>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.14em", color: "var(--mute)",
        }}>
          CLIENT — {clientName}
        </div>
      </div>

      <div style={{ position: "absolute", top: 150, left: 64, right: 64, zIndex: 10 }}>
        <h1 style={{
          fontFamily: "'Geist', sans-serif",
          fontWeight: 500, fontSize: 56, lineHeight: 1.05,
          letterSpacing: "-0.03em", margin: 0, color: "#F5F5F7", textWrap: "balance",
        }}>
          {headline}{" "}
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic", fontWeight: 400, color: "#B794FF",
          }}>{headlineEm}</span>
        </h1>
      </div>

      <div style={{
        position: "absolute", top: 320, left: 64, right: 64, zIndex: 10, textAlign: "left",
      }}>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--mute)", marginBottom: 18,
        }}>{metricLabel}</div>
        <div style={{ display: "inline-flex", alignItems: "flex-start", gap: 8 }}>
          <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 600,
            fontSize: 320, lineHeight: 0.9, letterSpacing: "-0.05em",
            background: "linear-gradient(120deg, #FFFFFF 0%, #00E0D5 40%, #B794FF 75%, #FFE94A 100%)",
            WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 8px 32px rgba(139,92,255,0.3))", whiteSpace: "nowrap",
          }}>{metric}</div>
          <div style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic", fontWeight: 400,
            fontSize: 110, lineHeight: 1, letterSpacing: "-0.03em",
            background: "linear-gradient(120deg, #00E0D5, #B794FF, #FFE94A)",
            WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
            marginTop: 26,
          }}>{metricUnit}</div>
        </div>
      </div>

      {/* Before / After tape */}
      <div style={{
        position: "absolute", left: 64, right: 64, bottom: 220, zIndex: 10,
        display: "grid", gridTemplateColumns: "1fr auto 1fr auto", gap: 0,
        background: "rgba(20,20,28,0.55)",
        border: "1px solid rgba(255,255,255,0.16)",
        backdropFilter: "blur(12px)", borderRadius: 18, overflow: "hidden",
      }}>
        <div style={{ padding: "22px 28px", display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{
            fontFamily: "'Geist Mono', monospace", fontSize: 11,
            letterSpacing: "0.18em", color: "var(--mute)",
          }}>AVANT</div>
          <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 500,
            fontSize: 32, lineHeight: 1, letterSpacing: "-0.02em", color: "#9A9AA8",
          }}>{before}</div>
        </div>
        <div style={{
          display: "flex", alignItems: "center", padding: "0 16px",
          borderLeft: "1px dashed rgba(255,255,255,0.16)",
          borderRight: "1px dashed rgba(255,255,255,0.16)",
        }}>
          <svg width="36" height="14" viewBox="0 0 36 14" fill="none">
            <path d="M2 7 H32 M26 1 L34 7 L26 13" stroke="#00E0D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ padding: "22px 28px", display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{
            fontFamily: "'Geist Mono', monospace", fontSize: 11,
            letterSpacing: "0.18em", color: "#00E0D5",
          }}>APRÈS</div>
          <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 600,
            fontSize: 32, lineHeight: 1, letterSpacing: "-0.02em", color: "#F5F5F7",
          }}>{after}</div>
        </div>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 28px",
          background: "linear-gradient(135deg, rgba(0,224,213,0.18), rgba(139,92,255,0.18))",
          borderLeft: "1px solid rgba(255,255,255,0.16)", gap: 4,
        }}>
          <div style={{
            fontFamily: "'Geist Mono', monospace", fontSize: 10,
            letterSpacing: "0.18em", color: "var(--mute)", textTransform: "uppercase",
          }}>DELTA</div>
          <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 600,
            fontSize: 24, lineHeight: 1, letterSpacing: "-0.02em", color: "#00E0D5",
          }}>{deltaLabel}</div>
        </div>
      </div>

      <div style={{
        position: "absolute", left: 64, right: 64, bottom: 142, zIndex: 10,
        display: "flex", gap: 10, flexWrap: "wrap",
      }}>
        {proofs.map((p, i) => (
          <div key={i} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 14px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 999,
            fontFamily: "'Geist Mono', monospace",
            fontSize: 12, letterSpacing: "0.08em", color: "#D8D8E0", textTransform: "uppercase",
          }}>
            <span style={{ width: 5, height: 5, borderRadius: 999, background: "#B794FF" }} />
            {p}
          </div>
        ))}
      </div>

      <Grain opacity={0.5} />
      <TemplateFooter showLogo={showLogo} handle={footerHandle} isDark accent="#00E0D5" />
    </Frame>
  );
};

Object.assign(window, { TemplateCase });
