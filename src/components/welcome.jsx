export default function Welcome() {
  return (
    <section className="relative py-24 px-6 md:px-10 overflow-hidden">
      {/* Background image override */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/poze/image 2.JPG')" }}
      />
    <div className="relative z-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative overflow-hidden rounded-[5rem]">
          <img
            src="/poze/poza tati.jpeg"
            alt="Ciobi, gazda ta"
            className="w-full h-auto object-contain"
          />
          {/* Decorative frame */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 -z-10" />
        </div>

        {/* Text */}
        <div className="space-y-6 bg-black/55 backdrop-blur-sm rounded-2xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Bine ati venit
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light leading-none text-white">
            Eu sunt Ciobi, <br />
            <em className="text-2xl md:text-3xl font-sans italic font-light leading-none mt-1 block text-white/80">gazda ta</em>
          </h2>
          <div className="w-12 h-px bg-primary" />
          <p className="text-white/90 leading-[2.1] text-xl tracking-wider font-heading">
            La Casa Ciobi, fiecare colt a fost gandit cu sufletul. Nu am vrut
            un loc frumos doar in poze, am vrut un loc unde sa te simti
            acasa din prima clipa. Caldura, linistea si grija pentru detalii
            sunt cele care te asteapta aici.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}
