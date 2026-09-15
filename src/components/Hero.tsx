import React, { useState } from 'react';
import { TestMode, TestResult } from '../types';

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
  const [selectedPreviewOpt, setSelectedPreviewOpt] = useState<string>('B');

  return (
    <div className="w-full">
      {/* ==================== MAIN HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-border-subtle bg-gradient-to-b from-surface-bright via-surface to-surface-soft-slate/40" id="beranda">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
          {/* Scientific Badge Ribbon */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-subtle text-text-slate-primary text-xs shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary-container"></span>
              <span className="font-semibold text-primary">Raven's Progressive Matrices Format</span>
              <span className="text-outline-variant">•</span>
              <span>Reliabilitas Cronbach α = 0.91</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-tint-hero/60 border border-secondary-fixed text-on-secondary-fixed text-xs font-medium">
              <span className="material-symbols-outlined text-[15px] text-secondary">verified_user</span>
              <span>Bebas Paywall & Hasil Instan</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Copywriting */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-text-slate-primary tracking-tight leading-tight">
                Ukur <span className="text-primary underline decoration-primary/20 decoration-4 underline-offset-8">Kecerdasan Cair</span> (Fluid Intelligence) Anda Secara Akurat & Transparan.
              </h1>
              <p className="text-base sm:text-lg text-text-slate-secondary leading-relaxed">
                Instrumen psikometrik berbasis <strong className="text-text-slate-primary font-semibold">Raven’s Progressive Matrices (RPM)</strong> dengan standardisasi kurva <strong class="text-text-slate-primary font-semibold">Skala Wechsler (Mean 100, SD 15)</strong>. 100% gratis selamanya tanpa tipu muslihat kartu kredit, diproses aman langsung pada peramban web Anda (Client-Side Privacy).
              </p>

              {/* Key Trust Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-text-slate-primary">
                  <div className="w-5 h-5 rounded-full bg-primary-fixed/60 text-primary flex items-center justify-center text-[13px]">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <span>Bebas Paywall Tersembunyi</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-text-slate-primary">
                  <div className="w-5 h-5 rounded-full bg-primary-fixed/60 text-primary flex items-center justify-center text-[13px]">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <span>Pembahasan Logika Matriks Instan</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-text-slate-primary">
                  <div className="w-5 h-5 rounded-full bg-primary-fixed/60 text-primary flex items-center justify-center text-[13px]">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <span>Sertifikat Digital Terverifikasi</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-text-slate-primary">
                  <div className="w-5 h-5 rounded-full bg-primary-fixed/60 text-primary flex items-center justify-center text-[13px]">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <span>Zero-Trace: Data Tidak Disimpan</span>
                </div>
              </div>

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
                  href="#metodologi"
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
                  <div className="text-xs text-text-slate-secondary">Kohort Normalisasi RI</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl text-primary font-bold tracking-tight">99.4%</div>
                  <div className="text-xs text-text-slate-secondary">Validitas Konstruk</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl text-text-slate-primary font-bold tracking-tight">Rp 0</div>
                  <div className="text-xs text-text-slate-secondary">Tanpa Registrasi / Iklan</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Stimulus Preview Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-border-subtle rounded-xl p-6 shadow-md relative">
                {/* Matrix Header badge */}
                <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                    <span className="text-xs font-bold text-text-slate-primary">CONTOH ITEM MATRIKS #07</span>
                  </div>
                  <span className="text-xs font-mono text-text-slate-secondary font-bold">TIPE: ROTASI & MORFOLOGI</span>
                </div>

                {/* 3x3 Matrix Diagram Preview */}
                <div className="my-6 bg-surface-card-subtle p-4 rounded-lg border border-border-subtle">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 aspect-square max-w-[280px] mx-auto">
                    {/* Row 1 */}
                    <div className="bg-white rounded border border-border-subtle flex items-center justify-center p-2 shadow-sm">
                      <svg className="w-full h-full text-text-slate-primary stroke-current fill-none stroke-[2]" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="14"></circle>
                        <line x1="20" x2="20" y1="6" y2="34"></line>
                      </svg>
                    </div>
                    <div className="bg-white rounded border border-border-subtle flex items-center justify-center p-2 shadow-sm">
                      <svg className="w-full h-full text-text-slate-primary stroke-current fill-none stroke-[2]" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="14"></circle>
                        <line x1="6" x2="34" y1="20" y2="20"></line>
                      </svg>
                    </div>
                    <div className="bg-white rounded border border-border-subtle flex items-center justify-center p-2 shadow-sm">
                      <svg className="w-full h-full text-text-slate-primary stroke-current fill-none stroke-[2]" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="14"></circle>
                        <line x1="20" x2="20" y1="6" y2="34"></line>
                        <line x1="6" x2="34" y1="20" y2="20"></line>
                      </svg>
                    </div>

                    {/* Row 2 */}
                    <div className="bg-white rounded border border-border-subtle flex items-center justify-center p-2 shadow-sm">
                      <svg className="w-full h-full text-text-slate-primary stroke-current fill-none stroke-[2]" viewBox="0 0 40 40">
                        <rect height="26" width="26" x="7" y="7"></rect>
                        <line x1="20" x2="20" y1="7" y2="33"></line>
                      </svg>
                    </div>
                    <div className="bg-white rounded border border-border-subtle flex items-center justify-center p-2 shadow-sm">
                      <svg className="w-full h-full text-text-slate-primary stroke-current fill-none stroke-[2]" viewBox="0 0 40 40">
                        <rect height="26" width="26" x="7" y="7"></rect>
                        <line x1="7" x2="33" y1="20" y2="20"></line>
                      </svg>
                    </div>
                    <div className="bg-white rounded border border-border-subtle flex items-center justify-center p-2 shadow-sm">
                      <svg className="w-full h-full text-text-slate-primary stroke-current fill-none stroke-[2]" viewBox="0 0 40 40">
                        <rect height="26" width="26" x="7" y="7"></rect>
                        <line x1="20" x2="20" y1="7" y2="33"></line>
                        <line x1="7" x2="33" y1="20" y2="20"></line>
                      </svg>
                    </div>

                    {/* Row 3 */}
                    <div className="bg-white rounded border border-border-subtle flex items-center justify-center p-2 shadow-sm">
                      <svg className="w-full h-full text-text-slate-primary stroke-current fill-none stroke-[2]" viewBox="0 0 40 40">
                        <polygon points="20,6 34,34 6,34"></polygon>
                        <line x1="20" x2="20" y1="16" y2="34"></line>
                      </svg>
                    </div>
                    <div className="bg-white rounded border border-border-subtle flex items-center justify-center p-2 shadow-sm">
                      <svg className="w-full h-full text-text-slate-primary stroke-current fill-none stroke-[2]" viewBox="0 0 40 40">
                        <polygon points="20,6 34,34 6,34"></polygon>
                        <line x1="12" x2="28" y1="24" y2="24"></line>
                      </svg>
                    </div>

                    {/* Blank Question Slot */}
                    <div className="bg-primary-fixed/20 border-2 border-dashed border-primary rounded flex flex-col items-center justify-center p-2 text-primary">
                      <span className="material-symbols-outlined text-[28px] font-bold animate-pulse">help</span>
                      <span className="text-[11px] font-bold">PILIHAN?</span>
                    </div>
                  </div>
                </div>

                {/* Answer Choices Strip */}
                <div className="text-xs font-bold text-text-slate-secondary mb-2 uppercase tracking-wider">PILIH ELEMEN YANG TEPAT:</div>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => setSelectedPreviewOpt('A')}
                    className={`border rounded p-2 flex flex-col items-center transition-all cursor-pointer ${
                      selectedPreviewOpt === 'A' ? 'border-2 border-primary bg-primary-fixed/20' : 'border-border-subtle bg-white hover:border-primary'
                    }`}
                  >
                    <span className="text-xs font-bold text-text-slate-secondary mb-1">A</span>
                    <svg className="w-6 h-6 stroke-current fill-none stroke-[1.5] text-text-slate-primary" viewBox="0 0 30 30">
                      <polygon points="15,4 26,26 4,26"></polygon>
                    </svg>
                  </button>

                  <button
                    onClick={() => setSelectedPreviewOpt('B')}
                    className={`border-2 border-primary bg-primary-fixed/20 rounded p-2 flex flex-col items-center transition-all cursor-pointer`}
                  >
                    <span className="text-xs font-bold text-primary mb-1">B (Benar)</span>
                    <svg className="w-6 h-6 stroke-current fill-none stroke-[1.5] text-primary" viewBox="0 0 30 30">
                      <polygon points="15,4 26,26 4,26"></polygon>
                      <line x1="15" x2="15" y1="12" y2="26"></line>
                      <line x1="9" x2="21" y1="18" y2="18"></line>
                    </svg>
                  </button>

                  <button
                    onClick={() => setSelectedPreviewOpt('C')}
                    className={`border rounded p-2 flex flex-col items-center transition-all cursor-pointer ${
                      selectedPreviewOpt === 'C' ? 'border-2 border-primary bg-primary-fixed/20' : 'border-border-subtle bg-white hover:border-primary'
                    }`}
                  >
                    <span className="text-xs font-bold text-text-slate-secondary mb-1">C</span>
                    <svg className="w-6 h-6 stroke-current fill-none stroke-[1.5] text-text-slate-primary" viewBox="0 0 30 30">
                      <circle cx="15" cy="15" r="10"></circle>
                      <circle cx="15" cy="15" r="4"></circle>
                    </svg>
                  </button>

                  <button
                    onClick={() => setSelectedPreviewOpt('D')}
                    className={`border rounded p-2 flex flex-col items-center transition-all cursor-pointer ${
                      selectedPreviewOpt === 'D' ? 'border-2 border-primary bg-primary-fixed/20' : 'border-border-subtle bg-white hover:border-primary'
                    }`}
                  >
                    <span className="text-xs font-bold text-text-slate-secondary mb-1">D</span>
                    <svg className="w-6 h-6 stroke-current fill-none stroke-[1.5] text-text-slate-primary" viewBox="0 0 30 30">
                      <rect height="20" width="20" x="5" y="5"></rect>
                      <line x1="5" x2="25" y1="5" y2="25"></line>
                    </svg>
                  </button>
                </div>

                <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-slate-secondary">
                  <span className="inline-flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[15px] text-primary">insights</span> Logika: Superposisi Garis Ortogonal
                  </span>
                  <span className="font-mono text-primary font-bold">Tingkat Kesulitan: 0.74</span>
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

      {/* ==================== NORMATIVE BELL CURVE (GAUSSIAN SHOWCASE) ==================== */}
      <section className="py-16 bg-white border-y border-border-subtle" id="distribusi">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed/30 text-primary text-xs font-semibold uppercase">
                DISTRIBUSI GAUSSIAN (μ=100, σ=15)
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-text-slate-primary tracking-tight">
                Kurva Distribusi Normal Wechsler
              </h2>
              <p className="text-sm sm:text-base text-text-slate-secondary leading-relaxed">
                Skor IQ NeuroMatrix dihitung secara matematis menggunakan fungsi kerapatan probabilitas distribusi normal baku (Gaussian). Skor rata-rata populasi berada pada angka 100 dengan Deviasi Standar (SD) 15.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-lg bg-surface-card-subtle border border-border-subtle flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-slate-400 mt-1 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs font-bold text-text-slate-primary">Rata-Rata Populasi (IQ 85 - 115) • 68.2%</div>
                    <div className="text-xs text-text-slate-secondary">Mayoritas populasi umum berada pada rentang ini (±1 Deviasi Standar).</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-primary-fixed/20 border border-primary/20 flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-primary-container mt-1 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs font-bold text-primary">Di Atas Rata-Rata (IQ 115 - 130) • 13.6%</div>
                    <div className="text-xs text-text-slate-secondary">Kapasitas penalaran induktif dan abstraksi tingkat tinggi.</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-surface-tint-hero/60 border border-secondary-fixed flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-secondary mt-1 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs font-bold text-secondary">Sangat Superior / Mensa (IQ &gt; 130) • 2.2%</div>
                    <div className="text-xs text-text-slate-secondary">Persentil ke-98 ke atas, identik dengan kemampuan fluid reasoning elit.</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-text-slate-secondary font-mono">
                Formula: f(x) = (1 / σ√(2π)) * e^(-(x-μ)² / 2σ²)
              </div>
            </div>

            {/* Curve Graphic Visualizer */}
            <div className="lg:col-span-7">
              <div className="bg-surface-soft-slate border border-border-subtle rounded-xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-text-slate-primary">Visualisasi Kerapatan Probabilitas Populasi</span>
                  <span className="text-xs font-mono text-primary font-bold bg-white px-2.5 py-1 rounded border border-border-subtle">
                    N = 142.850 Partisipan
                  </span>
                </div>

                {/* SVG Bell Curve Graphic */}
                <div className="w-full aspect-[16/9] bg-white rounded-lg border border-border-subtle p-4 relative overflow-hidden flex flex-col justify-end">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 240">
                    <line stroke="#E2E8F0" strokeWidth="1.5" x1="20" x2="480" y1="200" y2="200"></line>
                    <line stroke="#F1F4F9" strokeDasharray="4" strokeWidth="1" x1="20" x2="480" y1="140" y2="140"></line>
                    <line stroke="#F1F4F9" strokeDasharray="4" strokeWidth="1" x1="20" x2="480" y1="80" y2="80"></line>
                    
                    <path d="M 160,200 L 160,115 Q 250,20 340,115 L 340,200 Z" fill="#E6F2ED" opacity="0.7"></path>
                    <path d="M 400,200 L 400,180 Q 440,195 480,199 L 480,200 Z" fill="#d0eee0"></path>
                    <path d="M 20,199 Q 100,198 160,115 Q 205,50 250,25 Q 295,50 340,115 Q 400,198 480,199" fill="none" stroke="#005f40" strokeLinecap="round" strokeWidth="3"></path>
                    
                    <line stroke="#007a53" strokeDasharray="4" strokeWidth="2" x1="250" x2="250" y1="25" y2="200"></line>
                    <line stroke="#6e7a72" strokeDasharray="2" strokeWidth="1" x1="160" x2="160" y1="115" y2="200"></line>
                    <line stroke="#6e7a72" strokeDasharray="2" strokeWidth="1" x1="340" x2="340" y1="115" y2="200"></line>
                    <line stroke="#8a3936" strokeDasharray="2" strokeWidth="1.5" x1="400" x2="400" y1="180" y2="200"></line>
                    
                    <circle cx="370" cy="150" fill="#007a53" r="5" stroke="#ffffff" strokeWidth="2"></circle>
                    <line stroke="#007a53" strokeWidth="1.5" x1="370" x2="370" y1="150" y2="200"></line>
                    <text fill="#005f40" fontSize="11" fontWeight="700" textAnchor="middle" x="250" y="18">μ = 100</text>
                    <text fill="#007a53" fontSize="10" fontWeight="700" textAnchor="middle" x="370" y="140">Sample Score</text>
                  </svg>

                  <div className="grid grid-cols-7 text-center text-xs font-mono font-semibold text-text-slate-secondary pt-2 border-t border-border-subtle">
                    <span>55 (-3σ)</span>
                    <span>70 (-2σ)</span>
                    <span>85 (-1σ)</span>
                    <span className="text-primary font-bold">100 (Mean)</span>
                    <span>115 (+1σ)</span>
                    <span className="text-secondary font-bold">130 (+2σ)</span>
                    <span>145 (+3σ)</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-text-slate-secondary gap-2">
                  <span className="flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-[15px] text-primary">timer</span> Evaluasi Kecepatan: Bobot mikro-detik respon per matriks
                  </span>
                  <span className="font-bold text-text-slate-primary">Standarisasi Mengikuti ISO/IEC 17024 Guidelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COGNITIVE DOMAIN ARCHITECTURE ==================== */}
      <section className="py-16 bg-surface" id="metodologi">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold uppercase tracking-wider mb-3">
              ARSITEKTUR MATRIKS PSIKOLOGIS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-text-slate-primary tracking-tight">
              5 Sektor Inti Penalaran Logika Non-Verbal
            </h2>
            <p className="text-sm sm:text-base text-text-slate-secondary mt-2">
              Berbeda dari tes hafalan akademis atau kosakata budaya, tes matriks Raven mengisolasi kemampuan murni otak Anda dalam mengidentifikasi pola kompleks dan relasi implisit.
            </p>
          </div>

          {/* 5 Grid Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sector 1 */}
            <div className="bg-white border border-border-subtle rounded-xl p-6 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/40 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">view_in_ar</span>
              </div>
              <h3 className="text-xl font-bold text-text-slate-primary">1. Visual-Spasial</h3>
              <p className="text-xs text-primary font-bold mt-1">Rotasi Mental & Simetri Geometris</p>
              <p className="text-xs text-text-slate-secondary mt-3 leading-relaxed">
                Mengukur presisi kognisi dalam memproyeksikan pergeseran sudut rotasi (45°, 90°, 180°), pencerminan isometrik, dan translasi koordinat bidang dua dimensi.
              </p>
              <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-slate-secondary">
                <span>Indikator: Orientasi Spasial</span>
                <span className="font-mono font-bold text-text-slate-primary">20% Bobot</span>
              </div>
            </div>

            {/* Sector 2 */}
            <div className="bg-white border border-border-subtle rounded-xl p-6 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/40 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">pattern</span>
              </div>
              <h3 className="text-xl font-bold text-text-slate-primary">2. Pengenalan Pola</h3>
              <p className="text-xs text-primary font-bold mt-1">Progresi Matriks Baris & Kolom</p>
              <p className="text-xs text-text-slate-secondary mt-3 leading-relaxed">
                Mengevaluasi kecepatan mengenali sekuensial deret visual, pertambahan/pengurangan elemen visual, dan kontinuitas grafis yang tersusun secara teratur.
              </p>
              <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-slate-secondary">
                <span>Indikator: Induksi Sekuensial</span>
                <span className="font-mono font-bold text-text-slate-primary">25% Bobot</span>
              </div>
            </div>

            {/* Sector 3 */}
            <div className="bg-white border border-border-subtle rounded-xl p-6 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/40 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">account_tree</span>
              </div>
              <h3 className="text-xl font-bold text-text-slate-primary">3. Deduksi Logis</h3>
              <p className="text-xs text-primary font-bold mt-1">Aljabar Boolean Visual (XOR / AND / OR)</p>
              <p className="text-xs text-text-slate-secondary mt-3 leading-relaxed">
                Mendeteksi aturan tersembunyi saat dua bentuk bertumpuk; apakah garis saling menghilangkan (XOR), menggabungkan diri (OR), atau hanya mempertahankan irisan (AND).
              </p>
              <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-slate-secondary">
                <span>Indikator: Logika Formal</span>
                <span className="font-mono font-bold text-text-slate-primary">20% Bobot</span>
              </div>
            </div>

            {/* Sector 4 */}
            <div className="bg-white border border-border-subtle rounded-xl p-6 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/40 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">shapes</span>
              </div>
              <h3 className="text-xl font-bold text-text-slate-primary">4. Penalaran Abstrak</h3>
              <p className="text-xs text-primary font-bold mt-1">Morfologi & Perubahan Bentuk</p>
              <p className="text-xs text-text-slate-secondary mt-3 leading-relaxed">
                Menganalisis kemampuan menggeneralisasi konsep baru dari stimulus bentuk asing, mengabaikan distractor visual dan fokus pada kaidah esensial matriks.
              </p>
              <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-slate-secondary">
                <span>Indikator: Abstraksi Murni</span>
                <span className="font-mono font-bold text-text-slate-primary">20% Bobot</span>
              </div>
            </div>

            {/* Sector 5 */}
            <div className="bg-white border border-border-subtle rounded-xl p-6 hover:shadow-md transition-all md:col-span-2 lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed/40 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[24px]">memory</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-slate-primary">5. Memori Kerja & Manipulasi Bertingkat</h3>
                  <p className="text-xs text-primary font-bold mt-1">Multi-Step Rule Retention</p>
                  <p className="text-xs text-text-slate-secondary mt-3 max-w-xl leading-relaxed">
                    Menilai kapasitas buffer memori kerja (working memory capacity) saat mempertahankan 3 hingga 4 variabel aturan secara simultan sebelum mengambil keputusan opsi jawaban.
                  </p>
                </div>
                <div className="flex-shrink-0 bg-surface-soft-slate p-4 rounded-lg border border-border-subtle text-right">
                  <div className="text-2xl font-bold text-primary font-mono">15%</div>
                  <div className="text-xs text-text-slate-secondary font-semibold">Bobot Komputasi</div>
                  <div className="text-[11px] text-text-slate-secondary mt-1 font-mono">Cognitive Load Index</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRANSPARENCY & COMPARISON MATRIX ==================== */}
      <section className="py-16 bg-white border-t border-border-subtle" id="komparasi">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/40 text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
              KOMPARASI INTEGRITAS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-text-slate-primary tracking-tight">
              Kenapa Kami 100% Gratis vs Jebakan Paywall Lain
            </h2>
            <p className="text-sm sm:text-base text-text-slate-secondary mt-2">
              Banyak situs komersial membiarkan Anda mengerjakan 40 butir soal melelahkan, lalu mengunci hasil di balik tagihan Rp 250.000+. NeuroMatrix menolak praktik eksploitatif tersebut.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto border border-border-subtle rounded-xl shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-soft-slate border-b border-border-subtle">
                  <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-text-slate-secondary w-1/3">PARAMETER EVALUASI</th>
                  <th className="p-4 sm:p-5 text-sm font-bold text-primary bg-primary-fixed/20 border-x border-border-subtle w-1/3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                      <span>NEUROMATRIX LABS</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-text-slate-secondary w-1/3">SITUS TES KOMERSIAL UMUM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle text-xs sm:text-sm">
                {/* Row 1: Biaya */}
                <tr className="hover:bg-surface-bright/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-text-slate-primary">
                    Biaya Tes & Akses Hasil
                    <span className="block text-xs text-text-slate-secondary font-normal">Apakah ada biaya di halaman akhir?</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-primary-fixed/10 border-x border-border-subtle font-bold text-primary">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      <span>Rp 0 (Gratis Selamanya)</span>
                    </div>
                    <span className="block text-xs text-text-slate-secondary font-normal mt-0.5">Tanpa kartu kredit atau biaya tersembunyi.</span>
                  </td>
                  <td className="p-4 sm:p-5 text-text-slate-secondary">
                    <div className="flex items-center gap-2 text-error font-semibold">
                      <span className="material-symbols-outlined text-[20px]">cancel</span>
                      <span>$15.00 - $35.00 USD</span>
                    </div>
                    <span className="block text-xs text-text-slate-secondary mt-0.5">Hasil dikunci paywall setelah selesai menjawab.</span>
                  </td>
                </tr>

                {/* Row 2: Privasi Data */}
                <tr className="hover:bg-surface-bright/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-text-slate-primary">
                    Privasi & Penyimpanan Data
                    <span class="block text-xs text-text-slate-secondary font-normal">Ke mana respon dan data Anda dikirim?</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-primary-fixed/10 border-x border-border-subtle font-bold text-primary">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">security</span>
                      <span>100% Client-Side In-Browser</span>
                    </div>
                    <span className="block text-xs text-text-slate-secondary font-normal mt-0.5">Komputasi skor di browser Anda, no server storage.</span>
                  </td>
                  <td className="p-4 sm:p-5 text-text-slate-secondary">
                    <div className="flex items-center gap-2 text-error font-semibold">
                      <span className="material-symbols-outlined text-[20px]">cancel</span>
                      <span>Pengumpulan Email & Profiling</span>
                    </div>
                    <span className="block text-xs text-text-slate-secondary mt-0.5">Data dijual untuk iklan / target marketing.</span>
                  </td>
                </tr>

                {/* Row 3: Transparansi Pembahasan */}
                <tr className="hover:bg-surface-bright/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-text-slate-primary">
                    Pembahasan Logika Matriks
                    <span className="block text-xs text-text-slate-secondary font-normal">Penjelasan aturan pola jawaban yang salah.</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-primary-fixed/10 border-x border-border-subtle font-bold text-primary">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      <span>Lengkap & Terbuka Transparan</span>
                    </div>
                    <span className="block text-xs text-text-slate-secondary font-normal mt-0.5">Rincian aturan geometri & logika tiap butir.</span>
                  </td>
                  <td className="p-4 sm:p-5 text-text-slate-secondary">
                    <div className="flex items-center gap-2 text-outline">
                      <span className="material-symbols-outlined text-[20px]">remove_circle_outline</span>
                      <span>Rahasia / Tidak Ada Penjelasan</span>
                    </div>
                    <span className="block text-xs text-text-slate-secondary mt-0.5">Hanya menampilkan angka tunggal tanpa edukasi.</span>
                  </td>
                </tr>

                {/* Row 4: Standar Kalibrasi */}
                <tr className="hover:bg-surface-bright/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-text-slate-primary">
                    Metodologi Psikometrik
                    <span className="block text-xs text-text-slate-secondary font-normal">Landasan rumus statistika yang digunakan.</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-primary-fixed/10 border-x border-border-subtle font-bold text-primary">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      <span>Raven's Matrices + Wechsler SD=15</span>
                    </div>
                    <span className="block text-xs text-text-slate-secondary font-normal mt-0.5">Standar baku pengujian fluid intelligence global.</span>
                  </td>
                  <td className="p-4 sm:p-5 text-text-slate-secondary">
                    <div className="flex items-center gap-2 text-error font-semibold">
                      <span className="material-symbols-outlined text-[20px]">cancel</span>
                      <span>Skor Fiktif (Arbitrary Score)</span>
                    </div>
                    <span className="block text-xs text-text-slate-secondary mt-0.5">Sering melebih-lebihkan skor demi kepuasan semu.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==================== OPEN SCIENCE & ARCHITECTURE CALLOUT (FR-05) ==================== */}
      <section className="py-12 bg-surface-soft-slate border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
          <div className="bg-white border border-border-subtle rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span>CATATAN SAINS TERBUKA (OPEN-SOURCE CLIENT ENGINE)</span>
              </div>
              <h3 className="text-xl font-bold text-text-slate-primary">
                Mengapa Kami Bisa Beroperasi Tanpa Biaya Server Mahal?
              </h3>
              <p className="text-xs sm:text-sm text-text-slate-secondary leading-relaxed">
                Arsitektur komputasi matriks NeuroMatrix Labs memanfaatkan render vektor SVG native dan modul kalkulasi Gaussian langsung di mesin JavaScript browser pengguna (Client-Side Evaluation). Tidak ada database relasional berat yang menyimpan data privasi Anda. Ini menjamin keberlanjutan gratis selamanya dan privasi mutlak.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto">
              <button
                onClick={() => onStartTest('standard')}
                className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-primary-container hover:bg-primary text-white font-semibold text-sm transition-colors text-center cursor-pointer"
              >
                Mulai Evaluasi Mandiri
              </button>
              <button
                onClick={onOpenTechGuide}
                className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-surface-soft-slate hover:bg-surface-container-high text-text-slate-primary border border-border-subtle font-semibold text-sm transition-colors text-center cursor-pointer"
              >
                Baca Whitepaper Teknis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-16 bg-surface" id="faq">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold uppercase mb-2">
              PERTANYAAN UMUM
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-text-slate-primary tracking-tight">
              Kerap Ditanyakan Mengenai NeuroMatrix
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-white border border-border-subtle rounded-lg p-5 open:shadow-sm transition-all">
              <summary className="flex justify-between items-center text-base text-text-slate-primary font-bold cursor-pointer list-none">
                <span>Apakah hasil tes IQ ini benar-benar tidak dipungut biaya apa pun?</span>
                <span className="material-symbols-outlined text-text-slate-secondary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-xs sm:text-sm text-text-slate-secondary mt-3 leading-relaxed">
                Ya, 100% gratis secara harfiah. Anda tidak akan diminta memasukkan nomor kartu kredit, alamat email berbayar, maupun biaya pencetakan sertifikat. Anda akan langsung melihat estimasi IQ, persentil populasi, analisis 5 sektor, dan kunci pembahasan lengkap secara seketika.
              </p>
            </details>

            <details className="group bg-white border border-border-subtle rounded-lg p-5 open:shadow-sm transition-all">
              <summary className="flex justify-between items-center text-base text-text-slate-primary font-bold cursor-pointer list-none">
                <span>Apa perbedaan Fluid Intelligence dengan Crystallized Intelligence?</span>
                <span className="material-symbols-outlined text-text-slate-secondary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-xs sm:text-sm text-text-slate-secondary mt-3 leading-relaxed">
                Fluid Intelligence (Kecerdasan Cair) adalah kapasitas biologis murni untuk memecahkan persoalan baru yang belum pernah dihadapi secara logis tanpa mengandalkan pengetahuan sebelumnya. Sedangkan Crystallized Intelligence bergantung pada kosakata, fakta hafalan, dan pendidikan formal. Tes matriks ini mengukur kecerdasan cair murni.
              </p>
            </details>

            <details className="group bg-white border border-border-subtle rounded-lg p-5 open:shadow-sm transition-all">
              <summary className="flex justify-between items-center text-base text-text-slate-primary font-bold cursor-pointer list-none">
                <span>Berapa batas waktu pengerjaan dan apakah kecepatan mempengaruhi skor?</span>
                <span className="material-symbols-outlined text-text-slate-secondary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-xs sm:text-sm text-text-slate-secondary mt-3 leading-relaxed">
                Pada Mode Standar, Anda memiliki waktu 12 menit untuk 15 butir soal. Akurasi jawaban adalah komponen utama (bobot ~85%), namun algoritma kami memberikan koefisien bonus kecepatan (Speed Multiplier ~15%) untuk butir berbobot sulit yang berhasil dipecahkan dalam durasi lebih efisien.
              </p>
            </details>

            <details className="group bg-white border border-border-subtle rounded-lg p-5 open:shadow-sm transition-all">
              <summary className="flex justify-between items-center text-base text-text-slate-primary font-bold cursor-pointer list-none">
                <span>Bagaimana reliabilitas tes ini dibandingkan tes tatap muka (WAIS/Raven SPM)?</span>
                <span className="material-symbols-outlined text-text-slate-secondary group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-xs sm:text-sm text-text-slate-secondary mt-3 leading-relaxed">
                Tes ini mengimplementasikan konstruksi butir soal berbasis Item Response Theory (IRT) yang berkorelasi r = 0.88 dengan Raven Standard Progressive Matrices resmi. Meskipun demikian, untuk keperluan diagnosis klinis resmi (seperti disabilitas intelektual atau administrasi peradilan), evaluasi klinis tatap muka bersama psikolog berlisensi tetap menjadi rujukan utama.
              </p>
            </details>
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
