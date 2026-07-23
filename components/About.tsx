"use client";
import Link from "next/link";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const IMG = "/about.png";

const highlights = [
  "5+ years in international freight forwarding",
  "Air & Sea freight solutions tailored to each shipment",
  "Serving diaspora and businesses across Canada",
  "End-to-end support: customs, clearance, delivery",
  "Two offices: Toronto and Dar es Salaam",
  "Monday to Sunday availability, 9am – 10pm",
];

const badges = [
  { icon: Award, label: "5+ Years", sub: "Industry Experience" },
  { icon: Users, label: "Diaspora", sub: "First Service" },
  { icon: Clock, label: "7 Days", sub: "Open Weekly" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={IMG}
                alt="Freight and cargo operations"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-6 -right-4 flex flex-col gap-3">
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-navy flex items-center justify-center">
                    <b.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-display font-700 text-navy text-sm leading-none">{b.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gold accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-3xl bg-gold/10 border-2 border-gold/20 -z-10" />
          </div>

          {/* Text */}
          <div>
            <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              About LBC
            </div>
            <h2 className="font-display font-800 text-4xl sm:text-5xl text-navy uppercase leading-tight mb-6">
              Trusted Freight & Logistics for the Diaspora
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Last Born Canada Inc. (LBC) is a trusted freight and logistics company with over 5 years of
              experience helping businesses and individuals move cargo from Canada to Tanzania, Kenya,
              Uganda, and Comoro with confidence.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We provide dependable solutions, clear communication, and efficient coordination so every
              shipment reaches its destination safely and on time. Whether it is personal effects, commercial
              cargo, vehicles, or machinery – LBC handles it with care.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-gray-700 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
