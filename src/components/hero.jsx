import Link from "next/link";
import Ratings from "@/components/ratings";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image via CSS */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/poze/poza fatada.jpg')",
        }}
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.35em] mb-6 opacity-80">
          Cazare de exceptie
        </p>
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight"
          style={{ letterSpacing: "0.05em" }}
        >
          Casa Ciobi
        </h1>
        <p className="text-base md:text-lg font-light opacity-85 mb-10 max-w-xl mx-auto leading-relaxed">
          Refugiul perfect intre natura si confort, o experienta autentica,
          departe de agitatie.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="px-10 py-4 bg-white text-foreground text-xs uppercase tracking-widest font-medium hover:bg-primary hover:text-white transition-all duration-300"
          >
            Rezerva Acum
          </Link>
          <Link
            href="/tur-video"
            className="px-10 py-4 border border-white text-white text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-foreground transition-all duration-300"
          >
            Tur Video
          </Link>
        </div>

      </div>

      {/* Ratings + Scroll indicator — fixate jos */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 w-full px-6">
        <Ratings />
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
