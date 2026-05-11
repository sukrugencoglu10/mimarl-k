"use client";
import { ChevronLeft } from "lucide-react";

export default function OffersView() {
  return (
    <div className="flex flex-col h-full bg-gray-50 pb-24">
      {/* Header */}
      <div className="flex items-center p-4 bg-white sticky top-0 z-10 border-b border-gray-100">
        <button className="p-2 -ml-2 text-gray-900 active:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-gray-900 ml-2">Fırsatlar ve Kampanyalar</h1>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {[
          { title: "Ücretsiz Kentsel Dönüşüm Keşfi", desc: "Kadıköy bölgesindeki projeler için", days: "15 Gün Kaldı" },
          { title: "İç Mimari Tasarımda %15 İndirim", desc: "Anahtar teslim projelerde geçerli", days: "30 Gün Kaldı" },
          { title: "Ücretsiz 3D Modelleme", desc: "500m2 üzeri mimari projelerde", days: "10 Gün Kaldı" },
          { title: "Yaz Kampanyası: Danışmanlık", desc: "İlk görüşme ücretsiz",  days: "Süresiz" }
        ].map((offer, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 flex overflow-hidden">
            {/* Left Box */}
            <div className="w-24 bg-[#C9A96E]/10 flex flex-col items-center justify-center p-2 relative">
               <div className="w-12 h-12 bg-[#C9A96E]/20 rounded-full flex items-center justify-center mb-1">
                 <span className="text-xl">🎁</span>
               </div>
               <span className="text-[10px] font-bold text-[#C9A96E] uppercase text-center leading-tight">Fırsat</span>
               
               {/* Dashed line border effect */}
               <div className="absolute right-0 top-2 bottom-2 w-[1px] border-r-[1.5px] border-dashed border-gray-200"></div>
               {/* Cutouts */}
               <div className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-gray-50"></div>
               <div className="absolute -right-2 -bottom-2 w-4 h-4 rounded-full bg-gray-50"></div>
            </div>
            
            {/* Right Content */}
            <div className="flex-1 p-4 py-5">
              <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1">{offer.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{offer.desc}</p>
              
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="block w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></span>
                </div>
                <span className="text-xs font-semibold text-gray-500">{offer.days}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
