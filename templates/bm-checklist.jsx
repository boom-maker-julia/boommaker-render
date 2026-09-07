/* global React, Frame, Grain, TemplateFooter, ContentBox, FitBox */
// Template 8 — CHECKLIST
// Titre + 3 à 6 cases à cocher. Format sauvegardable, fait pour être partagé.

const TemplateChecklist = ({ data, showLogo, accent = "violet", theme = "dark", format = "square" }) => {
  const { kicker, title, titleEm, intro, items, note } = data;
  const isLight = theme === "light";

  const ink = isLight ? "#0A0A0E" : "#F5F5F7";
  const ink2 = isLight ? "#2A2A34" : "#D8D8E0";
  const mute = isLight ? "#5A5A66" : "#9A9AA8";
  const surfaceBg = isLight ? "rgba(255,255,255,0.7)" : "rgba(20,20,28,0.55)";
  const surfaceBorder = isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.14)";
  const rowBorder = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)";
  const boxBorder = isLight ? "rgba(0,0,0,0.28)" : "rgba(255,255,255,0.30)";
  const accentTeal = isLight ? "#007D78" : "#00E0D5";
  const accentMauve = isLight ? "#5B2DE6" : "#B794FF";

  const italicGrad = isLight
    ? "linear-gradient(120deg, #5B2DE6 10%, #007D78 90%)"
    : "linear-gradient(120deg, #B794FF 10%, #00E0D5 90%)";

  const list = (items || []).filter((t) => t && String(t).trim().length > 0);
  const n = Math.max(list.length, 1);

  // La zone des lignes est fixe : plus il y a d'items, plus chaque ligne est basse.
  const zoneH = 380;
  const rowH = Math.min(96, zoneH / n);
  const fontSize = n >= 6 ? 26 : n === 5 ? 28 : 30;

  return (
    <Frame theme={theme} accent={accent} format={format}>
      {/* Fond */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: isLight
          ? `radial-gradient(880px 700px at 100% 0%, rgba(139,92,255,0.16), transparent 58%),
             radial-gradient(700px 620px at 0% 100%, rgba(0,224,213,0.14), transparent 58%)`
          : `radial-gradient(880px 700px at 100% 0%, rgba(139,92,255,0.26), transparent 58%),
             radial-gradient(700px 620px at 0% 100%, rgba(0,224,213,0.18), transparent 58%)`
      }} />
      {/* Grille de points */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, opacity: isLight ? 0.5 : 0.35,
        backgroundImage: `radial-gradient(${isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"} 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }} />

      <ContentBox format={format}>
        {/* Barre du haut */}
        <div style={{
          position: "absolute", top: 56, left: 64, right: 64, zIndex: 10,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            padding: "10px 16px",
            background: surfaceBg,
            border: `1px solid ${surfaceBorder}`,
            backdropFilter: "blur(12px)",
            borderRadius: 999,
            fontFamily: "'Geist Mono', monospace",
            fontSize: 13, fontWeight: 500, letterSpacing: "0.14em",
            textTransform: "uppercase", color: ink, whiteSpace: "nowrap",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: 999, background: accentTeal,
              boxShadow: `0 0 10px ${accentTeal}`,
            }} />
            {kicker}
          </div>
          <div style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: 13, fontWeight: 500, letterSpacing: "0.14em",
            color: mute, whiteSpace: "nowrap",
          }}>
            CHECKLIST — {String(n).padStart(2, "0")} POINTS
          </div>
        </div>

        {/* Titre + intro */}
        <div style={{ position: "absolute", top: 152, left: 64, right: 64, zIndex: 10 }}>
          <FitBox h={272}>
            <h1 style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 600, fontSize: 78, lineHeight: 0.98,
              letterSpacing: "-0.04em", margin: 0, color: ink, textWrap: "balance",
            }}>
              {title}{titleEm ? " " : ""}
              {titleEm ? (
                <span style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic", fontWeight: 400,
                  background: italicGrad,
                  WebkitBackgroundClip: "text", backgroundClip: "text",
                  WebkitTextFillColor: "transparent", paddingRight: "0.08em",
                }}>{titleEm}</span>
              ) : null}
            </h1>
            {intro ? (
              <p style={{
                marginTop: 28, marginBottom: 0,
                fontSize: 26, lineHeight: 1.42, fontWeight: 300,
                color: ink2, maxWidth: 880, textWrap: "pretty",
              }}>{intro}</p>
            ) : null}
          </FitBox>
        </div>

        {/* Les cases à cocher */}
        <div style={{
          position: "absolute", top: 452, left: 64, right: 64, zIndex: 10,
          background: surfaceBg,
          border: `1px solid ${surfaceBorder}`,
          backdropFilter: "blur(12px)",
          borderRadius: 22,
          padding: "10px 30px",
          height: zoneH,
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          {list.map((text, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 22,
              height: rowH,
              borderBottom: i < list.length - 1 ? `1px solid ${rowBorder}` : "none",
            }}>
              <span style={{
                flex: "0 0 auto",
                width: 34, height: 34, borderRadius: 9,
                border: `2px solid ${boxBorder}`,
                display: "inline-block",
              }} />
              <span style={{
                fontFamily: "'Geist', sans-serif", fontWeight: 400,
                fontSize, lineHeight: 1.25, letterSpacing: "-0.015em",
                color: ink, textWrap: "pretty",
              }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Note de bas */}
        {note ? (
          <div style={{
            position: "absolute", left: 64, right: 64, bottom: 150, zIndex: 10,
          }}>
            <FitBox h={54}>
              <div style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
                fontSize: 34, lineHeight: 1.2, letterSpacing: "-0.02em",
                color: accentMauve, textWrap: "balance",
              }}>{note}</div>
            </FitBox>
          </div>
        ) : null}
      </ContentBox>

      <Grain opacity={isLight ? 0.25 : 0.5} />
      <TemplateFooter showLogo={showLogo} isDark={!isLight} accent={accentTeal} />
    </Frame>
  );
};

Object.assign(window, { TemplateChecklist });
