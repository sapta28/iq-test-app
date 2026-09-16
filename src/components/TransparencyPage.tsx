import React from "react";
import { ScrollZoomIn } from "./ScrollZoomIn";
import { TestMode } from "../types";

interface TransparencyPageProps {
  onStartTest: (mode: TestMode) => void;
  onSelectView: (view: "hero" | "metodologi" | "kohort" | "transparansi") => void;
}

export const TransparencyPage: React.FC<TransparencyPageProps> = ({
  onStartTest,
  onSelectView,
}) => {
  return (
    <div style={{ width: "100%", background: "#f6fbf5", color: "#181d19", paddingBottom: "64px", fontFamily: "Inter, sans-serif" }}>
      {/* ── HERO SECTION ── */}
      <section style={{
        position: "relative",
        width: "100%",
        paddingTop: "64px",
        paddingBottom: "64px",
        background: "linear-gradient(180deg, rgba(255, 232, 210, 0.3) 0%, #f6fbf5 100%)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
          <ScrollZoomIn delay={0.1}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              marginBottom: "24px"
            }}>
              <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "18px" }}>verified_user</span>
              <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "#005f40", fontWeight: 700 }}>
                ETIKA RISET &amp; TRANSPARANSI PENUH
              </span>
            </div>
          </ScrollZoomIn>

          <ScrollZoomIn delay={0.2}>
            <h1 style={{ fontSize: "42px", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", maxWidth: "800px", margin: "0 auto 24px", lineHeight: 1.25 }}>
              Mengapa Kami 100% Gratis &amp; Menolak Paywall
            </h1>
          </ScrollZoomIn>

          <ScrollZoomIn delay={0.3}>
            <p style={{ fontSize: "18px", color: "#4b5563", maxWidth: "680px", margin: "0 auto 32px", lineHeight: 1.65 }}>
              Banyak situs tes IQ menjebak pengguna dengan meminta biaya setelah 40 menit mengerjakan. NeuroMatrix hadir dengan prinsip sains terbuka dan arsitektur Client-Side tanpa biaya tersembunyi.
            </p>
          </ScrollZoomIn>
        </div>
      </section>

      {/* ── SECTION 3: COMPARISON MATRIX ── */}
      <section style={{ maxWidth: "1120px", margin: "0 auto 96px", padding: "0 24px" }}>
        <ScrollZoomIn delay={0.1}>
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 48px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#005f40", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
              PERBANDINGAN TRANSPARAN
            </span>
            <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
              Bandingkan bagaimana situs tes IQ komersial beroperasi dibandingkan dengan prinsip saintifik nirlaba kami.
            </p>
          </div>
        </ScrollZoomIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", alignItems: "stretch" }}>
          
          {/* Left Card: Situs IQ Komersial Umum */}
          <ScrollZoomIn delay={0.2} style={{ height: "100%" }}>
            <div style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box"
            }}>
              <div>
                {/* Header Row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "24px", borderBottom: "1px solid #e2e8f0", marginBottom: "32px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#ffdad6", color: "#ba1a1a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>cancel</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1.2 }}>
                        Situs IQ Komersial Umum
                      </h3>
                      <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: 500, display: "block", marginTop: "4px" }}>
                        Model Monetisasi Agresif (Dark Patterns)
                      </span>
                    </div>
                  </div>
                  <span style={{ padding: "6px 14px", background: "#ffdad6", color: "#ba1a1a", borderRadius: "9999px", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>
                    Terkunci Paywall
                  </span>
                </div>

                {/* 4 Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  
                  {/* Item 1 */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ color: "#ba1a1a", fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>
                      money_off
                    </span>
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>
                        Akses Skor &amp; Sertifikat Berbayar
                      </h4>
                      <p style={{ fontSize: "13px", color: "#4b5563", marginTop: "6px", lineHeight: 1.6, margin: "6px 0 0" }}>
                        Mewajibkan pembayaran Rp 99.000 - Rp 350.000 hanya untuk membuka angka IQ setelah menghabiskan 40 menit mengerjakan 30-40 soal matriks.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ color: "#ba1a1a", fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>
                      cloud_sync
                    </span>
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>
                        Penyimpanan &amp; Monetisasi Data Pengguna
                      </h4>
                      <p style={{ fontSize: "13px", color: "#4b5563", marginTop: "6px", lineHeight: 1.6, margin: "6px 0 0" }}>
                        Menyimpan email, nama, dan riwayat klik di basis data pusat. Data seringkali dihubungkan ke pelacak iklan (Meta Pixel, Google Analytics) untuk retargeting.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ color: "#ba1a1a", fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>
                      visibility_off
                    </span>
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>
                        Tanpa Penjelasan Logika Jawaban
                      </h4>
                      <p style={{ fontSize: "13px", color: "#4b5563", marginTop: "6px", lineHeight: 1.6, margin: "6px 0 0" }}>
                        Hanya memberikan skor angka tanpa rincian aturan rotasi, interpolasi spasial, atau letak kesalahan jawaban peserta karena keterbatasan konten.
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ color: "#ba1a1a", fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>
                      warning
                    </span>
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>
                        Standarisasi Menggelembung (Inflasi Skor)
                      </h4>
                      <p style={{ fontSize: "13px", color: "#4b5563", marginTop: "6px", lineHeight: 1.6, margin: "6px 0 0" }}>
                        Sengaja merekayasa kurva Gauss agar pengguna mendapat skor 125-140 demi kepuasan emosional agar sertifikat dibeli dan dibagikan ke media sosial.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </ScrollZoomIn>

          {/* Right Card: NeuroMatrix Labs */}
          <ScrollZoomIn delay={0.3} style={{ height: "100%" }}>
            <div style={{
              background: "#ffffff",
              border: "2px solid #005f40",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 4px 20px rgba(0,95,64,0.06)",
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box"
            }}>
              {/* Top Right Badge */}
              <div style={{
                position: "absolute",
                top: "-14px",
                right: "24px",
                padding: "4px 14px",
                background: "#005f40",
                color: "#ffffff",
                borderRadius: "9999px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                boxShadow: "0 2px 6px rgba(0,95,64,0.3)"
              }}>
                STANDAR INTEGRITAS
              </div>

              <div>
                {/* Header Row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "24px", borderBottom: "1px solid #e2e8f0", marginBottom: "32px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#e6f4ea", color: "#005f40", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>check_circle</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1.2 }}>
                        NeuroMatrix Labs
                      </h3>
                      <span style={{ fontSize: "12px", color: "#005f40", fontWeight: 600, display: "block", marginTop: "4px" }}>
                        Arsitektur Terdesentralisasi &amp; Sains Terbuka
                      </span>
                    </div>
                  </div>
                  <span style={{ padding: "6px 14px", background: "#eaefe9", color: "#005f40", borderRadius: "9999px", fontSize: "12px", fontWeight: 700, whiteSpace: "nowrap" }}>
                    100% Gratis &amp; Terbuka
                  </span>
                </div>

                {/* 4 Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  
                  {/* Item 1 */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>
                      verified
                    </span>
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>
                        Sertifikat &amp; Laporan Lengkap Rp 0
                      </h4>
                      <p style={{ fontSize: "13px", color: "#4b5563", marginTop: "6px", lineHeight: 1.6, margin: "6px 0 0" }}>
                        Semua output komputasi—skor IQ, standar deviasi, persentil populasi, hingga PDF resolusi cetak—diberikan langsung tanpa syarat apapun.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>
                      shield_person
                    </span>
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>
                        Zero-Server Data Storage
                      </h4>
                      <p style={{ fontSize: "13px", color: "#4b5563", marginTop: "6px", lineHeight: 1.6, margin: "6px 0 0" }}>
                        Server kami tidak memiliki tabel penyimpanan jawaban pengguna. Skor dihitung secara offline di mesin browser Anda dan dihapus saat tab ditutup.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>
                      auto_stories
                    </span>
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>
                        Pembahasan Logika Matriks Interaktif
                      </h4>
                      <p style={{ fontSize: "13px", color: "#4b5563", marginTop: "6px", lineHeight: 1.6, margin: "6px 0 0" }}>
                        Dilengkapi pembedahan pola geometris: aturan progresi, distribusi 3 variabel, rotasi matriks 90°/180°, serta pengurangan XOR langkah demi langkah.
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>
                      straighten
                    </span>
                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>
                        Distribusi Gauss Wechsler Orisinil (SD=15)
                      </h4>
                      <p style={{ fontSize: "13px", color: "#4b5563", marginTop: "6px", lineHeight: 1.6, margin: "6px 0 0" }}>
                        Kami mengacu ketat pada norma standar empiris kohort Raven. Tidak ada pemalsuan skor demi apresiasi semu; data murni apa adanya.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </ScrollZoomIn>

        </div>
      </section>

      {/* ── SECTION 4: CLIENT-SIDE TECHNICAL ARCHITECTURE ── */}
      <section style={{ maxWidth: "1120px", margin: "0 auto 96px", padding: "0 24px" }}>
        <ScrollZoomIn delay={0.1}>
          <div style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
          }}>
            <div style={{ maxWidth: "680px", marginBottom: "48px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#005f40", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>memory</span>
                <span>ARSITEKTUR KOMPUTASI CLIENT-SIDE</span>
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>
                Mengapa Kami Bisa Gratis Selamanya? (Zero-Server Cost)
              </h2>
              <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.65, margin: 0 }}>
                Platform komersial membebankan biaya tinggi karena memelihara server database raksasa yang menampung jutaan riwayat. NeuroMatrix membalik paradigma ini: 100% komputasi diserahkan ke perangkat klien Anda.
              </p>
            </div>

            {/* 4 Step Flowchart */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px" }}>
              
              {/* Step 1 */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "20px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#005f40", color: "#ffffff", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                  1
                </div>
                <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "28px", display: "block", marginBottom: "8px" }}>download_for_offline</span>
                <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
                  Aset Statis Ringan
                </h4>
                <p style={{ fontSize: "12px", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                  Browser hanya mengunduh SVG vektor soal dan tabel norma JSON statis (~450KB) via CDN global gratis.
                </p>
              </div>

              {/* Step 2 */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "20px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#005f40", color: "#ffffff", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                  2
                </div>
                <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "28px", display: "block", marginBottom: "8px" }}>functions</span>
                <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
                  Evaluasi Lokal Browser
                </h4>
                <p style={{ fontSize: "12px", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                  Jawaban dievaluasi secara internal di browser menggunakan modul WebAssembly / JS ringan tanpa transmisi jaringan.
                </p>
              </div>

              {/* Step 3 */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "20px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#005f40", color: "#ffffff", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                  3
                </div>
                <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "28px", display: "block", marginBottom: "8px" }}>equalizer</span>
                <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
                  Formula Gauss Real-Time
                </h4>
                <p style={{ fontSize: "12px", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                  Kurva distribusi normal Wechsler dihitung di RAM perangkat Anda. Nilai IQ &amp; persentil ditentukan instan dalam 2ms.
                </p>
              </div>

              {/* Step 4 */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "20px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#005f40", color: "#ffffff", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                  4
                </div>
                <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "28px", display: "block", marginBottom: "8px" }}>picture_as_pdf</span>
                <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
                  Render PDF di Klien
                </h4>
                <p style={{ fontSize: "12px", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                  Dokumen PDF sertifikat di-render menggunakan HTML5 Canvas langsung ke memori lokal tanpa upload ke server cloud.
                </p>
              </div>

            </div>

            {/* Technical Callout */}
            <div style={{ background: "#F1F4F9", borderLeft: "4px solid #005f40", borderRadius: "0 12px 12px 0", padding: "24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "24px", flexShrink: 0 }}>terminal</span>
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
                  Kesimpulan Finansial &amp; Operasional
                </h4>
                <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                  Karena tidak ada pemrosesan server backend berkekuatan komputasi tinggi, biaya operasional NeuroMatrix mendekati Rp 0/bulan (hanya biaya hosting statis di edge network GitHub Pages/Cloudflare). Kami tidak butuh uang Anda, dan kami sama sekali tidak memerlukan data Anda untuk dijual ke pihak ketiga demi menutup biaya server.
                </p>
              </div>
            </div>
          </div>
        </ScrollZoomIn>
      </section>

      {/* ── SECTION 5: ZERO-TRACE PRIVACY POLICY ── */}
      <section style={{ maxWidth: "1120px", margin: "0 auto 96px", padding: "0 24px" }}>
        <ScrollZoomIn delay={0.1}>
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 48px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#005f40", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
              PRIVASI TANPA KOMPROMI
            </span>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>
              Kebijakan Zero-Trace: Privasi Mutlak Sesuai Desain
            </h2>
            <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
              Kami memprogram NeuroMatrix agar secara teknis <span style={{ fontStyle: "italic", fontWeight: 600 }}>mustahil</span> untuk mengumpulkan data kognitif pribadi Anda.
            </p>
          </div>
        </ScrollZoomIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          
          {/* Card 1 */}
          <ScrollZoomIn delay={0.1}>
            <div style={{ background: "#ffffff", border: "1px solid #E2E8F0", borderRadius: "20px", padding: "28px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", height: "100%", boxSizing: "border-box" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#eaefe9", color: "#005f40", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "26px" }}>cookie_off</span>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>
                Tanpa Cookie Pihak Ketiga
              </h3>
              <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.65, margin: 0 }}>
                Tidak ada Facebook Pixel, Google Tag Manager iklan, atau skrip sidik jari kanvas (canvas fingerprinting). Sesi Anda sepenuhnya anonim sejak klik pertama hingga selesai.
              </p>
            </div>
          </ScrollZoomIn>

          {/* Card 2 */}
          <ScrollZoomIn delay={0.2}>
            <div style={{ background: "#ffffff", border: "1px solid #E2E8F0", borderRadius: "20px", padding: "28px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", height: "100%", boxSizing: "border-box" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#eaefe9", color: "#005f40", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "26px" }}>enhanced_encryption</span>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>
                Hash Sesi SHA-256 Lokal
              </h3>
              <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.65, margin: 0 }}>
                Kunci identifikasi tes dihasilkan acak pada Web Cryptography API di browser pengguna. Kunci kriptografi ini tidak pernah dikirimkan atau diduplikasi ke server manapun.
              </p>
            </div>
          </ScrollZoomIn>

          {/* Card 3 */}
          <ScrollZoomIn delay={0.3}>
            <div style={{ background: "#ffffff", border: "1px solid #E2E8F0", borderRadius: "20px", padding: "28px", boxShadow: "0 2px 10px rgba(0,0,0,0.02)", height: "100%", boxSizing: "border-box" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#eaefe9", color: "#005f40", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "26px" }}>no_accounts</span>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>
                Tanpa Registrasi Email
              </h3>
              <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.65, margin: 0 }}>
                Kami tidak pernah meminta alamat email, nomor telepon, atau akun Google Anda untuk sekadar melihat hasil psikometri. Hasil langsung tersaji di layar Anda seketika.
              </p>
            </div>
          </ScrollZoomIn>

        </div>
      </section>

      {/* ── SECTION 8: PRIMARY CTA STRIP ── */}
      <section style={{ maxWidth: "1120px", margin: "0 auto 32px", padding: "0 24px" }}>
        <ScrollZoomIn delay={0.1}>
          <div style={{
            background: "#007a53",
            color: "#ffffff",
            borderRadius: "24px",
            padding: "48px 32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,122,83,0.25)"
          }}>
            <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 10 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "4px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.15)", color: "#ffffff", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "24px" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>lock_open</span>
                <span>BEBAS PAYWALL • TANPA REGISTRASI</span>
              </div>
              <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#ffffff", margin: "0 0 16px", letterSpacing: "-0.01em", lineHeight: 1.25 }}>
                Uji Potensi Intelektual Anda Hari Ini Secara Obyektif
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.9)", maxWidth: "580px", margin: "0 auto 32px", lineHeight: 1.6 }}>
                30 soal matriks visual berstandar internasional. Tanpa kartu kredit, tanpa jebakan biaya di akhir, dan privasi 100% terlindungi di perangkat Anda.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                <button
                  onClick={() => onStartTest("standard")}
                  style={{
                    background: "#ffffff",
                    color: "#005f40",
                    height: "48px",
                    padding: "0 32px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "14px",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    fontFamily: "inherit"
                  }}
                >
                  <span>Mulai Tes IQ Sekarang (Gratis)</span>
                </button>
                <button
                  onClick={() => {
                    onSelectView("metodologi");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  style={{
                    background: "transparent",
                    color: "#ffffff",
                    height: "48px",
                    padding: "0 24px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "14px",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    fontFamily: "inherit"
                  }}
                >
                  Lihat Contoh Soal &amp; Pola
                </button>
              </div>
            </div>
          </div>
        </ScrollZoomIn>
      </section>

    </div>
  );
};
