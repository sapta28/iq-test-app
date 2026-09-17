# Draf Spesifikasi & PRD: Mode Kilat Mobile (6 Menit)
## NeuroMatrix Labs — Fast Mobile Screening Assessment

---

### 1. Deskripsi Mode (Mode Overview)
**Mode Kilat Mobile (6 Menit)** adalah versi pengujian efisien yang dioptimalkan untuk perangkat seluler (*mobile-first screening*). Mode ini menyajikan 8 hingga 18 item terkalibrasi **Item Response Theory (IRT)** untuk mengestimasi *fluid intelligence* dalam alokasi waktu singkat tanpa mengurangi reliabilitas dasar.

---

### 2. Parameter Utama (Key Parameters)

* **Jumlah Item Soal**: 8 hingga 18 Item IRT Terkalibrasi.
* **Alokasi Waktu Total**: 6 Menit (360 Detik).
* **Alokasi Waktu Rata-rata per Item**: 20–25 Detik / Soal.
* **Tujuan Penggunaan**: Skrining kognitif cepat di smartphone, tablet, atau kondisi waktu terbatas.
* **Sistem Penilaian**: Estimasi Skala Wechsler IRT ($Mean = 100, SD = 15$).
* **Output Dokumen**: Laporan Ringkas Skor IQ & Mini Digital Badge / Certificate.

---

### 3. Seleksi Item Kalibrasi IRT

Item dipilih menggunakan algoritma pencocokan daya pembeda (*discrimination factor a*) dan tingkat kesukaran (*difficulty b*) agar mampu mengevaluasi kapasitas kognitif secara optimal dalam rentang waktu singkat:

| Indeks Item | Tingkat Kesukaran ($b$) | Daya Beda ($a$) | Aturan Logika Kunci |
| :--- | :--- | :--- | :--- |
| **Item 1 – 2** | Mudah ($b = -1.2$) | High ($a = 1.8$) | Rotasi Geometri Basic & Deret Warna |
| **Item 3 – 5** | Sedang ($b = 0.0$) | High ($a = 2.1$) | Superposisi Bentuk & Inversi Isi |
| **Item 6 – 8** | Sukar ($b = +1.5$) | Very High ($a = 2.4$) | Operasi XOR Visual & Rotasi Vektor Kompleks |

---

### 4. Spesifikasi Antarmuka UX/UI Mobile (Mobile Layout Specs)

```
+---------------------------------------------------+
| [NEUROMATRIX]   [⚡ KILAT 6M]   [⏱ 05:12]   [3/8]   |
+---------------------------------------------------+
|                                                   |
|  +---------------------------------------------+  |
|  | KANVAS MATRIKS (MOBILE COMPACT SVG 3x3)     |  |
|  | +-------+-------+-------+                   |  |
|  | | (A)   | (B)   | (C)   |                   |  |
|  | +-------+-------+-------+                   |  |
|  | | (D)   | (E)   | (F)   |                   |  |
|  | +-------+-------+-------+                   |  |
|  | | (G)   | (H)   |  [?]  |                   |  |
|  | +-------+-------+-------+                   |  |
|  +---------------------------------------------+  |
|                                                   |
|  +---------------------------------------------+  |
|  | PILIHAN JAWABAN (GRID 2-KOLOM TOUCH FRIENDLY)|  |
|  | +--------------------+ +------------------+ |  |
|  | | [1] Opsi A         | | [2] Opsi B       | |  |
|  | +--------------------+ +------------------+ |  |
|  | +--------------------+ +------------------+ |  |
|  | | [3] Opsi C         | | [4] Opsi D *     | |  |
|  | +--------------------+ +------------------+ |  |
|  |  * Touch Target Minimal 56px                    |  |
|  +---------------------------------------------+  |
|                                                   |
|  [ < SEBELUM ]     [ ⚡ SELESAIKAN KILAT ]        |
+---------------------------------------------------+
```

---

### 5. Keunggulan UX Mobile Kilat
* **Touch Target Dioptimalkan**: Kartu pilihan jawaban memiliki tinggi minimal `56px` dengan margin cukup agar tidak ada kesalahan tap jari.
* **Layout Ringkas Stacked**: Seluruh elemen muat dalam 1 layar smartphone (tanpa perlu scroll panjang).
* **Auto-Next Opsional**: Setelah opsi dipilih, antarmuka otomatis dapat berpindah ke nomor berikutnya secara mulus.
