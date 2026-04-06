import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Welcome from "@/components/welcome";
import Rooms from "@/components/rooms";
import Highlight from "@/components/highlight";
import Benefits from "@/components/benefits";
import Alternating from "@/components/alternating";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Rooms />
        <Highlight />
        <Benefits />
        <Alternating />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
