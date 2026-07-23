"use client";
import { Mail } from "lucide-react";

const team = [
  {
    name: "Adv. Mwanjara A.A",
    role: "Founder & Director",
    office: "Tanzania Office",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop&crop=face",
    bio: "Founded Last Born Canada with a mission to simplify shipping for the African diaspora in Canada.",
  },
  {
    name: "Canada Operations",
    role: "Logistics Manager",
    office: "Canada Office",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop&crop=face",
    bio: "Manages all inbound and outbound shipments from the Toronto office and coordinates with carriers.",
  },
  {
    name: "Customer Support",
    role: "Client Relations",
    office: "Both Offices",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop&crop=face",
    bio: "Dedicated to keeping our clients informed and happy from pickup to final delivery.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
            Our Team
          </div>
          <h2 className="font-display font-800 text-4xl sm:text-5xl text-navy uppercase leading-tight">
            The People Behind LBC
          </h2>
          <p className="text-gray-500 mt-4 text-base max-w-lg mx-auto">
            A dedicated team with deep expertise in international freight, customs clearance, and client service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-gold font-semibold tracking-wide uppercase bg-navy/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    {member.office}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-700 text-xl text-navy uppercase">{member.name}</h3>
                <p className="text-gold text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                <div className="flex gap-3 mt-4">
                  <a href="mailto:lastborncanada@gmail.com" className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-navy hover:border-navy group/icon transition-colors">
                    <Mail className="w-4 h-4 text-gray-500 group-hover/icon:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
