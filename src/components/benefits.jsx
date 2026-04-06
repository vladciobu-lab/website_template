import { Wifi, Car, Utensils, WashingMachine, AirVent, ShowerHead, Star, Mountain, Leaf } from "lucide-react";

const benefits = [
  {
    icon: WashingMachine,
    title: "Lenjerii Impecabile",
    desc: "Lenjeriile si prosoapele sunt spalate profesional si calcate cu grija inainte de fiecare sejur.",
  },
  {
    icon: Wifi,
    title: "WiFi de Mare Viteza",
    desc: "Conectivitate premium in intreaga vila, inclusiv in exterior.",
  },
  {
    icon: Car,
    title: "Parcare Gratuita",
    desc: "Parcare gratuita in jurul proprietatii pentru toti oaspetii.",
  },
  {
    icon: Utensils,
    title: "Foisor & Gratar",
    desc: "Foisor dotat complet pentru gatit si luat masa, cu gratar inclus, gratuit pentru toti oaspetii.",
  },
  {
    icon: AirVent,
    title: "Aer Conditionat",
    desc: "Aer conditionat inclus in toate camerele, fara costuri suplimentare.",
  },
  {
    icon: ShowerHead,
    title: "Baie Proprie",
    desc: "Fiecare camera are baie privata dotata cu prosoape, gel de dus si sapun.",
  },
];

export default function Benefits() {
  return (
    <section id="facilitati" className="relative py-24 px-6 md:px-10">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/90 mb-4">
            De ce sa ne alegi
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-white">
            Facilitatile Noastre
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="flex flex-col items-center text-center gap-4 group cursor-default">
                <div className="w-16 h-16 border border-white/40 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-400">
                  <Icon className="h-6 w-6 text-white group-hover:text-white transition-colors duration-400" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-medium text-white mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
