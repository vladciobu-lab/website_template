import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Suita() {
  return (
    <div className="font-heading">
      <Navbar />

      <div className="w-[60%] mx-auto px-6 md:px-10 pt-32 pb-4">
        <h1 className="font-heading text-5xl md:text-7xl font-light text-white tracking-wider">
          Suită
        </h1>
        <div className="w-16 h-px bg-white/40 mt-10" />
      </div>

      <section className="py-10 px-6 md:px-10 w-[60%] mx-auto">
        <p className="text-[20px] text-white/80">
          Suita de lux oferă cel mai înalt nivel de confort și eleganță, perfectă pentru un sejur de neuitat.
        </p>
      </section>

      <Footer />
    </div>
  );
}
