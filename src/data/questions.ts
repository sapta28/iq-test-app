import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'Soal 1: Rotasi Spasial Sederhana',
    domain: 'visual-spatial',
    difficulty: 'easy',
    difficultyWeight: 1.0,
    ruleDescription: 'Bentuk berputar 90° searah jarum jam pada setiap langkah di sepanjang baris.',
    explanation: 'Pada setiap baris, segitiga berputar 90° searah jarum jam: posisi pertama menghadap ke atas (0°), posisi kedua menghadap ke kanan (90°), maka posisi ketiga harus menghadap ke bawah (180°).',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'polygon', points: '50,20 80,75 20,75', stroke: '#6366F1', strokeWidth: 4 }] },
        { shapes: [{ type: 'polygon', points: '50,20 80,75 20,75', stroke: '#6366F1', strokeWidth: 4, rotation: 90 }] },
        { shapes: [{ type: 'polygon', points: '50,20 80,75 20,75', stroke: '#6366F1', strokeWidth: 4, rotation: 180 }] },

        { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#06B6D4', strokeWidth: 4 }] },
        { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#06B6D4', strokeWidth: 4, rotation: 45 }] },
        { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#06B6D4', strokeWidth: 4, rotation: 90 }] },

        { shapes: [{ type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#10B981', strokeWidth: 6 }] },
        { shapes: [{ type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#10B981', strokeWidth: 6, rotation: 45 }] },
        null, // Marked as ?
      ],
    },
    correctOptionId: 2, // Choice C (Horizontal line 90 deg rotation)
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#10B981', strokeWidth: 6, rotation: 0 }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#10B981', strokeWidth: 6, rotation: 45 }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#10B981', strokeWidth: 6, rotation: 90 }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 25, stroke: '#10B981', strokeWidth: 4 }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'cross', stroke: '#10B981', strokeWidth: 4 }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#EC4899', strokeWidth: 6, rotation: 135 }] } },
    ],
  },
  {
    id: 2,
    title: 'Soal 2: Progresi Jumlah Elemen',
    domain: 'pattern-recognition',
    difficulty: 'easy',
    difficultyWeight: 1.0,
    ruleDescription: 'Jumlah titik bertambah 1 di setiap kolom sepanjang baris.',
    explanation: 'Baris 1 berpola 1, 2, 3 titik. Baris 2 berpola 2, 3, 4 titik. Baris 3 dimulai dari 3, 4 titik, sehingga kotak kosong harus berisi 5 titik.',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'dots', count: 1, stroke: '#818CF8', r: 7 }] },
        { shapes: [{ type: 'dots', count: 2, stroke: '#818CF8', r: 7 }] },
        { shapes: [{ type: 'dots', count: 3, stroke: '#818CF8', r: 7 }] },

        { shapes: [{ type: 'dots', count: 2, stroke: '#38BDF8', r: 7 }] },
        { shapes: [{ type: 'dots', count: 3, stroke: '#38BDF8', r: 7 }] },
        { shapes: [{ type: 'dots', count: 4, stroke: '#38BDF8', r: 7 }] },

        { shapes: [{ type: 'dots', count: 3, stroke: '#34D399', r: 7 }] },
        { shapes: [{ type: 'dots', count: 4, stroke: '#34D399', r: 7 }] },
        null,
      ],
    },
    correctOptionId: 3, // Choice D (5 dots)
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'dots', count: 2, stroke: '#34D399', r: 7 }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'dots', count: 3, stroke: '#34D399', r: 7 }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'dots', count: 4, stroke: '#34D399', r: 7 }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'dots', count: 5, stroke: '#34D399', r: 7 }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'dots', count: 1, stroke: '#34D399', r: 7 }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#34D399', strokeWidth: 3 }] } },
    ],
  },
  {
    id: 3,
    title: 'Soal 3: Pengisian & Kompleksitas Isi (Fill Density)',
    domain: 'logical-deduction',
    difficulty: 'medium',
    difficultyWeight: 1.5,
    ruleDescription: 'Bentuk luar tetap sama dalam satu baris, sedangkan bentuk dalam bertahap diisi warna.',
    explanation: 'Pada baris ketiga, bentuk luar adalah lingkaran dan bentuk dalam adalah bintang. Kolom 1 bintang kosong (stroke), kolom 2 bintang terisi warna lembut, kolom 3 bintang harus terisi penuh (solid fill).',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#F472B6', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 50, r: 15, stroke: '#F472B6', strokeWidth: 3, fill: 'none' }] },
        { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#F472B6', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 50, r: 15, stroke: '#F472B6', strokeWidth: 3, fill: 'rgba(244, 114, 182, 0.4)' }] },
        { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#F472B6', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 50, r: 15, stroke: '#F472B6', strokeWidth: 3, fill: '#F472B6' }] },

        { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#FBBF24', strokeWidth: 3 }, { type: 'rect', x: 40, y: 45, width: 20, height: 20, stroke: '#FBBF24', strokeWidth: 3, fill: 'none' }] },
        { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#FBBF24', strokeWidth: 3 }, { type: 'rect', x: 40, y: 45, width: 20, height: 20, stroke: '#FBBF24', strokeWidth: 3, fill: 'rgba(251, 191, 36, 0.4)' }] },
        { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#FBBF24', strokeWidth: 3 }, { type: 'rect', x: 40, y: 45, width: 20, height: 20, stroke: '#FBBF24', strokeWidth: 3, fill: '#FBBF24' }] },

        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#A7F3D0', strokeWidth: 3 }, { type: 'star', stroke: '#A7F3D0', strokeWidth: 2, fill: 'none' }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#A7F3D0', strokeWidth: 3 }, { type: 'star', stroke: '#A7F3D0', strokeWidth: 2, fill: 'rgba(167, 243, 208, 0.4)' }] },
        null,
      ],
    },
    correctOptionId: 1, // Choice B
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#A7F3D0', strokeWidth: 3 }, { type: 'star', stroke: '#A7F3D0', strokeWidth: 2, fill: 'none' }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#A7F3D0', strokeWidth: 3 }, { type: 'star', stroke: '#A7F3D0', strokeWidth: 2, fill: '#A7F3D0' }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#A7F3D0', strokeWidth: 3 }, { type: 'star', stroke: '#A7F3D0', strokeWidth: 2, fill: '#A7F3D0' }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#A7F3D0', strokeWidth: 3 }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'star', stroke: '#A7F3D0', strokeWidth: 3, fill: '#A7F3D0' }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 35, fill: '#A7F3D0' }] } },
    ],
  },
  {
    id: 4,
    title: 'Soal 4: Operasi Penggabungan Garis (Superimposition)',
    domain: 'abstract-reasoning',
    difficulty: 'medium',
    difficultyWeight: 1.5,
    ruleDescription: 'Kolom ketiga adalah gabungan (OR) dari elemen garis pada kolom 1 dan kolom 2.',
    explanation: 'Pada baris ke-3, kolom 1 adalah garis diagonal utama (\), kolom 2 adalah garis anti-diagonal (/), sehingga kolom 3 harus berupa gabungan kedua diagonal membentuk silang (X).',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'line', x1: 30, y1: 20, x2: 30, y2: 80, stroke: '#6366F1', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 70, y1: 20, x2: 70, y2: 80, stroke: '#6366F1', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 30, y1: 20, x2: 30, y2: 80, stroke: '#6366F1', strokeWidth: 4 }, { type: 'line', x1: 70, y1: 20, x2: 70, y2: 80, stroke: '#6366F1', strokeWidth: 4 }] },

        { shapes: [{ type: 'line', x1: 20, y1: 30, x2: 80, y2: 30, stroke: '#38BDF8', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 20, y1: 70, x2: 80, y2: 70, stroke: '#38BDF8', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 20, y1: 30, x2: 80, y2: 30, stroke: '#38BDF8', strokeWidth: 4 }, { type: 'line', x1: 20, y1: 70, x2: 80, y2: 70, stroke: '#38BDF8', strokeWidth: 4 }] },

        { shapes: [{ type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 80, y1: 20, x2: 20, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }] },
        null,
      ],
    },
    correctOptionId: 0, // Choice A
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }, { type: 'line', x1: 80, y1: 20, x2: 20, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'cross', stroke: '#4ADE80', strokeWidth: 4 }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#4ADE80', strokeWidth: 4 }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#4ADE80', strokeWidth: 4 }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'dots', count: 4, stroke: '#4ADE80', r: 6 }] } },
    ],
  },
  {
    id: 5,
    title: 'Soal 5: Transformasi Skala & Konsentris',
    domain: 'visual-spatial',
    difficulty: 'medium',
    difficultyWeight: 1.5,
    ruleDescription: 'Kolom 1 lingkaran kecil, Kolom 2 lingkaran sedang, Kolom 3 gabungan konsentris keduanya.',
    explanation: 'Pada setiap baris, kolom ketiga menggabungkan ukuran dari kolom 1 dan kolom 2 secara bertumpuk (konsentris).',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 15, stroke: '#E879F9', strokeWidth: 3 }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#E879F9', strokeWidth: 3 }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 15, stroke: '#E879F9', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#E879F9', strokeWidth: 3 }] },

        { shapes: [{ type: 'rect', x: 35, y: 35, width: 30, height: 30, stroke: '#FBBF24', strokeWidth: 3 }] },
        { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#FBBF24', strokeWidth: 3 }] },
        { shapes: [{ type: 'rect', x: 35, y: 35, width: 30, height: 30, stroke: '#FBBF24', strokeWidth: 3 }, { type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#FBBF24', strokeWidth: 3 }] },

        { shapes: [{ type: 'polygon', points: '50,35 65,65 35,65', stroke: '#38BDF8', strokeWidth: 3 }] },
        { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#38BDF8', strokeWidth: 3 }] },
        null,
      ],
    },
    correctOptionId: 2, // Choice C
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'polygon', points: '50,35 65,65 35,65', stroke: '#38BDF8', strokeWidth: 3 }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#38BDF8', strokeWidth: 3 }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'polygon', points: '50,35 65,65 35,65', stroke: '#38BDF8', strokeWidth: 3 }, { type: 'polygon', points: '50,15 85,85 15,85', stroke: '#38BDF8', strokeWidth: 3 }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 25, stroke: '#38BDF8', strokeWidth: 3 }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#38BDF8', strokeWidth: 3 }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'cross', stroke: '#38BDF8', strokeWidth: 3 }] } },
    ],
  },
  {
    id: 6,
    title: 'Soal 6: Pergeseran Sudut & Orientasi Titik Fokus',
    domain: 'working-memory',
    difficulty: 'hard',
    difficultyWeight: 2.0,
    ruleDescription: 'Titik hitam berputar 90° berlawanan arah jarum jam pada sudut-sudut bujur sangkar.',
    explanation: 'Di baris 3, bujur sangkar memiliki titik penanda. Titik berpindah dari Kanan-Bawah (posisi 1) -> Kanan-Atas (posisi 2) -> Kiri-Atas (posisi 3, rotasi counter-clockwise).',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#818CF8', strokeWidth: 3 }, { type: 'circle', cx: 25, cy: 25, r: 6, fill: '#818CF8' }] },
        { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#818CF8', strokeWidth: 3 }, { type: 'circle', cx: 75, cy: 25, r: 6, fill: '#818CF8' }] },
        { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#818CF8', strokeWidth: 3 }, { type: 'circle', cx: 75, cy: 75, r: 6, fill: '#818CF8' }] },

        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#F43F5E', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 20, r: 6, fill: '#F43F5E' }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#F43F5E', strokeWidth: 3 }, { type: 'circle', cx: 80, cy: 50, r: 6, fill: '#F43F5E' }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#F43F5E', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 80, r: 6, fill: '#F43F5E' }] },

        { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#10B981', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 20, r: 6, fill: '#10B981' }] },
        { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#10B981', strokeWidth: 3 }, { type: 'circle', cx: 80, cy: 80, r: 6, fill: '#10B981' }] },
        null,
      ],
    },
    correctOptionId: 4, // Choice E (Dot on bottom left vertex 20,80)
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#10B981', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 20, r: 6, fill: '#10B981' }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#10B981', strokeWidth: 3 }, { type: 'circle', cx: 80, cy: 80, r: 6, fill: '#10B981' }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#10B981', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 50, r: 6, fill: '#10B981' }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#10B981', strokeWidth: 3 }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#10B981', strokeWidth: 3 }, { type: 'circle', cx: 20, cy: 80, r: 6, fill: '#10B981' }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#10B981', strokeWidth: 3 }] } },
    ],
  },
  {
    id: 7,
    title: 'Soal 7: Operasi Logika Kurang (Subtraksi Visual)',
    domain: 'logical-deduction',
    difficulty: 'hard',
    difficultyWeight: 2.0,
    ruleDescription: 'Kolom 3 = Kolom 1 MINUS Kolom 2 (Menghapus bagian yang sama).',
    explanation: 'Di setiap baris, gambar di kolom 3 adalah sisa gambar kolom 1 setelah dikurangi elemen yang ada di kolom 2.',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#38BDF8', strokeWidth: 3 }, { type: 'cross', stroke: '#38BDF8', strokeWidth: 3 }] },
        { shapes: [{ type: 'cross', stroke: '#38BDF8', strokeWidth: 3 }] },
        { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#38BDF8', strokeWidth: 3 }] },

        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#FBBF24', strokeWidth: 3 }, { type: 'line', x1: 15, y1: 50, x2: 85, y2: 50, stroke: '#FBBF24', strokeWidth: 3 }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 35, stroke: '#FBBF24', strokeWidth: 3 }] },
        { shapes: [{ type: 'line', x1: 15, y1: 50, x2: 85, y2: 50, stroke: '#FBBF24', strokeWidth: 3 }] },

        { shapes: [{ type: 'grid_lines', stroke: '#C084FC', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 50, r: 15, stroke: '#C084FC', strokeWidth: 3 }] },
        { shapes: [{ type: 'grid_lines', stroke: '#C084FC', strokeWidth: 3 }] },
        null,
      ],
    },
    correctOptionId: 1, // Choice B (Circle r=15)
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'grid_lines', stroke: '#C084FC', strokeWidth: 3 }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 15, stroke: '#C084FC', strokeWidth: 3 }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'cross', stroke: '#C084FC', strokeWidth: 3 }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'rect', x: 30, y: 30, width: 40, height: 40, stroke: '#C084FC', strokeWidth: 3 }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'dots', count: 3, stroke: '#C084FC', r: 5 }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#C084FC', strokeWidth: 3 }] } },
    ],
  },
  {
    id: 8,
    title: 'Soal 8: Permutasi Sudut & Distribusi Matriks Latin',
    domain: 'pattern-recognition',
    difficulty: 'hard',
    difficultyWeight: 2.0,
    ruleDescription: 'Setiap baris dan kolom harus mengandung persis satu Segitiga, Bujur Sangkar, dan Lingkaran (Matriks Persegi Latin).',
    explanation: 'Baris 3 sudah memiliki Lingkaran (kolom 1) dan Segitiga (kolom 2). Berdasarkan aturan permutasi unik Latin Square, kolom 3 wajib berisi Bujur Sangkar (Rect).',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 25, stroke: '#F472B6', strokeWidth: 4 }] },
        { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#F472B6', strokeWidth: 4 }] },
        { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#F472B6', strokeWidth: 4 }] },

        { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#60A5FA', strokeWidth: 4 }] },
        { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#60A5FA', strokeWidth: 4 }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 25, stroke: '#60A5FA', strokeWidth: 4 }] },

        { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#34D399', strokeWidth: 4 }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 25, stroke: '#34D399', strokeWidth: 4 }] },
        null,
      ],
    },
    correctOptionId: 0, // Choice A (Rect)
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#34D399', strokeWidth: 4 }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 25, stroke: '#34D399', strokeWidth: 4 }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'polygon', points: '50,20 80,80 20,80', stroke: '#34D399', strokeWidth: 4 }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'cross', stroke: '#34D399', strokeWidth: 4 }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'star', stroke: '#34D399', strokeWidth: 3 }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'line', x1: 20, y1: 50, x2: 80, y2: 50, stroke: '#34D399', strokeWidth: 5 }] } },
    ],
  },
  {
    id: 9,
    title: 'Soal 9: Deduksi Multivariat (Rotasi + Jumlah)',
    domain: 'abstract-reasoning',
    difficulty: 'genius',
    difficultyWeight: 2.5,
    ruleDescription: 'Baris mengatur Sudut Garis (0°, 45°, 90°), sedangkan Kolom mengatur Jumlah Garis Paralel (1, 2, 3).',
    explanation: 'Kotak kosong berada di Baris 3 (Rotasi 90° / Vertikal) dan Kolom 3 (3 garis paralel). Maka jawaban harus 3 garis vertikal paralel.',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'line', x1: 20, y1: 50, x2: 80, y2: 50, stroke: '#F59E0B', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 20, y1: 35, x2: 80, y2: 35, stroke: '#F59E0B', strokeWidth: 4 }, { type: 'line', x1: 20, y1: 65, x2: 80, y2: 65, stroke: '#F59E0B', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 20, y1: 25, x2: 80, y2: 25, stroke: '#F59E0B', strokeWidth: 4 }, { type: 'line', x1: 20, y1: 50, x2: 80, y2: 50, stroke: '#F59E0B', strokeWidth: 4 }, { type: 'line', x1: 20, y1: 75, x2: 80, y2: 75, stroke: '#F59E0B', strokeWidth: 4 }] },

        { shapes: [{ type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#EC4899', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 15, y1: 30, x2: 75, y2: 90, stroke: '#EC4899', strokeWidth: 4 }, { type: 'line', x1: 30, y1: 15, x2: 90, y2: 75, stroke: '#EC4899', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 10, y1: 40, x2: 70, y2: 100, stroke: '#EC4899', strokeWidth: 4 }, { type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#EC4899', strokeWidth: 4 }, { type: 'line', x1: 40, y1: 10, x2: 100, y2: 70, stroke: '#EC4899', strokeWidth: 4 }] },

        { shapes: [{ type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#10B981', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 35, y1: 20, x2: 35, y2: 80, stroke: '#10B981', strokeWidth: 4 }, { type: 'line', x1: 65, y1: 20, x2: 65, y2: 80, stroke: '#10B981', strokeWidth: 4 }] },
        null,
      ],
    },
    correctOptionId: 3, // Choice D (3 vertical lines)
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#10B981', strokeWidth: 4 }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'line', x1: 35, y1: 20, x2: 35, y2: 80, stroke: '#10B981', strokeWidth: 4 }, { type: 'line', x1: 65, y1: 20, x2: 65, y2: 80, stroke: '#10B981', strokeWidth: 4 }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'cross', stroke: '#10B981', strokeWidth: 4 }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'line', x1: 25, y1: 20, x2: 25, y2: 80, stroke: '#10B981', strokeWidth: 4 }, { type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#10B981', strokeWidth: 4 }, { type: 'line', x1: 75, y1: 20, x2: 75, y2: 80, stroke: '#10B981', strokeWidth: 4 }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'rect', x: 25, y: 25, width: 50, height: 50, stroke: '#10B981', strokeWidth: 4 }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'dots', count: 3, stroke: '#10B981', r: 6 }] } },
    ],
  },
  {
    id: 10,
    title: 'Soal 10: Logika XOR Biner Simetris',
    domain: 'abstract-reasoning',
    difficulty: 'genius',
    difficultyWeight: 2.5,
    ruleDescription: 'Operasi XOR (Exclusive OR): Garis yang muncul HANYA di salah satu kolom (1 atau 2) akan tetap ada di kolom 3. Garis yang muncul di KEDUA kolom akan hilang.',
    explanation: 'Di baris 3: Kolom 1 punya Salib (+), Kolom 2 punya Salib (+) + Bujur Sangkar. Karena Salib (+) ada di kedua kolom, Salib saling menghapuskan (cancel out), menyisakan HANYA Bujur Sangkar.',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'cross', stroke: '#818CF8', strokeWidth: 4 }] },
        { shapes: [{ type: 'cross', stroke: '#818CF8', strokeWidth: 4 }, { type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#818CF8', strokeWidth: 4 }] },
        { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#818CF8', strokeWidth: 4 }] },

        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#06B6D4', strokeWidth: 4 }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#06B6D4', strokeWidth: 4 }, { type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#06B6D4', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#06B6D4', strokeWidth: 4 }] },

        { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#F43F5E', strokeWidth: 4 }] },
        { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#F43F5E', strokeWidth: 4 }, { type: 'circle', cx: 50, cy: 55, r: 15, stroke: '#F43F5E', strokeWidth: 4 }] },
        null,
      ],
    },
    correctOptionId: 1, // Choice B (Circle r=15 at 50,55)
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#F43F5E', strokeWidth: 4 }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'circle', cx: 50, cy: 55, r: 15, stroke: '#F43F5E', strokeWidth: 4 }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#F43F5E', strokeWidth: 4 }, { type: 'circle', cx: 50, cy: 55, r: 15, stroke: '#F43F5E', strokeWidth: 4 }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'cross', stroke: '#F43F5E', strokeWidth: 4 }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#F43F5E', strokeWidth: 4 }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'dots', count: 2, stroke: '#F43F5E', r: 5 }] } },
    ],
  },
  {
    id: 11,
    title: 'Soal 11: Rotasi Kuadran Terarsir',
    domain: 'working-memory',
    difficulty: 'medium',
    difficultyWeight: 1.5,
    ruleDescription: 'Bentuk berpusat di kuadran tertentu berputar searah jarum jam: Kiri-Atas -> Kanan-Atas -> Kanan-Bawah -> Kiri-Bawah.',
    explanation: 'Di baris 3, titik merah berada di Kiri-Atas (kolom 1), berpindah ke Kanan-Atas (kolom 2), sehingga di kolom 3 harus berpindah ke Kanan-Bawah.',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'circle', cx: 32, cy: 32, r: 10, fill: '#6366F1' }] },
        { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'circle', cx: 68, cy: 32, r: 10, fill: '#6366F1' }] },
        { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'circle', cx: 68, cy: 68, r: 10, fill: '#6366F1' }] },

        { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'rect', x: 22, y: 22, width: 20, height: 20, fill: '#38BDF8' }] },
        { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'rect', x: 58, y: 22, width: 20, height: 20, fill: '#38BDF8' }] },
        { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'rect', x: 58, y: 58, width: 20, height: 20, fill: '#38BDF8' }] },

        { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'polygon', points: '32,22 42,42 22,42', fill: '#F43F5E' }] },
        { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'polygon', points: '68,22 78,42 58,42', fill: '#F43F5E' }] },
        null,
      ],
    },
    correctOptionId: 2, // Choice C (Triangle at 68, 68)
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'polygon', points: '32,22 42,42 22,42', fill: '#F43F5E' }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'polygon', points: '68,22 78,42 58,42', fill: '#F43F5E' }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'polygon', points: '68,58 78,78 58,78', fill: '#F43F5E' }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'polygon', points: '32,58 42,78 22,78', fill: '#F43F5E' }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }, { type: 'circle', cx: 50, cy: 50, r: 15, fill: '#F43F5E' }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'rect', x: 15, y: 15, width: 70, height: 70, stroke: '#475569', strokeWidth: 2 }] } },
    ],
  },
  {
    id: 12,
    title: 'Soal 12: Refleksi Cermin Diagonal',
    domain: 'visual-spatial',
    difficulty: 'hard',
    difficultyWeight: 2.0,
    ruleDescription: 'Bentuk di kolom 3 adalah cerminan dari kolom 1 terhadap sumbu vertikal pusat (kolom 2 berfungsi sebagai cermin/sumbu simetri).',
    explanation: 'Pada baris 3, panah menghadap Kiri-Atas (kolom 1), kolom 2 adalah sumbu simetri vertikal, sehingga di kolom 3 panah tercermin menghadap Kanan-Atas.',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'line', x1: 20, y1: 20, x2: 50, y2: 80, stroke: '#A855F7', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 50, y1: 15, x2: 50, y2: 85, stroke: '#64748B', strokeWidth: 2, strokeDasharray: '4 4' }] },
        { shapes: [{ type: 'line', x1: 80, y1: 20, x2: 50, y2: 80, stroke: '#A855F7', strokeWidth: 4 }] },

        { shapes: [{ type: 'polygon', points: '20,30 40,30 20,70', stroke: '#10B981', strokeWidth: 3, fill: 'rgba(16,185,129,0.3)' }] },
        { shapes: [{ type: 'line', x1: 50, y1: 15, x2: 50, y2: 85, stroke: '#64748B', strokeWidth: 2, strokeDasharray: '4 4' }] },
        { shapes: [{ type: 'polygon', points: '80,30 60,30 80,70', stroke: '#10B981', strokeWidth: 3, fill: 'rgba(16,185,129,0.3)' }] },

        { shapes: [{ type: 'circle', cx: 30, cy: 30, r: 12, stroke: '#F59E0B', strokeWidth: 3, fill: '#F59E0B' }] },
        { shapes: [{ type: 'line', x1: 50, y1: 15, x2: 50, y2: 85, stroke: '#64748B', strokeWidth: 2, strokeDasharray: '4 4' }] },
        null,
      ],
    },
    correctOptionId: 1, // Choice B (Circle at 70,30)
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'circle', cx: 30, cy: 30, r: 12, stroke: '#F59E0B', strokeWidth: 3, fill: '#F59E0B' }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'circle', cx: 70, cy: 30, r: 12, stroke: '#F59E0B', strokeWidth: 3, fill: '#F59E0B' }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'circle', cx: 70, cy: 70, r: 12, stroke: '#F59E0B', strokeWidth: 3, fill: '#F59E0B' }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 12, stroke: '#F59E0B', strokeWidth: 3, fill: '#F59E0B' }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'rect', x: 60, y: 20, width: 24, height: 24, stroke: '#F59E0B', strokeWidth: 3 }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'cross', stroke: '#F59E0B', strokeWidth: 3 }] } },
    ],
  },
  {
    id: 13,
    title: 'Soal 13: Konsistensi Jumlah Garis Jari-Jari (Rays)',
    domain: 'pattern-recognition',
    difficulty: 'medium',
    difficultyWeight: 1.5,
    ruleDescription: 'Jumlah sinar/garis yang keluar dari pusat bertambah: 2 sinar -> 4 sinar -> 6 sinar.',
    explanation: 'Pada baris 3, bintang/sinar memiliki 2 garis (kolom 1), 4 garis (kolom 2), sehingga di kolom 3 harus memiliki 6 garis sinar memancar.',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#38BDF8', strokeWidth: 4 }] },
        { shapes: [{ type: 'cross', stroke: '#38BDF8', strokeWidth: 4 }] },
        { shapes: [{ type: 'cross', stroke: '#38BDF8', strokeWidth: 4 }, { type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#38BDF8', strokeWidth: 4 }] },

        { shapes: [{ type: 'line', x1: 20, y1: 50, x2: 80, y2: 50, stroke: '#F472B6', strokeWidth: 4 }] },
        { shapes: [{ type: 'cross', stroke: '#F472B6', strokeWidth: 4 }] },
        { shapes: [{ type: 'cross', stroke: '#F472B6', strokeWidth: 4 }, { type: 'line', x1: 80, y1: 20, x2: 20, y2: 80, stroke: '#F472B6', strokeWidth: 4 }] },

        { shapes: [{ type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }] },
        { shapes: [{ type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }, { type: 'line', x1: 80, y1: 20, x2: 20, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }] },
        null,
      ],
    },
    correctOptionId: 0, // Choice A (X + Vertical line)
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }, { type: 'line', x1: 80, y1: 20, x2: 20, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }, { type: 'line', x1: 50, y1: 20, x2: 50, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'cross', stroke: '#4ADE80', strokeWidth: 4 }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'line', x1: 20, y1: 20, x2: 80, y2: 80, stroke: '#4ADE80', strokeWidth: 4 }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#4ADE80', strokeWidth: 4 }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 25, stroke: '#4ADE80', strokeWidth: 4 }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'dots', count: 6, stroke: '#4ADE80', r: 5 }] } },
    ],
  },
  {
    id: 14,
    title: 'Soal 14: Matriks Komposisi Bertingkat',
    domain: 'logical-deduction',
    difficulty: 'genius',
    difficultyWeight: 2.5,
    ruleDescription: 'Bentuk Bingkai Luar ditentukan oleh Baris (Baris 1 = Persegi, Baris 2 = Lingkaran, Baris 3 = Segitiga). Bentuk Dalam ditentukan oleh Kolom (Kolom 1 = Titik, Kolom 2 = Salib, Kolom 3 = Bintang).',
    explanation: 'Kotak kosong di Baris 3 (Bingkai Segitiga) dan Kolom 3 (Isi Bintang). Maka jawaban tepat adalah Segitiga dengan Bintang di dalamnya.',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#818CF8', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 50, r: 8, fill: '#818CF8' }] },
        { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#818CF8', strokeWidth: 3 }, { type: 'cross', stroke: '#818CF8', strokeWidth: 3 }] },
        { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#818CF8', strokeWidth: 3 }, { type: 'star', stroke: '#818CF8', strokeWidth: 2, fill: '#818CF8' }] },

        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 32, stroke: '#06B6D4', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 50, r: 8, fill: '#06B6D4' }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 32, stroke: '#06B6D4', strokeWidth: 3 }, { type: 'cross', stroke: '#06B6D4', strokeWidth: 3 }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 32, stroke: '#06B6D4', strokeWidth: 3 }, { type: 'star', stroke: '#06B6D4', strokeWidth: 2, fill: '#06B6D4' }] },

        { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#F43F5E', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 55, r: 8, fill: '#F43F5E' }] },
        { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#F43F5E', strokeWidth: 3 }, { type: 'cross', stroke: '#F43F5E', strokeWidth: 3 }] },
        null,
      ],
    },
    correctOptionId: 2, // Choice C (Triangle with star inside)
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#F43F5E', strokeWidth: 3 }, { type: 'circle', cx: 50, cy: 55, r: 8, fill: '#F43F5E' }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#F43F5E', strokeWidth: 3 }, { type: 'cross', stroke: '#F43F5E', strokeWidth: 3 }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#F43F5E', strokeWidth: 3 }, { type: 'star', stroke: '#F43F5E', strokeWidth: 2, fill: '#F43F5E' }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#F43F5E', strokeWidth: 3 }, { type: 'star', stroke: '#F43F5E', strokeWidth: 2, fill: '#F43F5E' }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 32, stroke: '#F43F5E', strokeWidth: 3 }, { type: 'star', stroke: '#F43F5E', strokeWidth: 2, fill: '#F43F5E' }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'star', stroke: '#F43F5E', strokeWidth: 3, fill: '#F43F5E' }] } },
    ],
  },
  {
    id: 15,
    title: 'Soal 15: Inversi Warna & Simetri Spasial',
    domain: 'visual-spatial',
    difficulty: 'genius',
    difficultyWeight: 2.5,
    ruleDescription: 'Kolom 1 dan Kolom 3 mengalami Inversi Warna (Negatif Visual): bagian yang awalnya stroke transparan menjadi terisi solid, dan sebaliknya.',
    explanation: 'Di baris 3, kolom 1 adalah Bujur Sangkar terisi padat dengan Lingkaran bolong di tengahnya. Inversinya (kolom 3) harus berupa Lingkaran terisi padat di dalam bujur sangkar stroke transparan.',
    matrixSpec: {
      type: 'matrix_3x3',
      cells: [
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 30, fill: '#6366F1' }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 30, stroke: '#6366F1', strokeWidth: 4, fill: 'none' }] },
        { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 30, fill: '#6366F1' }] },

        { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#06B6D4', strokeWidth: 4, fill: 'none' }] },
        { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', fill: '#06B6D4' }] },
        { shapes: [{ type: 'polygon', points: '50,15 85,85 15,85', stroke: '#06B6D4', strokeWidth: 4, fill: 'none' }] },

        { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, fill: '#10B981' }, { type: 'circle', cx: 50, cy: 50, r: 15, fill: '#1E293B' }] },
        { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#10B981', strokeWidth: 3, fill: 'none' }, { type: 'circle', cx: 50, cy: 50, r: 15, stroke: '#10B981', strokeWidth: 3, fill: 'none' }] },
        null,
      ],
    },
    correctOptionId: 0, // Choice A
    options: [
      { id: 0, label: 'A', spec: { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, fill: '#10B981' }, { type: 'circle', cx: 50, cy: 50, r: 15, fill: '#1E293B' }] } },
      { id: 1, label: 'B', spec: { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, stroke: '#10B981', strokeWidth: 3, fill: 'none' }, { type: 'circle', cx: 50, cy: 50, r: 15, fill: '#10B981' }] } },
      { id: 2, label: 'C', spec: { shapes: [{ type: 'circle', cx: 50, cy: 50, r: 25, fill: '#10B981' }] } },
      { id: 3, label: 'D', spec: { shapes: [{ type: 'rect', x: 20, y: 20, width: 60, height: 60, fill: '#10B981' }] } },
      { id: 4, label: 'E', spec: { shapes: [{ type: 'cross', stroke: '#10B981', strokeWidth: 4 }] } },
      { id: 5, label: 'F', spec: { shapes: [{ type: 'star', fill: '#10B981' }] } },
    ],
  },
];
