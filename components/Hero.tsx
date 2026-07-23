"use client";
import Link from "next/link";
import { ArrowRight, Plane, Ship, MapPin, ChevronDown } from "lucide-react";

const HERO_IMAGE = "/hero.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Animated route line decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-1/3 left-0 w-full opacity-10" viewBox="0 0 1440 200" fill="none">
          <path
            d="M0 100 Q360 20 720 100 Q1080 180 1440 100"
            stroke="#C8992A"
            strokeWidth="2"
            strokeDasharray="8 6"
          />
        </svg>
      </div>

      {/* Floating icons */}
      <div className="absolute top-1/4 right-16 hidden lg:block animate-float">
        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <Plane className="w-7 h-7 text-gold" />
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 hidden lg:block animate-float delay-300">
        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <Ship className="w-7 h-7 text-gold" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-12 pt-28 pb-20 text-left">
        <div className="max-w-3xl mr-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/40 rounded-full mb-6 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wide">Canada ↔ Tanzania · Kenya · Uganda · Comoro</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-none mb-4 animate-fade-in-up delay-100">
            Your Cargo.
            <br />
            <span className="text-gold">Our Mission.</span>
            <br />
            <span className="italic font-600">Delivering Beyond Borders.</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-lg sm:text-xl mt-6 mb-8 max-w-xl leading-relaxed animate-fade-in-up delay-200">
            Fast, reliable and affordable Air and Sea freight solutions connecting
            Canada to Africa. Trusted by the diaspora for 5+ years.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-gold text-white font-semibold text-base rounded-full hover:bg-gold-dark transition-all shadow-lg shadow-gold/30"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium text-base rounded-full hover:bg-white/20 transition-all"
            >
              Our Services
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-start gap-0 mt-14 animate-fade-in-up delay-400">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "2", label: "Global Offices" },
              { number: "100%", label: "Customer Trust" },
              { number: "7", label: "Services" },
            ].map((s, i) => (
              <div key={i} className="stat-item px-6 first:pl-0">
                <p className="font-display font-700 text-3xl text-gold">{s.number}</p>
                <p className="text-white/60 text-xs mt-0.5 tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Route indicator */}
        <div className="hidden lg:flex absolute bottom-10 right-8 flex-col items-end gap-2 animate-fade-in-up delay-500">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-white/90 text-sm font-medium">Toronto, Canada</span>
          </div>
          <div className="w-0.5 h-6 bg-gold/50 self-center" />
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-white/90 text-sm font-medium">Dar es Salaam, Tanzania</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
