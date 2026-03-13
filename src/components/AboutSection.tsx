"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Building2, Leaf, Lightbulb, Ruler, Users, Star } from "lucide-react";

const services = [
  { icon: Building2, title: "Mimari Tasarım", desc: "Fonksiyon ve estetiği buluşturan özgün yapı tasarımları." },
  { icon: Leaf, title: "Sürdürülebilir", desc: "Çevre dostu malzeme ve enerji verimli çözümler." },
  { icon: Ruler, title: "İç Mekan", desc: "Her detayı düşünülmüş, yaşam kalitesini artıran iç mekanlar." },
  { icon: Lightbulb, title: "Konsept", desc: "Yenilikçi kavramsal tasarım ve vizyon geliştirme süreci." },
  { icon: Users, title: "Danışmanlık", desc: "Tüm proje sürecinde kapsamlı mimari danışmanlık hizmetleri." },
  { icon: Star, title: "Restorasyon", desc: "Tarihi yapılara duyarlı ve modern restorasyon yaklaşımları." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto">
        {/* 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-[#C9A96E] text-xs uppercase tracking-[0.25em] font-medium">Hakkımızda</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6 leading-tight">
              15 Yıllık Tutkuyla{" "}
              <span style={{ color: "var(--accent)" }}>Tasarlıyoruz</span>
            </h2>
            <p className="text-white/60 text-sm leading-loose mb-8">
              2009 yılında kurulan stüdyomuz, mimarlık ve iç tasarım alanında ulusal ve uluslararası
              ölçekte 120&apos;den fazla projeye imza atmıştır. Her projede müşterilerimizin hayallerini
              gerçeğe dönüştürmek için özgün, sürdürülebilir ve insan odaklı bir tasarım yaklaşımı
              benimsiyoruz.
            </p>
            <div className="flex gap-12 mb-10">
              {[
                { n: "120+", label: "Tamamlanan Proje" },
                { n: "40+", label: "Ödül" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-bold" style={{ color: "var(--accent)" }}>{s.n}</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block px-7 py-3.5 border border-[#C9A96E] text-[#C9A96E] text-sm uppercase tracking-widest font-medium rounded hover:bg-[#C9A96E] hover:text-black transition-all duration-300"
            >
              Ekibimizle Tanışın
            </a>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div
              className="w-full h-80 rounded-2xl flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1208 0%, #2a1e0a 50%, #1a1208 100%)",
                border: "1px solid rgba(201,169,110,0.2)",
              }}
            >
              {/* Abstract architectural lines */}
              <svg viewBox="0 0 400 300" className="w-full h-full opacity-40" preserveAspectRatio="xMidYMid meet">
                {/* Grid */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="#C9A96E" strokeWidth="0.3" />
                ))}
                {Array.from({ length: 11 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" stroke="#C9A96E" strokeWidth="0.3" />
                ))}
                {/* Building shape */}
                <rect x="100" y="80" width="200" height="180" fill="none" stroke="#C9A96E" strokeWidth="2" />
                <rect x="140" y="120" width="40" height="60" fill="none" stroke="#C9A96E" strokeWidth="1" />
                <rect x="220" y="120" width="40" height="60" fill="none" stroke="#C9A96E" strokeWidth="1" />
                <rect x="160" y="200" width="80" height="60" fill="rgba(201,169,110,0.1)" stroke="#C9A96E" strokeWidth="1.5" />
                <line x1="100" y1="80" x2="200" y2="20" stroke="#C9A96E" strokeWidth="1.5" />
                <line x1="200" y1="20" x2="300" y2="80" stroke="#C9A96E" strokeWidth="1.5" />
                {/* Compass */}
                <circle cx="340" cy="40" r="20" fill="none" stroke="#C9A96E" strokeWidth="1" />
                <line x1="340" y1="24" x2="340" y2="56" stroke="#C9A96E" strokeWidth="0.8" />
                <line x1="324" y1="40" x2="356" y2="40" stroke="#C9A96E" strokeWidth="0.8" />
                <circle cx="340" cy="40" r="3" fill="#C9A96E" />
              </svg>
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-5 px-6 py-4 rounded-xl border border-[#C9A96E]/30"
              style={{ background: "rgba(13,13,13,0.95)", backdropFilter: "blur(10px)" }}
            >
              <div className="text-3xl font-bold" style={{ color: "var(--accent)" }}>2009</div>
              <div className="text-white/40 text-xs uppercase tracking-widest">Yılından Beri</div>
            </div>
          </div>
        </div>

        {/* Services - horizontal scrolling slider */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-8 text-center tracking-wider uppercase">Hizmetlerimiz</h3>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{ 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            {services.map(({ icon: Icon, title, desc }) => (
              <SwiperSlide key={title}>
                <div
                  className="p-6 rounded-xl border border-white/10 hover:border-[#C9A96E]/40 transition-all duration-300 group h-44 flex flex-col justify-between"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <Icon size={28} className="text-[#C9A96E] group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
