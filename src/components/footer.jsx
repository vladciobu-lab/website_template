import Link from "next/link";
import { Share2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3
              className="font-heading text-2xl tracking-widest uppercase"
              style={{ letterSpacing: "0.2em" }}
            >
              Casa Ciobi
            </h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Refugiul perfect intre natura si confort. Va asteptam!
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white/50">
              Navigare
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Cazare", href: "#cazare" },
                { label: "Facilitati", href: "#facilitati" },
                { label: "Galerie", href: "#galerie" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white/50">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>Str. Principala nr. 12</p>
              <p>Sinaia, Prahova</p>
              <p>+40 740 000 000</p>
              <p>contact@casaciobi.ro</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Casa Ciobi. Toate drepturile rezervate.</p>
          <p>Politica de confidentialitate</p>
        </div>
      </div>
    </footer>
  );
}
