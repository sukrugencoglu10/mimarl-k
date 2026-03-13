"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ExternalLink, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Boğaz Köşkü",
    category: "Konut",
    location: "İstanbul, TR",
    year: "2023",
    description:
      "Su ile buluşan bir yaşam alanı. Şeffaf cepheler ve doğal malzemelerin ustalıkla harmanlandığı özel bir tasarım.",
    gradient: "from-slate-900 via-blue-950 to-slate-900",
    accent: "#4A90D9",
  },
  {
    id: 2,
    title: "Orman Kaçamağı",
    category: "Villa",
    location: "Bursa, TR",
    year: "2023",
    description:
      "Doğanın içine gömülü, minimal çizgileriyle çevreye saygılı bir villa. Ahşap ve taşın mükemmel sentezi.",
    gradient: "from-gray-900 via-emerald-950 to-gray-900",
    accent: "#52B788",
  },
  {
    id: 3,
    title: "Metro Ofis",
    category: "Ticari",
    location: "Ankara, TR",
    year: "2022",
    description:
      "Modern çalışma kültürünü yeniden tanımlayan açık ofis konsepti. Verimlilik ve estetik bir arada.",
    gradient: "from-zinc-900 via-purple-950 to-zinc-900",
    accent: "#9B72CF",
  },
  {
    id: 4,
    title: "Sahil Butik Otel",
    category: "Otel",
    location: "Bodrum, TR",
    year: "2022",
    description:
      "Ege rüzgarlarıyla dans eden ak mermer cepheler. Her oda, bağımsız bir lüks deneyim sunar.",
    gradient: "from-stone-900 via-amber-950 to-stone-900",
    accent: "#F4A261",
  },
  {
    id: 5,
    title: "Kültür Merkezi",
    category: "Kamusal",
    location: "İzmir, TR",
    year: "2021",
    description:
      "Şehrin kalbinde bir buluşma noktası. Geometrik formlar ve ışık oyunlarıyla sanatı yaşatan bir yapı.",
    gradient: "from-neutral-900 via-rose-950 to-neutral-900",
    accent: "#E07070",
  },
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: "var(--dark-2)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[#C9A96E] text-xs uppercase tracking-[0.25em] font-medium">Portföy</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Seçili <span style={{ color: "var(--accent)" }}>Projeler</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed">
            Her proje, müşterilerimizin hayallerini ve vizyonu bir araya getiren
            özgün bir yaratım sürecinin ürünüdür.
          </p>
        </div>

        {/* Main Swiper — full-width hero slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          className="rounded-2xl overflow-hidden"
          style={{ height: "520px" }}
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <div
                className={`relative w-full h-full bg-gradient-to-br ${p.gradient} flex items-end`}
              >
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,.05) 40px,rgba(255,255,255,.05) 41px)",
                  }}
                />

                {/* Accent glow */}
                <div
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-20"
                  style={{ background: p.accent }}
                />

                {/* Category badge */}
                <div className="absolute top-6 left-6">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
                    style={{ background: `${p.accent}30`, color: p.accent, border: `1px solid ${p.accent}50` }}
                  >
                    {p.category}
                  </span>
                </div>

                {/* Year */}
                <div className="absolute top-6 right-6 text-white/30 font-mono text-sm">{p.year}</div>

                {/* Info card */}
                <div className="relative z-10 p-8 w-full">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-2 text-white/40 text-xs mb-2">
                      <MapPin size={12} />
                      {p.location}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">{p.description}</p>
                    <button
                      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest transition-colors duration-300"
                      style={{ color: p.accent }}
                    >
                      Detaylı İncele <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail cards swiper */}
        <div className="mt-8">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
            className="cursor-grab active:cursor-grabbing"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.id}>
                <div
                  className={`rounded-xl overflow-hidden bg-gradient-to-br ${p.gradient} p-4 h-28 flex flex-col justify-end border border-white/5 hover:border-[#C9A96E]/40 transition-all duration-300 group`}
                >
                  <span
                    className="text-[10px] uppercase tracking-widest mb-1"
                    style={{ color: p.accent }}
                  >
                    {p.category}
                  </span>
                  <span className="text-white text-sm font-semibold leading-tight group-hover:text-[#C9A96E] transition-colors">
                    {p.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
