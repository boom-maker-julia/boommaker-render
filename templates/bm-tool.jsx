/* global React, Frame, Grain, TemplateFooter, BMLogo, ContentBox */
// Template — TOOL / Recommandation outil
// Hero logo placeholder, badge Tools #N, note pictogramme, 3 raisons.

const TemplateTool = ({ data, showLogo = true, accent = "boom", theme = "dark", format = "square" }) => {
  const {
    pickNumber, category, toolName, tagline,
    headline, headlineEm, rating, ratingMax,
    why1, why2, why3, useCase, footerHandle
  } = data;
  const isLight = theme === "light";

  const ink = isLight ? "#0A0A0E" : "#F5F5F7";
  const ink2 = isLight ? "#2A2A34" : "#D8D8E0";
  const mute = isLight ? "#5A5A66" : "#9A9AA8";
  const surfaceBg = isLight ? "rgba(255,255,255,0.7)" : "rgba(20,20,28,0.6)";
  const surfaceBorder = isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.12)";
  const cardBg = isLight ? "rgba(255,255,255,0.85)" : "rgba(20,20,28,0.7)";

  const accentDot = isLight ? "#A88B00" : "#FFE94A";
  const italicGrad = isLight ?
  "linear-gradient(120deg, #5B2DE6 10%, #007D78 90%)" :
  "linear-gradient(120deg, #B794FF 10%, #00E0D5 90%)";

  // 5 fire emojis with `rating` filled
  const fires = Array.from({ length: ratingMax || 5 }, (_, i) => i < rating);

  return (
    <Frame theme={theme} accent={accent} format={format}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: isLight ? `
          radial-gradient(900px 700px at 100% 0%, rgba(255,233,74,0.28), transparent 55%),
          radial-gradient(700px 600px at 0% 100%, rgba(139,92,255,0.16), transparent 55%)
        ` : `
          radial-gradient(900px 700px at 100% 0%, rgba(255,233,74,0.18), transparent 55%),
          radial-gradient(700px 600px at 0% 100%, rgba(139,92,255,0.22), transparent 55%)
        `
      }} />

      <ContentBox format={format}>
      {/* Top bar */}
      <div style={{
        position: "absolute", top: 56, left: 64, right: 64, zIndex: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "10px 16px",
          background: isLight ? "rgba(255,233,74,0.20)" : "rgba(255,233,74,0.12)",
          border: `1px solid ${isLight ? "rgba(168,139,0,0.4)" : "rgba(255,233,74,0.35)"}`,
          borderRadius: 999,
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase",
          color: ink
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: 999, background: accentDot,
            boxShadow: `0 0 12px ${accentDot}`
          }} />
          Tools · Pick #{String(pickNumber).padStart(2, "0")}
        </div>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.14em", color: mute
        }}>
          {category}
        </div>
      </div>

      {/* Hero — tool logo placeholder + name */}
      <div style={{
        position: "absolute", top: 150, left: 64, right: 64, zIndex: 10,
        display: "flex", alignItems: "center", gap: 28
      }}>
        {/* Logo placeholder square */}
        <div style={{
          width: 160, height: 160, flexShrink: 0,
          borderRadius: 32,
          background: `linear-gradient(135deg, ${isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)"}, ${isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.02)"})`,
          border: `1.5px dashed ${isLight ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.22)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Geist Mono', monospace",
          fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase",
          color: mute, position: "relative"
        }}>
          {/* Tool initial */}
          <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 600,
            fontSize: 88, lineHeight: 1, letterSpacing: "-0.04em",
            background: "linear-gradient(135deg, #00E0D5, #B794FF, #FFE94A)",
            WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            {toolName.charAt(0).toUpperCase()}
          </div>
          <div style={{
            position: "absolute", bottom: 8, right: 10,
            fontSize: 9, opacity: 0.5
          }}></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 600,
            fontSize: 76, lineHeight: 0.95, letterSpacing: "-0.04em",
            color: ink
          }}>
            {toolName}
          </div>
          <div style={{
            fontFamily: "'Geist Mono', monospace",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: mute, fontSize: "20px"
          }}>
            {tagline}
          </div>
        </div>
      </div>

      {/* Headline */}
      <div style={{
        position: "absolute", top: 360, left: 64, right: 64, zIndex: 10
      }}>
        <h1 style={{
          fontFamily: "'Geist', sans-serif",
          fontWeight: 500, fontSize: 56, lineHeight: 1.05,
          letterSpacing: "-0.03em", margin: 0, color: ink, textWrap: "balance"
        }}>
          {headline}{" "}
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic", fontWeight: 400,
            background: italicGrad,
            WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>{headlineEm}</span>
        </h1>
      </div>

      {/* Rating */}
      <div style={{
        position: "absolute", top: 540, left: 64, right: 64, zIndex: 10,
        display: "flex", alignItems: "center", gap: 18
      }}>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          letterSpacing: "0.18em", textTransform: "uppercase", color: mute, fontSize: "20px"
        }}>
          Verdict Boom Maker
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {fires.map((on, i) =>
          <span key={i} style={{
            fontSize: 32, lineHeight: 1, opacity: on ? 1 : 0.18,
            filter: on ? "drop-shadow(0 4px 12px rgba(255,79,166,0.5))" : "grayscale(1)",
            userSelect: "none"
          }}>🔥</span>
          )}
        </div>
        <div style={{
          fontFamily: "'Geist', sans-serif", fontWeight: 600,
          fontSize: 28, letterSpacing: "-0.02em",
          color: ink
        }}>
          {rating}<span style={{ color: mute, fontWeight: 400 }}>/{ratingMax || 5}</span>
        </div>
      </div>

      {/* 3 reasons cards */}
      <div style={{
        position: "absolute", left: 64, right: 64, bottom: 250, zIndex: 10,
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14
      }}>
        {[
        { tag: "POURQUOI", text: why1, color: isLight ? "#5B2DE6" : "#B794FF" },
        { tag: "QUAND", text: why2, color: isLight ? "#007D78" : "#00E0D5" },
        { tag: "BONUS", text: why3, color: isLight ? "#A88B00" : "#FFE94A" }].
        map((p, i) =>
        <div key={i} style={{
          padding: "20px 20px 22px",
          background: cardBg,
          backdropFilter: "blur(12px)",
          border: `1px solid ${surfaceBorder}`,
          borderRadius: 18,
          display: "flex", flexDirection: "column", gap: 10
        }}>
            <div style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: 11, letterSpacing: "0.16em", color: p.color
          }}>
              0{i + 1} — {p.tag}
            </div>
            <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 500,
            fontSize: 20, lineHeight: 1.25, letterSpacing: "-0.015em",
            color: ink, textWrap: "pretty"
          }}>{p.text}</div>
          </div>
        )}
      </div>

      {/* Use case row */}
      <div style={{
        position: "absolute", left: 64, right: 64, bottom: 142, zIndex: 10,
        display: "flex", alignItems: "center", gap: 14,
        padding: "14px 20px",
        background: surfaceBg,
        border: `1px solid ${surfaceBorder}`,
        backdropFilter: "blur(12px)",
        borderRadius: 14
      }}>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
          color: accentDot, flexShrink: 0
        }}>
          USE CASE →
        </div>
        <div style={{
          fontFamily: "'Geist', sans-serif", fontWeight: 400,
          fontSize: 17, lineHeight: 1.3, color: ink2
        }}>
          {useCase}
        </div>
      </div>
      </ContentBox>

      <Grain opacity={isLight ? 0.25 : 0.5} />
      <TemplateFooter showLogo={showLogo} handle={footerHandle} isDark={!isLight} accent={isLight ? "#A88B00" : "#FFE94A"} />
    </Frame>);

};

Object.assign(window, { TemplateTool });