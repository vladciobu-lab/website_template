import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 md:px-10">
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Ia legatura cu noi
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-white">
                Contact & Rezervari
              </h2>
              <div className="w-12 h-px bg-primary mt-6" />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Adresa</p>
                  <p className="text-sm text-white/70 mt-1">
                    Str. Principala nr. 12, Sinaia, Prahova
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Telefon</p>
                  <p className="text-sm text-white/70 mt-1">
                    +40 740 000 000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm text-white/70 mt-1">
                    contact@casaciobi.ro
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Program receptie</p>
                  <p className="text-sm text-white/70 mt-1">
                    Check-in: 15:00 — Check-out: 12:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-black/70 p-8 space-y-5">
            <h3 className="font-heading text-2xl font-light text-white">
              Trimite un mesaj
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                  Nume
                </label>
                <input
                  type="text"
                  className="w-full border border-border bg-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Numele dvs."
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full border border-border bg-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="+40 7xx xxx xxx"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-border bg-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="email@exemplu.ro"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  className="w-full border border-border bg-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  className="w-full border border-border bg-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-white/70 mb-2">
                Mesaj
              </label>
              <textarea
                rows={4}
                className="w-full border border-border bg-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-white/40"
                placeholder="Detalii despre sejurul dvs..."
              />
            </div>

            <button className="w-full bg-primary text-white py-4 text-xs uppercase tracking-widest font-medium hover:bg-foreground transition-colors duration-300">
              Trimite Cererea
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
