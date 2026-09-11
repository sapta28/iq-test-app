import React, { useState, useEffect, useRef } from 'react';
import { Question, TestMode } from '../types';
import { MatrixCellSVG } from './MatrixCellSVG';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, HelpCircle, AlertTriangle, Eye } from 'lucide-react';

interface TestInterfaceProps {
  questions: Question[];
  mode: TestMode;
  onFinishTest: (answers: { questionId: number; selectedOptionId: number | null; timeTakenSeconds: number }[], totalTime: number) => void;
  onCancelTest: () => void;
}

export const TestInterface: React.FC<TestInterfaceProps> = ({
  questions,
  mode,
  onFinishTest,
  onCancelTest,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({});
  const [questionTimeMap, setQuestionTimeMap] = useState<Record<number, number>>({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showPracticeExplanation, setShowPracticeExplanation] = useState(false);

  // Timer state
  const initialTimeLimit = mode === 'quick' ? 360 : mode === 'standard' ? 720 : 0; // 6 mins or 12 mins
  const [timeLeft, setTimeLeft] = useState(initialTimeLimit);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);

  const questionStartTimeRef = useRef<number>(Date.now());

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  // Global Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTimeSpent((prev) => prev + 1);

      if (mode !== 'practice') {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [mode]);

  // Track time per question
  useEffect(() => {
    questionStartTimeRef.current = Date.now();
    setShowPracticeExplanation(false);
  }, [currentIndex]);

  const handleSelectOption = (optionId: number) => {
    const elapsedSeconds = Math.round((Date.now() - questionStartTimeRef.current) / 1000);

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));

    setQuestionTimeMap((prev) => ({
      ...prev,
      [currentQuestion.id]: (prev[currentQuestion.id] || 0) + elapsedSeconds,
    }));

    questionStartTimeRef.current = Date.now();
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleAutoSubmit = () => {
    submitFinalAnswers();
  };

  const submitFinalAnswers = () => {
    const finalAnswers = questions.map((q) => ({
      questionId: q.id,
      selectedOptionId: selectedAnswers[q.id] ?? null,
      timeTakenSeconds: questionTimeMap[q.id] || 15,
    }));
    onFinishTest(finalAnswers, totalTimeSpent);
  };

  const answeredCount = Object.values(selectedAnswers).filter((ans) => ans !== null).length;
  const isSelected = selectedAnswers[currentQuestion.id] !== undefined && selectedAnswers[currentQuestion.id] !== null;

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Top Test Navigation & Bar */}
      <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-6 mb-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onCancelTest}
              className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
              title="Keluar dari Tes"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                {mode === 'quick' ? 'Tes Kilat' : mode === 'standard' ? 'Tes Standar' : 'Mode Latihan'}
              </span>
              <h2 className="text-lg font-bold text-white">
                Soal {currentIndex + 1} <span className="text-slate-400 font-normal">dari {totalQuestions}</span>
              </h2>
            </div>
          </div>

          {/* Timer Display */}
          {mode !== 'practice' ? (
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-mono text-lg font-bold ${
                timeLeft < 120
                  ? 'bg-rose-950/60 border-rose-500/50 text-rose-400 animate-pulse'
                  : 'bg-slate-900 border-slate-700 text-cyan-400'
              }`}
            >
              <Clock className="w-5 h-5" />
              <span>{formatTimer(timeLeft)}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400 font-mono text-sm font-semibold">
              <Clock className="w-4 h-4" />
              <span>Waktu: {formatTimer(totalTimeSpent)}</span>
            </div>
          )}

          {/* Finish Button */}
          <button
            onClick={() => setShowConfirmModal(true)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Selesaikan Tes ({answeredCount}/{totalQuestions})</span>
          </button>
        </div>

        {/* Progress Bar & Jump Navigator */}
        <div className="mt-6">
          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden mb-4 border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Quick Item Grid Navigator */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {questions.map((q, idx) => {
              const isAnswered = selectedAnswers[q.id] !== undefined && selectedAnswers[q.id] !== null;
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center shrink-0 ${
                    isCurrent
                      ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 scale-105'
                      : isAnswered
                      ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-400'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-700'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Question Display & Answer Options */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 3x3 Matrix Pattern */}
        <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Domain: <strong className="text-indigo-400">{currentQuestion.domain}</strong>
            </span>
            <span
              className={`text-xs px-2.5 py-1 rounded-md font-semibold uppercase ${
                currentQuestion.difficulty === 'easy'
                  ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                  : currentQuestion.difficulty === 'medium'
                  ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30'
                  : currentQuestion.difficulty === 'hard'
                  ? 'bg-indigo-950/60 text-indigo-400 border border-indigo-500/30'
                  : 'bg-rose-950/60 text-rose-400 border border-rose-500/30'
              }`}
            >
              {currentQuestion.difficulty}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white text-center mb-6">{currentQuestion.title}</h3>

          {/* 3x3 Matrix Grid Container */}
          <div className="w-full max-w-md aspect-square grid grid-cols-3 gap-3 p-3 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-2xl">
            {currentQuestion.matrixSpec.cells.map((cellSpec, cellIdx) => (
              <div key={cellIdx} className="w-full h-full aspect-square">
                <MatrixCellSVG spec={cellSpec} isQuestionMark={cellSpec === null} />
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-4 text-center">
            Pilihlah salah satu bentuk di sebelah kanan/bawah yang paling tepat untuk mengisi tanda <strong>?</strong>
          </p>
        </div>

        {/* Right Column: 6 Option Choices (A-F) */}
        <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col justify-between h-full">
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider text-slate-300">
              Pilihan Jawaban (A — F):
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {currentQuestion.options.map((opt) => {
                const isSelectedChoice = selectedAnswers[currentQuestion.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`group relative p-2 rounded-xl transition-all duration-200 border text-left flex flex-col items-center justify-center aspect-square ${
                      isSelectedChoice
                        ? 'bg-indigo-950/90 border-indigo-500 ring-2 ring-indigo-400 shadow-lg shadow-indigo-500/20 scale-[1.03]'
                        : 'bg-slate-900 hover:bg-slate-850 border-slate-700 hover:border-indigo-500/50'
                    }`}
                  >
                    <span
                      className={`absolute top-2 left-2 text-xs font-bold w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                        isSelectedChoice ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </span>

                    <div className="w-3/4 h-3/4 mt-2">
                      <MatrixCellSVG spec={opt.spec} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Practice Mode Explanation Drawer */}
          {mode === 'practice' && isSelected && (
            <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-indigo-500/30">
              <button
                onClick={() => setShowPracticeExplanation(!showPracticeExplanation)}
                className="w-full flex items-center justify-between text-xs font-semibold text-indigo-400 hover:text-indigo-300"
              >
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {showPracticeExplanation ? 'Sembunyikan Pembahasan' : 'Lihat Pembahasan Logika'}
                </span>
              </button>

              {showPracticeExplanation && (
                <div className="mt-3 text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-3">
                  <p className="font-semibold text-emerald-400">Aturan: {currentQuestion.ruleDescription}</p>
                  <p className="leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              )}
            </div>
          )}

          {/* Prev / Next Controls */}
          <div className="mt-8 flex items-center justify-between gap-4 pt-4 border-t border-slate-700/60">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-900 text-slate-600'
                  : 'bg-slate-700 hover:bg-slate-600 text-white'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {currentIndex < totalQuestions - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
              >
                <span>Selanjutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowConfirmModal(true)}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Selesai</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal before Submit */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-amber-400">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-lg font-bold text-white">Konfirmasi Penyelesaian Tes</h3>
            </div>

            <p className="text-sm text-slate-300">
              Anda telah menjawab <strong className="text-emerald-400">{answeredCount}</strong> dari{' '}
              <strong className="text-white">{totalQuestions}</strong> soal.
              {answeredCount < totalQuestions && (
                <span className="block mt-2 text-rose-400 font-semibold">
                  Masih ada {totalQuestions - answeredCount} soal yang belum dijawab. Yakin ingin menyelesaikan tes sekarang?
                </span>
              )}
            </p>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium"
              >
                Lanjutkan Mengerjakan
              </button>
              <button
                onClick={submitFinalAnswers}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-950/50"
              >
                Selesaikan Tes Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
