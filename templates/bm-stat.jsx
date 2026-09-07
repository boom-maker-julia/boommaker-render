/* global React, Frame, Grain, TemplateFooter, ContentBox, FitBox */
// Template 6 — STAT / Chiffre choc
// Un seul très grand nombre plein cadre, son unité, ce qu'il mesure,
// une ligne de contexte et la source. Fait pour arrêter le scroll.

const TemplateStat = ({ data, showLogo, accent = "boom", theme = "dark", format = "square" }) => {
  const {
    kicker, value, unit, label, context, comparison, source
  } = data;
  const isLight = theme === "light";

  const ink = isLight ? "#0A0A0E" : "#F5F5F7";
  const ink2 = isLight ? "#2A2A34" : "#D8D8E0";
  const mute = isLight ? "#5A5A66" : "#9A9AA8";
  const surfaceBg = isLight ? "rgba(255,255,255,0.7)" : "rgba(20,20,28,0.55)";
  const surfaceBorder = isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.16)";
  const hairline = isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.14)";
  const accentTeal = isLight ? "#007D78" : "#00E0D5";

  // Dégradé du grand chiffre, même famille que le Case mais plus contrasté
  const valueGrad = isLight
    ? "linear-gradient(120deg, #0A0A0E 0%, #5B2DE6 45%, #007D78 100%)"
    : "linear-gradient(120deg, #FFFFFF 0%, #B794FF 45%, #00E0D5 100%)";
  const unitGrad = isLight
    ? "linear-gradient(120deg, #5B2DE6, #007D78)"
    : "linear-gradient(120deg, #B794FF, #00E0D5)";

  return (
    <Frame theme={theme} accent={accent} format={format}>
      {/* Fond : halo derrière le chiffre */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: isLight
          ? `radial-gradient(900px 700px at 50% 42%, rgba(139,92,255,0.18), transparent 60%),
             radial-gradient(700px 600px at 100% 100%, rgba(0,224,213,0.14), transparent 55%)`
          : `radial-gradient(900px 700px at 50% 42%, rgba(139,92,255,0.28), transparent 60%),
             radial-gradient(700px 600px at 100% 100%, rgba(0,224,213,0.20), transparent 55%)`
      }} />
      {/* Grille de points */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, opacity: isLight ? 0.5 : 0.4,
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
          {source ? (
            <div style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 13, fontWeight: 500, letterSpacing: "0.14em",
              color: mute, whiteSpace: "nowrap",
            }}>
              SOURCE — {source}
            </div>
          ) : <div />}
        </div>

        {/* Le chiffre, plein cadre */}
        <div style={{
          position: "absolute", top: 190, left: 64, right: 64, zIndex: 10,
        }}>
          <FitBox h={360} w={952} origin="left top">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{
                fontFamily: "'Geist', sans-serif", fontWeight: 600,
                fontSize: 340, lineHeight: 0.82, letterSpacing: "-0.055em",
                background: valueGrad,
                WebkitBackgroundClip: "text", backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                whiteSpace: "nowrap",
              }}>{value}</div>
              {unit ? (
                <div style={{
                  fontFamily: "'Geist', sans-serif", fontWeight: 500,
                  fontSize: 120, lineHeight: 1, letterSpacing: "-0.03em",
                  marginTop: 26,
                  background: unitGrad,
                  WebkitBackgroundClip: "text", backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  whiteSpace: "nowrap",
                }}>{unit}</div>
              ) : null}
            </div>
          </FitBox>
        </div>

        {/* Ce que mesure le chiffre */}
        <div style={{
          position: "absolute", top: 512, left: 64, right: 64, zIndex: 10,
        }}>
          <FitBox h={92}>
            <div style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 15, letterSpacing: "0.18em", textTransform: "uppercase",
              color: mute, marginBottom: 16,
            }}>{label}</div>
            <div style={{
              height: 2, width: 120,
              background: `linear-gradient(90deg, ${isLight ? "#5B2DE6" : "#B794FF"}, transparent)`,
            }} />
          </FitBox>
        </div>

        {/* Contexte */}
        <div style={{
          position: "absolute", top: 620, left: 64, right: 64, zIndex: 10,
        }}>
          <FitBox h={160}>
            <p style={{
              margin: 0, fontSize: 38, lineHeight: 1.25, fontWeight: 300,
              letterSpacing: "-0.02em", color: ink, textWrap: "pretty", maxWidth: 900,
            }}>{context}</p>
          </FitBox>
        </div>

        {/* Comparaison optionnelle, en bas */}
        {comparison ? (
          <div style={{
            position: "absolute", left: 64, right: 64, bottom: 196, zIndex: 10,
          }}>
            <div style={{ height: 1, background: hairline, marginBottom: 20 }} />
            <FitBox h={60}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 14,
                fontSize: 24, lineHeight: 1.3, color: ink2, fontWeight: 400,
              }}>
                <span style={{
                  fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
                  fontSize: 34, color: isLight ? "#5B2DE6" : "#B794FF",
                }}>soit</span>
                {comparison}
              </div>
            </FitBox>
          </div>
        ) : null}
      </ContentBox>

      <Grain opacity={isLight ? 0.25 : 0.5} />
      <TemplateFooter showLogo={showLogo} isDark={!isLight} accent={accentTeal} />
    </Frame>
  );
};

Object.assign(window, { TemplateStat });
