export type CognitiveDomain =
  | 'visual-spatial'
  | 'pattern-recognition'
  | 'logical-deduction'
  | 'abstract-reasoning'
  | 'working-memory';

export type TestMode = 'quick' | 'standard' | 'practice';

export interface SVGPatternSpec {
  type: 'matrix_3x3' | 'sequence' | 'spatial_transform' | 'boolean_overlap';
  cells: (SVGCellSpec | null)[]; // 9 cells for 3x3 grid, last cell is null (marked with ?)
}

export interface SVGCellSpec {
  shapes?: Array<{
    type: 'circle' | 'rect' | 'polygon' | 'line' | 'cross' | 'star' | 'dots' | 'grid_lines' | 'arc' | 'combined';
    cx?: number;
    cy?: number;
    r?: number;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
    rotation?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    points?: string;
    count?: number;
    patternVariant?: number;
  }>;
  background?: string;
}

export interface QuestionOption {
  id: number; // 0..5
  label: string; // A, B, C, D, E, F
  spec: SVGCellSpec;
}

export interface Question {
  id: number;
  title: string;
  domain: CognitiveDomain;
  difficulty: 'easy' | 'medium' | 'hard' | 'genius';
  difficultyWeight: number; // 1.0, 1.5, 2.0, 2.5
  matrixSpec: SVGPatternSpec;
  options: QuestionOption[];
  correctOptionId: number;
  explanation: string;
  ruleDescription: string;
}

export interface DomainScore {
  domain: CognitiveDomain;
  domainName: string;
  correct: number;
  total: number;
  percentage: number;
  score: number; // Normalized 70-145 scale for domain
}

export interface TestResult {
  iqScore: number;
  percentile: number;
  classification: string;
  classificationColor: string;
  rawScore: number;
  totalQuestions: number;
  weightedScore: number;
  maxWeightedScore: number;
  timeSpentSeconds: number;
  speedMultiplier: number;
  domainBreakdown: DomainScore[];
  userAnswers: { questionId: number; selectedOptionId: number | null; isCorrect: boolean; timeTakenSeconds: number }[];
  completedAt: string;
}
