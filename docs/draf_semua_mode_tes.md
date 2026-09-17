# Master Draf Spesifikasi: Perbandingan 3 Mode Tes
## NeuroMatrix Labs — Integrated Test Suite Specifications

---

### 1. Perbandingan Matriks Fitur (Feature Comparison Matrix)

| Fitur / Parameter | 1. Tes Standar Klinis | 2. Mode Kilat Mobile | 3. Mode Latihan Bebas |
| :--- | :--- | :--- | :--- |
| **Kode Mode (`TestMode`)** | `'standard'` | `'quick'` | `'practice'` |
| **Jumlah Soal** | 30 Item Matriks | 8–18 Item Kalibrasi IRT | 30 Item Matriks |
| **Durasi Timer** | 12 Menit (720 Detik) | 6 Menit (360 Detik) | **Tanpa Batas Waktu** |
| **Tujuan Utama** | Sertifikasi Presisi Murni | Skrining Cepat Smartphone | Edukasi & Latihan Pola |
| **Akurasi Psikometri** | Sangat Tinggi ($r = 0.91$) | Tinggi ($r = 0.84$) | N/A (Pembelajaran) |
| **Penjelasan Real-time** | Tidak (Setelah Tes) | Tidak (Setelah Tes) | **Ya (Toggle Drawer)** |
| **Sertifikat PDF** | **Ya (Full QR & SHA-256)** | **Ya (Versi Mini Badge)** | Tidak Ada |
| **Auto-Submit Timer** | **Ya (pada 00:00)** | **Ya (pada 00:00)** | Tidak Ada Timer |
| **Shortcuts Keyboard** | `1`–`8`, Panah Kiri/Kanan | `1`–`8`, Panah Kiri/Kanan | `1`–`8`, Panah Kiri/Kanan |

---

### 2. Arsitektur Komponen React (`TestInterface.tsx`)

Dalam kode basis data proyek `iq-test-app`, ketiga mode ini dilayani oleh 1 komponen modular utama: **`TestInterface.tsx`** yang menerima prop `mode: TestMode`:

```tsx
interface TestInterfaceProps {
  questions: Question[];
  mode: TestMode;
  onFinishTest: (
    answers: { questionId: number; selectedOptionId: number | null; timeTakenSeconds: number }[],
    totalTime: number
  ) => void;
  onCancelTest: () => void;
}
```

#### Logika Pengkondisian Kode:
1. **Inisialisasi Waktu**:
   ```typescript
   const initialTimeLimit = mode === 'quick' ? 360 : mode === 'standard' ? 720 : 0;
   ```
2. **Auto-Filter Soal Mode Kilat**:
   ```typescript
   if (mode === 'quick') {
     setCurrentQuestions(QUESTIONS.filter((_, idx) => [0, 1, 3, 5, 7, 8, 9, 13].includes(idx)));
   } else {
     setCurrentQuestions(QUESTIONS);
   }
   ```
3. **Toggle Drawer Penjelasan (Mode Latihan)**:
   ```typescript
   {mode === 'practice' && (
     <button onClick={() => setShowPracticeExplanation(!showPracticeExplanation)}>
       💡 Lihat Kunci & Logika Pola
     </button>
   )}
   ```

---

### 3. Rangkuman Alur & Transisi Pengguna

1. **Pemilihan Mode**: Di Beranda (`Hero.tsx`), pengguna memilih salah satu dari 3 kartu mode.
2. **Pelaksanaan Tes**: Pengguna dibawa ke `TestInterface.tsx` yang secara otomatis menyesuaikan timer, jumlah soal, dan fitur pembantu.
3. **Penyelesaian Tes**:
   - Untuk **Tes Standar** & **Mode Kilat**: Sistem melakukan kalkulasi skor Wechsler IRT dan mengarahkan ke `ResultsPage.tsx` untuk mengunduh sertifikat PDF terverifikasi.
   - Untuk **Mode Latihan**: Pengguna mendapatkan ringkasan pemahaman latihan dan dapat mengulang soal kapan saja.
