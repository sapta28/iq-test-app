import React from 'react';
import { X, Code2, Server, DollarSign, Target, Cpu, CheckCircle2, Globe, Shield } from 'lucide-react';

interface TechStackGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechStackGuide: React.FC<TechStackGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl space-y-6 my-8 text-slate-900">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-500/30 flex items-center justify-center text-emerald-600">
              <Code2 className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Panduan Teknis & Arsitektur Website Tes IQ</h2>
              <p className="text-xs text-slate-500 font-medium">Jawaban lengkap atas rekomendasi teknologi & strategi gratis</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Stack Teknologi Terbaik */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-emerald-600" />
            <span>1. Stack Teknologi Terbaik (Anti-AI-Slop Architecture)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">Frontend Framework: React 19 + Vite</strong>
              <p className="text-slate-600 leading-relaxed">
                Reaktif, super cepat (skor Lighthouse 99+), dan sangat ideal untuk Single Page Application (SPA).
              </p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">Aset Gambar: Pure Dynamic Vector SVG</strong>
              <p className="text-slate-600 leading-relaxed">
                Menghindari gambar PNG/JPG berat. Soal matriks dirender dalam bentuk kode SVG responsif (tajam di layar Retina/Mobile).
              </p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">Engine Matematika: Client-Side JS</strong>
              <p className="text-slate-600 leading-relaxed">
                Perhitungan skor Gauss normal & persentil dilakukan langsung di browser pengguna tanpa diproses di server backend.
              </p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">Styling: Editorial Design System</strong>
              <p className="text-slate-400 leading-relaxed">
                Background Ivory Warm, tipografi kontras tinggi, dan komponen clean tanpa dark-purple neon AI slop.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Bebas Paywall */}
        <div className="space-y-3 pt-3 border-t border-slate-200">
          <h3 className="text-base font-bold text-emerald-700 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            <span>2. Arsitektur Bebas Paywall (Zero Server Cost)</span>
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            Mayoritas website tes IQ komersial meminta bayaran $10–$20 setelah pengguna tes 30 menit (Paywall Trap). Mereka harus menutupi biaya server backend database & email marketing.
          </p>

          <div className="bg-emerald-50 border border-emerald-500/30 rounded-xl p-4 text-xs space-y-2 text-slate-700 font-medium">
            <strong className="text-emerald-800 block font-bold">Strategi Biaya Operasional Rp 0 (Zero Server Cost):</strong>
            <ul className="space-y-1.5 list-disc list-inside text-slate-600">
              <li><strong className="text-slate-900">Hosting Gratis Selamanya:</strong> Deploy ke Vercel, Netlify, atau Cloudflare Pages (Free Tier memberikan unlimited bandwidth & SSL gratis).</li>
              <li><strong className="text-slate-900">Tanpa Database/Backend Cost:</strong> Karena kalkulasi IQ 100% berjalan di browser user (Client-Side), Anda tidak butuh server backend berbayar.</li>
              <li><strong className="text-slate-900">Monetisasi Ramah (Opsional):</strong> Memasang iklan tak mengganggu (Google AdSense) atau tombol donasi (Trakteer / Saweria / Ko-fi) untuk pemasukan.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all cursor-pointer"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};
