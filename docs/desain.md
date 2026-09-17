# Design Specification (desain.md)
## System Desain & Spesifikasi 7 Halaman Platform — NeuroMatrix Labs

---

### 1. Sistem Desain Global (Global Design Tokens & Aesthetics)

**NeuroMatrix Labs** menggunakan bahasa desain **Clinical Academic Precision & Dark Emerald Premium**. Seluruh halaman dibuat dengan kontras tinggi, keterbacaan psikometrik murni, dan animasi mikro yang halus tanpa distraksi visual.

#### 1.1 Tokek Warna Utama (Color System)
```css
:root {
  /* Primary Emerald Palette */
  --primary: #005f40;             /* Dark Emerald Utama */
  --primary-container: #007a53;   /* Emerald Container */
  --primary-fixed: #95f6c6;       /* Emerald Highlight */
  --primary-fixed-dim: #79d9ab;   /* Soft Emerald */
  --on-primary: #ffffff;

  /* Surface & Background Palette */
  --bg-surface: #f6fbf5;          /* Background Utama Halaman */
  --bg-surface-lowest: #ffffff;   /* Kartu & Modal Container */
  --bg-surface-low: #f0f5ef;      /* Subtle Container Low */
  --bg-surface-container: #eaefe9;/* Subtle Container Normal */
  --bg-surface-high: #e5e9e4;     /* Highlight Section Bar */
  --bg-surface-subtle: #F8FAFC;   /* Bento Card Background */
  --bg-surface-slate: #F1F4F9;    /* Hero Header Slate */

  /* Text & Typography Palette */
  --text-slate-primary: #111827;  /* Judul & Teks Utama */
  --text-slate-secondary: #4B5563;/* Teks Deskripsi & Subtitle */
  --text-on-surface: #181d19;     /* Teks Body Netral */
  --outline-variant: #bdc9c0;     /* Border Tipis Netral */
  --border-subtle: #E2E8F0;       /* Border Kartu & Pembatas */
}
```

#### 1.2 Sistem Tipografi (Typography)
* **Font Family**: Inter (Google Fonts)
* **Headline XL**: `48px / 56px`, `Font-Weight: 800`, `Letter-Spacing: -0.02em`
* **Headline LG**: `36px / 44px`, `Font-Weight: 700`, `Letter-Spacing: -0.02em`
* **Headline SM**: `20px / 28px`, `Font-Weight: 600`
* **Body LG**: `18px / 28px`, `Font-Weight: 400`
* **Body MD**: `15px / 24px`, `Font-Weight: 400`
* **Label SM**: `11px / 16px`, `Font-Weight: 700`, `Letter-Spacing: 0.08em`, `Uppercase`

---

### 2. Spesifikasi Desain 7 Halaman Utama (Page Design Details)

#### 2.1 Halaman Beranda (Hero Page) — `Hero.tsx`
* **Header Banner**: Teks judul besar dengan penanda badge `NEUROMATRIX LABS` di pojok kiri atas.
* **Tiga Kartu Mode Tes**:
  * Dipasang dalam grid 3-kolom responsif.
  * Kartu mode berlatar belakang `#ffffff` dengan border `#E2E8F0` dan efek hover elevate (`translateY(-4px)`).
  * Tombol aksi tanpa icon panah (`arrow_forward`), memuat teks bersih (*"Mulai Tes Standar (12 Menit)"*).
* **Drawer Riwayat Tes**: Kartu bawah berlatar `#F8FAFC` yang menampilkan 10 riwayat skor tes terakhir dari local storage.

#### 2.2 Halaman Metodologi RPM — `RpmMethodologyPage.tsx`
* **Kartu Penjelasan Metodologi**: Grid bento yang mengulas 3 domain matriks progresif (Penalaran Induktif, Visual Spasial, Differensiasi Kompleks).
* **Modal Buku Putih Transparansi**: Popup drawer penjelasan korelasi psikometri dengan tes WAIS-IV.

#### 2.3 Halaman Kohort Normatif — `NormativeCohortPage.tsx`
* **Grafik Kurva Gauss Interaktif (Gaussian Bell Curve)**:
  * Animasi jalur garis kurva SVG mengalir dari kiri ke kanan.
  * Baris titik puncak rata-rata populasi (Mean 100).
  * Penghitung angka persentil real-time (2.2%, 13.6%, 68.2%, 13.6%, 2.2%) yang menghitung mundur/maju dari 0 saat dimuat.

#### 2.4 Halaman Transparansi & Zero Paywall — `TransparencyPage.tsx`
* **Tabel Perbandingan Etika**:
  * Kolom Kiri (*Situs Komersial Umum*): Border merah lembut `#ffdad6`, background `#fff5f5`, ikon cancel/warning.
  * Kolom Kanan (*NeuroMatrix Labs*): Border emerald `#005f40`, background `#E6F2ED`, ikon checkmark verified.

#### 2.5 Halaman FAQ & Pusat Bantuan — `FaqPage.tsx`
* **Hero Search Bar**: Input pencarian dengan ikon `search` di kiri dan label `ESC untuk reset` di kanan.
* **Filter Pills Category**: Pill kategori (*Semua*, *Pelaksanaan*, *Skor*, *Metodologi*, *Privasi*) dengan active state background `#005f40` dan teks putih.
* **Accordion Item**:
  * Default state: **Tertutup (collapsed)** untuk seluruh pertanyaan saat pertama kali dibuka.
  * Open state: Rotasi panah `expand_more` 180°, latar belakang `#FAFCFA`, border pembatas halus.
* **Bento Support Card**: Card latar `#F8FAFC` dengan tombol email `mailto:support@neuromatrix.id`.

#### 2.6 Halaman Antarmuka Pengerjaan Tes — `TestInterface.tsx`
* **Header Control Bar**: Timer mundur dengan ring status visual (Hijau `#005f40` -> Merah `#DC2626` saat < 2m).
* **Matriks 3x3 Canvas**: Kartu `#ffffff` dengan border `#E2E8F0`, slot kosong `?` dengan warna highlight lembut `#F0F7F4`.
* **Kisi Opsi Jawaban**: 6–8 opsi kartu berukuran besar (mudah di-tap jari mobile) dengan ring seleksi aktif `2px solid #005f40`.
* **Palet Nomor Soal**: Grid 1–30 tombol nomor soal dengan penanda hijau untuk nomor yang telah diisi.

#### 2.7 Halaman Hasil Tes & Laporan IQ — `ResultsPage.tsx`
* **Header Skor Display**: Angka skor IQ berukuran `44px` bold (misal: **128**) dengan label persentil populasi.
* **Diagram Kognitif Otak Interaktif (`BrainCognitiveDiagram.tsx`)**: VisualisasiSVG domain kognitif.
* **Generator Sertifikat PDF**: Desain sertifikat resmi berlatar putih bersih dengan bingkai emas/emerald, stempel digital, QR Code Verifikasi, dan SHA-256 Checksum Hash.

---

### 3. Header & Footer Universal Layout Specs

#### Header Site Universal (`Header.tsx`)
```css
/* Layout Header Full Width Pepet Samping */
.header-container {
  width: 100%;
  max-width: 100%;
  padding: 10px 16px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
```
* **Logo (Sisi Kiri)**: Icon `grid_view` + Teks `NEUROMATRIX LABS` + Subtitle `Evaluasi Fluid Intelligence Terkalibrasi` persis di pinggir kiri layar.
* **Navigasi (Tengah)**: Link *Beranda*, *Metodologi RPM*, *Kohort Normatif*, *Transparansi*, *FAQ* dengan indikator garis bawah emerald (`border-bottom: 2px solid #059669`) pada halaman aktif.
* **Tombol CTA (Sisi Kanan)**: Tombol *"Mulai Tes IQ Gratis"* tanpa ikon panah, dipepetkan di pinggir kanan layar.

---

### 4. Efek Animasi & Scroll (ScrollZoomIn Animation)
Setiap section pada seluruh 7 halaman dibungkus oleh komponen `<ScrollZoomIn>`:
* **Opacity**: Transisi dari `0` ke `1`.
* **Transform**: Transisi dari `scale(0.86)` ke `scale(1)`.
* **Timing Function**: `cubic-bezier(0.34, 1.56, 0.64, 1)` durasi $0.6$ detik.
* **Intersect Observer**: Memicu animasi secara otomatis saat section di-scroll masuk ke viewport layar.
