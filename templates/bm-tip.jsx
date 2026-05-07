/* global React, Frame, Grain, TemplateFooter, BMLogo, ContentBox */
// Template 1 — TIP / Astuce
// Big tip number, eyebrow, headline (with serif italic gradient), 3 step cards.

const TipContent = ({ data, showLogo, isLight, accent = "violet", format = "square" }) => {
  const { tipNumber, eyebrow, title, titleEm, body, points, footerNote } = data;
  const ink = isLight ? "#0A0A0E" : "#F5F5F7";
  const ink2 = isLight ? "#2A2A34" : "#D8D8E0";
  const mute = isLight ? "#5A5A66" : "#9A9AA8";
  const surfaceBg = isLight ? "rgba(255,255,255,0.7)" : "rgba(20,20,28,0.6)";
  const surfaceBorder = isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.12)";

  // Italic gradient depends on accent (default violet→cyan)
  const italicGrad = isLight
    ? "linear-gradient(120deg, #5B2DE6 10%, #007D78 90%)"
    : "linear-gradient(120deg, #B794FF 10%, #00E0D5 90%)";

  const dotColors = [
    isLight ? "#5B2DE6" : "#B794FF",
    isLight ? "#007D78" : "#00E0D5",
    isLight ? "#A88B00" : "#FFE94A",
  ];

  return (
    <>
      <ContentBox format={format}>
      {/* Top bar */}
      <div style={{
        position: "absolute", top: 56, left: 64, right: 64, zIndex: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "10px 16px",
          background: isLight ? "rgba(0,224,213,0.12)" : "rgba(0,224,213,0.1)",
          border: isLight ? "1px solid rgba(0,125,120,0.3)" : "1px solid rgba(0,224,213,0.3)",
          borderRadius: 999,
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: ink,
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: 999, background: "#00E0D5",
            boxShadow: "0 0 12px #00E0D5",
          }} />
          {eyebrow}
        </div>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.14em", color: mute,
        }}>
          TIP — {String(tipNumber).padStart(2, "0")} / 12
        </div>
      </div>

      {/* Outline tip number */}
      <div style={{
        position: "absolute", top: 130, left: 56, zIndex: 2,
        fontFamily: "'Geist', sans-serif", fontWeight: 700,
        fontSize: 360, lineHeight: 0.85, letterSpacing: "-0.05em",
        color: "transparent",
        WebkitTextStroke: isLight ? "1.5px rgba(0,0,0,0.07)" : "1.5px rgba(255,255,255,0.06)",
        userSelect: "none",
      }}>
        {String(tipNumber).padStart(2, "0")}
      </div>

      {/* Headline + body */}
      <div style={{ position: "absolute", top: 240, left: 64, right: 64, zIndex: 10 }}>
        <h1 style={{
          fontFamily: "'Geist', sans-serif",
          fontWeight: 600, fontSize: 92, lineHeight: 0.95,
          letterSpacing: "-0.04em", margin: 0, color: ink, textWrap: "balance",
        }}>
          {title}{" "}
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic", fontWeight: 400,
            background: italicGrad,
            WebkitBackgroundClip: "text", backgroundClip: "text",
            WebkitTextFillColor: "transparent", paddingRight: "0.08em",
          }}>{titleEm}</span>
        </h1>
        <p style={{
          marginTop: 36, fontSize: 26, lineHeight: 1.45,
          color: ink2, maxWidth: 880, textWrap: "pretty", fontWeight: 300,
        }}>{body}</p>
      </div>

      {/* 3 step cards */}
      <div style={{
        position: "absolute", left: 64, right: 64, bottom: 200, zIndex: 10,
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18,
      }}>
        {points.map((p, i) => (
          <div key={i} style={{
            padding: "22px 22px 24px",
            background: surfaceBg,
            backdropFilter: "blur(12px)",
            border: `1px solid ${surfaceBorder}`,
            borderRadius: 18,
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            <div style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 11, letterSpacing: "0.16em", color: dotColors[i] || dotColors[0],
            }}>
              0{i + 1} — {p.tag}
            </div>
            <div style={{
              fontFamily: "'Geist', sans-serif", fontWeight: 500,
              fontSize: 22, lineHeight: 1.2, letterSpacing: "-0.015em",
              color: ink, textWrap: "pretty",
            }}>{p.text}</div>
          </div>
        ))}
      </div>
      </ContentBox>

      <Grain opacity={isLight ? 0.25 : 0.5} />
      <TemplateFooter showLogo={showLogo} isDark={!isLight} accent={isLight ? "#007D78" : "#00E0D5"} />
    </>
  );
};

const TemplateTip = ({ data, showLogo, accent = "violet", format = "square" }) => (
  <Frame theme="dark" accent={accent} format={format}>
    {/* Aurora */}
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
      <div style={{
        position: "absolute", width: 720, height: 720, borderRadius: "50%",
        top: -200, left: -160, background: "#8B5CFF",
        filter: "blur(120px)", opacity: 0.45, mixBlendMode: "screen",
      }} />
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        bottom: -180, right: -120, background: "#00E0D5",
        filter: "blur(120px)", opacity: 0.35, mixBlendMode: "screen",
      }} />
    </div>
    {/* Dot grid */}
    <div style={{
      position: "absolute", inset: 0, zIndex: 1, opacity: 0.4,
      backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }} />
    <TipContent data={data} showLogo={showLogo} isLight={false} accent={accent} format={format} />
  </Frame>
);

const ThemedTip = ({ data, showLogo, theme = "dark", accent = "violet", format = "square" }) => {
  if (theme === "light") {
    return (
      <Frame theme="light" accent={accent} format={format}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0,
          background: `
            radial-gradient(900px 700px at 0% 0%, rgba(139,92,255,0.15), transparent 55%),
            radial-gradient(700px 600px at 100% 100%, rgba(0,224,213,0.12), transparent 55%)
          `,
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, opacity: 0.5,
          backgroundImage: "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <TipContent data={data} showLogo={showLogo} isLight accent={accent} format={format} />
      </Frame>
    );
  }
  return <TemplateTip data={data} showLogo={showLogo} accent={accent} format={format} />;
};

Object.assign(window, { TemplateTip, ThemedTip, TipContent });
