"use client";
import { Search, MapPin, SlidersHorizontal, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export default function HomeView() {
  return (
    <div className="flex flex-col gap-6 p-4 pt-8 bg-gray-50 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative border-2 border-white shadow-sm flex-shrink-0">
            {/* Placeholder Avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A96E]/40 to-gray-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Konum</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span className="text-sm font-semibold text-gray-900">İstanbul, TR</span>
            </div>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 relative">
          <div className="absolute top-2 right-2.5 w-2 h-2 bg-[#C9A96E] rounded-full border-2 border-white"></div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </button>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Hayalinizdeki<br />Proje İçin <span className="text-[#C9A96E]">Keşfedin</span>
        </h1>
      </div>

      {/* Search */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-3 py-3.5 bg-white border border-gray-100 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/20 focus:border-[#C9A96E] shadow-sm transition-all"
            placeholder="Proje veya hizmet ara..."
          />
        </div>
        <button className="w-[52px] h-[52px] bg-black text-white rounded-2xl flex items-center justify-center shadow-md active:scale-95 transition-transform">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {[
          { name: "Kentsel Dönüşüm", icon: "🏢" },
          { name: "Mimari Tasarım", icon: "📐" },
          { name: "İç Mimarlık", icon: "🛋️" },
          { name: "Danışmanlık", icon: "🤝" },
        ].map((cat, i) => (
          <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm text-2xl transition-all ${i === 0 ? "bg-[#C9A96E] text-white shadow-[#C9A96E]/20" : "bg-white border border-gray-100"}`}>
              {cat.icon}
            </div>
            <span className={`text-[11px] font-medium text-center ${i === 0 ? "text-gray-900" : "text-gray-500"}`}>{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Featured Projects (Best Food, Today) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Öne Çıkan Projeler</h2>
          <button className="text-sm font-medium text-[#C9A96E]">Tümü</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {[1, 2].map((i) => (
            <div key={i} className="min-w-[260px] bg-white rounded-3xl p-3 shadow-sm border border-gray-100 flex flex-col gap-3">
              <div className="w-full h-40 bg-gray-200 rounded-2xl relative overflow-hidden">
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 z-10 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
                  <span className="text-xs font-bold">4.9</span>
                </div>
                {/* Placeholder Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
              </div>
              <div className="px-1">
                <h3 className="font-bold text-gray-900 text-base mb-1">Modern Vadi Konutları</h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kadıköy, İstanbul • 2.5 km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">Kentsel Dönüşüm</span>
                  <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center active:scale-95 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing Projects (For Breakfast) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Devam Eden Şantiyeler</h2>
          <button className="text-sm font-medium text-[#C9A96E]">Tümü</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {[1, 2, 3].map((i) => (
            <div key={i} className="min-w-[140px] bg-white rounded-2xl p-2.5 shadow-sm border border-gray-100">
              <div className="w-full h-24 bg-gray-200 rounded-xl mb-3 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-gray-400 to-gray-200"></div>
              </div>
              <h3 className="font-bold text-gray-900 text-sm truncate">Aura Ofis</h3>
              <div className="flex items-center gap-1 mt-1 text-[#C9A96E]">
                <Star className="w-3 h-3 fill-current" />
                <span className="text-xs font-bold">4.8</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services (Near me) */}
      <div className="pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Hizmetlerimiz</h2>
        </div>
        <div className="flex flex-col gap-4">
          {[
            { title: "Kentsel Dönüşüm Danışmanlığı", desc: "Riskli yapı tespiti ve projelendirme", icon: "🏗️" },
            { title: "Mimari Konsept Tasarımı", desc: "Özgün ve modern yaşam alanları", icon: "📐" },
            { title: "İç Mimari ve Uygulama", desc: "Anahtar teslim mekan çözümleri", icon: "🛋️" }
          ].map((service, i) => (
            <div key={i} className="flex gap-4 p-3 bg-white rounded-2xl shadow-sm border border-gray-100 items-center">
              <div className="w-[72px] h-[72px] bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl">
                {service.icon}
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{service.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{service.desc}</p>
                <div className="flex items-center gap-1 mt-2 text-[#C9A96E]">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-[10px] text-gray-400 ml-1">(Uzman)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
