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

    try {
      const updatedHistory = [res, ...pastResults].slice(0, 10);
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

  const handleScrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Header */}
      <Header
        onOpenTechGuide={() => setIsTechGuideOpen(true)}
        onGoHome={() => setViewState('hero')}
        isTesting={viewState === 'testing'}
        onScrollToSection={handleScrollToSection}
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

      {/* Footer (Academic Clinical Template) */}
      <footer className="bg-white border-t border-border-subtle pt-12 pb-8 text-text-slate-secondary text-xs sm:text-sm">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border-subtle">
            {/* Brand & Credential Statement */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-text-slate-primary">NeuroMatrix</span>
                <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant uppercase">
                  LABS
                </span>
              </div>
              <p className="text-text-slate-secondary text-xs leading-relaxed max-w-sm">
                Inisiatif sains terbuka untuk menyediakan tolok ukur pengujian fluid intelligence yang adil, bebas bias budaya, dan transparan tanpa paywall eksploitatif.
              </p>
              <div className="flex items-center gap-3 pt-1 text-xs text-text-slate-secondary font-mono">
                <span>KALIBRASI WECHSLER SD=15</span>
                <span>•</span>
                <span>CRONBACH α 0.91</span>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="md:col-span-2 sm:col-span-4 space-y-2.5">
              <div className="text-xs text-text-slate-primary font-bold uppercase tracking-wider">METODOLOGI</div>
              <ul className="space-y-2 text-xs">
                <li><a className="hover:text-primary transition-colors" href="#metodologi">Raven SPM Basis</a></li>
                <li><a className="hover:text-primary transition-colors" href="#distribusi">Distribusi Gauss SD=15</a></li>
                <li><a className="hover:text-primary transition-colors" href="#komparasi">Normalisasi Kohort</a></li>
                <li><a className="hover:text-primary transition-colors" href="#metodologi">Item Response Theory</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="md:col-span-2 sm:col-span-4 space-y-2.5">
              <div className="text-xs text-text-slate-primary font-bold uppercase tracking-wider">INSTRUMEN</div>
              <ul className="space-y-2 text-xs">
                <li><a className="hover:text-primary transition-colors" href="#mode-tes">Tes Standar (12 Min)</a></li>
                <li><a className="hover:text-primary transition-colors" href="#mode-tes">Tes Kilat (6 Min)</a></li>
                <li><a className="hover:text-primary transition-colors" href="#mode-tes">Mode Deconstruct</a></li>
                <li><a className="hover:text-primary transition-colors" href="#beranda">Verifikasi Sertifikat</a></li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div className="md:col-span-3 sm:col-span-4 space-y-2.5">
              <div className="text-xs text-text-slate-primary font-bold uppercase tracking-wider">ETIKA & PRIVASI</div>
              <ul className="space-y-2 text-xs">
                <li><a className="hover:text-primary transition-colors" href="#beranda">Protokol Client-Side Zero-Trace</a></li>
                <li><a className="hover:text-primary transition-colors" href="#beranda">Pemberitahuan Lisensi Bebas</a></li>
                <li><a className="hover:text-primary transition-colors" href="#beranda">Kode Etik Asosiasi Psikologi</a></li>
                <li><a className="hover:text-primary transition-colors" href="#beranda">Kontribusi Dataset Anonim</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-text-slate-secondary gap-3">
            <div>
              © 2026 NeuroMatrix Labs. Terbuka di bawah lisensi Open Psychometric Framework.
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1 font-semibold text-primary">
                <span className="material-symbols-outlined text-[14px]">verified</span> Validasi Terkalibrasi
              </span>
              <span>•</span>
              <span>Bukan Rujukan Diagnostik Medis Psikiatri</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
