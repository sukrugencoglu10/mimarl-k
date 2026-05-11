"use client";
import { ChevronLeft, MapPin, Phone, Plus, Minus, CreditCard } from "lucide-react";

export default function CartView() {
  return (
    <div className="flex flex-col h-full bg-gray-50 relative pb-24">
      {/* Header */}
      <div className="flex items-center p-4 bg-white sticky top-0 z-10 border-b border-gray-100">
        <button className="p-2 -ml-2 text-gray-900 active:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-gray-900 ml-2">Keşif / Randevu</h1>
      </div>

      <div className="p-4 flex flex-col gap-6">
        {/* Project Address */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Proje Adresi</span>
            <button className="text-xs font-semibold text-[#C9A96E]">Değiştir</button>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Kadıköy, İstanbul</p>
              <p className="text-xs text-gray-500 mt-1">Bağdat Cad. No: 123</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">İletişim Numarası</span>
            <button className="text-xs font-semibold text-[#C9A96E]">Değiştir</button>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <p className="text-sm font-semibold text-gray-900">+90 555 123 4567</p>
          </div>
        </div>

        {/* Selected Services */}
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-3 ml-1">Seçilen Hizmetler</h2>
          <div className="flex flex-col gap-3">
            {/* Item 1 */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3">
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
                🏗️
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 line-clamp-2">Kentsel Dönüşüm Danışmanlığı</h3>
                  <p className="text-[10px] text-gray-500 mt-1">Risk analizi ve süreç yönetimi</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-bold text-[#C9A96E]">Ücretsiz</span>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-100">
                    <button className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-gray-500">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-2 text-center">1</span>
                    <button className="w-6 h-6 flex items-center justify-center bg-black text-white rounded shadow-sm">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3">
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
                📐
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 line-clamp-2">Mimari Proje Çizimi</h3>
                  <p className="text-[10px] text-gray-500 mt-1">Konsept ve ruhsat projesi</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-bold text-[#C9A96E]">Fiyat Sorunuz</span>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-100">
                    <button className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-gray-500">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-2 text-center">1</span>
                    <button className="w-6 h-6 flex items-center justify-center bg-black text-white rounded shadow-sm">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-[64px] left-0 right-0 bg-white border-t border-gray-100 p-4 pb-6 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] z-20">
        <button className="w-full bg-black text-white py-4 rounded-2xl font-bold text-sm shadow-lg shadow-black/20 active:scale-[0.98] transition-transform">
          Randevu Talep Et
        </button>
      </div>
    </div>
  );
}
