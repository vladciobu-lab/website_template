import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Camera4Locuri() {
  return (
    <div className="font-heading">
      <Navbar />

      <div className="w-[60%] mx-auto px-6 md:px-10 pt-32 pb-4">
        <h1 className="font-heading text-5xl md:text-7xl font-light text-white tracking-wider">
          Cameră 4 Locuri
        </h1>
        <div className="w-16 h-px bg-white/40 mt-10" />
      </div>

      <section className="py-10 px-6 md:px-10 w-[60%] mx-auto">
        <p className="text-[20px] text-white/80">
          Cameră spațioasă pentru patru persoane, ideală pentru familii sau grupuri mici, cu toate dotările necesare.
        </p>
      </section>

      <Footer />
    </div>
  );
}
