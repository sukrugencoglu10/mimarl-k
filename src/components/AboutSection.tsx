"use client";
import { useRef, useCallback, useState, useMemo, useEffect } from "react";
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

// Single building config — all holes grid-snapped to brick grid
const B = { x: 100, y: 40, w: 200, h: 231, bw: 10, bh: 6, gap: 1 };
const SX = B.bw + B.gap; // 11 — horizontal step
const SY = B.bh + B.gap; // 7  — vertical step
const TOTAL_COLS = Math.floor(B.w / SX); // 18
const TOTAL_ROWS = Math.floor(B.h / SY); // 33

// Grid-snapped rectangle: col/row index → pixel rect
function gridRect(col: number, row: number, cw: number, rh: number) {
  return { x: B.x + col * SX, y: B.y + row * SY, w: cw * SX - B.gap, h: rh * SY - B.gap };
}

// 4 windows per floor × 6 floors, each 2 cols × 3 rows
const WIN_COLS = [2, 6, 10, 14];
const WIN_FLOOR_ROWS = [2, 6, 10, 14, 18, 22];
const WINDOWS = WIN_FLOOR_ROWS.flatMap((r) =>
  WIN_COLS.map((c) => gridRect(c, r, 2, 3))
);

// Entrance: 4 cols wide × 4 rows tall, centered, at bottom
const ENT_COL = Math.floor((TOTAL_COLS - 4) / 2); // col 7
const ENTRANCE = gridRect(ENT_COL, 29, 4, 4);

function makeBricks() {
  const { x: sx, y: sy, w, h, bw, bh, gap } = B;
  const cols = Math.floor(w / (bw + gap));
  const rows = Math.floor(h / (bh + gap));
  const holes = [...WINDOWS, ENTRANCE];
  const bricks: { x: number; y: number; w: number; h: number; delay: number }[] = [];

  for (let row = rows - 1; row >= 0; row--) {
    for (let col = 0; col < cols; col++) {
      const bx = sx + col * (bw + gap);
      const by = sy + row * (bh + gap);
      if (bx + bw > sx + w) continue;
      const inHole = holes.some(
        (hole) => bx + bw > hole.x && bx < hole.x + hole.w && by + bh > hole.y && by < hole.y + hole.h
      );
      if (inHole) continue;
      const buildOrder = (rows - 1 - row) * cols + col;
      bricks.push({ x: bx, y: by, w: bw, h: bh, delay: buildOrder * 0.008 });
    }
  }
  return bricks;
}

export default function AboutSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [demolishing, setDemolishing] = useState(false);
  const [buildKey, setBuildKey] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const animatingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const allBricks = useMemo(() => makeBricks(), []);

  // Max brick delay for scheduling details
  const maxDelay = useMemo(() => Math.max(...allBricks.map((b) => b.delay)), [allBricks]);

  const scheduleDetails = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShowDetails(false);
    timerRef.current = setTimeout(() => setShowDetails(true), (maxDelay + 0.5) * 1000);
  }, [maxDelay]);

  const replayAnimation = useCallback(() => {
    if (!svgRef.current || animatingRef.current) return;
    animatingRef.current = true;
    setDemolishing(true);
    setShowDetails(false);

    // Bricks fall
    svgRef.current.querySelectorAll(".brick").forEach((el) => {
      const htmlEl = el as SVGElement;
      const xVal = parseFloat(el.getAttribute("x") || "200");
      const yVal = parseFloat(el.getAttribute("y") || "150");
      htmlEl.style.animationDelay = `${(xVal - B.x) / B.w * 1.5 + (1 - yVal / 300) * 0.3}s`;
      htmlEl.classList.add("brick-fall");
    });

    // Detail lines fade
    svgRef.current.querySelectorAll(".detail-line").forEach((el, i) => {
      (el as SVGElement).style.animationDelay = `${0.3 + i * 0.05}s`;
      (el as SVGElement).classList.add("detail-out");
    });

    setTimeout(() => {
      setDemolishing(false);
      setBuildKey((k) => k + 1);
      scheduleDetails();
      animatingRef.current = false;
    }, 3500);
  }, [scheduleDetails]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { scheduleDetails(); }, []);

  return (
    <section id="about" className="py-24 px-6" style={{ background: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto">
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
                { n: "500+", label: "Memnun Aile" },
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
              className="w-full h-80 rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #1a1208 0%, #2a1e0a 50%, #1a1208 100%)",
                border: "1px solid rgba(201,169,110,0.2)",
              }}
              onClick={replayAnimation}
            >
              <svg ref={svgRef} viewBox="0 0 400 300" className="w-full h-full opacity-70" preserveAspectRatio="xMidYMid meet">
                {/* Bricks */}
                <g key={buildKey}>
                  {allBricks.map((b, i) => (
                    <rect
                      key={i}
                      x={b.x}
                      y={b.y}
                      width={b.w}
                      height={b.h}
                      fill="rgba(201,169,110,0.18)"
                      stroke="#C9A96E"
                      strokeWidth="0.3"
                      className="brick"
                      style={{ animationDelay: `${b.delay}s` }}
                    />
                  ))}
                </g>

                {/* Details — shown after bricks finish */}
                <g key={`d-${buildKey}`} style={{ display: showDetails ? undefined : "none" }}>
                  {/* Ground */}
                  <line x1="60" y1={B.y + B.h} x2="340" y2={B.y + B.h} stroke="#C9A96E" strokeWidth="1" className="detail-line" style={{ animationDelay: "0s" }} />

                  {/* Building outline */}
                  <rect x={B.x} y={B.y} width={B.w} height={B.h} fill="none" stroke="#C9A96E" strokeWidth="1.5" className="detail-line" style={{ animationDelay: "0.1s" }} />

                  {/* Roof cornice */}
                  <line x1={B.x - 3} y1={B.y} x2={B.x + B.w + 3} y2={B.y} stroke="#C9A96E" strokeWidth="2.5" className="detail-line" style={{ animationDelay: "0.2s" }} />
                  <line x1={B.x - 2} y1={B.y + 3} x2={B.x + B.w + 2} y2={B.y + 3} stroke="#C9A96E" strokeWidth="0.5" className="detail-line" style={{ animationDelay: "0.3s" }} />

                  {/* Roof triangle */}
                  <line x1={B.x} y1={B.y} x2={B.x + B.w / 2} y2={B.y - 25} stroke="#C9A96E" strokeWidth="1.2" className="detail-line" style={{ animationDelay: "0.4s" }} />
                  <line x1={B.x + B.w} y1={B.y} x2={B.x + B.w / 2} y2={B.y - 25} stroke="#C9A96E" strokeWidth="1.2" className="detail-line" style={{ animationDelay: "0.5s" }} />

                  {/* Window frames */}
                  {WINDOWS.map((w, i) => (
                    <rect key={`wf${i}`} x={w.x} y={w.y} width={w.w} height={w.h} fill="rgba(100,180,255,0.1)" stroke="#C9A96E" strokeWidth="0.6" className="detail-line" style={{ animationDelay: `${0.6 + i * 0.02}s` }} />
                  ))}

                  {/* Floor lines */}
                  {WINDOWS.filter((_, i) => i % 4 === 0).map((w, i) => (
                    <line key={`fl${i}`} x1={B.x} y1={w.y + w.h + 2} x2={B.x + B.w} y2={w.y + w.h + 2} stroke="#C9A96E" strokeWidth="0.3" className="detail-line" style={{ animationDelay: `${1.2 + i * 0.08}s` }} />
                  ))}

                  {/* Entrance */}
                  <rect x={ENTRANCE.x} y={ENTRANCE.y} width={ENTRANCE.w} height={ENTRANCE.h} fill="rgba(201,169,110,0.12)" stroke="#C9A96E" strokeWidth="0.8" className="detail-line" style={{ animationDelay: "1.8s" }} />
                  {/* Entrance arch */}
                  <path d={`M${ENTRANCE.x},${ENTRANCE.y} Q${ENTRANCE.x + ENTRANCE.w / 2},${ENTRANCE.y - 8} ${ENTRANCE.x + ENTRANCE.w},${ENTRANCE.y}`} fill="none" stroke="#C9A96E" strokeWidth="0.8" className="detail-line" style={{ animationDelay: "1.9s" }} />

                  {/* Flag pole */}
                  <line x1={B.x + B.w / 2} y1={B.y - 25} x2={B.x + B.w / 2} y2={B.y - 40} stroke="#C9A96E" strokeWidth="0.6" className="detail-line" style={{ animationDelay: "2s" }} />
                </g>

                {/* Excavator — demolish only */}
                {demolishing && (
                  <g className="excavator-group">
                    <rect x="-8" y="258" width="44" height="11" rx="5" fill="none" stroke="#C9A96E" strokeWidth="1.3" />
                    <circle cx="2" cy="263.5" r="3.5" fill="none" stroke="#C9A96E" strokeWidth="0.8" />
                    <circle cx="15" cy="263.5" r="3.5" fill="none" stroke="#C9A96E" strokeWidth="0.8" />
                    <circle cx="28" cy="263.5" r="3.5" fill="none" stroke="#C9A96E" strokeWidth="0.8" />
                    <rect x="-4" y="242" width="32" height="16" rx="2" fill="rgba(201,169,110,0.15)" stroke="#C9A96E" strokeWidth="1" />
                    <rect x="2" y="230" width="16" height="12" rx="1" fill="rgba(201,169,110,0.1)" stroke="#C9A96E" strokeWidth="0.8" />
                    <rect x="5" y="232" width="10" height="7" fill="rgba(100,180,255,0.12)" stroke="#C9A96E" strokeWidth="0.4" />
                    <g className="excavator-arm">
                      <line x1="5" y1="238" x2="35" y2="210" stroke="#C9A96E" strokeWidth="2" />
                      <line x1="35" y1="210" x2="50" y2="245" stroke="#C9A96E" strokeWidth="1.5" />
                      <path d="M45,245 L55,245 L55,258 L42,258 Z" fill="rgba(201,169,110,0.2)" stroke="#C9A96E" strokeWidth="1.2" />
                    </g>
                    <circle cx="-18" cy="252" r="6" fill="rgba(201,169,110,0.12)" className="dust" style={{ animationDelay: "0.2s" }} />
                    <circle cx="-22" cy="260" r="8" fill="rgba(201,169,110,0.08)" className="dust" style={{ animationDelay: "0.5s" }} />
                  </g>
                )}
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

        {/* Services */}
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
