import { ScrollZoomIn } from './ScrollZoomIn';
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
  const initialTimeLimit = mode === 'quick' ? 360 : mode === 'standard' ? 720 : 0;
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
      {/* Top Test Navigation Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 mb-6 shadow-card">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onCancelTest}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Keluar dari Tes"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {mode === 'quick' ? 'Tes Kilat' : mode === 'standard' ? 'Tes Standar' : 'Mode Latihan'}
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                Soal {currentIndex + 1} <span className="text-slate-500 font-normal">dari {totalQuestions}</span>
              </h2>
            </div>
          </div>

          {/* Timer Display */}
          {mode !== 'practice' ? (
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-mono text-lg font-bold ${
                timeLeft < 120
                  ? 'bg-rose-50 border-rose-300 text-rose-600 animate-pulse'
                  : 'bg-slate-100 border-slate-200 text-slate-900'
              }`}
            >
              <Clock className="w-5 h-5 text-emerald-600" />
              <span>{formatTimer(timeLeft)}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-mono text-sm font-semibold">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Waktu: {formatTimer(totalTimeSpent)}</span>
            </div>
          )}

          {/* Finish Button */}
          <button
            onClick={() => setShowConfirmModal(true)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Selesaikan Tes ({answeredCount}/{totalQuestions})</span>
          </button>
        </div>

        {/* Progress Bar & Jump Navigator */}
        <div className="mt-6">
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4 border border-slate-200">
            <div
              className="h-full bg-emerald-600 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Quick Item Grid Navigator */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
            {questions.map((q, idx) => {
              const isAnswered = selectedAnswers[q.id] !== undefined && selectedAnswers[q.id] !== null;
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center shrink-0 cursor-pointer ${
                    isCurrent
                      ? 'bg-emerald-600 text-white ring-2 ring-emerald-500 scale-105'
                      : isAnswered
                      ? 'bg-emerald-50 border border-emerald-500/40 text-emerald-700'
                      : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
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
        {/* Left Column: 3x3 Matrix Pattern Card */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-card flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Domain: <strong className="text-slate-900 font-bold">{currentQuestion.domain}</strong>
            </span>
            <span
              className={`text-xs px-3 py-1 rounded-md font-bold uppercase ${
                currentQuestion.difficulty === 'easy'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-500/30'
                  : currentQuestion.difficulty === 'medium'
                  ? 'bg-blue-50 text-blue-700 border border-blue-500/30'
                  : currentQuestion.difficulty === 'hard'
                  ? 'bg-slate-100 text-slate-800 border border-slate-300'
                  : 'bg-rose-50 text-rose-700 border border-rose-300'
              }`}
            >
              {currentQuestion.difficulty}
            </span>
          </div>

          <h3 className="text-lg font-extrabold text-slate-900 text-center mb-6">{currentQuestion.title}</h3>

          {/* 3x3 Matrix Grid Container */}
          <div className="w-full max-w-md aspect-square grid grid-cols-3 gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
            {currentQuestion.matrixSpec.cells.map((cellSpec, cellIdx) => (
              <div key={cellIdx} className="w-full h-full aspect-square">
                <MatrixCellSVG spec={cellSpec} isQuestionMark={cellSpec === null} />
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 mt-4 text-center font-medium">
            Pilihlah salah satu bentuk di sebelah kanan/bawah yang paling tepat untuk mengisi tanda <strong>?</strong>
          </p>
        </div>

        {/* Right Column: 6 Option Choices (A-F) */}
        <ScrollZoomIn delay={0.2} className="lg:col-span-5 h-full">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card flex flex-col justify-between h-full">
          <div>
            <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wider">
              Pilihan Jawaban (A — F):
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {currentQuestion.options.map((opt) => {
                const isSelectedChoice = selectedAnswers[currentQuestion.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`group relative p-2 rounded-xl transition-all duration-200 border text-left flex flex-col items-center justify-center aspect-square cursor-pointer ${
                      isSelectedChoice
                        ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500 scale-[1.03]'
                        : 'bg-slate-50 hover:bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span
                      className={`absolute top-2 left-2 text-xs font-bold w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                        isSelectedChoice ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700 group-hover:bg-slate-900 group-hover:text-white'
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
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <button
                onClick={() => setShowPracticeExplanation(!showPracticeExplanation)}
                className="w-full flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-emerald-600" />
                  {showPracticeExplanation ? 'Sembunyikan Pembahasan' : 'Lihat Pembahasan Logika'}
                </span>
              </button>

              {showPracticeExplanation && (
                <div className="mt-3 text-xs text-slate-700 space-y-2 border-t border-slate-200 pt-3">
                  <p className="font-bold text-emerald-700">Aturan: {currentQuestion.ruleDescription}</p>
                  <p className="leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              )}
            </div>
          )}

          {/* Prev / Next Controls */}
          <div className="mt-8 flex items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {currentIndex < totalQuestions - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Selanjutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowConfirmModal(true)}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Selesai</span>
              </button>
            )}
          </div>
        </div>
        </ScrollZoomIn>
      </div>

      {/* Confirmation Modal before Submit */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3 text-amber-600">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg font-bold text-slate-900">Konfirmasi Penyelesaian Tes</h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Anda telah menjawab <strong className="text-emerald-700">{answeredCount}</strong> dari{' '}
              <strong className="text-slate-900">{totalQuestions}</strong> soal.
              {answeredCount < totalQuestions && (
                <span className="block mt-2 text-rose-600 font-semibold">
                  Masih ada {totalQuestions - answeredCount} soal yang belum dijawab. Yakin ingin menyelesaikan tes sekarang?
                </span>
              )}
            </p>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold cursor-pointer"
              >
                Lanjutkan Mengerjakan
              </button>
              <button
                onClick={submitFinalAnswers}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-sm cursor-pointer"
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
