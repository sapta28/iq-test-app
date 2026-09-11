import React, { useEffect, useState } from 'react';
import { TestResult, Question } from '../types';
import { MatrixCellSVG } from './MatrixCellSVG';
import confetti from 'canvas-confetti';
import {
  Award,
  BarChart2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Download,
  Share2,
  Brain,
  Zap,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Check,
  Copy,
} from 'lucide-react';

interface ResultsPageProps {
  result: TestResult;
  questions: Question[];
  onRetake: () => void;
  onOpenTechGuide: () => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({
  result,
  questions,
  onRetake,
  onOpenTechGuide,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'breakdown' | 'certificate'>('overview');
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Trigger celebration confetti on mount
  useEffect(() => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366F1', '#06B6D4', '#10B981', '#F59E0B'],
      });
    } catch (e) {
      // Fallback
    }
  }, []);

  const handleCopyShare = () => {
    const text = `Saya baru saja menyelesaikan Tes IQ Psikometri NeuroMatrix dan mendapatkan skor IQ ${result.iqScore} (${result.classification})! Tes 100% gratis tanpa paywall. Coba tes IQ kamu!`;
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner Alert */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-cyan-950 border border-indigo-500/30 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
            <Award className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                Tes Selesai — Hasil 100% Gratis
              </span>
              <span className="text-xs text-slate-400">{result.completedAt}</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-1">Laporan Hasil Tes Psikometri Kognitif</h2>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={onRetake}
            className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Tes Ulang</span>
          </button>
          <button
            onClick={handleCopyShare}
            className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            <span>{copiedLink ? 'Tersalin!' : 'Bagikan Hasil'}</span>
          </button>
        </div>
      </div>

      {/* Main Score Overview Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Score Gauge Display */}
        <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-8 shadow-xl backdrop-blur-md flex flex-col items-center justify-center text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Estimasi Skor IQ Psikometri
          </span>

          {/* Big Circle Score Display */}
          <div className="relative w-48 h-48 my-4 flex items-center justify-center">
            {/* SVG Arc Gauge */}
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" stroke="#1E293B" strokeWidth="8" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke={result.classificationColor}
                strokeWidth="8"
                fill="none"
                strokeDasharray="263.8"
                strokeDashoffset={263.8 - (263.8 * Math.min(100, Math.max(0, result.iqScore - 70))) / 75}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black tracking-tight text-white">{result.iqScore}</span>
              <span className="text-xs text-slate-400 font-semibold mt-1">Skala Wechsler (SD 15)</span>
            </div>
          </div>

          {/* Classification Tag */}
          <div
            className="px-4 py-2 rounded-xl border text-sm font-bold shadow-lg"
            style={{
              backgroundColor: `${result.classificationColor}15`,
              borderColor: `${result.classificationColor}40`,
              color: result.classificationColor,
            }}
          >
            {result.classification}
          </div>

          <p className="text-xs text-slate-300 mt-4 leading-relaxed">
            Skor Anda berada pada <strong className="text-white font-bold font-mono">Persentil {result.percentile}%</strong> populasi global.
          </p>

          {/* Key Metrics Pill Grid */}
          <div className="grid grid-cols-3 gap-2 w-full mt-6 pt-6 border-t border-slate-700/60 text-xs">
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block">Benar</span>
              <span className="text-emerald-400 font-bold text-base">
                {result.rawScore}/{result.totalQuestions}
              </span>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block">Waktu</span>
              <span className="text-cyan-400 font-bold text-base">
                {Math.floor(result.timeSpentSeconds / 60)}m {result.timeSpentSeconds % 60}s
              </span>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block">Speed Multiplier</span>
              <span className="text-indigo-400 font-bold text-base">{result.speedMultiplier}x</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Normal Curve & Domain Breakdown */}
        <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-indigo-400" />
              <span>Posisi Anda Dalam Kurva Populasi (Bell Curve)</span>
            </h3>

            {/* SVG Bell Curve with User Dot Marker */}
            <div className="w-full h-44 bg-slate-900 rounded-xl p-4 border border-slate-700 relative flex flex-col justify-end">
              <svg viewBox="0 0 300 120" className="w-full h-full">
                <path
                  d="M 10 110 Q 75 110, 110 80 T 150 10 T 190 80 Q 225 110, 290 110 Z"
                  fill="url(#bellResGradient)"
                  opacity="0.25"
                />
                <path
                  d="M 10 110 Q 75 110, 110 80 T 150 10 T 190 80 Q 225 110, 290 110"
                  fill="none"
                  stroke="#64748B"
                  strokeWidth="2"
                />

                {/* Calculate user marker X coordinate (IQ 70=10, 100=150, 145=260) */}
                {(() => {
                  const userX = Math.min(270, Math.max(20, 10 + ((result.iqScore - 70) / 75) * 250));
                  return (
                    <g>
                      <line x1={userX} y1="10" x2={userX} y2="110" stroke={result.classificationColor} strokeWidth="3" strokeDasharray="3 3" />
                      <circle cx={userX} cy="35" r="7" fill={result.classificationColor} className="animate-ping opacity-75" />
                      <circle cx={userX} cy="35" r="6" fill={result.classificationColor} stroke="#FFFFFF" strokeWidth="2" />
                      <text x={userX} y="15" textAnchor="middle" fontSize="10" fontWeight="bold" fill={result.classificationColor}>
                        Skor Anda: {result.iqScore}
                      </text>
                    </g>
                  );
                })()}

                <text x="150" y="118" textAnchor="middle" fontSize="9" fill="#94A3B8">
                  Rata-rata (100)
                </text>
                <text x="190" y="118" textAnchor="middle" fontSize="9" fill="#64748B">
                  115
                </text>
                <text x="230" y="118" textAnchor="middle" fontSize="9" fill="#818CF8">
                  130
                </text>

                <defs>
                  <linearGradient id="bellResGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Cognitive Domain Breakdown Bars */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Profil 5 Sektor Kemampuan Kognitif:
              </h4>

              {result.domainBreakdown.map((dom) => (
                <div key={dom.domain} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">{dom.domainName}</span>
                    <span className="text-slate-400 font-mono">
                      {dom.correct}/{dom.total} ({dom.percentage}%) — <strong className="text-indigo-300">{dom.score} IQ</strong>
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-700"
                      style={{ width: `${dom.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section: Question Review & Certificate */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-xl backdrop-blur-md">
        <div className="flex border-b border-slate-700 gap-4 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 text-sm font-bold transition-all border-b-2 ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Pembahasan Jawaban Lengkap ({result.totalQuestions} Soal)
          </button>
          <button
            onClick={() => setActiveTab('certificate')}
            className={`pb-3 text-sm font-bold transition-all border-b-2 ${
              activeTab === 'certificate'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Sertifikat Hasil Psikometri
          </button>
        </div>

        {/* Tab 1: Detailed Question Review Accordion */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-400 mb-4">
              Klik pada masing-masing soal untuk melihat analisis logika matriks, jawaban Anda, dan opsi yang paling tepat.
            </p>

            {questions.map((q, idx) => {
              const userAns = result.userAnswers.find((a) => a.questionId === q.id);
              const isCorrect = userAns ? userAns.isCorrect : false;
              const isExpanded = expandedQuestionId === q.id;

              const userSelectedOpt = q.options.find((o) => o.id === userAns?.selectedOptionId);
              const correctOpt = q.options.find((o) => o.id === q.correctOptionId);

              return (
                <div
                  key={q.id}
                  className={`border rounded-xl transition-all overflow-hidden ${
                    isCorrect
                      ? 'bg-slate-900/60 border-emerald-500/30'
                      : 'bg-slate-900/60 border-rose-500/30'
                  }`}
                >
                  <button
                    onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-850/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )}
                      <div>
                        <span className="text-xs font-semibold text-slate-400">Soal {idx + 1}</span>
                        <h4 className="text-sm font-bold text-white">{q.title}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 hidden sm:inline">
                        Pilihan Anda: <strong className={isCorrect ? 'text-emerald-400' : 'text-rose-400'}>{userSelectedOpt ? userSelectedOpt.label : 'Kosong'}</strong> (Jawaban Benar: <strong className="text-emerald-400">{correctOpt?.label}</strong>)
                      </span>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </button>

                  {/* Expanded Logic Details */}
                  {isExpanded && (
                    <div className="p-6 border-t border-slate-800 bg-slate-950/70 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Matrix Grid preview */}
                        <div className="w-full max-w-xs mx-auto aspect-square p-2 bg-slate-900 rounded-xl border border-slate-800">
                          <div className="grid grid-cols-3 gap-2 w-full h-full">
                            {q.matrixSpec.cells.map((c, cIdx) => (
                              <MatrixCellSVG key={cIdx} spec={c} isQuestionMark={c === null} />
                            ))}
                          </div>
                        </div>

                        {/* Options Comparison & Explanation */}
                        <div className="space-y-3 text-xs">
                          <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30">
                            <span className="text-emerald-400 font-bold block">Jawaban Benar: Pilihan {correctOpt?.label}</span>
                            <span className="text-slate-300 block mt-1">Aturan Pola: {q.ruleDescription}</span>
                          </div>

                          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 leading-relaxed">
                            <strong className="text-indigo-400 block mb-1">Penjelasan Logika Psikometri:</strong>
                            {q.explanation}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Printable Certificate Card */}
        {activeTab === 'certificate' && (
          <div className="flex flex-col items-center space-y-6">
            <div className="w-full max-w-2xl bg-slate-950 border-4 border-indigo-500/30 p-8 rounded-2xl shadow-2xl relative overflow-hidden text-center text-white space-y-6">
              {/* Background watermark */}
              <Brain className="absolute -right-10 -bottom-10 w-64 h-64 text-indigo-500/5 pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-indigo-400" />
                  <span className="font-bold text-lg tracking-wider">NEUROMATRIX IQ</span>
                </div>
                <span className="text-xs text-slate-400">ID: NMX-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>

              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest block">
                  SERTIFIKAT HASIL TES PSIKOMETRI
                </span>
                <h3 className="text-2xl font-black mt-2">KECERDASAN CAIR & LOGIKA VISUAL</h3>
                <p className="text-xs text-slate-400 mt-1">Berdasarkan Raven's Progressive Matrices & Skala Wechsler (SD=15)</p>
              </div>

              <div className="py-4 border-y border-slate-800/80 max-w-md mx-auto space-y-2">
                <span className="text-xs text-slate-400 block">ESTIMASI SKOR IQ RESMI</span>
                <div className="text-6xl font-black text-indigo-400 tracking-tight">{result.iqScore}</div>
                <div className="text-sm font-bold text-emerald-400">{result.classification}</div>
                <span className="text-xs text-slate-400 block">Persentil Populasi: Top {result.percentile}%</span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                <span>Tanggal: {result.completedAt}</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" /> Terverifikasi 100% Bebas Paywall
                </span>
              </div>
            </div>

            <button
              onClick={handlePrintCertificate}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Cetak / Simpan PDF Sertifikat</span>
            </button>
          </div>
        )}
      </div>

      {/* Tech Architecture Banner bottom */}
      <div className="bg-cyan-950/30 border border-cyan-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-white text-base">Bagaimana platform tes IQ gratis ini dibuat?</h4>
          <p className="text-xs text-slate-400 mt-1">
            Lihat rekomendasi stack teknologi, hosting gratis selamanya, dan arsitektur penghitungan IQ tanpa backend.
          </p>
        </div>
        <button
          onClick={onOpenTechGuide}
          className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-all shrink-0"
        >
          Buka Panduan Teknis
        </button>
      </div>
    </div>
  );
};
