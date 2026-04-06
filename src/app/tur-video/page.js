import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const videos = [
  {
    id: 1,
    title: "Tur Complet Casa Ciobi",
    desc: "O privire de ansamblu asupra intregii proprietati — interior, exterior si imprejurimi.",
    thumb: "https://picsum.photos/seed/tur-main/1280/720",
  },
  {
    id: 2,
    title: "Camerele & Spatiile de Locuit",
    desc: "Detalii despre fiecare camera, dotari si atmosfera unica pe care o vei gasi.",
    thumb: "https://picsum.photos/seed/tur-rooms/1280/720",
  },
  {
    id: 3,
    title: "Terasa & Spatii Exterioare",
    desc: "Gradina, terasa panoramica si piscina — spatiile perfecte pentru relaxare.",
    thumb: "https://picsum.photos/seed/tur-outdoor/1280/720",
  },
];

export default function TurVideo() {
  return (
    <>
      <Navbar />

      {/* Hero banda */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/tur-hero/1920/600')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-12 w-full">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70 mb-3">
            Casa Ciobi
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white">
            Tur Video
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-muted-foreground text-base leading-relaxed">
            Exploreaza Casa Ciobi inainte de a ajunge la noi. Am pregatit
            tururi video detaliate pentru fiecare spatiu, astfel incat sa stii
            exact ce te asteapta si sa poti planifica sejurul perfect.
          </p>
        </div>
        <div className="w-12 h-px bg-primary mt-8" />
      </section>

      {/* Video cards */}
      <section className="pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((v) => (
            <div key={v.id} className="group space-y-4">
              {/* Thumbnail cu play button */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay + Play */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-400 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banda */}
      <section className="bg-muted/50 border-t border-border py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-2">
              Ti-a placut ce ai vazut?
            </h2>
            <p className="text-muted-foreground">
              Rezerva acum si traieste experienta in persoana.
            </p>
          </div>
          <a
            href="/#contact"
            className="flex-shrink-0 px-10 py-4 bg-primary text-white text-xs uppercase tracking-widest font-medium hover:bg-foreground transition-colors duration-300"
          >
            Rezerva Acum
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
