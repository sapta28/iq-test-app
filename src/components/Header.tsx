import React, { useState } from "react";

interface HeaderProps {
  onOpenTechGuide: () => void;
  onGoHome: () => void;
  isTesting: boolean;
  onScrollToSection: (sectionId: string) => void;
  currentView?: string;
  onSelectView?: (view: "hero" | "metodologi" | "kohort" | "transparansi" | "faq") => void;
}

export const Header: React.FC<HeaderProps> = ({
  onGoHome,
  isTesting,
  onScrollToSection,
  currentView = "hero",
  onSelectView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === "metodologi" && onSelectView) {
      onSelectView("metodologi");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if ((sectionId === "kohort" || sectionId === "distribusi") && onSelectView) {
      onSelectView("kohort");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if ((sectionId === "transparansi" || sectionId === "komparasi") && onSelectView) {
      onSelectView("transparansi");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sectionId === "faq" && onSelectView) {
      onSelectView("faq");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sectionId === "beranda" && onSelectView) {
      onSelectView("hero");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onGoHome();
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.97)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #e5e7eb",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
        padding: "10px 16px",
        height: "78px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        boxSizing: "border-box",
      }}>

        {/* ── Brand / Logo ── */}
        <div
          onClick={isTesting ? undefined : () => handleNavClick("beranda")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            cursor: isTesting ? "not-allowed" : "pointer",
            opacity: isTesting ? 0.8 : 1,
          }}
        >
          {/* Icon box */}
          <div style={{
            width: "36px",
            height: "36px",
            borderRadius: "9px",
            background: "#059669",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: "20px", color: "#fff" }}>
              grid_view
            </span>
          </div>

          {/* Text block */}
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{
                fontSize: "17px",
                fontWeight: 800,
                color: "#111827",
                letterSpacing: "-0.02em",
              }}>
                NeuroMatrix
              </span>
              <span style={{
                fontSize: "9px",
                fontWeight: 700,
                color: "#6b7280",
                background: "#f3f4f6",
                border: "1px solid #e5e7eb",
                borderRadius: "4px",
                padding: "1px 5px",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}>
                LABS
              </span>
            </div>
            <span style={{
              fontSize: "10.5px",
              color: "#9ca3af",
              marginTop: "3px",
              letterSpacing: "0.01em",
            }}>
              Evaluasi Fluid Intelligence Terkalibrasi
            </span>
          </div>
        </div>

        {/* ── Desktop Navigation ── */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px", flex: 1, justifyContent: "center" }}>
          <button
            onClick={() => handleNavClick("beranda")}
            style={{
              background: "none", border: "none",
              fontSize: "13.5px",
              fontWeight: currentView === "hero" ? 700 : 500,
              color: currentView === "hero" ? "#059669" : "#6b7280",
              borderBottom: currentView === "hero" ? "2px solid #059669" : "none",
              paddingBottom: "2px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Beranda
          </button>

          <button
            onClick={() => handleNavClick("metodologi")}
            style={{
              background: "none", border: "none",
              fontSize: "13.5px",
              fontWeight: currentView === "metodologi" ? 700 : 500,
              color: currentView === "metodologi" ? "#059669" : "#6b7280",
              borderBottom: currentView === "metodologi" ? "2px solid #059669" : "none",
              paddingBottom: "2px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Metodologi RPM
          </button>

          <button
            onClick={() => handleNavClick("kohort")}
            style={{
              background: "none", border: "none",
              fontSize: "13.5px",
              fontWeight: currentView === "kohort" ? 700 : 500,
              color: currentView === "kohort" ? "#059669" : "#6b7280",
              borderBottom: currentView === "kohort" ? "2px solid #059669" : "none",
              paddingBottom: "2px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Kohort Normatif
          </button>

          <button
            onClick={() => handleNavClick("transparansi")}
            style={{
              background: "none", border: "none",
              fontSize: "13.5px",
              fontWeight: currentView === "transparansi" ? 700 : 500,
              color: currentView === "transparansi" ? "#059669" : "#6b7280",
              borderBottom: currentView === "transparansi" ? "2px solid #059669" : "none",
              paddingBottom: "2px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Transparansi
          </button>

          <button
            onClick={() => handleNavClick("faq")}
            style={{
              background: "none", border: "none",
              fontSize: "13.5px",
              fontWeight: currentView === "faq" ? 700 : 500,
              color: currentView === "faq" ? "#059669" : "#6b7280",
              borderBottom: currentView === "faq" ? "2px solid #059669" : "none",
              paddingBottom: "2px",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "color 0.15s",
            }}
          >
            FAQ
          </button>
        </nav>

        {/* ── CTA Button ── */}
        <div style={{ flexShrink: 0 }}>
          <button
            onClick={() => handleNavClick("mode-tes")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              height: "40px",
              padding: "0 20px",
              borderRadius: "9999px",
              background: "#059669",
              color: "#fff",
              border: "none",
              fontWeight: 700,
              fontSize: "13.5px",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(5,150,105,0.3)",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#047857")}
            onMouseLeave={e => (e.currentTarget.style.background = "#059669")}
          >
            <span>Mulai Tes IQ Gratis</span>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div style={{ borderTop: "1px solid #e5e7eb", background: "#fff", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <button onClick={() => handleNavClick("beranda")} style={{ textAlign: "left", padding: "8px 12px", background: currentView === "hero" ? "#f0fdf4" : "transparent", color: currentView === "hero" ? "#059669" : "#6b7280", fontWeight: 700, fontSize: "13px", borderRadius: "6px", border: "none", cursor: "pointer", fontFamily: "inherit" }}>BERANDA</button>
          <button onClick={() => handleNavClick("metodologi")} style={{ textAlign: "left", padding: "8px 12px", background: currentView === "metodologi" ? "#f0fdf4" : "transparent", color: currentView === "metodologi" ? "#059669" : "#6b7280", fontWeight: 700, fontSize: "13px", borderRadius: "6px", border: "none", cursor: "pointer", fontFamily: "inherit" }}>METODOLOGI RPM</button>
          <button onClick={() => handleNavClick("distribusi")} style={{ textAlign: "left", padding: "8px 12px", background: currentView === "kohort" ? "#f0fdf4" : "transparent", color: currentView === "kohort" ? "#059669" : "#6b7280", fontWeight: 700, fontSize: "13px", borderRadius: "6px", border: "none", cursor: "pointer", fontFamily: "inherit" }}>KOHORT NORMATIF</button>
          <button onClick={() => handleNavClick("transparansi")} style={{ textAlign: "left", padding: "8px 12px", background: currentView === "transparansi" ? "#f0fdf4" : "transparent", color: currentView === "transparansi" ? "#059669" : "#6b7280", fontWeight: 700, fontSize: "13px", borderRadius: "6px", border: "none", cursor: "pointer", fontFamily: "inherit" }}>TRANSPARANSI</button>
          <button onClick={() => handleNavClick("mode-tes")} style={{ textAlign: "center", padding: "10px 16px", background: "#059669", color: "#fff", fontWeight: 700, fontSize: "13px", borderRadius: "9999px", border: "none", cursor: "pointer", marginTop: "4px", fontFamily: "inherit" }}>Mulai Tes IQ Sekarang</button>
        </div>
      )}
    </header>
  );
};
