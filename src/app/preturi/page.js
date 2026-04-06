import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const periods = [
  {
    label: "1 Mai — Ziua Muncii",
    date: "28.04 - 05.05",
    highlight: true,
    split: false,
    rows: [
      { camera: "Cameră 2 locuri", n12: 315, min3: 235 },
      { camera: "Cameră 4 locuri", n12: 473, min3: 353 },
      { camera: "Suită",           n12: 513, min3: 383 },
    ],
  },
  {
    label: "Mai",
    date: "06.05 - 27.05",
    split: false,
    rows: [
      { camera: "Cameră 2 locuri", n12: 107, min3: 80 },
      { camera: "Cameră 4 locuri", n12: 174, min3: 130 },
      { camera: "Suită",           n12: 174, min3: 130 },
    ],
  },
  {
    label: "Prima jumătate Iunie",
    date: "27.05 - 16.06",
    split: true,
    rows: [
      { camera: "Cameră 2 locuri", n12w: 107, n12we: 167, min3w: 80,  min3we: 125 },
      { camera: "Cameră 4 locuri", n12w: 174, n12we: 260, min3w: 130, min3we: 195 },
      { camera: "Suită",           n12w: 174, n12we: 260, min3w: 130, min3we: 195 },
    ],
  },
  {
    label: "A doua jumătate Iunie",
    date: "17.06 - 30.06",
    split: true,
    rows: [
      { camera: "Cameră 2 locuri", n12w: 134, n12we: 180, min3w: 100, min3we: 135 },
      { camera: "Cameră 4 locuri", n12w: 200, n12we: 271, min3w: 150, min3we: 203 },
      { camera: "Suită",           n12w: 200, n12we: 271, min3w: 150, min3we: 203 },
    ],
  },
  {
    label: "Prima jumătate Iulie",
    date: "01.07 - 13.07",
    split: true,
    rows: [
      { camera: "Cameră 2 locuri", n12w: 150, n12we: 150, min3w: 115, min3we: 115 },
      { camera: "Cameră 4 locuri", n12w: 225, n12we: 225, min3w: 170, min3we: 170 },
      { camera: "Suită",           n12w: 245, n12we: 245, min3w: 185, min3we: 185 },
    ],
  },
  {
    label: "A doua jumătate Iulie",
    date: "16.07 - 31.07",
    split: true,
    rows: [
      { camera: "Cameră 2 locuri", n12w: 180, n12we: 180, min3w: 135, min3we: 135 },
      { camera: "Cameră 4 locuri", n12w: 200, n12we: 200, min3w: 150, min3we: 150 },
      { camera: "Suită",           n12w: 295, n12we: 295, min3w: 220, min3we: 220 },
    ],
  },
  {
    label: "August",
    date: "01.08 - 31.08",
    highlight: true,
    split: false,
    rows: [
      { camera: "Cameră 2 locuri", n12: 200, min3: 150 },
      { camera: "Cameră 4 locuri", n12: 300, min3: 225 },
      { camera: "Suită",           n12: 335, min3: 250 },
    ],
  },
  {
    label: "Septembrie",
    date: "01.09 - 30.09",
    split: false,
    rows: [
      { camera: "Cameră 2 locuri", n12: 155, min3: 115 },
      { camera: "Cameră 4 locuri", n12: 195, min3: 145 },
      { camera: "Suită",           n12: 215, min3: 160 },
    ],
  },
];

export default function Preturi() {
  return (
    <div className="font-heading">
      <Navbar />

      {/* Titlu pagina */}
      <div className="w-[60%] mx-auto px-6 md:px-10 pt-32 pb-4">
<h1 className="font-heading text-5xl md:text-7xl font-light text-white tracking-wider">Prețuri</h1>
        <div className="w-16 h-px bg-white/40 mt-10" />
      </div>

      <div className="w-[60%] mx-auto px-6 md:px-10 pt-12 pb-2">
        <p className="text-[20px] text-white text-center">
          Prețurile sunt exprimate în <strong>lei / cameră / noapte</strong>.
          Rezervările de minimum 3 nopți beneficiază de tarif redus.
        </p>
      </div>

      <section className="py-10 px-6 md:px-10 w-[60%] mx-auto">
        <div className="flex flex-col gap-5">
          {periods.map((p) => (
            <div
              key={p.label}
              className="overflow-hidden rounded-2xl"
            >
              {/* Header */}
              <div className="px-12 py-6 text-white" style={{backgroundColor: "rgba(0,0,0,0.55)", textShadow: "0 1px 4px rgba(0,0,0,0.6)"}}>
                <p className={`font-heading text-4xl font-medium ${"text-white"}`}>
                  {p.label}
                </p>
                <p className={`text-lg mt-0.5 ${"text-white/70"}`}>
                  {p.date}
                </p>
              </div>

              <div className="px-12 py-8" style={{backgroundColor: "rgba(195, 185, 170, 0.80)"}}>
                {p.split ? (
                  <>
                    <div className="grid grid-cols-5 gap-2 mb-1">
                      <div className="col-span-1" />
                      <div className="col-span-2 text-center text-2xl font-medium text-foreground border-b border-border pb-1 font-heading">
                        Preț 1-2 nopți
                      </div>
                      <div className="col-span-2 text-center text-2xl font-semibold text-[#9B1C35] pb-1 pt-1 font-heading">
                        Preț minim 3 nopți
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                      <div className="col-span-1" />
                      <div className="text-center text-lg text-foreground leading-tight">
                        Luni<br/>Marți<br/>Miercuri
                      </div>
                      <div className="text-center text-lg text-foreground leading-tight">
                        Joi<br/>Vineri<br/>Sâmbătă<br/>Duminică
                      </div>
                      <div className="text-center text-lg text-[#9B1C35] leading-tight py-1">
                        Luni<br/>Marți<br/>Miercuri
                      </div>
                      <div className="text-center text-lg text-[#9B1C35] leading-tight py-1">
                        Joi<br/>Vineri<br/>Sâmbătă<br/>Duminică
                      </div>
                    </div>
                    {p.rows.map((r) => (
                      <div key={r.camera} className="grid grid-cols-5 gap-2 items-center border-t border-border/50 py-5">
                        <span className="col-span-1 text-2xl font-semibold text-foreground leading-tight tracking-wide">{r.camera}</span>
                        <span className="text-[21px] font-semibold text-foreground text-center tracking-wide">{r.n12w} lei</span>
                        <span className="text-[21px] font-semibold text-foreground text-center tracking-wide">{r.n12we} lei</span>
                        <span className="flex items-center justify-center"><span className="text-[21px] font-semibold text-[#9B1C35] text-center font-heading tracking-wide">{r.min3w} lei</span></span>
                        <span className="flex items-center justify-center"><span className="text-[21px] font-semibold text-[#9B1C35] text-center font-heading tracking-wide">{r.min3we} lei</span></span>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="col-span-1" />
                      <div className="text-center text-2xl font-medium text-foreground border-b border-border pb-1 font-heading">Preț 1-2 nopți</div>
                      <div className="text-center text-2xl font-semibold text-[#9B1C35] pb-1 pt-1 font-heading">Preț minim 3 nopți</div>
                    </div>
                    {p.rows.map((r) => (
                      <div key={r.camera} className="grid grid-cols-3 gap-2 items-center border-t border-border/50 py-5">
                        <span className="col-span-1 text-2xl font-semibold text-foreground leading-tight tracking-wide">{r.camera}</span>
                        <span className="text-[21px] font-semibold text-foreground text-center tracking-wide">{r.n12} lei</span>
                        <span className="flex items-center justify-center"><span className="text-[21px] font-semibold text-[#9B1C35] text-center font-heading tracking-wide">{r.min3} lei</span></span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg text-white/60 text-center mt-8">
          * Prețurile pot varia în funcție de disponibilitate. Contactați-ne pentru oferte personalizate.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 border-t border-border py-16 px-6 md:px-10">
        <div className="w-[60%] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-4xl md:text-4xl font-light text-foreground mb-2">
              Ai întrebări despre prețuri?
            </h2>
            <p className="text-muted-foreground">Ne contactați și vă răspundem în cel mai scurt timp.</p>
          </div>
          <a
            href="/#contact"
            className="flex-shrink-0 px-10 py-4 bg-primary text-white text-lg uppercase tracking-widest font-medium hover:bg-foreground transition-colors duration-300"
          >
            Contactează-ne
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
