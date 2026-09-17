# Draf Spesifikasi & PRD: Tes Standar Klinis (12 Menit)
## NeuroMatrix Labs — Clinical Standard Assessment Protocol

---

### 1. Deskripsi Mode (Mode Overview)
**Tes Standar Klinis (12 Menit)** adalah instrumen asesmen utama pada NeuroMatrix Labs dengan tingkat presisi normatif paling tinggi ($r = 0.91$). Mode ini dirancang untuk pengguna yang membutuhkan pengukuran kapasitas *General Fluid Intelligence ($g$-factor)* secara menyeluruh dan valid secara psikometri.

---

### 2. Parameter Utama (Key Parameters)

* **Jumlah Item Soal**: 30 Item Matriks Progresif 3x3.
* **Alokasi Waktu Total**: 12 Menit (720 Detik).
* **Alokasi Waktu Rata-rata per Item**: 24 Detik / Soal.
* **Sistem Penilaian (Scoring System)**: Skala Wechsler Normatif ($Mean = 100, SD = 15$).
* **Sensitivitas Persentil**: Persentil 0.1% hingga 99.9% (Skor IQ 55 hingga 145+).
* **Output Dokumen**: Sertifikat Digital PDF Resolusi Tinggi lengkap dengan **QR Code Terverifikasi** & **Cryptographic SHA-256 Checksum Hash**.

---

### 3. Distribusi Bobot & Tingkat Kesukaran Soal

| Nomor Item | Tingkat Kesukaran | Bobot IRT ($\theta$) | Domain Kognitif | Aturan Logika Utama |
| :--- | :--- | :--- | :--- | :--- |
| **Item 1 – 10** | Mudah (*Easy*) | $1.0 - 1.2$ | Visual-Spasial & Pola Sederhana | Rotasi 90°/180°, Progresi Jumlah Elemen (1-2-3), Translasi Bentuk |
| **Item 11 – 20**| Sedang (*Medium*) | $1.5 - 2.0$ | Penalaran Induktif & Deret Matriks | Inversi Isi/Warna, Refleksi Simetri, Superposisi Gambar Kompleks |
| **Item 21 – 30**| Sukar (*Hard*) | $2.5 - 3.2$ | Penalaran Analitis & Operasi Boolean | Logika XOR/AND/OR Spasial, Pengurangan Vektor, Pola Kombinatorik 3D |

---

### 4. Spesifikasi Antarmuka UX/UI (Interface Layout)

```
+---------------------------------------------------------------------------------------+
|  [NEUROMATRIX LABS]   [🟢 TES STANDAR KLINIS 12M]   [⏱ 11:42]   [Soal 12 / 30]   [✕] |
+---------------------------------------------------------------------------------------+
|                                                                                       |
|  +---------------------------------------+   +-------------------------------------+  |
|  | KANVAS MATRIKS UTAMA (SVG 3x3)        |   | PILIHAN JAWABAN (6-8 OPSI)          |  |
|  | +---------+---------+---------+       |   | +-------+ +-------+ +-------+       |  |
|  | | Cell A  | Cell B  | Cell C  |       |   | |[1] A  | |[2] B  | |[3] C  |       |  |
|  | +---------+---------+---------+       |   | +-------+ +-------+ +-------+       |  |
|  | | Cell D  | Cell E  | Cell F  |       |   | |[4] D  | |[5]*E* | |[6] F  |       |  |
|  | +---------+---------+---------+       |   | +-------+ +-------+ +-------+       |  |
|  | | Cell G  | Cell H  |   [?]   |       |   |  *Seleksi Aktif: Ring Emerald #005f40 |  |
|  | +---------+---------+---------+       |   +-------------------------------------+  |
|  +---------------------------------------+                                            |
|                                                                                       |
|  +---------------------------------------------------------------------------------+  |
|  | PALET JUMPER SOAL:                                                              |  |
|  | [< Seblm] [✓1] [✓2] ... [12*] [13] ... [30] [Sljut >]   [Selesaikan Tes Sekarang]  |  |
|  +---------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------+
```

---

### 5. Aturan Timer & Mobilisasi Auto-Submit
1. **Timer Mundur (Countdown)**: Dimulai dari `12:00` saat tombol *"Mulai Tes"* ditekan.
2. **Indikator Kritis**:
   - `12:00` – `05:00`: Warna hijau emerald netral (`#E6F2ED`).
   - `04:59` – `02:00`: Warna kuning peringatan (`#FEF3C7`).
   - `< 02:00`: Warna merah berdenyut (`#FEE2E2` & `#DC2626`) dengan animasi pulse.
3. **Auto-Submit pada `00:00`**: Jika waktu habis, sistem mengunci input, menyimpan seluruh jawaban yang telah dipilih, menghitung skor secara instan, dan mengarahkan pengguna ke **Halaman Hasil & Sertifikat PDF**.
