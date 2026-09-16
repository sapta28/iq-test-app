import React, { useState, useEffect } from "react";
import { ScrollZoomIn } from "./ScrollZoomIn";
import { TestMode } from "../types";

interface FaqPageProps {
  onStartTest: (mode: TestMode) => void;
  onSelectView: (view: "hero" | "metodologi" | "kohort" | "transparansi" | "faq") => void;
}

interface FaqItemData {
  id: string;
  category: "pelaksanaan" | "skor" | "metodologi" | "privasi";
  question: string;
  renderAnswer: () => React.ReactNode;
}

const FAQ_DATA: FaqItemData[] = [
  // --- Seputar Pelaksanaan Tes ---
  {
    id: "item-1",
    category: "pelaksanaan",
    question: "Berapa lama waktu pengerjaan dan apakah ada batas waktu?",
    renderAnswer: () => (
      <div>
        <p style={{ marginBottom: "12px", color: "#4B5563", fontSize: "15px", lineHeight: "24px" }}>
          NeuroMatrix Labs menyediakan tiga parameter protokol adaptif yang disesuaikan dengan kebutuhan Anda:
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
          <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#374151" }}>
            <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "18px", marginTop: "2px", flexShrink: 0 }}>check_circle</span>
            <span><strong>Tes Standar Klinis (12 Menit):</strong> Memuat 30 item matriks progresif dengan tingkat presisi normatif paling tinggi (r = 0.91). Direkomendasikan untuk sertifikasi komprehensif.</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#374151" }}>
            <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "18px", marginTop: "2px", flexShrink: 0 }}>check_circle</span>
            <span><strong>Mode Kilat Evaluatif (6 Menit):</strong> Memuat 18 item terkalibrasi IRT (Item Response Theory) untuk estimasi cepat dalam skenario mobile.</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#374151" }}>
            <span className="material-symbols-outlined" style={{ color: "#005f40", fontSize: "18px", marginTop: "2px", flexShrink: 0 }}>check_circle</span>
            <span><strong>Mode Latihan (Tanpa Batas Waktu):</strong> Dirancang untuk memahami pola penalaran induktif tanpa tekanan timer dan tidak menghasilkan sertifikat formal.</span>
          </li>
        </ul>
        <p style={{ fontSize: "12.5px", background: "#F1F4F9", padding: "10px 12px", borderRadius: "6px", color: "#6e7a72", fontStyle: "italic", margin: 0 }}>
          Catatan: Setiap pertanyaan dalam mode terstandarisasi memiliki alokasi waktu individual untuk mencegah penumpukan waktu di akhir sesi.
        </p>
      </div>
    )
  },
  {
    id: "item-2",
    category: "pelaksanaan",
    question: "Mengapa tes ini hanya berisi gambar/matriks geometris, bukan kata-kata?",
    renderAnswer: () => (
      <div>
        <p style={{ marginBottom: "10px", color: "#4B5563", fontSize: "15px", lineHeight: "24px" }}>
          Format ini mengadopsi prinsip <strong>Raven's Progressive Matrices</strong> yang dirancang secara spesifik sebagai alat ukur kecerdasan murni <em>(general fluid intelligence - g-factor)</em> yang <strong>Culture-Fair</strong>.
        </p>
        <p style={{ color: "#4B5563", fontSize: "15px", lineHeight: "24px", margin: 0 }}>
          Dengan menghilangkan unsur bahasa, pengetahuan verbal akademis, dan angka berhitung, tes ini terbebas dari bias latar belakang pendidikan formal, kultur demografis, maupun hambatan linguistik. Hasil yang diperoleh mencerminkan murni kapasitas deduksi logis dan pengenalan relasi visual-spasial secara objektif.
        </p>
      </div>
    )
  },
  {
    id: "item-3",
    category: "pelaksanaan",
    question: "Apakah saya boleh mengulang tes jika merasa hasilnya kurang maksimal?",
    renderAnswer: () => (
      <div>
        <p style={{ marginBottom: "10px", color: "#4B5563", fontSize: "15px", lineHeight: "24px" }}>
          Secara psikometri, pengulangan tes dalam kurun waktu singkat rentan terhadap <em>practice effect</em> (efek bias ingatan pola), yang dapat membuat skor buatan tampak meningkat tanpa mencerminkan kapasitas kognitif sebenarnya.
        </p>
        <p style={{ color: "#4B5563", fontSize: "15px", lineHeight: "24px", margin: 0 }}>
          Kami menyarankan jeda minimal <strong>14 hingga 30 hari</strong> sebelum melakukan asesmen ulang. Jika Anda mengulang lebih awal, sistem engine NeuroMatrix akan secara otomatis merotasi seed butir soal ke matriks paralel isomorfik guna mempertahankan integritas pengukuran.
        </p>
      </div>
    )
  },

  // --- Skor & Sertifikasi ---
  {
    id: "item-4",
    category: "skor",
    question: "Apakah sertifikat digital dan laporan IQ benar-benar 100% gratis?",
    renderAnswer: () => (
      <div>
        <p style={{ marginBottom: "12px", color: "#4B5563", fontSize: "15px", lineHeight: "24px" }}>
          <strong>Ya, 100% mutlak tanpa syarat tersembunyi.</strong> NeuroMatrix Labs dibangun dengan prinsip integritas akademik dan akses edukasi terbuka.
        </p>
        <div style={{ background: "#E6F2ED", border: "1px solid rgba(0, 95, 64, 0.2)", borderRadius: "8px", padding: "14px 16px", color: "#005f40" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>lock_open</span>
            <span>Bebas Paywall & Registrasi Kartu Kredit</span>
          </div>
          <p style={{ fontSize: "13px", lineHeight: "20px", color: "#004b32", margin: 0 }}>
            Kami tidak pernah meminta informasi kartu kredit, tidak menyembunyikan hasil di balik formulir pembayaran akhir, dan tidak membatasi unduhan lembar verifikasi PDF resolusi tinggi berstandar arsip.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "item-5",
    category: "skor",
    question: "Berapa rentang skor IQ dan apa arti skor saya?",
    renderAnswer: () => (
      <div>
        <p style={{ marginBottom: "14px", color: "#4B5563", fontSize: "15px", lineHeight: "24px" }}>
          Hasil tes distandarisasi menggunakan <strong>Skala Wechsler</strong> dengan rata-rata populasi (Mean) = 100 dan Standar Deviasi (SD) = 15. Distribusi klasifikasinya adalah sebagai berikut:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
          <div style={{ padding: "12px 14px", background: "#F1F4F9", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
            <span style={{ fontWeight: 700, color: "#111827", display: "block", fontSize: "14px", marginBottom: "2px" }}>130 ke atas (Persentil 98+)</span>
            <span style={{ fontSize: "13px", color: "#4B5563" }}>Sangat Superior (Kualifikasi Ambang Mensa International)</span>
          </div>
          <div style={{ padding: "12px 14px", background: "#F1F4F9", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
            <span style={{ fontWeight: 700, color: "#111827", display: "block", fontSize: "14px", marginBottom: "2px" }}>120 – 129 (Persentil 91–97)</span>
            <span style={{ fontSize: "13px", color: "#4B5563" }}>Superior (Kapasitas penalaran analitis tinggi)</span>
          </div>
          <div style={{ padding: "12px 14px", background: "#F1F4F9", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
            <span style={{ fontWeight: 700, color: "#111827", display: "block", fontSize: "14px", marginBottom: "2px" }}>110 – 119 (Persentil 75–90)</span>
            <span style={{ fontSize: "13px", color: "#4B5563" }}>Rata-Rata Tinggi (High Average)</span>
          </div>
          <div style={{ padding: "12px 14px", background: "#F1F4F9", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
            <span style={{ fontWeight: 700, color: "#111827", display: "block", fontSize: "14px", marginBottom: "2px" }}>90 – 109 (Persentil 25–74)</span>
            <span style={{ fontSize: "13px", color: "#4B5563" }}>Rata-Rata Normal (Mencakup ~50% populasi dunia)</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "item-6",
    category: "skor",
    question: "Bagaimana cara memverifikasi keaslian sertifikat?",
    renderAnswer: () => (
      <div>
        <p style={{ marginBottom: "10px", color: "#4B5563", fontSize: "15px", lineHeight: "24px" }}>
          Setiap sertifikat kelulusan dilengkapi dengan <strong>QR Code Terverifikasi</strong> dan deret unik <strong>Cryptographic SHA-256 Checksum</strong>.
        </p>
        <p style={{ color: "#4B5563", fontSize: "15px", lineHeight: "24px", margin: 0 }}>
          Siapa pun—termasuk institusi universitas atau rekruter—dapat memindai barcode tersebut atau memasukkan ID Sertifikat pada laman <em style={{ color: "#005f40", fontWeight: 600, fontStyle: "normal" }}>neuromatrix.id/verify</em> untuk memeriksa konsistensi stempel waktu, skor persentil, dan status keabsahan dokumen secara langsung tanpa mengubah privasi Anda.
        </p>
      </div>
    )
  },

  // --- Metodologi & Privasi ---
  {
    id: "item-7",
    category: "metodologi",
    question: "Apakah tes ini setara dengan tes tatap muka seperti WAIS?",
    renderAnswer: () => (
      <div>
        <p style={{ marginBottom: "10px", color: "#4B5563", fontSize: "15px", lineHeight: "24px" }}>
          Penting untuk dipahami secara proporsional: Tes tatap muka klinis seperti <strong>WAIS-IV</strong> (Wechsler Adult Intelligence Scale) menguji spektrum kognitif multidimensi termasuk memori kerja audio, kosakata verbal, dan kecepatan motorik visual yang memerlukan kehadiran psikolog berlisensi secara langsung.
        </p>
        <p style={{ color: "#4B5563", fontSize: "15px", lineHeight: "24px", margin: 0 }}>
          NeuroMatrix Labs berfokus khusus pada dimensi <strong>Fluid Intelligence (gf)</strong> dan penalaran induktif abstrak. Hasil kami berkorelasi kuat (r = 0.82) dengan sub-skala penalaran matriks WAIS, menjadikannya asesmen skrining mandiri terstandar paling reliabel yang dapat diakses secara digital.
        </p>
      </div>
    )
  },
  {
    id: "item-8",
    category: "privasi",
    question: "Ke mana data jawaban dan hasil tes saya dikirim?",
    renderAnswer: () => (
      <div>
        <p style={{ marginBottom: "10px", color: "#4B5563", fontSize: "15px", lineHeight: "24px" }}>
          NeuroMatrix menerapkan arsitektur <strong>Zero-Trace Client-Side Engine</strong>. Seluruh proses perhitungan persentil, kalkulasi latensi jawaban, serta pembuatan berkas PDF sertifikat dieksekusi langsung di dalam browser perangkat Anda melalui WebAssembly.
        </p>
        <p style={{ color: "#4B5563", fontSize: "15px", lineHeight: "24px", margin: 0 }}>
          Kami tidak melacak riwayat personal Anda, tidak memasang pixel pelacak pihak ketiga, dan tidak menyimpan profil identitas Anda ke database cloud eksternal. Privasi Anda terlindungi secara penuh sejak butir pertama hingga pengunduhan hasil.
        </p>
      </div>
    )
  }
];

export const FaqPage: React.FC<FaqPageProps> = ({ onStartTest, onSelectView }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItems, setOpenItems] = useState<string[]>([]); // All items closed by default

  const handleToggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Keyboard ESC reset search listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const queryLower = searchQuery.toLowerCase().trim();

  // Filter items based on activeFilter category and searchQuery
  const isItemVisible = (item: FaqItemData) => {
    const categoryMatches = activeFilter === "all" || item.category === activeFilter;
    if (!categoryMatches) return false;

    if (!queryLower) return true;

    const qText = item.question.toLowerCase();
    // basic text search check
    return qText.includes(queryLower) || item.category.includes(queryLower);
  };

  // Check group visibility
  const hasVisibleGroup = (cat: string) => {
    return FAQ_DATA.some(
      (item) => (cat === "all" || item.category === cat) && isItemVisible(item)
    );
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f6fbf5", color: "#181d19" }}>
      {/* ── Hero / Header Section ── */}
      <ScrollZoomIn duration={0.6}>
        <section
          style={{
            width: "100%",
            backgroundColor: "#F1F4F9",
            borderBottom: "1px solid #E2E8F0",
            paddingTop: "40px",
            paddingBottom: "48px",
          }}
        >
          <div
            style={{
              maxWidth: "1120px",
              margin: "0 auto",
              padding: "0 24px",
              textAlign: "center",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#ffffff",
                border: "1px solid #E2E8F0",
                padding: "4px 16px",
                borderRadius: "9999px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#005f40",
                  display: "inline-block",
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#005f40",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                PUSAT BANTUAN & INFORMASI LENGKAP
              </span>
            </div>

            {/* Title & Subtitle */}
            <h1
              style={{
                fontSize: "36px",
                fontWeight: 800,
                color: "#111827",
                maxWidth: "670px",
                margin: "0 auto 12px auto",
                lineHeight: "44px",
                letterSpacing: "-0.02em",
              }}
            >
              Kerap Ditanyakan (FAQ)
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                color: "#4B5563",
                maxWidth: "670px",
                margin: "0 auto 32px auto",
              }}
            >
              Temukan jawaban lengkap seputar validitas psikometri Raven's Progressive Matrices, skala Wechsler, sertifikasi gratis, dan privasi data lokal.
            </p>

            {/* Search Bar */}
            <div
              style={{
                maxWidth: "640px",
                margin: "0 auto 24px auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "16px",
                  display: "flex",
                  alignItems: "center",
                  pointerEvents: "none",
                  color: "#6e7a72",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                  search
                </span>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari topik pertanyaan (misal: paywall, skala IQ, durasi, sertifikat)..."
                style={{
                  width: "100%",
                  height: "48px",
                  paddingLeft: "46px",
                  paddingRight: "110px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  fontSize: "15px",
                  color: "#111827",
                  outline: "none",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#6e7a72",
                    backgroundColor: "#e5e9e4",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  ESC untuk reset
                </span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "8px",
                paddingTop: "4px",
              }}
            >
              {[
                { id: "all", label: "Semua Pertanyaan" },
                { id: "pelaksanaan", label: "Seputar Pelaksanaan Tes" },
                { id: "skor", label: "Skor & Sertifikasi" },
                { id: "metodologi", label: "Metodologi Psikometri" },
                { id: "privasi", label: "Privasi & Keamanan" },
              ].map((pill) => {
                const isActive = activeFilter === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setActiveFilter(pill.id)}
                    style={{
                      padding: "8px 18px",
                      borderRadius: "9999px",
                      fontSize: "13.5px",
                      fontWeight: 600,
                      cursor: "pointer",
                      border: isActive ? "none" : "1px solid #E2E8F0",
                      backgroundColor: isActive ? "#005f40" : "#ffffff",
                      color: isActive ? "#ffffff" : "#4B5563",
                      transition: "all 0.15s ease",
                      boxShadow: isActive ? "0 2px 6px rgba(0,95,64,0.2)" : "none",
                      fontFamily: "inherit",
                    }}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollZoomIn>

      {/* ── Main FAQ Accordion Container ── */}
      <section
        style={{
          maxWidth: "840px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        {/* Category Group 1: Pelaksanaan Tes */}
        {hasVisibleGroup("pelaksanaan") && (
          <ScrollZoomIn duration={0.6}>
            <div style={{ marginBottom: "40px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                  paddingBottom: "8px",
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    backgroundColor: "#F1F4F9",
                    color: "#005f40",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                    timer
                  </span>
                </span>
                <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", margin: 0 }}>
                  Seputar Pelaksanaan Tes
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {FAQ_DATA.filter((item) => item.category === "pelaksanaan" && isItemVisible(item)).map(
                  (item) => {
                    const isOpen = openItems.includes(item.id) || queryLower.length > 0;
                    return (
                      <div
                        key={item.id}
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px solid #E2E8F0",
                          borderRadius: "8px",
                          overflow: "hidden",
                          transition: "all 0.15s ease",
                          boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                        }}
                      >
                        <button
                          onClick={() => handleToggleItem(item.id)}
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "16px 20px",
                            backgroundColor: isOpen ? "#FAFCFA" : "#ffffff",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            fontFamily: "inherit",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: 600,
                              color: "#111827",
                              paddingRight: "16px",
                            }}
                          >
                            {item.question}
                          </span>
                          <span
                            className="material-symbols-outlined"
                            style={{
                              color: "#6e7a72",
                              transition: "transform 0.2s ease",
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              fontSize: "22px",
                              flexShrink: 0,
                            }}
                          >
                            expand_more
                          </span>
                        </button>
                        {isOpen && (
                          <div
                            style={{
                              padding: "0 20px 20px 20px",
                              borderTop: "1px solid rgba(226, 232, 240, 0.6)",
                              paddingTop: "16px",
                            }}
                          >
                            {item.renderAnswer()}
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </ScrollZoomIn>
        )}

        {/* Category Group 2: Skor & Sertifikasi */}
        {hasVisibleGroup("skor") && (
          <ScrollZoomIn duration={0.6}>
            <div style={{ marginBottom: "40px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                  paddingBottom: "8px",
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    backgroundColor: "#F1F4F9",
                    color: "#005f40",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                    verified
                  </span>
                </span>
                <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", margin: 0 }}>
                  Skor & Sertifikasi
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {FAQ_DATA.filter((item) => item.category === "skor" && isItemVisible(item)).map(
                  (item) => {
                    const isOpen = openItems.includes(item.id) || queryLower.length > 0;
                    return (
                      <div
                        key={item.id}
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px solid #E2E8F0",
                          borderRadius: "8px",
                          overflow: "hidden",
                          transition: "all 0.15s ease",
                          boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                        }}
                      >
                        <button
                          onClick={() => handleToggleItem(item.id)}
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "16px 20px",
                            backgroundColor: isOpen ? "#FAFCFA" : "#ffffff",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            fontFamily: "inherit",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: 600,
                              color: "#111827",
                              paddingRight: "16px",
                            }}
                          >
                            {item.question}
                          </span>
                          <span
                            className="material-symbols-outlined"
                            style={{
                              color: "#6e7a72",
                              transition: "transform 0.2s ease",
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              fontSize: "22px",
                              flexShrink: 0,
                            }}
                          >
                            expand_more
                          </span>
                        </button>
                        {isOpen && (
                          <div
                            style={{
                              padding: "0 20px 20px 20px",
                              borderTop: "1px solid rgba(226, 232, 240, 0.6)",
                              paddingTop: "16px",
                            }}
                          >
                            {item.renderAnswer()}
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </ScrollZoomIn>
        )}

        {/* Category Group 3: Metodologi Psikometri & Privasi */}
        {(hasVisibleGroup("metodologi") || hasVisibleGroup("privasi")) && (
          <ScrollZoomIn duration={0.6}>
            <div style={{ marginBottom: "40px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                  paddingBottom: "8px",
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    backgroundColor: "#F1F4F9",
                    color: "#005f40",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                    shield
                  </span>
                </span>
                <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", margin: 0 }}>
                  Metodologi Psikometri & Privasi
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {FAQ_DATA.filter(
                  (item) => (item.category === "metodologi" || item.category === "privasi") && isItemVisible(item)
                ).map((item) => {
                  const isOpen = openItems.includes(item.id) || queryLower.length > 0;
                  return (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #E2E8F0",
                        borderRadius: "8px",
                        overflow: "hidden",
                        transition: "all 0.15s ease",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                      }}
                    >
                      <button
                        onClick={() => handleToggleItem(item.id)}
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "16px 20px",
                          backgroundColor: isOpen ? "#FAFCFA" : "#ffffff",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                          fontFamily: "inherit",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "#111827",
                            paddingRight: "16px",
                          }}
                        >
                          {item.question}
                        </span>
                        <span
                          className="material-symbols-outlined"
                          style={{
                            color: "#6e7a72",
                            transition: "transform 0.2s ease",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            fontSize: "22px",
                            flexShrink: 0,
                          }}
                        >
                          expand_more
                        </span>
                      </button>
                      {isOpen && (
                        <div
                          style={{
                            padding: "0 20px 20px 20px",
                            borderTop: "1px solid rgba(226, 232, 240, 0.6)",
                            paddingTop: "16px",
                          }}
                        >
                          {item.renderAnswer()}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollZoomIn>
        )}

        {/* ── Kartu Bantuan Khusus / Hubungi Tim (Editorial Bento Support Card) ── */}
        <ScrollZoomIn duration={0.6}>
          <div
            style={{
              backgroundColor: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              padding: "28px",
              marginBottom: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
              boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", flex: 1, minWidth: "280px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(0,95,64,0.1)",
                  color: "#005f40",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>
                  contact_support
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "6px",
                    lineHeight: "28px",
                  }}
                >
                  Masih memiliki pertanyaan terkait riset psikometri atau kemitraan?
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#4B5563",
                    lineHeight: "24px",
                    margin: 0,
                  }}
                >
                  Tim peneliti kami siap menjawab pertanyaan teknis seputar standardisasi kohort normatif, riset universitas, atau integrasi asesmen bakat organisasi.
                </p>
              </div>
            </div>

            <a
              href="mailto:support@neuromatrix.id"
              style={{
                height: "44px",
                padding: "0 20px",
                border: "1px solid #005f40",
                color: "#005f40",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                transition: "all 0.15s ease",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#005f40";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#005f40";
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                mail
              </span>
              <span>Hubungi Tim Peneliti</span>
            </a>
          </div>
        </ScrollZoomIn>
      </section>

  </div>
);
};
