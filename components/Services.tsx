"use client";
import Link from "next/link";
import { Plane, Ship, Car, Train, Truck, Package, Home, MapPin } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Direct flights from Canada to Tanzania, Mombasa Kenya and back. Fast and reliable air cargo solutions for time-sensitive shipments.",
    tag: "Express",
    img: "https://images.unsplash.com/photo-1571086291540-b137111fa1c7?q=80",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "Sea freight shipping up to Tanzania in approximately 90 days. Cost-effective bulk cargo solutions for large shipments.",
    tag: "~90 Days",
    img: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80",
  },
  {
    icon: Car,
    title: "Car Shipping",
    desc: "Safe and secure vehicle transportation from Canada to Africa. Full container or shared container options available.",
    tag: "Vehicles",
    img: "https://images.unsplash.com/photo-1720014836833-20d9992a510f?q=80&fit=crop",
  },
  {
    icon: Train,
    title: "Rail Shipping",
    desc: "Inland rail connections to move cargo efficiently once it arrives at the port destination.",
    tag: "Inland",
    img: "https://images.unsplash.com/photo-1568514328861-5465017e40fc?q=80&fit=crop",
  },
  {
    icon: Truck,
    title: "Truck Freight",
    desc: "Ground transportation and last-mile delivery services connecting ports to final destinations across East Africa.",
    tag: "Ground",
    img: "https://images.unsplash.com/photo-1766561994067-dbd575e1cff2?q=80&fit=crop",
  },
  {
    icon: Package,
    title: "Door-to-Door Shipping",
    desc: "Complete door-to-door logistics — we pick up from your location in Canada and deliver to the final address in Africa.",
    tag: "Full Service",
    img: "https://images.unsplash.com/photo-1614018453562-77f6180ce036?q=80&fit=crop",
  },
  {
    icon: Home,
    title: "Household Goods & Personal Effects",
    desc: "Careful handling of personal belongings, household furniture, appliances, and personal effects for families relocating.",
    tag: "Personal",
    img: "https://images.unsplash.com/photo-1449247666642-264389f5f5b1?q=80&fit=crop",
  },
];

export default function Services() {
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
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
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
