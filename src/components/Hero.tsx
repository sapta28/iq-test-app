import React from 'react';
import { TestMode, TestResult } from '../types';
import { Play, Zap, BookOpen, ShieldCheck, CheckCircle2, Award, BarChart3, HelpCircle, History, Trash2, ArrowRight } from 'lucide-react';

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
    <div className="relative overflow-hidden py-12 lg:py-16">
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-indigo-600/15 via-cyan-500/10 to-purple-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Tes Psikometri Bebas Paywall — Hasil 100% Gratis Tanpa Syarat</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Uji Tingkat <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">IQ & Kecerdasan Cair</span> Secara Akurat
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Berbasis matriks non-verbal <strong className="text-white font-semibold">Raven Progressive Matrices (RPM)</strong> standar internasional. Mengukur penalaran abstrak, pemrosesan visual-spasial, dan kecepatan logika tanpa kendala bahasa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Skala Wechsler (SD = 15)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Analisis 5 Domain Kognitif
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Pembahasan Jawaban Lengkap
            </span>
          </div>
        </div>

        {/* Local Storage Past Results Drawer (If available) */}
        {pastResults.length > 0 && (
          <div className="mt-10 max-w-4xl mx-auto bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <History className="w-4 h-4" />
                <span>Riwayat Hasil Tes Anda (Disimpan Lokal di Browser)</span>
              </div>
              {onClearHistory && (
                <button
                  onClick={onClearHistory}
                  className="text-xs text-slate-400 hover:text-rose-400 flex items-center gap-1 transition-colors"
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
                  className="p-3 bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-xl transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <span className="text-xs text-slate-400 block">{res.completedAt}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg font-black text-indigo-400">{res.iqScore} IQ</span>
                      <span className="text-xs text-emerald-400 font-semibold">Top {res.percentile}%</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Test Mode Selector Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Standard Mode Card */}
          <div className="relative group bg-slate-800/80 hover:bg-slate-800 border-2 border-indigo-500/40 hover:border-indigo-500 rounded-2xl p-6 transition-all duration-300 shadow-xl shadow-indigo-950/20 flex flex-col justify-between">
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
              Paling Akurat
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <Play className="w-6 h-6 fill-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Tes Standar</h3>
              <p className="text-slate-400 text-sm mt-2">
                15 soal matriks visual dengan bobot tingkat kesulitan bertingkat. Hasil psikometri paling komprehensif.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-400">
                <span className="bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-700">15 Soal</span>
                <span className="bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-700">~12 Menit</span>
              </div>
            </div>

            <button
              onClick={() => onStartTest('standard')}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
            >
              <span>Mulai Tes Standar</span>
              <Play className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Mode Card */}
          <div className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Tes Kilat</h3>
              <p className="text-slate-400 text-sm mt-2">
                8 soal terpilih untuk estimasi cepat skor IQ dan gambaran awal kemampuan logika visual.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-400">
                <span className="bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-700">8 Soal</span>
                <span className="bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-700">~6 Menit</span>
              </div>
            </div>

            <button
              onClick={() => onStartTest('quick')}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Mulai Tes Kilat</span>
              <Zap className="w-4 h-4" />
            </button>
          </div>

          {/* Practice Mode Card */}
          <div className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <BookOpen className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Mode Latihan</h3>
              <p className="text-slate-400 text-sm mt-2">
                Tanpa batas waktu. Langsung lihat pembahasan rinci logika pola di setiap soal untuk melatih otak.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-400">
                <span className="bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-700">15 Soal</span>
                <span className="bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-700">Tanpa Timer</span>
              </div>
            </div>

            <button
              onClick={() => onStartTest('practice')}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Mulai Latihan</span>
              <BookOpen className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bell Curve Visual Diagram Section */}
        <div className="mt-16 bg-slate-800/50 border border-slate-700/80 rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 px-3 py-1 rounded-md">
                <BarChart3 className="w-4 h-4" />
                <span>Distribusi Gauss Normal (Rata-Rata 100, SD 15)</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Bagaimana Skor IQ Anda Dihitung?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Platform ini menggunakan kurva populasi global di mana 68.2% populasi berada pada rentang IQ 85–115. Skor Anda disesuaikan berdasarkan bobot kesulitan soal dan kecepatan presisi logika.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block">IQ 130+ (Superior)</span>
                  <span className="font-bold text-indigo-400">2.3% Populasi</span>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block">IQ 90-109 (Normal)</span>
                  <span className="font-bold text-cyan-400">50.0% Populasi</span>
                </div>
              </div>
            </div>

            {/* SVG Bell Curve Diagram */}
            <div className="w-full md:w-80 h-48 bg-slate-900/90 rounded-xl p-4 border border-slate-700 flex flex-col justify-end">
              <svg viewBox="0 0 300 120" className="w-full h-full">
                <path
                  d="M 10 110 Q 75 110, 110 80 T 150 10 T 190 80 Q 225 110, 290 110 Z"
                  fill="url(#bellGradient)"
                  opacity="0.3"
                />
                <path
                  d="M 10 110 Q 75 110, 110 80 T 150 10 T 190 80 Q 225 110, 290 110"
                  fill="none"
                  stroke="#818CF8"
                  strokeWidth="3"
                />
                <line x1="150" y1="10" x2="150" y2="110" stroke="#06B6D4" strokeWidth="2" strokeDasharray="3 3" />
                <text x="150" y="118" textAnchor="middle" fontSize="10" fill="#94A3B8">
                  100 (Mean)
                </text>

                <line x1="110" y1="80" x2="110" y2="110" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
                <text x="110" y="118" textAnchor="middle" fontSize="9" fill="#64748B">
                  85
                </text>

                <line x1="190" y1="80" x2="190" y2="110" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
                <text x="190" y="118" textAnchor="middle" fontSize="9" fill="#64748B">
                  115
                </text>

                <line x1="230" y1="98" x2="230" y2="110" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
                <text x="230" y="118" textAnchor="middle" fontSize="9" fill="#818CF8">
                  130
                </text>

                <defs>
                  <linearGradient id="bellGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Tech architecture note CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenTechGuide}
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4 transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>Ingin tahu stack teknologi & cara membuat website tes IQ gratis seperti ini? Klik di sini untuk membukanya.</span>
          </button>
        </div>
      </div>
    </div>
  );
};
