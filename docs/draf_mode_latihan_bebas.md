# Draf Spesifikasi & PRD: Mode Latihan Bebas (Untimed Practice Mode)
## NeuroMatrix Labs — Educational Practice & Logic Breakdown

---

### 1. Deskripsi Mode (Mode Overview)
**Mode Latihan Bebas (Tanpa Batas Waktu)** dirancang khusus untuk pembelajaran kognitif, pemahaman aturan logika matriks progresif, dan eksplorasi pola induktif tanpa tekanan jam timer. Mode ini memungkinkan pengguna membuka panel **Penjelasan Logika Real-Time** pada setiap butir soal.

---

### 2. Parameter Utama (Key Parameters)

* **Jumlah Item Soal**: 30 Item Matriks Progresif.
* **Alokasi Waktu Total**: **Tanpa Batas Waktu (Untimed / Infinite Time)**.
* **Fitur Kunci**: Toggle Drawer *"Lihat Kunci & Logika Pola"* pada setiap nomor soal.
* **Tujuan Penggunaan**: Latihan mandiri, edukasi pola visual-spasial, dan persiapan sebelum mengambil Tes Standar Klinis.
* **Sertifikat PDF**: Tidak menghasilkan sertifikat formal (hanya laporan ringkasan pemahaman latihan).

---

### 3. Spesifikasi Fitur Panel Penjelasan Real-Time (Explanation Drawer)

Pada Mode Latihan, di bawah kisi pilihan jawaban terdapat tombol interaktif:
`[ 💡 LIHAT PENJELASAN LOGIKA POLA ]`

Saat tombol ini di-tap/dilik:
* Panel drawer berlatar belakang hijau muda lembut (`#E6F2ED`) dengan border emerald (`#005f40`) terbuka secara eksplisit.
* Menyajikan 3 informasi utama:
  1. **Jawaban Benar**: Menyebutkan opsi mana yang tepat (misal: *Opsi C*).
  2. **Aturan Pola (Rule Description)**: Menyebutkan hukum matematika/geometri soal (misal: *"Rotasi 90° searah jarum jam sepanjang baris dengan penambahan 1 titik"*).
  3. **Langkah Analisis (Step-by-step Breakdown)**:
     - Analisis Baris 1 (Top Row): Pola pengarah.
     - Analisis Baris 2 (Middle Row): Pola verifikasi.
     - Analisis Baris 3 (Bottom Row): Deduksi solusi slot kosong `?`.

---

### 4. Spesifikasi Antarmuka UX/UI Mode Latihan (Practice Interface Layout)

```
+---------------------------------------------------------------------------------------+
|  [NEUROMATRIX LABS]   [🟢 MODE LATIHAN BEBAS]   [⏱ BEBAS]   [Soal 1 / 30]           [✕] |
+---------------------------------------------------------------------------------------+
|                                                                                       |
|  +---------------------------------------+   +-------------------------------------+  |
|  | KANVAS MATRIKS UTAMA (SVG 3x3)        |   | PILIHAN JAWABAN (6-8 OPSI)          |  |
|  | +---------+---------+---------+       |   | +-------+ +-------+ +-------+       |  |
|  | | Cell A  | Cell B  | Cell C  |       |   | |[1] A  | |[2] B  | |[3]*C* |       |  |
|  | +---------+---------+---------+       |   | +-------+ +-------+ +-------+       |  |
|  | | Cell D  | Cell E  | Cell F  |       |   | |[4] D  | |[5] E  | |[6] F  |       |  |
|  | +---------+---------+---------+       |   | +-------+ +-------+ +-------+       |  |
|  | | Cell G  | Cell H  |   [?]   |       |   +-------------------------------------+  |
|  | +---------+---------+---------+       |                                            |
|  +---------------------------------------+   [ 💡 LIHAT PENJELASAN LOGIKA POLA ]      |
|                                                                                       |
|  +---------------------------------------------------------------------------------+  |
|  | 💡 PANEL PENJELASAN REAL-TIME (DRAWER TERBUKA):                                 |  |
|  | Kunci Jawaban: C                                                                |  |
|  | Aturan: Baris 1 berpola 1,2,3 titik. Baris 2 berpola 2,3,4. Baris 3 harus 3,4,5.   |  |
|  +---------------------------------------------------------------------------------+  |
|                                                                                       |
|  [ < SEBELUM ]              [1] [2] ... [30]              [ SELANJUTNYA > ]           |
+---------------------------------------------------------------------------------------+
```
