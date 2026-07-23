import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const services = [
  "Air Freight", "Ocean Freight", "Car Shipping", "Rail Shipping",
  "Truck Freight", "Door-to-Door", "Household Goods",
];

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark bg-[#081226] text-white">
      {/* Top bar */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="inline-flex rounded-xl bg-white p-2">
                <Image src="/logo.png" alt="Last Born Canada" width={220} height={70} className="h-16 w-auto object-contain block" />
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Trusted freight and logistics connecting Canada to Africa — Tanzania, Kenya, Uganda & Comoro.
            </p>
            <p className="text-white/40 text-xs mt-4">Mon–Sun: 9:00 AM – 10:00 PM</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-widest text-white/70 mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/50 text-sm hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-widest text-white/70 mb-5">Services</h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-white/50 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-widest text-white/70 mb-5">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gold font-semibold uppercase tracking-wide mb-2">🇨🇦 Canada</p>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold/60 flex-shrink-0 mt-0.5" />
                    <span className="text-white/50 text-xs">42B Rowntree Ave, Toronto ON M6N 1R7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gold/60" />
                    <a href="tel:+14378737675" className="text-white/50 text-xs hover:text-gold transition-colors">+1 437 873 7675</a>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs text-gold font-semibold uppercase tracking-wide mb-2">🇹🇿 Tanzania</p>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold/60 flex-shrink-0 mt-0.5" />
                    <span className="text-white/50 text-xs">Boko Nyaishozi Plot 210, Dar es Salaam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gold/60" />
                    <a href="tel:+255716218981" className="text-white/50 text-xs hover:text-gold transition-colors">+255 716 218 981</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold/60" />
                <a href="mailto:lastborncanada@gmail.com" className="text-white/50 text-xs hover:text-gold transition-colors">
                  lastborncanada@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Last Born Canada Inc. (LBC). All rights reserved.
          </p>
          <p className="text-white/20 text-xs italic">
            "We deliver more than cargo — we deliver trust."
          </p>
        </div>
      </div>
    </footer>
  );
}
