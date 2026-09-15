import React from 'react';
import { TestMode, TestResult } from '../types';
import brainCubeImg from '../assets/brain-cube.png';

interface HeroProps {
  onStartTest: (mode: TestMode) => void;
  onOpenTechGuide: () => void;
  pastResults?: TestResult[];
  onSelectPastResult?: (res: TestResult) => void;
  onClearHistory?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartTest,
  onOpenTechGuide,
  pastResults = [],
  onSelectPastResult,
  onClearHistory,
}) => {
  return (
    <div className="w-full">
      {/* ==================== MAIN HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-border-subtle bg-gradient-to-b from-surface-bright via-surface to-surface-soft-slate/40" id="beranda">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Copywriting */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-text-slate-primary tracking-tight leading-tight">
                Ukur <span className="text-primary underline decoration-primary/20 decoration-4 underline-offset-8">Kecerdasan Cair</span> (Fluid Intelligence) Anda Secara Akurat & Transparan.
              </h1>
              <p className="text-base sm:text-lg text-text-slate-secondary leading-relaxed">
                Instrumen psikometrik berbasis <strong className="text-text-slate-primary font-semibold">Raven’s Progressive Matrices (RPM)</strong> dengan standardisasi kurva <strong class="text-text-slate-primary font-semibold">Skala Wechsler (Mean 100, SD 15)</strong>. 100% gratis selamanya tanpa tipu muslihat kartu kredit, diproses aman langsung pada peramban web Anda (Client-Side Privacy).
              </p>

              {/* CTA Cluster */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={() => onStartTest('standard')}
                  className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-primary-container hover:bg-primary text-white font-semibold text-base shadow-md transition-all duration-150 active:scale-[0.99] text-center cursor-pointer"
                >
                  <span>Mulai Tes Standar (12 Menit)</span>
                  <span className="material-symbols-outlined text-[20px] ml-2">arrow_forward</span>
                </button>
                <a
                  href="#mode-tes"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-white hover:bg-surface-soft-slate text-text-slate-primary border border-border-subtle font-semibold text-base transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2 text-text-slate-secondary">menu_book</span>
                  <span>Pelajari Metodologi Skala</span>
                </a>
              </div>

              {/* Social Proof Metrics Bar */}
              <div className="pt-6 border-t border-border-subtle grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl text-text-slate-primary font-bold tracking-tight">142.850+</div>
                  <div className="text-xs text-text-slate-secondary font-medium">Kohort Normalisasi RI</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl text-primary font-bold tracking-tight">99.4%</div>
                  <div className="text-xs text-text-slate-secondary font-medium">Validitas Konstruk</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl text-text-slate-primary font-bold tracking-tight">Rp 0</div>
                  <div className="text-xs text-text-slate-secondary font-medium">Tanpa Registrasi / Iklan</div>
                </div>
              </div>
            </div>

            {/* Right Column: Brain-Cube Psychometric Illustration */}
            <div className="lg:col-span-5">
              <div className="relative flex items-center justify-center p-6">
                <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                  <img
                    src={brainCubeImg}
                    alt="Brain-cube psychometric illustration"
                    className="w-full h-full object-contain filter drop-shadow-sm"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTERACTIVE TEST MODE SELECTION ==================== */}
      <section className="py-16 bg-surface" id="mode-tes">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold uppercase tracking-wider mb-3">
              PILIHAN INSTRUMEN EVALUASI
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-text-slate-primary tracking-tight">
              Pilih Mode Sesuai Kebutuhan Anda
            </h2>
            <p className="text-sm sm:text-base text-text-slate-secondary mt-2">
              Seluruh mode dilengkapi kalibrasi matriks non-verbal yang bebas dari bias bahasa, latar belakang pendidikan, maupun budaya.
            </p>
          </div>

          {/* 3 Bento Mode Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Tes Kilat */}
            <div className="bg-white border border-border-subtle rounded-xl p-6 flex flex-col justify-between hover:border-outline-variant transition-all duration-200">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-lg bg-surface-soft-slate text-text-slate-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[22px]">speed</span>
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-surface-soft-slate text-text-slate-secondary font-medium">6 Menit</span>
                </div>
                <h3 className="text-xl font-bold text-text-slate-primary">Tes Kilat</h3>
                <p className="text-xs text-primary font-bold mt-0.5">Rapid Screening (Penyaringan Cepat)</p>
                <p className="text-xs text-text-slate-secondary mt-4 leading-relaxed">
                  Dirancang untuk penilaian kognitif pendahuluan dengan butir soal adaptif berbobot diskriminasi tinggi.
                </p>
                <div className="mt-6 space-y-2.5 pt-4 border-t border-border-subtle text-xs">
                  <div className="flex items-center gap-2 text-text-slate-primary">
                    <span className="material-symbols-outlined text-[18px] text-text-slate-secondary">check</span>
                    <span><strong>8 Butir Soal</strong> Matriks Terpilih</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-slate-primary">
                    <span className="material-symbols-outlined text-[18px] text-text-slate-secondary">check</span>
                    <span>Batas Waktu Ketat <strong>6 Menit</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-text-slate-primary">
                    <span className="material-symbols-outlined text-[18px] text-text-slate-secondary">check</span>
                    <span>Estimasi Kasar Bandwith IQ (±7 poin)</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4">
                <button
                  onClick={() => onStartTest('quick')}
                  className="w-full inline-flex items-center justify-center h-11 rounded-md bg-surface-soft-slate hover:bg-surface-container-high text-text-slate-primary border border-border-subtle font-semibold text-sm transition-colors cursor-pointer"
                >
                  Mulai Screening Cepat
                </button>
              </div>
            </div>

            {/* Card 2 (Highlighted / Recommended): Tes Standar */}
            <div className="bg-white border-2 border-primary rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-md relative scale-[1.02] z-10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-container text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-sm flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span> REKOMENDASI UTAMA
              </div>
              <div>
                <div className="flex items-center justify-between mb-4 mt-1">
                  <span className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[22px]">psychology</span>
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary-fixed/40 text-primary font-bold">12 Menit</span>
                </div>
                <h3 className="text-xl font-bold text-text-slate-primary">Tes Standar Klinis</h3>
                <p className="text-xs text-primary font-extrabold mt-0.5">Kalibrasi Gaussian Presisi Penuh</p>
                <p className="text-xs text-text-slate-secondary mt-4 leading-relaxed">
                  Instrumen lengkap untuk menghitung fluid intelligence individual terhadap kohort normatif nasional Wechsler SD=15.
                </p>
                <div className="mt-6 space-y-2.5 pt-4 border-t border-border-subtle text-xs">
                  <div className="flex items-center gap-2 text-text-slate-primary">
                    <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                    <span><strong>15 Butir Soal</strong> Progresif Gradual</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-slate-primary">
                    <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                    <span>Estimasi Rentang IQ Presisi <strong>70 - 155</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-text-slate-primary">
                    <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                    <span><strong>Bonus Kecepatan</strong> (Speed Multiplier)</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-slate-primary">
                    <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                    <span>Sertifikat Digital & Breakdown 5 Sektor</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4">
                <button
                  onClick={() => onStartTest('standard')}
                  className="w-full inline-flex items-center justify-center h-12 rounded-md bg-primary-container hover:bg-primary text-white font-semibold text-base shadow-sm transition-all duration-150 cursor-pointer"
                >
                  <span>Mulai Tes Standar Sekarang</span>
                  <span className="material-symbols-outlined text-[18px] ml-2">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 3: Mode Latihan Bebas */}
            <div className="bg-white border border-border-subtle rounded-xl p-6 flex flex-col justify-between hover:border-outline-variant transition-all duration-200">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-lg bg-surface-soft-slate text-text-slate-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[22px]">model_training</span>
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary-fixed/40 text-secondary font-medium">Tanpa Batas</span>
                </div>
                <h3 className="text-xl font-bold text-text-slate-primary">Mode Latihan Bebas</h3>
                <p className="text-xs text-secondary font-bold mt-0.5">Study & Logic Deconstruction</p>
                <p className="text-xs text-text-slate-secondary mt-4 leading-relaxed">
                  Pahami prinsip matematis, operasi logika boolean (XOR/AND), dan rotasi spasial di balik setiap pola butir soal.
                </p>
                <div className="mt-6 space-y-2.5 pt-4 border-t border-border-subtle text-xs">
                  <div className="flex items-center gap-2 text-text-slate-primary">
                    <span className="material-symbols-outlined text-[18px] text-text-slate-secondary">check</span>
                    <span><strong>15 Butir Soal</strong> Interaktif</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-slate-primary">
                    <span className="material-symbols-outlined text-[18px] text-text-slate-secondary">check</span>
                    <span><strong>Tanpa Timer</strong> (Bebas Tekanan Waktu)</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-slate-primary">
                    <span className="material-symbols-outlined text-[18px] text-text-slate-secondary">check</span>
                    <span>Pembahasan Aturan Logika Terbuka Langsung</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4">
                <button
                  onClick={() => onStartTest('practice')}
                  className="w-full inline-flex items-center justify-center h-11 rounded-md bg-surface-soft-slate hover:bg-surface-container-high text-text-slate-primary border border-border-subtle font-semibold text-sm transition-colors cursor-pointer"
                >
                  Buka Eksplorasi Latihan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA CONSOLE BANNER ==================== */}
      <section className="py-16 bg-gradient-to-b from-surface to-surface-container-high/30 border-t border-border-subtle">
        <div className="max-w-[960px] mx-auto px-4 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed/40 text-primary text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            SESI PENGUJIAN TERSEDIA BEBAS
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-text-slate-primary tracking-tight">
            Siap Mengetahui Kapasitas Penalaran Logika Anda?
          </h2>
          <p className="text-base sm:text-lg text-text-slate-secondary max-w-xl mx-auto">
            Waktu pengerjaan hanya 12 menit. Tidak ada pendaftaran berbelit, tanpa email, langsung dapatkan skor dan sertifikat digital Anda saat ini juga.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onStartTest('standard')}
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary-container hover:bg-primary text-white font-semibold text-base shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] mr-2">play_arrow</span>
              <span>Mulai Tes IQ Sekarang (Gratis)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
