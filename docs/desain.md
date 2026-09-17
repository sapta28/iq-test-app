# Design Specification (desain.md)
## Halaman Asesmen Tes IQ (Test Interface Page) — NeuroMatrix Labs

---

### 1. Filosofi & Panduan Desain (Design Principles & Aesthetics)
Antarmuka Halaman Tes (**Test Interface**) dirancang dengan pendekatan **Clinical Academic Precision & Premium Minimalism**. Tampilan dibuat sangat fokus tanpa gangguan visual (*zero-clutter*) agar pengguna dapat mengalokasikan 100% fokus mental pada penalaran spasial dan abstrak.

#### Prinsip Utama Desain:
* **Fokus Kognitif Maksimal**: Penggunaan latar belakang netral soft slate (`#F1F4F9` & `#f6fbf5`) yang menenangkan mata selama tes berlangsung.
* **Kontras Geometri Tinggi**: Matriks 3x3 dan bentuk SVG digambar dengan garis tajam beraksen gelap (`#111827`) di atas latar putih bersih (`#ffffff`) agar setiap detail pola terlihat jelas.
* **Umpan Balik Visual Jelas**: Kartu pilihan jawaban memiliki indikator seleksi aktif yang kuat (`2px solid #005f40`) dengan bayangan halus (*soft shadow*) saat dipillih.
* **Responsivitas Mulus**: Tata letak otomatis menyesuaikan antara tampilan desktop 2-kolom dan tampilan mobile stacked 1-kolom.

---

### 2. Tokek Warna & Desain Token (Color System & Tokens)

| Token Desain | Nilai Hex / CSS Variable | Peruntukan / Penggunaan |
| :--- | :--- | :--- |
| `--primary` | `#005f40` | Warna utama (Header badge, active item ring, tombol utama, checkmark) |
| `--primary-container` | `#007a53` | Aksen kontainer emerald dan status terisi |
| `--bg-surface` | `#f6fbf5` | Latar belakang utama halaman tes |
| `--bg-surface-slate` | `#F1F4F9` | Latar belakang header bar & panel pendukung |
| `--bg-surface-lowest` | `#ffffff` | Kartu matriks, kartu opsi jawaban, dan modal dialog |
| `--text-slate-primary` | `#111827` | Teks judul, nomor soal, dan bentuk matriks utama |
| `--text-slate-secondary` | `#4B5563` | Subtitle, instruksi, dan label sekunder |
| `--border-subtle` | `#E2E8F0` | Garis pembatas kartu dan kontainer |
| `--timer-alert` | `#DC2626` | Warna indikator waktu mundur saat < 2 menit |
| `--timer-warning` | `#D97706` | Warna indikator waktu mundur saat < 5 menit |

---

### 3. Tipografi (Typography Hierarchy)
Menggunakan **Inter Google Font** untuk keterbacaan tinggi di berbagai ukuran layar:

```css
/* Spesifikasi Ukuran Teks */
.font-headline-lg { font-size: 32px; font-weight: 800; line-height: 40px; letter-spacing: -0.02em; }
.font-headline-sm { font-size: 20px; font-weight: 700; line-height: 28px; }
.font-body-lg     { font-size: 18px; font-weight: 400; line-height: 28px; }
.font-body-md     { font-size: 15px; font-weight: 400; line-height: 24px; }
.font-label-md    { font-size: 13px; font-weight: 600; line-height: 18px; }
.font-label-sm    { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
```

---

### 4. Struktur Tata Letak Antarmuka (UI Layout & Wireframe Hierarchy)

```
+-----------------------------------------------------------------------------------+
|  [NEUROMATRIX LABS]   [Badge Mode: Tes Standar 12m]   [⏱ 10:45]   [Soal 4 / 30]  [X] |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  +-------------------------------------+   +-----------------------------------+  |
|  | KANVAS MATRIKS UTAMA (SVG 3x3)      |   | KISI PILIHAN JAWABAN (6-8 OPSI)   |  |
|  | +-------+-------+-------+           |   | +-------+ +-------+ +-------+     |  |
|  | |  (A)  |  (B)  |  (C)  |           |   | | Opsi 1| | Opsi 2| | Opsi 3|     |  |
|  | +-------+-------+-------+           |   | +-------+ +-------+ +-------+     |  |
|  | |  (D)  |  (E)  |  (F)  |           |   | | Opsi 4| |[Opsi 5]| | Opsi 6|     |  |
|  | +-------+-------+-------+           |   | +-------+ +-------+ +-------+     |  |
|  | |  (G)  |  (H)  |  [?]  |           |   |  *Ring Emerald pada Opsi Terpilih  |  |
|  | +-------+-------+-------+           |   +-----------------------------------+  |
|  +-------------------------------------+                                          |
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | NAVIGASI PALET SOAL:                                                        |  |
|  | [ < Sebelum ]  [1] [2] [3] [*4*] [5] ... [30]  [ Selanjutnya > ]  [Selesai] |  |
|  +-----------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------+
```

---

### 5. Detail Komponen Visual (Component Design Specs)

#### 5.1 Header Control Bar
* **Tinggi Bar**: `68px` dengan position `sticky top: 0` dan `backdrop-filter: blur(12px)`.
* **Badge Timer**:
  * Kontainer berbentuk kapsul (`border-radius: 9999px`) dengan padding `6px 14px`.
  * Background `#E6F2ED` saat waktu aman, berubah menjadi `#FEF2F2` (Merah) saat kritis.
  * Teks angka timer menggunakan font monospaced angka untuk mencegah *layout shift* saat detik berjalan.

#### 5.2 Card Matriks 3x3 (Matrix Puzzle Canvas Card)
* **Background Card**: `#ffffff` dengan border `1px solid #E2E8F0` dan `border-radius: 16px`.
* **Grid 3x3**:
  * Menggunakan CSS Grid `grid-template-columns: repeat(3, 1fr)` dengan gap `12px`.
  * Setiap sel matriks memuat batas garis tipis `border: 1px solid #E2E8F0` dan sudut membulat `border-radius: 8px`.
  * Tile kosong `[?]` memiliki latar belakang kecokelatan/emerald lembut (`#F0F7F4`) dengan tanda tanya animasi pulsing lembut.

#### 5.3 Opsi Jawaban (Option Selection Grid Cards)
* **Tata Letak**: Grid 2-kolom atau 3-kolom tergantung lebar perangkat.
* **State Interaksi**:
  * *Default*: Background `#ffffff`, border `1px solid #E2E8F0`, cursor pointer.
  * *Hover*: Shift posisi naik 2px (`transform: translateY(-2px)`), border `#005f40`.
  * *Selected*: Background `#F0F7F4`, border `2px solid #005f40`, icon centang emerald di pojok kanan atas.
  * *Keyboard Badge*: Angka pembantu `[1]`, `[2]`, dst. di sudut kiri atas opsi.

#### 5.4 Palet Navigasi Soal (Item Jumper Toolbar)
* **Pill Nomor Soal**:
  * Ukuran `36px x 36px` bundar/rounded-lg.
  * *Terjawab*: Background `#005f40`, teks `#ffffff`.
  * *Aktif Saat Ini*: Border `2px solid #005f40`, background `#ffffff`, teks `#005f40` (bold).
  * *Belum Terjawab*: Background `#F1F4F9`, teks `#4B5563`.

#### 5.5 Modal Konfirmasi Submit (Submit Confirmation Dialog)
* Modal popup di tengah layar dengan overlay `rgba(0,0,0,0.5)` dan *backdrop blur*.
* Menampilkan ringkasan status:
  * Jumlah soal yang telah dijawab vs total soal.
  * Peringatan jika masih ada nomor yang kosong.
  * Tombol *"Lanjutkan Pengerjaan"* vs *"Ya, Selesaikan Tes Sekarang"*.

---

### 6. Animasi & Mikro-Interaksi (Animations & Transitions)
1. **ScrollZoomIn Component**:
   * Seluruh blok kanvas matriks dan opsi jawaban dibungkus komponen `ScrollZoomIn` agar muncul dengan efek pemesaran proporsional yang mulus (`scale(0.92)` ke `scale(1)`).
2. **Transition Option Select**:
   * Transisi `all 0.15s ease-in-out` pada saat berpindah opsi jawaban.
3. **Timer Pulse**:
   * Efek berdenyut (*pulse animation*) pada jam ketika waktu tersisa kurang dari 120 detik.

---

### 7. Kepatuhan Aksesibilitas (Accessibility & Responsiveness)
* **Kontras Warna**: Semua teks dan ikon memenuhi standar WCAG AA (kontras minimal 4.5:1).
* **Ukuran Sentuh Mobile (Touch Target)**: Kartu opsi jawaban memiliki tinggi minimal `60px` di mobile agar mudah ditekan jari.
* **Dukungan Layar Sentuh & Mouse**: Kompatibel penuh dengan input tap/click maupun shortcut keyboard desktop.
