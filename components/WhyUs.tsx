"use client";
import { ShieldCheck, Clock, Globe2, DollarSign, HeadphonesIcon, Handshake } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    desc: "Your cargo is handled with the highest care and security throughout every stage of the journey.",
  },
  {
    icon: Clock,
    title: "On Time Delivery",
    desc: "We respect your time and deliver on our promise. Every shipment tracked until it reaches its destination.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Connecting Canada to Tanzania, Kenya, Uganda, Comoro and beyond with established freight networks.",
  },
  {
    icon: DollarSign,
    title: "Affordable Solutions",
    desc: "Quality international freight service at competitive rates. Contact us for a custom quote tailored to your shipment.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Focused",
    desc: "Our team is available 7 days a week, 9am to 10pm to assist you with any questions or updates.",
  },
  {
    icon: Handshake,
    title: "Diaspora Trusted",
    desc: "Built specifically to serve the African diaspora in Canada. We understand your needs and speak your language.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
            Why Choose LBC
          </div>
          <h2 className="font-display font-800 text-4xl sm:text-5xl text-white uppercase leading-tight">
            We Deliver More Than Cargo —<br />
            <span className="text-gold">We Deliver Trust.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-white/10 hover:border-gold/40 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold/20 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gold/30 transition-colors">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-700 text-xl text-white uppercase mb-2">{r.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="mt-16 text-center border-t border-white/10 pt-12">
          <p className="font-display font-600 text-2xl text-white/80 italic">
            "From Canada to Africa and beyond, <span className="text-gold">we deliver with trust."</span>
          </p>
        </div>
      </div>
    </section>
  );
}
