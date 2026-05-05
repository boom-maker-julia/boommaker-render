/* global React, Frame, Grain, TemplateFooter, BMLogo */
// Template — BLOG / Nouvel article
// FIX 2026-05-05 v2 : line-clamp + adaptive font + imageUrl support, sans fragments JSX (compat Babel standalone)

const TemplateBlog = ({ data, showLogo = true, accent = "violet", theme = "dark" }) => {
  const {
    category, articleNumber, title, titleEm,
    excerpt, readTime, publishDate, author, footerHandle,
    imageUrl,
  } = data;
  const isLight = theme === "light";

  const ink   = isLight ? "#0A0A0E" : "#F5F5F7";
  const ink2  = isLight ? "#2A2A34" : "#D8D8E0";
  const mute  = isLight ? "#5A5A66" : "#9A9AA8";
  const surfaceBorder = isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.18)";

  const italicGrad = isLight
    ? "linear-gradient(120deg, #5B2DE6 10%, #007D78 90%)"
    : "linear-gradient(120deg, #B794FF 10%, #00E0D5 90%)";

  const accentColor = isLight ? "#5B2DE6" : "#B794FF";

  // Adaptive title size based on combined length
  const titleLen = (title || "").length + (titleEm || "").length;
  let titleFontSize = 76;
  if (titleLen > 32) titleFontSize = 62;
  if (titleLen > 50) titleFontSize = 52;
  if (titleLen > 70) titleFontSize = 44;
  const titleLineHeight = titleFontSize > 60 ? 0.98 : 1.04;
  const excerptFontSize = titleFontSize >= 62 ? 22 : 20;

  const hasImage = imageUrl && imageUrl.length > 0;

  return (
    <Frame theme={theme} accent={accent}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: isLight ? `
          radial-gradient(900px 700px at 0% 0%, rgba(139,92,255,0.16), transparent 55%),
          radial-gradient(700px 600px at 100% 100%, rgba(0,224,213,0.14), transparent 55%)
        ` : `
          radial-gradient(900px 700px at 0% 0%, rgba(139,92,255,0.28), transparent 55%),
          radial-gradient(700px 600px at 100% 100%, rgba(0,224,213,0.20), transparent 55%)
        `,
      }} />

      <div style={{
        position: "absolute", top: 56, left: 64, right: 64, zIndex: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "10px 16px",
          background: isLight ? "rgba(139,92,255,0.16)" : "rgba(139,92,255,0.18)",
          border: `1px solid ${isLight ? "rgba(91,45,230,0.4)" : "rgba(183,148,255,0.4)"}`,
          borderRadius: 999,
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase",
          color: ink,
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: 999, background: accentColor,
            boxShadow: `0 0 12px ${accentColor}`,
          }} />
          Nouvel article
        </div>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.14em", color: mute,
        }}>
          {`#${String(articleNumber).padStart(3, "0")} — ${publishDate}`}
        </div>
      </div>

      {/* Hero image area — image OR placeholder. Image absolutely positioned to fill, badge overlay absolute */}
      <div style={{
        position: "absolute", top: 130, left: 64, right: 64, height: 320, zIndex: 5,
        borderRadius: 24, overflow: "hidden",
        border: `1px solid ${surfaceBorder}`,
        background: hasImage ? "#000" : `linear-gradient(135deg, ${isLight ? "rgba(139,92,255,0.10)" : "rgba(139,92,255,0.22)"} 0%, ${isLight ? "rgba(0,224,213,0.10)" : "rgba(0,224,213,0.18)"} 50%, ${isLight ? "rgba(255,233,74,0.10)" : "rgba(255,233,74,0.16)"} 100%)`,
      }}>
        {hasImage && (
          <img
            src={imageUrl}
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )}
        {!hasImage && (
          <svg style={{ position: "absolute", inset: 0, opacity: 0.3 }} width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <pattern id="blogPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 20 L 40 20" stroke={isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blogPattern)" />
          </svg>
        )}
        {!hasImage && (
          <div style={{
            position: "absolute", top: -40, left: 30,
            fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
            fontSize: 320, lineHeight: 0.7,
            color: accentColor, opacity: 0.18, userSelect: "none",
          }}>
            {'“'}
          </div>
        )}
        {/* Category badge — absolute pos top-left if image, centered if no image */}
        <div style={hasImage ? {
          position: "absolute", top: 18, left: 18, zIndex: 2,
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "10px 18px",
          background: "rgba(10,10,14,0.7)",
          border: "1px solid rgba(255,255,255,0.25)",
          backdropFilter: "blur(12px)",
          borderRadius: 999,
          fontFamily: "'Geist Mono', monospace",
          fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#F5F5F7",
        } : {
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 2,
          display: "inline-flex", alignItems: "center", gap: 12,
          padding: "10px 20px",
          background: isLight ? "rgba(255,255,255,0.7)" : "rgba(20,20,28,0.6)",
          border: `1px solid ${surfaceBorder}`,
          backdropFilter: "blur(12px)",
          borderRadius: 999,
          fontFamily: "'Geist Mono', monospace",
          fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase",
          color: ink,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: accentColor, boxShadow: `0 0 10px ${accentColor}` }} />
          {category}
        </div>
      </div>

      {/* Title — adaptive + line-clamp 3 */}
      <div style={{
        position: "absolute", left: 64, right: 64, top: 480, zIndex: 10,
        maxHeight: 240, overflow: "hidden",
      }}>
        <h1 style={{
          fontFamily: "'Geist', sans-serif",
          fontWeight: 600,
          fontSize: titleFontSize,
          lineHeight: titleLineHeight,
          letterSpacing: "-0.04em",
          margin: 0, color: ink,
          textWrap: "balance",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {title}
          {titleEm && " "}
          {titleEm && (
            <span style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic", fontWeight: 400,
              background: italicGrad,
              WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
              paddingRight: "0.08em",
            }}>{titleEm}</span>
          )}
        </h1>
      </div>

      {/* Excerpt */}
      <div style={{
        position: "absolute", left: 64, right: 380, top: 760, zIndex: 10,
        maxHeight: 130, overflow: "hidden",
      }}>
        <p style={{
          fontSize: excerptFontSize, lineHeight: 1.45, margin: 0,
          color: ink2, textWrap: "pretty", maxWidth: 600, fontWeight: 300,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>{excerpt}</p>
        <div style={{
          marginTop: 14,
          display: "flex", alignItems: "center", gap: 14,
          fontFamily: "'Geist Mono', monospace",
          fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: mute,
        }}>
          <span>par {author}</span>
          <span style={{ width: 4, height: 4, borderRadius: 999, background: mute }} />
          <span>{readTime} de lecture</span>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        position: "absolute", bottom: 200, right: 64, zIndex: 10,
        display: "flex", alignItems: "center", gap: 14,
        padding: "18px 24px",
        background: `linear-gradient(135deg, ${isLight ? "rgba(91,45,230,0.18)" : "rgba(139,92,255,0.32)"}, ${isLight ? "rgba(0,125,120,0.16)" : "rgba(0,224,213,0.22)"})`,
        border: `1px solid ${isLight ? "rgba(91,45,230,0.3)" : "rgba(255,255,255,0.25)"}`,
        backdropFilter: "blur(12px)", borderRadius: 999,
        fontFamily: "'Geist Mono', monospace",
        fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: ink,
      }}>
        Lire l'article
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path d="M1 7 H18 M12 1 L18 7 L12 13" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <Grain opacity={isLight ? 0.25 : 0.5} />
      <TemplateFooter showLogo={showLogo} handle={footerHandle} isDark={!isLight} accent={accentColor} />
    </Frame>
  );
};

Object.assign(window, { TemplateBlog });
