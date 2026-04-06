import { ChevronDown } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const faqs = [
  {
    q: "Care este ora de check-in și check-out?",
    a: "Check-in-ul se face după ora 16:00, iar check-out-ul până la ora 11:00. Încercăm să pregătim camera cât mai repede și să anunțăm oaspeții imediat ce camera este liberă.",
  },
  {
    q: "Care este ora de liniște?",
    a: "Ora de liniște este între 23:00 și 08:00. Vă rugăm să respectați liniștea vecinilor și a celorlalți oaspeți în acest interval.",
  },
  {
    q: "Acceptați animale de companie?",
    a: "Da, acceptăm animale de companie mici și medii. Vă rugăm să ne anunțați în avans.",
  },
  {
    q: "Există parcare disponibilă?",
    a: "Da, vila dispune de parcare gratuită pentru toți oaspeții, în jurul proprietății.",
  },
  {
    q: "Cât de departe este plaja?",
    a: "Plaja se află la aproximativ 5 minute de mers pe jos de vilă, prin centrul satului 2 Mai.",
  },
  {
    q: "Este disponibil WiFi?",
    a: "Da, WiFi de mare viteză este disponibil gratuit în toată vila, inclusiv în exterior.",
  },
  {
    q: "Care este politica de anulare?",
    a: "Anulările făcute cu mai mult de 14 zile înainte de check-in sunt gratuite.",
  },
  {
    q: "Pot face o rezervare directă fără platforme externe?",
    a: "Da, preferăm rezervările directe. Ne puteți contacta prin formularul de pe site, telefon sau email și vom confirma disponibilitatea rapid.",
  },
];

export default function IntrebariFrecvente() {
  return (
    <div className="font-heading">
      <Navbar />

      <div className="w-[60%] mx-auto px-6 md:px-10 pt-32 pb-4">
        <h1 className="font-heading text-5xl md:text-7xl font-light text-white tracking-wider">
          Întrebări Frecvente
        </h1>
        <div className="w-16 h-px bg-white/40 mt-10" />
      </div>

      <section className="py-10 px-6 md:px-10 w-[60%] mx-auto">
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group overflow-hidden rounded-xl"
              style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
            >
              <summary className="flex items-center justify-between px-8 py-5 text-white gap-4 cursor-pointer list-none">
                <span className="font-heading text-lg font-medium">{faq.q}</span>
                <ChevronDown className="flex-shrink-0 h-5 w-5 text-white/60 transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div
                className="px-8 py-6 border-t border-white/10"
                style={{ backgroundColor: "rgba(195, 185, 170, 0.85)" }}
              >
                <p className="text-base text-foreground leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
