import { NormativeCohortPage } from "./components/NormativeCohortPage";
import { RpmMethodologyPage } from "./components/RpmMethodologyPage";
import { TransparencyPage } from "./components/TransparencyPage";
import { FaqPage } from "./components/FaqPage";
import { Footer } from "./components/Footer";
import React, { useState, useEffect } from "react";
import { TestMode, TestResult } from "./types";
import { QUESTIONS } from "./data/questions";
import { calculateIQResult } from "./utils/iqCalculator";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TestInterface } from "./components/TestInterface";
import { ResultsPage } from "./components/ResultsPage";
import { TechStackGuide } from "./components/TechStackGuide";

const LOCAL_STORAGE_KEY = "neuromatrix_iq_history";

export function App() {
  const [viewState, setViewState] = useState<"hero" | "metodologi" | "kohort" | "transparansi" | "faq" | "testing" | "results">("hero");
  const [testMode, setTestMode] = useState<TestMode>("standard");
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
      console.error("Failed to load test history:", e);
    }
  }, []);

  const handleStartTest = (mode: TestMode) => {
    setTestMode(mode);
    if (mode === "quick") {
      setCurrentQuestions(QUESTIONS.filter((_, idx) => [0, 1, 3, 5, 7, 8, 9, 13].includes(idx)));
    } else {
      setCurrentQuestions(QUESTIONS);
    }
    setViewState("testing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinishTest = (
    userAnswers: { questionId: number; selectedOptionId: number | null; timeTakenSeconds: number }[],
    totalTimeSpentSeconds: number
  ) => {
    const res = calculateIQResult(currentQuestions, userAnswers, totalTimeSpentSeconds);
    setTestResult(res);
    setViewState("results");

    try {
      const updatedHistory = [res, ...pastResults].slice(0, 10);
      setPastResults(updatedHistory);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch (e) {
      console.error("Failed to save test result:", e);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetake = () => {
    setViewState("hero");
    setTestResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearHistory = () => {
    setPastResults([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const handleSelectPastResult = (res: TestResult) => {
    setTestResult(res);
    setViewState("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Shared Site Header */}
      <Header
        onOpenTechGuide={() => setIsTechGuideOpen(true)}
        onGoHome={() => setViewState("hero")}
        isTesting={viewState === "testing"}
        onScrollToSection={handleScrollToSection}
        currentView={viewState}
        onSelectView={(v) => setViewState(v)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {viewState === "hero" && (
          <Hero
            onStartTest={handleStartTest}
            onOpenTechGuide={() => setIsTechGuideOpen(true)}
            pastResults={pastResults}
            onSelectPastResult={handleSelectPastResult}
            onClearHistory={handleClearHistory}
          />
        )}

        {viewState === "metodologi" && (
          <RpmMethodologyPage
            onStartTest={handleStartTest}
            onGoHome={() => setViewState("hero")}
          />
        )}

        {viewState === "kohort" && (
          <NormativeCohortPage
            onStartTest={handleStartTest}
            onGoToMethodology={() => setViewState("metodologi")}
          />
        )}

        {viewState === "transparansi" && (
          <TransparencyPage
            onStartTest={handleStartTest}
            onSelectView={(v) => setViewState(v)}
          />
        )}

        {viewState === "faq" && (
          <FaqPage
            onStartTest={handleStartTest}
            onSelectView={(v) => setViewState(v)}
          />
        )}

        {viewState === "testing" && (
          <TestInterface
            questions={currentQuestions}
            mode={testMode}
            onFinishTest={handleFinishTest}
            onCancelTest={() => setViewState("hero")}
          />
        )}

        {viewState === "results" && testResult && (
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

      {/* Shared Site Footer */}
      <Footer onSelectView={(v) => setViewState(v)} />
    </div>
  );
}

export default App;
