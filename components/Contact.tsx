"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const offices = [
  {
    country: "Canada",
    flag: "🇨🇦",
    address: "42B Rowntree Avenue, Toronto ON M6N 1R7",
    phone: "+1 437 873 7675",
    email: "lastborncanada@gmail.com",
    hours: "Mon – Sun: 9:00 AM – 10:00 PM EST",
    mapLink: "https://maps.google.com/?q=42B+Rowntree+Avenue+Toronto+ON+M6N+1R7",
  },
  {
    country: "Tanzania",
    flag: "🇹🇿",
    address: "Boko Nyaishozi, Plot 210, Dar es Salaam",
    phone: "+255 716 218 981",
    email: "lastborncanada@gmail.com",
    hours: "Mon – Sun: 9:00 AM – 10:00 PM EAT",
    mapLink: "https://maps.google.com/?q=Boko+Nyaishozi+Dar+es+Salaam+Tanzania",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSent(true), 500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
            Get In Touch
          </div>
          <h2 className="font-display font-800 text-4xl sm:text-5xl text-navy uppercase leading-tight">
            Contact Us
          </h2>
          <p className="text-gray-500 mt-4 text-base max-w-lg mx-auto">
            Ready to ship? Reach out to our team. We will respond the same day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Office Cards */}
          <div className="space-y-6">
            {offices.map((office, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{office.flag}</span>
                  <h3 className="font-display font-700 text-xl text-navy uppercase">
                    {office.country} Office
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-navy transition-colors">
                      {office.address}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-gray-600 text-sm hover:text-navy transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 text-sm hover:text-navy transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* What we handle */}
            <div className="bg-navy rounded-2xl p-6">
              <h4 className="font-display font-700 text-lg text-white uppercase mb-4">We Handle</h4>
              <div className="grid grid-cols-2 gap-2">
                {["Personal Effects", "Commercial Cargo", "Machines & Equipment", "Vehicles", "Household Goods", "And More"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle className="w-16 h-16 text-gold mb-4" />
                <h3 className="font-display font-700 text-2xl text-navy uppercase mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thank you for reaching out. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-700 text-2xl text-navy uppercase mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 000 000 0000"
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Service Required</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({...form, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option>Air Freight</option>
                      <option>Ocean Freight</option>
                      <option>Car Shipping</option>
                      <option>Rail Shipping</option>
                      <option>Truck Freight</option>
                      <option>Door-to-Door Shipping</option>
                      <option>Household Goods / Personal Effects</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your shipment – what, where, and when..."
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-white font-semibold rounded-xl hover:bg-gold-dark transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    For pricing, please contact us directly. All quotes are customized to your shipment.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
