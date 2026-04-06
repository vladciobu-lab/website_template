"use client";

const occupancy = [
  { month: "Iunie",      pct: 78, color: "#7BAD2D" },
  { month: "Iulie",      pct: 60, color: "#3A8CC1" },
  { month: "August",     pct: 46, color: "#F5A31A" },
  { month: "Septembrie", pct: 22, color: "#D84315" },
];

const R = 45;
const CIRC = 2 * Math.PI * R;

function DonutChart({ pct, color }) {
  const filled = (pct / 100) * CIRC;
  return (
    <svg viewBox="0 0 100 100" className="w-52 h-52">
      {/* Track */}
      <circle
        cx="50" cy="50" r={R}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="10"
      />
      {/* Progress */}
      <circle
        cx="50" cy="50" r={R}
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${filled} ${CIRC}`}
        strokeDashoffset={CIRC / 4}
        style={{ transition: "stroke-dasharray 0.6s ease" }}
      />
      {/* Text */}
      <text
        x="50" y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="16"
        fontWeight="500"
        fill="#374151"
      >
        {pct}%
      </text>
    </svg>
  );
}

const secondSection = {
  image: "https://picsum.photos/seed/vila-terrace/800/600",
  alt: "Terasa panoramica",
  tag: "Exterior",
  title: "In 2025, fiecare camera a fost rezervata cu saptamani inainte",
  body: "In 2025 am inregistrat o ocupabilitate de peste 90%, cu rezervari facute cu luni in avans. Daca vrei sa prinzi datele dorite in 2026, nu astepta, locurile se ocupa rapid, mai ales in iulie si august.",
  linkLabel: "Rezerva acum",
  linkHref: "#contact",
  imageLeft: false,
};

export default function Alternating() {
  return (
    <section className="py-8">

      {/* Bloc 1 — Ocupabilitate */}
      <div className="py-16 px-10">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-white mb-4">Disponibilitate</p>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-white mb-4">
            Ocupabilitate
          </h2>
          <div className="w-10 h-px bg-primary mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-16">
          {occupancy.map((o) => (
            <div key={o.month} className="flex flex-col items-center gap-4 bg-white rounded-2xl px-8 py-6 shadow-md">
              <DonutChart pct={o.pct} color={o.color} />
              <span className="text-base font-medium text-foreground tracking-wide">
                {o.month}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bloc 2 — Evenimente */}
      <div className="grid md:grid-cols-2 min-h-[480px]">
        {/* Text stanga */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-16 bg-white/60">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-black leading-snug mb-4">
            {secondSection.title}
          </h2>
          <div className="w-10 h-px bg-primary mb-6" />
          <p className="text-black/80 leading-loose text-lg mb-8">
            {secondSection.body}
          </p>
          <a
            href={secondSection.linkHref}
            className="inline-block self-start text-xs uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
          >
            {secondSection.linkLabel}
          </a>
        </div>

        {/* Evenimente dreapta */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-16 bg-black/50 gap-6">

          {/* Sarbatori legale */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white mb-4">Sarbatori legale Mai — Septembrie 2026</p>
            <ul className="space-y-2">
              {[
                { date: "1 Mai (Vineri)", label: "Ziua Muncii — weekend lung 1–3 Mai" },
                { date: "14 Mai (Joi)", label: "Înălțarea Domnului — weekend lung 14–17 Mai" },
                { date: "25 Mai (Luni)", label: "A doua zi de Rusalii" },
                { date: "1 Iunie (Luni)", label: "Ziua Copilului" },
                { date: "15 Aug (Sâmbătă)", label: "Adormirea Maicii Domnului" },
              ].map((h) => (
                <li key={h.date} className="flex gap-3 text-sm">
                  <span className="text-white font-medium w-36 shrink-0">{h.date}</span>
                  <span className="text-white/90">{h.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-px bg-border" />

          {/* Festivaluri */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white mb-4">Evenimente in zona</p>
            <ul className="space-y-4">
              {[
                { name: "Fara Asfalt", date: "6 Iunie", loc: "2 Mai, Constanța", logo: "/logo-fara-asfalt.png" },
                { name: "Odyssea Rock Fusion", date: "25–27 Iunie", loc: "Venus Beach, Mangalia", logo: "/logo-odyssea.png" },
                { name: "Sunny Waves", date: "2–6 Iulie", loc: "Vama Veche", logo: "/logo-sunny-waves.png" },
                { name: "Beach Please", date: "8–12 Iulie", loc: "Costinești", logo: "/logo-beach-please.png" },
              ].map((f) => (
                <li key={f.name} className="flex gap-3 text-sm">
                  <span className="text-white font-medium w-36 shrink-0">{f.date}</span>
                  <div className="flex items-center">
                    <div className="w-48">
                      <p className="font-medium text-white">{f.name}</p>
                      <p className="text-white/90 text-xs mt-2">{f.loc}</p>
                    </div>
                    {f.logo && (
                      <img
                        src={f.logo}
                        alt={f.name}
                        className="h-16 w-auto rounded"
                        style={{ marginLeft: "4cm" }}
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
}
