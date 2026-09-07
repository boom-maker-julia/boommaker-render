/* global React, Frame, Grain, TemplateFooter, ContentBox, FitBox */
// Template 7 — MYTH / Vrai-Faux
// Idée reçue barrée en haut, réalité en dessous, verdict tranché.
// Fait pour les prises de position.

const TemplateMyth = ({ data, showLogo, accent = "pink", theme = "dark", format = "square" }) => {
  const {
    kicker, verdict, claim, truth, truthEm, detail, punchline
  } = data;
  const isLight = theme === "light";

  const ink = isLight ? "#0A0A0E" : "#F5F5F7";
  const ink2 = isLight ? "#2A2A34" : "#D8D8E0";
  const mute = isLight ? "#5A5A66" : "#9A9AA8";
  const surfaceBg = isLight ? "rgba(255,255,255,0.7)" : "rgba(20,20,28,0.55)";
  const surfaceBorder = isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.14)";
  const falseBg = isLight ? "rgba(0,0,0,0.035)" : "rgba(255,255,255,0.035)";
  const falseBorder = isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.10)";
  const accentTeal = isLight ? "#007D78" : "#00E0D5";
  const accentMauve = isLight ? "#5B2DE6" : "#B794FF";

  const trueGrad = isLight
    ? "linear-gradient(120deg, #5B2DE6 10%, #007D78 90%)"
    : "linear-gradient(120deg, #B794FF 10%, #00E0D5 90%)";

  return (
    <Frame theme={theme} accent={accent} format={format}>
      {/* Fond */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: isLight
          ? `radial-gradient(800px 620px at 0% 0%, rgba(139,92,255,0.16), transparent 58%),
             radial-gradient(820px 640px at 100% 100%, rgba(0,224,213,0.16), transparent 58%)`
          : `radial-gradient(800px 620px at 0% 0%, rgba(139,92,255,0.26), transparent 58%),
             radial-gradient(820px 640px at 100% 100%, rgba(0,224,213,0.20), transparent 58%)`
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
            VRAI / FAUX
          </div>
        </div>

        {/* Bloc 1 — l'idée reçue, barrée */}
        <div style={{
          position: "absolute", top: 148, left: 64, right: 64, zIndex: 10,
          padding: "30px 34px 34px",
          background: falseBg,
          border: `1px solid ${falseBorder}`,
          borderRadius: 22,
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 12, marginBottom: 18,
          }}>
            <span style={{
              width: 26, height: 26, borderRadius: 999,
              border: `1.5px solid ${mute}`,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              color: mute, fontSize: 15, fontWeight: 500, lineHeight: 1,
            }}>✕</span>
            <span style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase",
              color: mute,
            }}>Ce qu'on entend</span>
          </div>
          <FitBox h={140}>
            <div style={{
              fontFamily: "'Geist', sans-serif", fontWeight: 400,
              fontSize: 54, lineHeight: 1.12, letterSpacing: "-0.03em",
              color: mute, textWrap: "balance",
              textDecoration: "line-through",
              textDecorationThickness: 2,
              textDecorationColor: isLight ? "rgba(0,0,0,0.28)" : "rgba(255,255,255,0.28)",
            }}>{claim}</div>
          </FitBox>
        </div>

        {/* Verdict, à cheval entre les deux blocs */}
        <div style={{
          position: "absolute", top: 372, left: 64, zIndex: 12,
          display: "inline-flex", alignItems: "center", gap: 12,
          padding: "12px 22px",
          background: isLight ? "#0A0A0E" : "#F5F5F7",
          color: isLight ? "#F5F5F7" : "#0A0A0E",
          borderRadius: 999,
          fontFamily: "'Geist Mono', monospace",
          fontSize: 15, fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", whiteSpace: "nowrap",
        }}>
          {verdict}
        </div>

        {/* Bloc 2 — la réalité */}
        <div style={{
          position: "absolute", top: 420, left: 64, right: 64, zIndex: 10,
          padding: "44px 34px 36px",
          background: surfaceBg,
          border: `1px solid ${surfaceBorder}`,
          backdropFilter: "blur(12px)",
          borderRadius: 22,
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 12, marginBottom: 18,
          }}>
            <span style={{
              width: 26, height: 26, borderRadius: 999,
              border: `1.5px solid ${accentTeal}`,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              color: accentTeal, fontSize: 14, fontWeight: 600, lineHeight: 1,
              boxShadow: `0 0 12px ${isLight ? "rgba(0,125,120,0.25)" : "rgba(0,224,213,0.35)"}`,
            }}>✓</span>
            <span style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase",
              color: accentTeal,
            }}>En vrai</span>
          </div>
          <FitBox h={280}>
            <div style={{
              fontFamily: "'Geist', sans-serif", fontWeight: 600,
              fontSize: 62, lineHeight: 1.05, letterSpacing: "-0.035em",
              color: ink, textWrap: "balance", margin: 0,
            }}>
              {truth}{truthEm ? " " : ""}
              {truthEm ? (
                <span style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic", fontWeight: 400,
                  background: trueGrad,
                  WebkitBackgroundClip: "text", backgroundClip: "text",
                  WebkitTextFillColor: "transparent", paddingRight: "0.08em",
                }}>{truthEm}</span>
              ) : null}
            </div>
            {detail ? (
              <p style={{
                marginTop: 26, marginBottom: 0,
                fontSize: 26, lineHeight: 1.42, fontWeight: 300,
                color: ink2, textWrap: "pretty", maxWidth: 880,
              }}>{detail}</p>
            ) : null}
          </FitBox>
        </div>

        {/* Punchline */}
        {punchline ? (
          <div style={{
            position: "absolute", left: 64, right: 64, bottom: 160, zIndex: 10,
          }}>
            <FitBox h={64}>
              <div style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
                fontSize: 40, lineHeight: 1.2, letterSpacing: "-0.02em",
                color: accentMauve, textWrap: "balance",
              }}>{punchline}</div>
            </FitBox>
          </div>
        ) : null}
      </ContentBox>

      <Grain opacity={isLight ? 0.25 : 0.5} />
      <TemplateFooter showLogo={showLogo} isDark={!isLight} accent={accentTeal} />
    </Frame>
  );
};

Object.assign(window, { TemplateMyth });
