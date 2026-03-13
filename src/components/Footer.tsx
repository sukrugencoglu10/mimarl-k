import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 border-t"
      style={{ background: "var(--dark-2)", borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Studio<span className="text-white">.</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              İstanbul merkezli mimarlık stüdyomuz; konut, ticari ve kamusal alanda yenilikçi tasarımlar üretmektedir.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-4">Hızlı Linkler</h4>
            <ul className="flex flex-col gap-2">
              {["#hero", "#about", "#projects", "#contact"].map((href, i) => {
                const labels = ["Ana Sayfa", "Hakkımızda", "Projeler", "İletişim"];
                return (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-white/40 text-sm hover:text-[#C9A96E] transition-colors duration-300"
                    >
                      {labels[i]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-4">Sosyal Medya</h4>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 rounded-lg border border-white/10 text-white/40 hover:border-[#C9A96E]/50 hover:text-[#C9A96E] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2024 Studio. Tüm hakları saklıdır.</p>
          <p className="text-white/20 text-xs">İstanbul, Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
