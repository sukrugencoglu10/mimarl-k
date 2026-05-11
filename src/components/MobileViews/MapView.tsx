"use client";
import { ChevronLeft, Crosshair, MapPin } from "lucide-react";

export default function MapView() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Map Area (Upper half) */}
      <div className="relative flex-1 bg-gray-200 w-full min-h-[50vh]">
        {/* Placeholder Map Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Mock Map Route / Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-12 h-12 bg-[#C9A96E]/20 rounded-full animate-ping absolute -inset-2"></div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center relative z-10 shadow-lg border-2 border-white">
              <MapPin className="w-4 h-4 text-[#C9A96E]" />
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
              <span className="text-xs font-bold text-gray-900">Yılmaz Mimarlık Ofisi</span>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Back Button overlay */}
        <div className="absolute top-4 left-4 z-10">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-gray-900">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Target overlay */}
        <div className="absolute bottom-6 right-4 z-10">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-gray-900">
            <Crosshair className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Bottom Sheet */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-20 px-6 py-8 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto absolute top-3 left-1/2 -translate-x-1/2"></div>
        
        <h2 className="text-lg font-bold text-gray-900 mb-6">Ofisimize Ulaşın veya Adresinizi Girin</h2>
        
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative">
             <div className="absolute top-3 left-0 pl-4">
               <div className="w-2.5 h-2.5 rounded-full border-2 border-gray-300"></div>
             </div>
             <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A96E]" placeholder="Mevcut Konumunuz" defaultValue="Kadıköy Merkez" />
          </div>
          
          <div className="relative">
             <div className="absolute top-3 left-0 pl-4">
               <MapPin className="w-4 h-4 text-[#C9A96E]" />
             </div>
             <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A96E]" placeholder="Varış Noktası" defaultValue="Yılmaz Mimarlık (Bağdat Cad. No:123)" />
          </div>

          <div className="absolute left-[19px] top-[40px] bottom-[70px] w-[1.5px] bg-gray-200 border-l border-dashed border-gray-300"></div>
        </div>

        <button className="w-full bg-black text-white py-4 rounded-2xl font-bold text-sm shadow-lg shadow-black/20 active:scale-[0.98] transition-transform">
          Yol Tarifi Al
        </button>
      </div>
    </div>
  );
}
