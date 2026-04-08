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
    <section id="cazare" style={{ backgroundColor: "transparent" }}>
      {/* Full-width 3-column grid */}
      <div className="grid grid-cols-3 w-full">
        {rooms.map((room) => (
          <div key={room.id} className="flex flex-col group">

            {/* Title strip above image */}
            <div className="flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.60)" }}>
              <Link href={room.href} className="flex items-center gap-3 px-6 py-3 hover:opacity-80 transition-opacity">
                <h3 className="font-heading text-[30px] font-medium text-white leading-tight">
                  {room.name}
                </h3>
                <div className="flex items-center gap-2 text-[18px] text-white/70">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {room.guests}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize2 className="h-4 w-4" />
                    {room.sqm}m²
                  </span>
                </div>
              </Link>
            </div>

            {/* Image area — description overlaid at bottom */}
            <Link href={room.href} className="relative overflow-hidden cursor-pointer" style={{ backgroundColor: "rgba(0,0,0,0.60)", aspectRatio: "5/3", display: "block" }}>
              <div
                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${room.image}')`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href={room.href}
                  className="bg-primary text-white text-xs uppercase tracking-widest px-6 py-2 font-medium hover:bg-white hover:text-foreground transition-colors duration-300"
                >
                  Detalii
                </Link>
              </div>
            </Link>

            {/* Description strip — below image, elevated with shadow */}
            <div className="relative z-10 px-6 py-5 flex flex-col items-center text-center" style={{ backgroundColor: "rgba(0,0,0,0.60)" }}>
              <ul className="space-y-0.5 mb-3">
                {room.features.map((f) => (
                  <li key={f} className="text-[18px] text-white/80 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pt-2 w-full flex items-center justify-center">
                <span className="text-[18px] text-white/70 leading-tight">{room.price}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
