import React from 'react';
import { X, Code2, Server, DollarSign, Target, Cpu, CheckCircle2, Globe, Shield } from 'lucide-react';

interface TechStackGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechStackGuide: React.FC<TechStackGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Panduan Teknis & Arsitektur Website Tes IQ</h2>
              <p className="text-xs text-slate-400">Jawaban lengkap atas rekomendasi teknologi & strategi gratis</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Stack Teknologi Terbaik */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-indigo-400 flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            <span>1. Stack Teknologi Terbaik yang Direkomendasikan</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <strong className="text-white block mb-1">Frontend Framework: React + Vite</strong>
              <p className="text-slate-400 leading-relaxed">
                Reaktif, super cepat (skor Lighthouse 99+), dan sangat ideal untuk Single Page Application (SPA).
              </p>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <strong className="text-white block mb-1">Aset Gambar: Pure Dynamic SVG</strong>
              <p className="text-slate-400 leading-relaxed">
                Menghindari gambar PNG/JPG berat. Soal matriks dirender dalam bentuk kode SVG responsif (tajam di layar Retina/Mobile).
              </p>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <strong className="text-white block mb-1">Engine Matematika/Statistik: Client-Side JS</strong>
              <p className="text-slate-400 leading-relaxed">
                Perhitungan skor Gauss normal & persentil dilakukan langsung di browser pengguna tanpa diproses di server backend.
              </p>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <strong className="text-white block mb-1">Styling: Vanilla CSS Modern</strong>
              <p className="text-slate-400 leading-relaxed">
                Sistem variabel CSS token, Glassmorphic UI, dan animasi fluid tanpa overhead dependency eksternal.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Rahasia Website Tes IQ Gratis 100% (Bebas Paywall) */}
        <div className="space-y-3 pt-3 border-t border-slate-800">
          <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            <span>2. Mengapa & Bagaimana Bisa Disediakan 100% Gratis?</span>
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed">
            Mayoritas website tes IQ komersial meminta bayaran \$10–\$20 setelah pengguna tes 30 menit (Paywall Trap). Mereka harus menutupi biaya server backend database & email marketing.
          </p>

          <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-4 text-xs space-y-2 text-slate-300">
            <strong className="text-emerald-400 block font-semibold">Strategi Biaya Operasional Rp 0 (Zero Server Cost):</strong>
            <ul className="space-y-1.5 list-disc list-inside text-slate-400">
              <li><strong className="text-white">Hosting Gratis Selamanya:</strong> Deploy ke Vercel, Netlify, atau Cloudflare Pages (Free Tier memberikan unlimited bandwidth & SSL gratis).</li>
              <li><strong className="text-white">Tanpa Database/Backend Cost:</strong> Karena kalkulasi IQ 100% berjalan di browser user (Client-Side), Anda tidak butuh server backend berbayar.</li>
              <li><strong className="text-white">Opsional Monetisasi Tanpa Bebani User:</strong> Memasang iklan tak mengganggu (Google AdSense) atau tombol donasi (Trakteer / Saweria / Ko-fi) untuk pemasukan.</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Menjaga Akurasi Psikometri */}
        <div className="space-y-3 pt-3 border-t border-slate-800">
          <h3 className="text-base font-bold text-cyan-400 flex items-center gap-2">
            <Target className="w-5 h-5" />
            <span>3. Cara Memastikan Hasil Tetap Akurat & Ilmiah</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <strong className="text-indigo-300 block mb-1">Standard Matriks Non-Verbal</strong>
              <p className="text-slate-400">
                Berbasis Raven's Progressive Matrices (RPM). Menguji kecerdasan cair (fluid intelligence) bebas dari bias bahasa/budaya.
              </p>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <strong className="text-cyan-300 block mb-1">Skala Standard Wechsler (SD=15)</strong>
              <p className="text-slate-400">
                Menggunakan standar psikometri internasional (Rata-rata 100, Standar Deviasi 15) untuk memetakan persentil populasi global.
              </p>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <strong className="text-emerald-300 block mb-1">Pembobotan & Pengukur Waktu</strong>
              <p className="text-slate-400">
                Setiap soal memiliki bobot kesulitan (Mudah 1.0x hingga Jenius 2.5x) plus bonus kecepatan untuk logika presisi.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};
