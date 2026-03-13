"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, MoveRight } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.5 + 0.1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,110,${p.o})`;
        ctx.fill();
      });
      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201,169,110,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #1a1208 50%, #0D0D0D 100%)" }}
    >
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,110,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-[#C9A96E]/30 rounded-full px-4 py-1.5 text-[#C9A96E] text-xs uppercase tracking-[0.2em] mb-8 backdrop-blur-sm bg-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
          2024 — Premium Mimarlık Stüdyosu
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-6">
          <span className="text-white">Mekanları</span>
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #C9A96E, #E8D5B0, #C9A96E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200%",
            }}
          >
            Dönüştürüyoruz
          </span>
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Her proje, bir hikâyedir. Minimalist çizgiler ve derin dokularla
          hayatınıza uyum sağlayan, ilham veren mekânlar tasarlıyoruz.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-[#C9A96E] text-black px-7 py-3.5 rounded font-semibold uppercase tracking-widest text-sm hover:bg-[#E8D5B0] transition-all duration-300"
          >
            Projeleri İncele
            <MoveRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded font-medium uppercase tracking-widest text-sm hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
          >
            Bize Ulaşın
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { n: "120+", label: "Proje" },
            { n: "15+", label: "Yıl Deneyim" },
            { n: "40+", label: "Ödül" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold" style={{ color: "var(--accent)" }}>{s.n}</div>
              <div className="text-white/40 text-xs uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs uppercase tracking-widest">Kaydır</span>
        <ArrowDown size={16} className="text-[#C9A96E]" />
      </div>
    </section>
  );
}
