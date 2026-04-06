import { Users, Maximize2, ArrowRight } from "lucide-react";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Camera Dubla",
    image: "/sketch-camera-2-locuri.svg",
    guests: 2,
    sqm: 14,
    features: ["Pat dublu", "Baie privata", "Balcon / Terasa", "TV & WiFi"],
    price: "Preturi intre 80 si 200 lei / noapte",
    href: "/camere/camera-2-locuri",
  },
  {
    id: 2,
    name: "Camera 4 Locuri",
    image: "/sketch-camera-4-locuri.svg",
    guests: 4,
    sqm: 20,
    features: ["2 paturi duble / un pat dublu si 2 supraetajate", "Baie privata", "Terasa", "TV & WiFi"],
    price: "Preturi intre 130 si 300 lei / noapte",
    href: "/camere/camera-4-locuri",
  },
  {
    id: 3,
    name: "Suita Familiala",
    image: "/sketch-suita.svg",
    guests: 4,
    sqm: 20,
    features: ["Doua dormitoare", "Baie privata", "2 intrari separate", "Terasa"],
    price: "Preturi intre 130 si 335 lei / noapte",
    href: "/camere/suita",
  },
];

export default function Rooms() {
  return (
    <section id="cazare" className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Tipuri de camere
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6" />
        </div>

        {/* Rooms grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white group overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-400 flex items-center justify-center">
                  <a
                    href="#contact"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0 bg-white text-foreground text-xs uppercase tracking-widest px-6 py-3 flex items-center gap-2 font-medium hover:bg-primary hover:text-white"
                  >
                    Rezerva <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {room.guests} persoane
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize2 className="h-3.5 w-3.5" />
                    {room.sqm} m²
                  </span>
                </div>

                <h3 className="font-heading text-xl font-medium text-foreground">
                  {room.name}
                </h3>

                <ul className="space-y-2">
                  {room.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{room.price}</span>
                  <Link
                    href={room.href}
                    className="text-xs uppercase tracking-widest text-primary border-b border-primary pb-0.5 hover:text-foreground hover:border-foreground transition-colors duration-300"
                  >
                    Detalii
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
