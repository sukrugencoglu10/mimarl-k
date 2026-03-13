"use client";
import { useState } from "react";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ background: "var(--dark-3)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[#C9A96E] text-xs uppercase tracking-[0.25em] font-medium">İletişim</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Projenizi <span style={{ color: "var(--accent)" }}>Konuşalım</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Yeni bir proje mi planlıyorsunuz? Hayalinizi dinlemekten memnuniyet duyarız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Contact info cards */}
            {[
              { icon: Mail, label: "E-posta", value: "info@yilmazmimarlik.com" },
              { icon: Phone, label: "Telefon", value: "+90 536 580 69 60" },
              { icon: MapPin, label: "Adres", value: "Tuzla, İstanbul, Türkiye" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-[#C9A96E]/40 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="p-2 rounded-lg" style={{ background: "rgba(201,169,110,0.15)" }}>
                  <Icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}

            {/* Decorative quote */}
            <blockquote
              className="mt-4 p-6 rounded-xl border-l-2 text-white/50 italic text-sm leading-relaxed"
              style={{ borderColor: "var(--accent)", background: "rgba(201,169,110,0.05)" }}
            >
              "Mimarlık, insan ruhunu dönüştüren tek sanattır."
              <footer className="mt-2 text-xs not-italic" style={{ color: "var(--accent)" }}>— Alvar Aalto</footer>
            </blockquote>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div
              className="p-8 rounded-2xl border border-white/10"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
                  <CheckCircle size={48} style={{ color: "var(--accent)" }} />
                  <h3 className="text-xl font-semibold text-white">Mesajınız İletildi!</h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-2 text-sm font-medium underline underline-offset-4"
                    style={{ color: "var(--accent)" }}
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      label="Adınız"
                      id="name"
                      type="text"
                      placeholder="Adınız Soyadınız"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <FormField
                      label="E-posta"
                      id="email"
                      type="email"
                      placeholder="ornek@email.com"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                  </div>
                  <FormField
                    label="Konu"
                    id="subject"
                    type="text"
                    placeholder="Proje türünüz veya talebiniz"
                    value={form.subject}
                    onChange={(v) => setForm({ ...form, subject: v })}
                  />
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs text-white/50 uppercase tracking-widest">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Projeniz hakkında detaylı bilgi verin..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-[#C9A96E] transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-lg font-semibold uppercase tracking-widest text-sm transition-all duration-300 disabled:opacity-60"
                    style={{ background: "var(--accent)", color: "var(--dark)" }}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Gönderiliyor...
                      </span>
                    ) : (
                      <>
                        Mesaj Gönder <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label, id, type, placeholder, value, onChange,
}: {
  label: string; id: string; type: string; placeholder: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs text-white/50 uppercase tracking-widest">{label}</label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-[#C9A96E] transition-colors duration-300"
      />
    </div>
  );
}
