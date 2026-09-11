import { Question, TestResult, DomainScore, CognitiveDomain } from '../types';

export function calculateIQResult(
  questions: Question[],
  userAnswers: { questionId: number; selectedOptionId: number | null; timeTakenSeconds: number }[],
  totalTimeSpentSeconds: number
): TestResult {
  let rawCorrect = 0;
  let weightedScore = 0;
  let maxWeightedScore = 0;

  const domainStats: Record<CognitiveDomain, { correct: number; total: number; weighted: number; maxWeighted: number }> = {
    'visual-spatial': { correct: 0, total: 0, weighted: 0, maxWeighted: 0 },
    'pattern-recognition': { correct: 0, total: 0, weighted: 0, maxWeighted: 0 },
    'logical-deduction': { correct: 0, total: 0, weighted: 0, maxWeighted: 0 },
    'abstract-reasoning': { correct: 0, total: 0, weighted: 0, maxWeighted: 0 },
    'working-memory': { correct: 0, total: 0, weighted: 0, maxWeighted: 0 },
  };

  const processedAnswers = questions.map((q) => {
    const userAns = userAnswers.find((a) => a.questionId === q.id);
    const selectedOptionId = userAns ? userAns.selectedOptionId : null;
    const isCorrect = selectedOptionId === q.correctOptionId;
    const timeTaken = userAns ? userAns.timeTakenSeconds : 0;

    maxWeightedScore += q.difficultyWeight;
    domainStats[q.domain].total += 1;
    domainStats[q.domain].maxWeighted += q.difficultyWeight;

    if (isCorrect) {
      rawCorrect += 1;
      weightedScore += q.difficultyWeight;
      domainStats[q.domain].correct += 1;
      domainStats[q.domain].weighted += q.difficultyWeight;
    }

    return {
      questionId: q.id,
      selectedOptionId,
      isCorrect,
      timeTakenSeconds: timeTaken,
    };
  });

  // Calculate base IQ from weighted score percentage
  const percentage = weightedScore / maxWeightedScore;

  // Normal distribution mapping:
  // 0% -> IQ 70
  // 50% -> IQ 100
  // 80% -> IQ 120
  // 100% -> IQ 145
  let baseIQ = 70 + percentage * 75;

  // Speed Bonus calculation:
  // Expected average time per question is 45 seconds.
  // Standard test expected total time = questions.length * 45s
  const expectedTotalTime = questions.length * 45;
  let speedMultiplier = 1.0;
  let speedBonus = 0;

  if (percentage >= 0.5 && totalTimeSpentSeconds < expectedTotalTime) {
    const savedRatio = (expectedTotalTime - totalTimeSpentSeconds) / expectedTotalTime;
    speedBonus = Math.min(6, Math.round(savedRatio * 8 * percentage));
    speedMultiplier = Number((1 + savedRatio * 0.15).toFixed(2));
  }

  const finalIQ = Math.min(155, Math.max(70, Math.round(baseIQ + speedBonus)));

  // Calculate Percentile based on Wechsler SD=15 scale: z = (IQ - 100) / 15
  const zScore = (finalIQ - 100) / 15;
  const percentile = calculatePercentileFromZ(zScore);

  // Classification & Color branding
  const { classification, classificationColor } = getIQClassification(finalIQ);

  // Domain score breakdown
  const domainBreakdown: DomainScore[] = (Object.keys(domainStats) as CognitiveDomain[]).map((dom) => {
    const stat = domainStats[dom];
    const domPercentage = stat.total > 0 ? stat.correct / stat.total : 0;
    const domIQ = Math.min(145, Math.max(70, Math.round(70 + domPercentage * 75)));

    return {
      domain: dom,
      domainName: getDomainLabel(dom),
      correct: stat.correct,
      total: stat.total,
      percentage: Math.round(domPercentage * 100),
      score: domIQ,
    };
  });

  return {
    iqScore: finalIQ,
    percentile,
    classification,
    classificationColor,
    rawScore: rawCorrect,
    totalQuestions: questions.length,
    weightedScore: Number(weightedScore.toFixed(1)),
    maxWeightedScore: Number(maxWeightedScore.toFixed(1)),
    timeSpentSeconds: totalTimeSpentSeconds,
    speedMultiplier,
    domainBreakdown,
    userAnswers: processedAnswers,
    completedAt: new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
  };
}

function calculatePercentileFromZ(z: number): number {
  // Error function (erf) approximation for Cumulative Normal Distribution
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  const cdf = z >= 0 ? 1 - p : p;
  const perc = Math.round(cdf * 1000) / 10;
  return Math.min(99.9, Math.max(0.1, perc));
}

export function getIQClassification(iq: number): { classification: string; classificationColor: string } {
  if (iq >= 145) {
    return { classification: 'Jenius Luar Biasa (Genius / Top 0.1%)', classificationColor: '#EC4899' };
  } else if (iq >= 130) {
    return { classification: 'Sangat Superior (Superior / Gifted)', classificationColor: '#818CF8' };
  } else if (iq >= 120) {
    return { classification: 'Tinggi (High Average)', classificationColor: '#06B6D4' };
  } else if (iq >= 110) {
    return { classification: 'Di Atas Rata-Rata (Above Average)', classificationColor: '#10B981' };
  } else if (iq >= 90) {
    return { classification: 'Rata-Rata Normal (Average)', classificationColor: '#38BDF8' };
  } else if (iq >= 80) {
    return { classification: 'Di Bawah Rata-Rata (Low Average)', classificationColor: '#F59E0B' };
  } else {
    return { classification: 'Perlu Latihan Kognitif (Borderline)', classificationColor: '#EF4444' };
  }
}

export function getDomainLabel(domain: CognitiveDomain): string {
  switch (domain) {
    case 'visual-spatial':
      return 'Visual-Spasial';
    case 'pattern-recognition':
      return 'Pengenalan Pola';
    case 'logical-deduction':
      return 'Deduksi Logis';
    case 'abstract-reasoning':
      return 'Penalaran Abstrak';
    case 'working-memory':
      return 'Memori Kerja & Manipulasi';
  }
}
