import Link from "next/link";
import { Plane, Ship, Car, Train, Truck, Package, Home, MapPin, type LucideIcon } from "lucide-react";
import { getServices } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = { Plane, Ship, Car, Train, Truck, Package, Home };

export default async function Services() {
  const services = await getServices();

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
            What We Offer
          </div>
          <h2 className="font-display font-800 text-4xl sm:text-5xl text-navy uppercase leading-tight">
            Our Freight & Logistics Services
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
            Comprehensive shipping solutions from Canada to Tanzania, Kenya, Uganda, Comoro — and beyond.
          </p>
        </div>

        {/* Route banner */}
        <div className="bg-navy rounded-2xl px-6 py-5 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
            <span className="text-white font-medium">Canada</span>
          </div>
          <div className="flex-1 border-t-2 border-dashed border-gold/40 hidden sm:block" />
          <div className="text-gold text-sm font-semibold tracking-wide px-4">By Air & Sea</div>
          <div className="flex-1 border-t-2 border-dashed border-gold/40 hidden sm:block" />
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
            <span className="text-white font-medium">Tanzania · Kenya · Uganda · Comoro</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s: any) => {
            const Icon = ICONS[s.icon] || Package;
            return (
              <div
                key={s._id}
                className="service-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy/40" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full">
                      {s.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-700 text-xl text-navy uppercase mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Not sure which service fits your shipment?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-colors"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
