import React from 'react';
import { TestMode, TestResult } from '../types';
import { Play, Zap, BookOpen, ShieldCheck, CheckCircle2, Award, BarChart3, HelpCircle, History, Trash2, ArrowRight, Target, Clock, FileCheck } from 'lucide-react';

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
    <div className="relative py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Header Banner (Personality.co Editorial Style) */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/20 text-emerald-700 text-xs sm:text-sm font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Certified Fluid Intelligence Assessment — 100% Free & No Paywall</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Discover your true <span className="text-emerald-600">IQ score</span> & cognitive strength
          </h1>

          <p className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            Mengukur kecerdasan cair (<span className="text-slate-900 font-bold">fluid intelligence</span>) menggunakan metode <strong className="text-slate-900">Raven's Progressive Matrices</strong> secara objektif tanpa bias bahasa atau budaya.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs sm:text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Skala Wechsler (SD = 15)
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Analisis 5 Sektor Kognitif
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Laporan & Sertifikat PDF Instan
            </span>
          </div>
        </div>

        {/* Past Test History Drawer (If available) */}
        {pastResults.length > 0 && (
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <History className="w-4 h-4 text-emerald-600" />
                <span>Riwayat Tes Anda (Disimpan Lokal di Browser)</span>
              </div>
              {onClearHistory && (
                <button
                  onClick={onClearHistory}
                  className="text-xs text-slate-500 hover:text-rose-600 flex items-center gap-1 transition-colors font-medium"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Hapus Riwayat</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {pastResults.map((res, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectPastResult && onSelectPastResult(res)}
                  className="p-4 bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-500/50 rounded-xl transition-all cursor-pointer flex items-center justify-between group shadow-sm"
                >
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">{res.completedAt}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xl font-black text-slate-900">{res.iqScore} IQ</span>
                      <span className="text-xs text-emerald-600 font-bold">Top {res.percentile}%</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Data Metrics Counter Banner (Personality.co style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-card">
            <div className="text-3xl sm:text-4xl font-black text-slate-900">15</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Soal Matriks Visual</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-card">
            <div className="text-3xl sm:text-4xl font-black text-slate-900">300+</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Poin Data Teranalisis</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-card">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">SD 15</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Skala Wechsler Standard</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-card">
            <div className="text-3xl sm:text-4xl font-black text-slate-900">100%</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Gratis Bebas Paywall</div>
          </div>
        </div>

        {/* Test Mode Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Standard Mode Card */}
          <div className="relative bg-white border-2 border-emerald-500 rounded-2xl p-6 shadow-card flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="absolute -top-3.5 right-6 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
              Rekomendasi Utama
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-4">
                <Play className="w-6 h-6 fill-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Tes Standar Psikometri</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                15 soal matriks visual Raven dengan pembobotan kesulitan bertingkat. Hasil psikometri paling akurat & presisi.
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-slate-600">
                <span className="bg-slate-100 px-3 py-1 rounded-md">15 Soal</span>
                <span className="bg-slate-100 px-3 py-1 rounded-md">~12 Menit</span>
              </div>
            </div>

            <button
              onClick={() => onStartTest('standard')}
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Mulai Tes Standar</span>
              <Play className="w-4 h-4 fill-white" />
            </button>
          </div>

          {/* Quick Mode Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-600/20 flex items-center justify-center text-blue-600 mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Tes Kilat (Screening)</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                8 soal terpilih untuk gambaran cepat skor IQ dan screening awal logika kecerdasan cair.
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-slate-600">
                <span className="bg-slate-100 px-3 py-1 rounded-md">8 Soal</span>
                <span className="bg-slate-100 px-3 py-1 rounded-md">~6 Menit</span>
              </div>
            </div>

            <button
              onClick={() => onStartTest('quick')}
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Mulai Tes Kilat</span>
              <Zap className="w-4 h-4" />
            </button>
          </div>

          {/* Practice Mode Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-4">
                <BookOpen className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Mode Latihan</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Tanpa timer. Dilengkapi drawer penjelasan logika instan di setiap soal untuk melatih pola pikir.
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-slate-600">
                <span className="bg-slate-100 px-3 py-1 rounded-md">15 Soal</span>
                <span className="bg-slate-100 px-3 py-1 rounded-md">Tanpa Timer</span>
              </div>
            </div>

            <button
              onClick={() => onStartTest('practice')}
              className="mt-6 w-full py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm transition-all border border-slate-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Mulai Latihan</span>
              <BookOpen className="w-4 h-4 text-slate-700" />
            </button>
          </div>
        </div>

        {/* "How It Works" Section (Personality.co 1, 2, 3 numbered style) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 max-w-5xl mx-auto shadow-card">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-8">
            How It Works — Cara Kerja Tes Psikometri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center font-black text-2xl text-emerald-600">
                1
              </div>
              <h4 className="text-lg font-bold text-slate-900">Prepare Yourself</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cari tempat yang tenang agar Anda dapat fokus penuh dalam memecahkan pola visual matriks.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center font-black text-2xl text-emerald-600">
                2
              </div>
              <h4 className="text-lg font-bold text-slate-900">Complete The Test</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Jawab 15 soal pola geometris bertingkat dari rotasi, permutasi, hingga logika biner.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center font-black text-2xl text-emerald-600">
                3
              </div>
              <h4 className="text-lg font-bold text-slate-900">Receive Your Results</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dapatkan skor IQ presisi, analisis 5 sektor kognitif, pembahasan logika, dan sertifikat resmi.
              </p>
            </div>
          </div>
        </div>

        {/* "What You Will Receive" Section (Personality.co Feature Cards) */}
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">
            What You Will Receive — Laporan Yang Akan Anda Dapatkan
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
                <Target className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Your Exact IQ Score</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pengukuran akurat skor IQ berdasarkan kurva populasi global Gauss (SD = 15).
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
                <BarChart3 className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">5 Cognitive Domains</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Breakdown detail sektor Visual-Spasial, Pengenalan Pola, Deduksi Logis, & Memori.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
                <Award className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Accredited Certificate</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sertifikat resmi yang dapat diunduh/dicetak sebagai verifikasi hasil tes Anda.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
                <FileCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Detailed Explanations</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pembahasan langkah demi langkah logika di balik setiap soal matriks visual.
              </p>
            </div>
          </div>
        </div>

        {/* Bell Curve Editorial Diagram Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto shadow-card">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-3 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-500/20 px-3 py-1 rounded-md">
                <BarChart3 className="w-4 h-4 text-emerald-600" />
                <span>Distribusi Normal Gauss (Mean = 100, SD = 15)</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Model Distribusi Populasi Global</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sebanyak 68.2% populasi global memiliki skor IQ pada rentang 85–115. Skor Anda akan dipetakan secara presisi berdasarkan norma populasi psikometri internasional.
              </p>
            </div>

            {/* SVG Bell Curve Clean Diagram */}
            <div className="w-full md:w-80 h-44 bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-end">
              <svg viewBox="0 0 300 120" className="w-full h-full">
                <path
                  d="M 10 110 Q 75 110, 110 80 T 150 10 T 190 80 Q 225 110, 290 110 Z"
                  fill="#E6F7F3"
                />
                <path
                  d="M 10 110 Q 75 110, 110 80 T 150 10 T 190 80 Q 225 110, 290 110"
                  fill="none"
                  stroke="#00A67C"
                  strokeWidth="3"
                />
                <line x1="150" y1="10" x2="150" y2="110" stroke="#000626" strokeWidth="2" strokeDasharray="3 3" />
                <text x="150" y="118" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#000626">
                  100 (Mean)
                </text>

                <line x1="110" y1="80" x2="110" y2="110" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
                <text x="110" y="118" textAnchor="middle" fontSize="9" fill="#64748B">
                  85
                </text>

                <line x1="190" y1="80" x2="190" y2="110" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
                <text x="190" y="118" textAnchor="middle" fontSize="9" fill="#64748B">
                  115
                </text>

                <line x1="230" y1="98" x2="230" y2="110" stroke="#00A67C" strokeWidth="1" strokeDasharray="2 2" />
                <text x="230" y="118" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#00A67C">
                  130
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Tech Guide Link */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenTechGuide}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4 transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Ingin tahu arsitektur teknis & cara deploy website tes IQ ini? Klik di sini.</span>
          </button>
        </div>

      </div>
    </div>
  );
};
