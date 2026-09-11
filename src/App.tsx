import React, { useState, useEffect } from 'react';
import { TestMode, TestResult } from './types';
import { QUESTIONS } from './data/questions';
import { calculateIQResult } from './utils/iqCalculator';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TestInterface } from './components/TestInterface';
import { ResultsPage } from './components/ResultsPage';
import { TechStackGuide } from './components/TechStackGuide';

const LOCAL_STORAGE_KEY = 'neuromatrix_iq_history';

export function App() {
  const [viewState, setViewState] = useState<'hero' | 'testing' | 'results'>('hero');
  const [testMode, setTestMode] = useState<TestMode>('standard');
  const [currentQuestions, setCurrentQuestions] = useState(QUESTIONS);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [isTechGuideOpen, setIsTechGuideOpen] = useState(false);
  const [pastResults, setPastResults] = useState<TestResult[]>([]);

  // Load test history from localStorage on mount
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedHistory) {
        setPastResults(JSON.parse(savedHistory));
      }
    } catch (e) {
      console.error('Failed to load test history:', e);
    }
  }, []);

  const handleStartTest = (mode: TestMode) => {
    setTestMode(mode);
    if (mode === 'quick') {
      // Select 8 balanced questions (id: 1, 2, 4, 6, 8, 9, 10, 14)
      setCurrentQuestions(QUESTIONS.filter((_, idx) => [0, 1, 3, 5, 7, 8, 9, 13].includes(idx)));
    } else {
      setCurrentQuestions(QUESTIONS);
    }
    setViewState('testing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishTest = (
    userAnswers: { questionId: number; selectedOptionId: number | null; timeTakenSeconds: number }[],
    totalTimeSpentSeconds: number
  ) => {
    const res = calculateIQResult(currentQuestions, userAnswers, totalTimeSpentSeconds);
    setTestResult(res);
    setViewState('results');

    // Save to localStorage history
    try {
      const updatedHistory = [res, ...pastResults].slice(0, 10); // Keep max 10 past results
      setPastResults(updatedHistory);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch (e) {
      console.error('Failed to save test result:', e);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setViewState('hero');
    setTestResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearHistory = () => {
    setPastResults([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const handleSelectPastResult = (res: TestResult) => {
    setTestResult(res);
    setViewState('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <Header
        onOpenTechGuide={() => setIsTechGuideOpen(true)}
        onGoHome={() => setViewState('hero')}
        isTesting={viewState === 'testing'}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {viewState === 'hero' && (
          <Hero
            onStartTest={handleStartTest}
            onOpenTechGuide={() => setIsTechGuideOpen(true)}
            pastResults={pastResults}
            onSelectPastResult={handleSelectPastResult}
            onClearHistory={handleClearHistory}
          />
        )}

        {viewState === 'testing' && (
          <TestInterface
            questions={currentQuestions}
            mode={testMode}
            onFinishTest={handleFinishTest}
            onCancelTest={() => setViewState('hero')}
          />
        )}

        {viewState === 'results' && testResult && (
          <ResultsPage
            result={testResult}
            questions={currentQuestions}
            onRetake={handleRetake}
            onOpenTechGuide={() => setIsTechGuideOpen(true)}
          />
        )}
      </main>

      {/* Technical Architecture Modal */}
      <TechStackGuide
        isOpen={isTechGuideOpen}
        onClose={() => setIsTechGuideOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-slate-900/90 border-t border-slate-800 py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>© 2026 NeuroMatrix IQ Test — Platform Tes IQ Psikometri Bebas Paywall.</p>
          <p className="text-slate-400">
            Menggunakan Skala Wechsler (SD=15) & Raven Progressive Matrices. Dikembangkan untuk edukasi & penilaian kecerdasan cair secara transparan.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
