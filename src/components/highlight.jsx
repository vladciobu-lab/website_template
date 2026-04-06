export default function Highlight() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[500px] md:h-[500px]">
      {/* Stanga - text pe fundal inchis */}
      <div className="flex-1 bg-black/60 flex items-center justify-center px-10 py-16 md:py-0">
        <div className="text-center text-white max-w-sm">
          <p className="text-xs uppercase tracking-[0.35em] mb-6 opacity-70">
            Locatie de exceptie
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6 leading-tight">
            La 5 minute de Plaja
          </h2>
          <div className="w-12 h-px bg-white/50 mx-auto mb-6" />
          <p className="text-base md:text-lg font-light opacity-80 leading-loose tracking-wide">
            Casa Ciobi se afla in satul 2 Mai, unul dintre cele mai linistite
            si autentice locuri de pe litoralul romanesc, la cateva minute de
            plaja, departe de aglomeratia statiunilor, aproape de tot ce conteaza.
          </p>
        </div>
      </div>

      {/* Dreapta - harta */}
      <div className="flex-1 bg-black/60 flex items-center justify-center">
        <img
          src="/harta-plaja-v3.png"
          alt="Harta Casa Ciobi - distanta pana la plaja"
          className="w-[70%] object-contain rounded-[3rem]"
        />
      </div>
    </section>
  );
}
