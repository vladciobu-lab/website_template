const photos = [
  { seed: "gallery-main", alt: "Terasa cu vedere panoramica", cls: "col-span-2 row-span-2" },
  { seed: "gallery-room", alt: "Dormitor principal", cls: "" },
  { seed: "gallery-pool", alt: "Piscina exterioara", cls: "" },
  { seed: "gallery-nature", alt: "Imprejurimi naturale", cls: "" },
  { seed: "gallery-kitchen", alt: "Bucatarie moderna", cls: "" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Imagini
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Galerie Foto
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]">
          {photos.map((photo) => (
            <div
              key={photo.seed}
              className={`overflow-hidden group relative ${photo.cls}`}
            >
              <img
                src={`https://picsum.photos/seed/${photo.seed}/800/600`}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-400 flex items-end">
                <span className="text-white text-xs uppercase tracking-widest px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
