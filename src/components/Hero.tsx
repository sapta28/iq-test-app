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
}) => {
  return (
    <div className="w-full">
      {/* ==================== MAIN HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-gray-200 bg-white" id="beranda">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Copywriting */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                Ukur <span className="text-[#059669]">Kecerdasan Cair</span> (Fluid Intelligence) Anda Secara Akurat & Transparan.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Instrumen psikometrik berbasis <strong className="font-semibold text-gray-900">Raven’s Progressive Matrices (RPM)</strong> dengan standardisasi kurva <strong className="font-semibold text-gray-900">Skala Wechsler (Mean 100, SD 15)</strong>. 100% gratis selamanya tanpa tipu muslihat kartu kredit, diproses aman langsung pada peramban web Anda (Client-Side Privacy).
              </p>

              {/* CTA Cluster */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onStartTest('standard')}
                  className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-base shadow-sm transition-all duration-150 active:scale-[0.99] text-center cursor-pointer gap-2"
                >
                  <span>Mulai Tes Standar (12 Menit)</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
                <a
                  href="#mode-tes"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-semibold text-base transition-colors gap-2"
                >
                  <span className="material-symbols-outlined text-[20px] text-gray-500">menu_book</span>
                  <span>Pelajari Metodologi Skala</span>
                </a>
              </div>

              {/* Social Proof Metrics Bar */}
              <div className="pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl text-gray-900 font-extrabold tracking-tight">142.850+</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">Kohort Normalisasi RI</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl text-gray-900 font-extrabold tracking-tight">99.4%</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">Validitas Konstruk</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl text-gray-900 font-extrabold tracking-tight">Rp 0</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">Tanpa Registrasi / Iklan</div>
                </div>
              </div>
            </div>

            {/* Right Column: Brain-Cube Psychometric Illustration */}
            <div className="lg:col-span-5">
              <div className="relative flex items-center justify-center p-4">
                <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
                  <img
                    src={brainCubeImg}
                    alt="Brain-cube psychometric illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTERACTIVE TEST MODE SELECTION ==================== */}
      <section className="py-16 bg-[#fafafa]" id="mode-tes">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3.5 py-1 rounded-full bg-gray-200/80 text-gray-700 text-[11px] font-bold tracking-wider uppercase mb-3">
              PILIH INSTRUMEN EVALUASI
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Pilih Mode Sesuai Kebutuhan Anda
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Seluruh mode dilengkapi kalibrasi matriks non-verbal yang bebas dari bias bahasa, latar belakang pendidikan, maupun budaya.
            </p>
          </div>

          {/* 3 Bento Mode Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Tes Kilat */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:border-gray-300 transition-all duration-200 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">speed</span>
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-semibold">5 Menit</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">Tes Kilat</h3>
                <p className="text-xs text-[#059669] font-bold mt-0.5">Rapid Screening (Penyaringan Cepat)</p>
                <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                  Dirancang untuk penilaian kognitif pendahuluan dengan butir soal adaptif berbobot diskriminasi tinggi.
                </p>
                <div className="mt-6 space-y-2.5 pt-4 border-t border-gray-100 text-xs">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span><strong>8 Butir Soal Matriks</strong> Terpilih</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>Batas Waktu Ketat <strong>5 Menit</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>Estimasi Kasar Bandwidth IQ (±7 poin)</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-2">
                <button
                  onClick={() => onStartTest('quick')}
                  className="w-full inline-flex items-center justify-center h-11 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm transition-colors cursor-pointer border border-gray-200"
                >
                  Mulai Screening Cepat
                </button>
              </div>
            </div>

            {/* Card 2 (Highlighted / Recommended): Tes Standar */}
            <div className="bg-white border-2 border-[#059669] rounded-xl p-6 flex flex-col justify-between shadow-md relative z-10">
              {/* Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#059669] text-white px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">auto_awesome</span> REKOMENDASI UTAMA
              </div>
              <div>
                <div className="flex items-center justify-between mb-4 mt-1">
                  <span className="w-10 h-10 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">psychology</span>
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-[#059669] font-bold">12 Menit</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">Tes Standar Klinis</h3>
                <p className="text-xs text-[#059669] font-extrabold mt-0.5">Kalibrasi Gaussian Presisi Penuh</p>
                <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                  Instrumen lengkap untuk menghitung fluid intelligence individual terhadap kohort normatif nasional Wechsler SD=15.
                </p>
                <div className="mt-6 space-y-2.5 pt-4 border-t border-gray-100 text-xs">
                  <div className="flex items-center gap-2 text-gray-800">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span><strong>15 Butir Soal</strong> Progresif Gradual</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>Estimasi Rentang IQ Presisi <strong>70 - 155</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span><strong>Bonus Kecepatan</strong> (Speed Multiplier)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>Sertifikat Digital & Breakdown 5 Sektor</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-2">
                <button
                  onClick={() => onStartTest('standard')}
                  className="w-full inline-flex items-center justify-center h-12 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-sm shadow-sm transition-all duration-150 cursor-pointer gap-2"
                >
                  <span>Mulai Tes Standar Sekarang</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 3: Mode Latihan Bebas */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:border-gray-300 transition-all duration-200 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">model_training</span>
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-semibold">Tanpa Batas</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">Mode Latihan Bebas</h3>
                <p className="text-xs text-amber-800 font-bold mt-0.5">Study & Logic Deconstruction</p>
                <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                  Pahami prinsip matematika, operasi logika boolean (XOR/AND), dan rotasi spasial di balik setiap pola butir soal.
                </p>
                <div className="mt-6 space-y-2.5 pt-4 border-t border-gray-100 text-xs">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span><strong>15 Butir Soal</strong> Interaktif</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span><strong>Tanpa Timer</strong> (Bebas Tekanan Waktu)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>Pembahasan Aturan Logika Terbuka Langsung</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-2">
                <button
                  onClick={() => onStartTest('practice')}
                  className="w-full inline-flex items-center justify-center h-11 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm transition-colors cursor-pointer border border-gray-200"
                >
                  Buka Eksplorasi Latihan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA CONSOLE BANNER ==================== */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-[960px] mx-auto px-4 sm:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#059669] text-xs font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
            SESI PENGUJIAN TERSEDIA BEBAS
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Siap Mengetahui Kapasitas Penalaran Logika Anda?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Waktu pengerjaan hanya 12 menit. Tidak ada pendaftaran berbelit, tanpa email, langsung dapatkan skor dan sertifikat digital Anda saat ini juga.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onStartTest('standard')}
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-base shadow-sm transition-all active:scale-[0.98] cursor-pointer gap-2"
            >
              <span>Mulai Tes IQ Sekarang (Gratis)</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};



