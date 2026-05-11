"use client";
import { ChevronLeft } from "lucide-react";

export default function ProfileView() {
  return (
    <div className="flex flex-col h-full bg-gray-50 pb-24">
      {/* Header */}
      <div className="flex items-center justify-center p-4 bg-white sticky top-0 z-10 border-b border-gray-100 relative">
        <button className="absolute left-4 p-2 -ml-2 text-gray-900 active:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Bilgilerim</h1>
      </div>

      <div className="p-6 flex flex-col items-center">
        {/* Avatar */}
        <div className="w-28 h-28 bg-gray-200 rounded-full border-4 border-white shadow-sm mb-4 relative overflow-hidden flex items-center justify-center">
           {/* Placeholder Gradient */}
           <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A96E]/40 to-gray-300"></div>
        </div>
        <h2 className="text-lg font-bold text-gray-900 mb-8">Misafir Kullanıcı</h2>

        {/* Form */}
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Ad Soyad</label>
            <input 
              type="text" 
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A96E] transition-all"
              placeholder="Adınız Soyadınız"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Telefon Numarası</label>
            <input 
              type="tel" 
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A96E] transition-all"
              placeholder="+90 (___) ___ __ __"
              defaultValue="+90 555 123 4567"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">E-Posta</label>
            <input 
              type="email" 
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A96E] transition-all"
              placeholder="ornek@email.com"
            />
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-[64px] left-0 right-0 bg-white border-t border-gray-100 p-4 pb-6 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] z-20">
        <button className="w-full bg-black text-white py-4 rounded-2xl font-bold text-sm shadow-lg shadow-black/20 active:scale-[0.98] transition-transform">
          Kaydet
        </button>
      </div>
    </div>
  );
}
