import { ScrollZoomIn } from './ScrollZoomIn';
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

  useEffect(() => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00A67C', '#006BFF', '#10B981', '#F59E0B'],
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
      {/* Top Banner Alert (Personality.co style) */}
      <ScrollZoomIn delay={0.05}>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-600">
            <Award className="w-8 h-8 text-emerald-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                Hasil Tes 100% Gratis & Terverifikasi
              </span>
              <span className="text-xs text-slate-500 font-medium">{result.completedAt}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Laporan Psikometri Kognitif Anda</h2>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={onRetake}
            className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Tes Ulang</span>
          </button>
          <button
            onClick={handleCopyShare}
            className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            {copiedLink ? <Check className="w-4 h-4 text-white" /> : <Share2 className="w-4 h-4" />}
            <span>{copiedLink ? 'Tersalin!' : 'Bagikan Hasil'}</span>
          </button>
        </div>
      </div>
      </ScrollZoomIn>

      {/* Main Score Overview Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Score Gauge Display */}
        <ScrollZoomIn delay={0.1} className="lg:col-span-5 h-full">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-card flex flex-col items-center justify-center text-center h-full">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Estimasi Skor IQ Psikometri Resmi
          </span>

          {/* Big Score Number Display */}
          <div className="relative w-48 h-48 my-4 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" stroke="#F1F5F9" strokeWidth="8" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="#00A67C"
                strokeWidth="8"
                fill="none"
                strokeDasharray="263.8"
                strokeDashoffset={263.8 - (263.8 * Math.min(100, Math.max(0, result.iqScore - 70))) / 75}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black tracking-tight text-slate-900">{result.iqScore}</span>
              <span className="text-xs text-slate-500 font-bold mt-1">Skala Wechsler (SD 15)</span>
            </div>
          </div>

          {/* Classification Tag */}
          <div className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-500/30 text-emerald-700 text-sm font-extrabold shadow-sm">
            {result.classification}
          </div>

          <p className="text-xs text-slate-600 mt-4 leading-relaxed font-medium">
            Skor Anda berada pada <strong className="text-slate-900 font-bold font-mono">Persentil Top {result.percentile}%</strong> populasi global.
          </p>

          {/* Key Metrics Pill Grid */}
          <div className="grid grid-cols-3 gap-2 w-full mt-6 pt-6 border-t border-slate-100 text-xs">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <span className="text-slate-500 block font-medium">Benar</span>
              <span className="text-emerald-700 font-black text-base">
                {result.rawScore}/{result.totalQuestions}
              </span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <span className="text-slate-500 block font-medium">Waktu</span>
              <span className="text-slate-900 font-black text-base">
                {Math.floor(result.timeSpentSeconds / 60)}m {result.timeSpentSeconds % 60}s
              </span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <span className="text-slate-500 block font-medium">Speed Multiplier</span>
              <span className="text-emerald-700 font-black text-base">{result.speedMultiplier}x</span>
            </div>
          </div>
        </div>
        </ScrollZoomIn>

        {/* Right: Interactive Normal Curve & Domain Breakdown */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-emerald-600" />
              <span>Posisi Anda Dalam Kurva Populasi Global (Bell Curve)</span>
            </h3>

            {/* SVG Bell Curve with User Dot Marker */}
            <div className="w-full h-44 bg-slate-50 rounded-xl p-4 border border-slate-200 relative flex flex-col justify-end">
              <svg viewBox="0 0 300 120" className="w-full h-full">
                <path
                  d="M 10 110 Q 75 110, 110 80 T 150 10 T 190 80 Q 225 110, 290 110 Z"
                  fill="#E6F7F3"
                />
                <path
                  d="M 10 110 Q 75 110, 110 80 T 150 10 T 190 80 Q 225 110, 290 110"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="2"
                />

                {/* Calculate user marker X coordinate */}
                {(() => {
                  const userX = Math.min(270, Math.max(20, 10 + ((result.iqScore - 70) / 75) * 250));
                  return (
                    <g>
                      <line x1={userX} y1="10" x2={userX} y2="110" stroke="#00A67C" strokeWidth="3" strokeDasharray="3 3" />
                      <circle cx={userX} cy="35" r="7" fill="#00A67C" className="animate-ping opacity-75" />
                      <circle cx={userX} cy="35" r="6" fill="#00A67C" stroke="#FFFFFF" strokeWidth="2" />
                      <text x={userX} y="15" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#00A67C">
                        Skor Anda: {result.iqScore}
                      </text>
                    </g>
                  );
                })()}

                <text x="150" y="118" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#000626">
                  Mean (100)
                </text>
                <text x="190" y="118" textAnchor="middle" fontSize="9" fill="#64748B">
                  115
                </text>
                <text x="230" y="118" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#00A67C">
                  130
                </text>
              </svg>
            </div>

            {/* Cognitive Domain Breakdown Bars */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Profil 5 Sektor Kemampuan Kognitif:
              </h4>

              {result.domainBreakdown.map((dom) => (
                <div key={dom.domain} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-800">{dom.domainName}</span>
                    <span className="text-slate-600 font-mono">
                      {dom.correct}/{dom.total} ({dom.percentage}%) — <strong className="text-emerald-700">{dom.score} IQ</strong>
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                    <div
                      className="h-full bg-emerald-600 rounded-full transition-all duration-700"
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
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card">
        <div className="flex border-b border-slate-200 gap-6 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 text-sm font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'overview'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Pembahasan Jawaban Lengkap ({result.totalQuestions} Soal)
          </button>
          <button
            onClick={() => setActiveTab('certificate')}
            className={`pb-3 text-sm font-bold transition-all border-b-2 cursor-pointer ${
              activeTab === 'certificate'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Sertifikat Akreditasi Psikometri
          </button>
        </div>

        {/* Tab 1: Detailed Question Review Accordion */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-500 mb-4 font-medium">
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
                      ? 'bg-emerald-50/30 border-emerald-500/30'
                      : 'bg-rose-50/30 border-rose-300/60'
                  }`}
                >
                  <button
                    onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                      <div>
                        <span className="text-xs font-semibold text-slate-500">Soal {idx + 1}</span>
                        <h4 className="text-sm font-bold text-slate-900">{q.title}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-600 font-medium hidden sm:inline">
                        Pilihan Anda: <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-600'}>{userSelectedOpt ? userSelectedOpt.label : 'Kosong'}</strong> (Jawaban Benar: <strong className="text-emerald-700">{correctOpt?.label}</strong>)
                      </span>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </button>

                  {/* Expanded Logic Details */}
                  {isExpanded && (
                    <div className="p-6 border-t border-slate-200 bg-white space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Matrix Grid preview */}
                        <div className="w-full max-w-xs mx-auto aspect-square p-2 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
                          <div className="grid grid-cols-3 gap-2 w-full h-full">
                            {q.matrixSpec.cells.map((c, cIdx) => (
                              <MatrixCellSVG key={cIdx} spec={c} isQuestionMark={c === null} />
                            ))}
                          </div>
                        </div>

                        {/* Options Comparison & Explanation */}
                        <div className="space-y-3 text-xs">
                          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-500/30">
                            <span className="text-emerald-700 font-bold block">Jawaban Benar: Pilihan {correctOpt?.label}</span>
                            <span className="text-slate-700 block mt-1 font-medium">Aturan Pola: {q.ruleDescription}</span>
                          </div>

                          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed font-medium">
                            <strong className="text-slate-900 block mb-1">Penjelasan Logika Psikometri:</strong>
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
            <div className="w-full max-w-2xl bg-white border-4 border-slate-900 p-8 rounded-2xl shadow-xl relative overflow-hidden text-center text-slate-900 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-emerald-600" />
                  <span className="font-extrabold text-lg tracking-wider">NEUROMATRIX IQ</span>
                </div>
                <span className="text-xs text-slate-500 font-bold">ID: NMX-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>

              <div>
                <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest block">
                  SERTIFIKAT HASIL TES PSIKOMETRI
                </span>
                <h3 className="text-2xl font-black mt-2">KECERDASAN CAIR & LOGIKA VISUAL</h3>
                <p className="text-xs text-slate-600 mt-1 font-medium">Berdasarkan Raven's Progressive Matrices & Skala Wechsler (SD=15)</p>
              </div>

              <div className="py-4 border-y border-slate-200 max-w-md mx-auto space-y-2 bg-slate-50 rounded-xl">
                <span className="text-xs text-slate-500 font-bold block">ESTIMASI SKOR IQ RESMI</span>
                <div className="text-6xl font-black text-slate-900 tracking-tight">{result.iqScore}</div>
                <div className="text-sm font-extrabold text-emerald-700">{result.classification}</div>
                <span className="text-xs text-slate-600 font-medium block">Persentil Populasi: Top {result.percentile}%</span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 font-medium pt-2">
                <span>Tanggal: {result.completedAt}</span>
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Terverifikasi 100% Bebas Paywall
                </span>
              </div>
            </div>

            <button
              onClick={handlePrintCertificate}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Cetak / Simpan PDF Sertifikat</span>
            </button>
          </div>
        )}
      </div>

      {/* Tech Architecture Banner bottom */}
      <ScrollZoomIn delay={0.15}>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div>
          <h4 className="font-bold text-slate-900 text-base">Bagaimana platform tes IQ gratis ini dibuat?</h4>
          <p className="text-xs text-slate-600 mt-1 font-medium">
            Lihat rekomendasi stack teknologi, hosting gratis selamanya, dan arsitektur penghitungan IQ tanpa backend.
          </p>
        </div>
        <button
          onClick={onOpenTechGuide}
          className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all shrink-0 border border-slate-300 cursor-pointer"
        >
          Buka Panduan Teknis
        </button>
      </div>
      </ScrollZoomIn>
    </div>
  );
};
