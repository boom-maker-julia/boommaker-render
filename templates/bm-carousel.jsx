/* global React, Frame, Grain, TemplateFooter */
// Carousel — CONTENT (workflow) + CTA slides
// Share the COVER visual DNA: mesh gradient, vertical hairlines, mono counter,
// italic-serif gradient underline, grain. theme="dark" (default) | "light".

// ---- Small shared helpers (scoped to this file) ----------------------------
const carouselTokens = (isLight) => ({
  ink:  isLight ? "#0A0A0E" : "#F5F5F7",
  ink2: isLight ? "#2A2A34" : "#D8D8E0",
  mute: isLight ? "#5A5A66" : "#9A9AA8",
  lineSoft:     isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.08)",
  surfaceBg:    isLight ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.06)",
  surfaceBorder:isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.18)",
  cardBg:       isLight ? "rgba(255,255,255,0.62)" : "rgba(20,20,28,0.55)",
  cardBorder:   isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.14)",
  chipBg:       isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
  chipBorder:   isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.12)",
  divider:      isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.18)",
  dashed:       isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.18)",
  counterAccent:isLight ? "#A88B00" : "#FFE94A",
  italicColor:  isLight ? "#5B2DE6" : "#FFE94A",
  underline:    isLight
    ? ["#5B2DE6", "#A88B00", "#007D78"]
    : ["#B794FF", "#FFE94A", "#00E0D5"],
  statTape:     isLight
    ? "linear-gradient(135deg, rgba(168,139,0,0.16), rgba(91,45,230,0.12))"
    : "linear-gradient(135deg, rgba(255,233,74,0.18), rgba(139,92,255,0.16))",
});

// Mesh + hairlines + counter top bar shared between content slides
const CarouselBackdrop = ({ isLight, t, gradId }) => (
  <>
    <div style={{
      position: "absolute", inset: 0, zIndex: 0,
      background: isLight
        ? `radial-gradient(900px 700px at 85% 110%, rgba(255,233,74,0.24), transparent 55%),
           radial-gradient(800px 700px at 10% -10%, rgba(139,92,255,0.14), transparent 55%)`
        : `radial-gradient(900px 700px at 85% 110%, rgba(255,233,74,0.12), transparent 55%),
           radial-gradient(800px 700px at 10% -10%, rgba(139,92,255,0.28), transparent 55%)`,
    }} />
    <svg style={{ position: "absolute", inset: 0, zIndex: 1, opacity: isLight ? 0.55 : 0.28 }} width="1080" height="1080">
      {[120, 360, 720, 960].map((x, i) => (
        <line key={i} x1={x} y1="0" x2={x} y2="1080" stroke={t.lineSoft} strokeDasharray="2 8" />
      ))}
    </svg>
  </>
);

const CarouselTopBar = ({ kicker, index, total, t }) => (
  <div style={{
    position: "absolute", top: 56, left: 64, right: 64, zIndex: 10,
    display: "flex", justifyContent: "space-between", alignItems: "center",
  }}>
    <div style={{
      fontFamily: "'Geist Mono', monospace",
      fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", color: t.ink,
      fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 12,
    }}>
      <span style={{ display: "inline-block", width: 28, height: 1, background: t.counterAccent }} />
      {kicker}
    </div>
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      fontFamily: "'Geist Mono', monospace",
      fontSize: 14, letterSpacing: "0.14em", color: t.ink2, fontWeight: 500,
    }}>
      <span style={{
        fontFamily: "'Geist', sans-serif", fontWeight: 700,
        fontSize: 26, color: t.counterAccent, letterSpacing: "-0.02em",
      }}>{String(index).padStart(2, "0")}</span>
      <span style={{ opacity: 0.5 }}>/</span>
      <span>{String(total).padStart(2, "0")}</span>
    </div>
  </div>
);

const ItalicUnderline = ({ children, t, gradId, fontSize }) => (
  <span style={{
    fontFamily: "'Instrument Serif', serif",
    fontStyle: "italic", fontWeight: 400, color: t.italicColor,
    display: "inline-block", position: "relative", paddingRight: "0.1em",
    fontSize,
  }}>
    {children}
    <svg viewBox="0 0 600 30" preserveAspectRatio="none" style={{
      position: "absolute", left: 0, right: "0.1em", bottom: -6,
      width: "calc(100% - 0.1em)", height: 16, opacity: 0.95,
    }}>
      <path d="M 5 18 Q 150 4, 300 14 T 595 12"
        stroke={`url(#${gradId})`} strokeWidth="3" fill="none" strokeLinecap="round" />
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={t.underline[0]} />
          <stop offset="50%" stopColor={t.underline[1]} />
          <stop offset="100%" stopColor={t.underline[2]} />
        </linearGradient>
      </defs>
    </svg>
  </span>
);

// ============================================================================
// CONTENT slide — one workflow per slide
// data = { kicker, number, title1, titleEm, body, steps:[{tag,text}x3], statValue, statLabel }
// ============================================================================
const TemplateCarouselContent = ({ data, showLogo, accent = "boom", theme = "dark", index = 2, total = 5 }) => {
  const isLight = theme === "light";
  const t = carouselTokens(isLight);
  const { kicker, number, title1, titleEm, body, steps = [], statValue, statLabel } = data;
  const gid = `cwfGrad-${index}`;

  return (
    <Frame theme={theme} accent={accent}>
      <CarouselBackdrop isLight={isLight} t={t} />

      {/* Giant outline number, behind content, top-right */}
      <div style={{
        position: "absolute", top: -90, right: 24, zIndex: 1, pointerEvents: "none",
        fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: 460, lineHeight: 1,
        color: "transparent",
        WebkitTextStroke: isLight ? "1.5px rgba(10,10,14,0.07)" : "1.5px rgba(255,255,255,0.07)",
      }}>{number}</div>

      <CarouselTopBar kicker={kicker} index={index} total={total} t={t} />

      {/* Eyebrow pill */}
      <div style={{
        position: "absolute", top: 152, left: 64, zIndex: 10,
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "10px 16px", background: t.surfaceBg,
        border: `1px solid ${t.surfaceBorder}`, backdropFilter: "blur(12px)", borderRadius: 999,
        fontFamily: "'Geist Mono', monospace", fontSize: 13, fontWeight: 500,
        letterSpacing: "0.18em", textTransform: "uppercase", color: t.ink,
      }}>
        <span style={{ width: 7, height: 7, borderRadius: 999, background: t.counterAccent, boxShadow: `0 0 10px ${t.counterAccent}` }} />
        Workflow {number}
      </div>

      {/* Headline — sans line, italic underline beneath (cover rhythm) */}
      <div style={{ position: "absolute", left: 64, right: 180, top: 234, zIndex: 10 }}>
        <h1 style={{
          fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: 76, lineHeight: 0.98,
          letterSpacing: "-0.045em", margin: 0, color: t.ink, textWrap: "balance",
        }}>
          {title1}<br />
          <ItalicUnderline t={t} gradId={gid} fontSize={80}>{titleEm}</ItalicUnderline>
        </h1>
      </div>

      {/* Body */}
      <div style={{ position: "absolute", left: 64, right: 360, top: 466, zIndex: 10 }}>
        <p style={{
          fontSize: 26, lineHeight: 1.42, margin: 0, color: t.ink2,
          textWrap: "pretty", maxWidth: 640, fontWeight: 300,
        }}>{body}</p>
      </div>

      {/* Workflow strip — 3 step nodes + temps-gagné cell (mirrors case tape) */}
      <div style={{
        position: "absolute", left: 64, right: 64, bottom: 200, zIndex: 10,
        display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr auto 0.85fr", alignItems: "stretch",
        background: t.cardBg, border: `1px solid ${t.cardBorder}`,
        backdropFilter: "blur(12px)", borderRadius: 18, overflow: "hidden",
      }}>
        {steps.slice(0, 3).map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ padding: "26px 26px", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{
                fontFamily: "'Geist Mono', monospace", fontSize: 13, fontWeight: 500,
                letterSpacing: "0.16em", textTransform: "uppercase", color: t.counterAccent,
                display: "inline-flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ opacity: 0.6 }}>{String(i + 1).padStart(2, "0")}</span>{s.tag}
              </div>
              <div style={{
                fontFamily: "'Geist', sans-serif", fontSize: 19, lineHeight: 1.25,
                fontWeight: 500, color: t.ink, textWrap: "pretty",
              }}>{s.text}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 8px",
              borderLeft: `1px dashed ${t.dashed}` }}>
              <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
                <path d="M1 6 H23 M18 1 L24 6 L18 11" stroke={t.counterAccent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </React.Fragment>
        ))}
        {/* temps gagné */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center", padding: "22px 26px",
          background: t.statTape, gap: 6,
        }}>
          <div style={{
            fontFamily: "'Geist Mono', monospace", fontSize: 12, fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase", color: t.mute,
          }}>{statLabel}</div>
          <div style={{
            fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: 46, lineHeight: 0.95,
            letterSpacing: "-0.03em", color: t.counterAccent, whiteSpace: "nowrap",
          }}>{statValue}</div>
        </div>
      </div>

      <Grain opacity={isLight ? 0.25 : 0.5} />
      <TemplateFooter showLogo={showLogo} isDark={!isLight} accent={t.counterAccent} />
    </Frame>
  );
};

// ============================================================================
// CTA / closing slide
// data = { kicker, title1, titleEm, title2, subtitle, recap:[..x3], ctaText, ctaUrl }
// ============================================================================
const TemplateCarouselCTA = ({ data, showLogo, accent = "boom", theme = "dark", index = 5, total = 5 }) => {
  const isLight = theme === "light";
  const t = carouselTokens(isLight);
  const { kicker, title1, titleEm, title2, subtitle, recap = [], ctaText, ctaUrl } = data;
  const gid = "ctaGrad";
  const ctaBg = isLight
    ? "linear-gradient(135deg, rgba(91,45,230,0.16), rgba(0,125,120,0.12))"
    : "linear-gradient(135deg, rgba(139,92,255,0.32), rgba(0,224,213,0.20))";

  return (
    <Frame theme={theme} accent={accent}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: isLight
          ? `radial-gradient(1000px 800px at 50% 120%, rgba(255,233,74,0.26), transparent 58%),
             radial-gradient(800px 700px at 12% -8%, rgba(139,92,255,0.16), transparent 55%),
             radial-gradient(700px 600px at 95% 18%, rgba(255,79,166,0.10), transparent 55%)`
          : `radial-gradient(1000px 800px at 50% 120%, rgba(255,233,74,0.16), transparent 58%),
             radial-gradient(800px 700px at 12% -8%, rgba(139,92,255,0.34), transparent 55%),
             radial-gradient(700px 600px at 95% 18%, rgba(255,79,166,0.16), transparent 55%)`,
      }} />
      <svg style={{ position: "absolute", inset: 0, zIndex: 1, opacity: isLight ? 0.55 : 0.28 }} width="1080" height="1080">
        {[120, 360, 720, 960].map((x, i) => (
          <line key={i} x1={x} y1="0" x2={x} y2="1080" stroke={t.lineSoft} strokeDasharray="2 8" />
        ))}
      </svg>

      <CarouselTopBar kicker={kicker} index={index} total={total} t={t} />

      {/* Recap of the 3 workflows */}
      <div style={{ position: "absolute", top: 156, left: 64, right: 64, zIndex: 10, display: "flex", flexDirection: "column", gap: 10 }}>
        {recap.slice(0, 3).map((r, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 14,
            fontFamily: "'Geist Mono', monospace", fontSize: 15, letterSpacing: "0.06em",
            color: t.ink2, fontWeight: 500,
          }}>
            <span style={{
              fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: 16,
              color: t.counterAccent, minWidth: 26,
            }}>{String(i + 1).padStart(2, "0")}</span>
            <span style={{ flex: 1, textWrap: "pretty" }}>{r}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <path d="M3 8.5 L6.5 12 L13 4" stroke={t.counterAccent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ))}
      </div>

      {/* Main block — bottom-anchored flex column (headline → subtitle → CTA) */}
      <div style={{
        position: "absolute", left: 64, right: 64, top: 330, bottom: 128, zIndex: 10,
        display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 30,
      }}>
        <h1 style={{
          fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: 86, lineHeight: 0.96,
          letterSpacing: "-0.05em", margin: 0, color: t.ink, textWrap: "balance",
        }}>
          {title1}<br />
          <ItalicUnderline t={t} gradId={gid} fontSize={90}>{titleEm}</ItalicUnderline>
          {title2 ? <><br />{title2}</> : null}
        </h1>

        <p style={{
          fontSize: 26, lineHeight: 1.4, margin: 0, color: t.ink2,
          textWrap: "pretty", maxWidth: 620, fontWeight: 300,
        }}>{subtitle}</p>

        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 18,
            padding: "20px 28px", background: ctaBg,
            border: `1px solid ${isLight ? "rgba(0,0,0,0.14)" : "rgba(255,255,255,0.25)"}`,
            backdropFilter: "blur(12px)", borderRadius: 999,
          }}>
            <span style={{
              fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: 26,
              letterSpacing: "-0.01em", color: t.ink,
            }}>{ctaText}</span>
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path d="M1 8 H21 M15 1 L22 8 L15 15" stroke={t.counterAccent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{
            marginTop: 14, fontFamily: "'Geist Mono', monospace", fontSize: 14,
            letterSpacing: "0.14em", textTransform: "uppercase", color: t.mute, fontWeight: 500,
          }}>{ctaUrl}</div>
        </div>
      </div>

      <Grain opacity={isLight ? 0.25 : 0.5} />
      <TemplateFooter showLogo={showLogo} isDark={!isLight} accent={t.counterAccent} />
    </Frame>
  );
};

Object.assign(window, { TemplateCarouselContent, TemplateCarouselCTA });
