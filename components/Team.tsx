"use client";
import { Mail } from "lucide-react";

const team = [
  {
    name: "Adv. Mwanjara A.A",
    role: "CEO / Founder",
    office: "Tanzania Office",
    img: "/Mwanjara.jpeg",
    bio: "Founded Last Born Canada with a mission to simplify shipping for the African diaspora in Canada.",
  },
  {
    name: "Jacqueline Musyimi",
    role: "Logistics Manager",
    office: "Canada and Africa",
    img: "/Jacqueline.jpeg",
    bio: "Manages all inbound and outbound shipments and coordinates logistics between Canada and Africa.",
  },
  {
    name: "Anna Mwakapala",
    role: "Client Relations",
    office: "Both Offices",
    img: "/Anna.jpeg",
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
              <div className="relative h-80 overflow-hidden bg-white">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs text-gold font-semibold tracking-wide uppercase bg-navy/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    {member.office}
                  </span>
                </div>
              </div>
              <div className="p-3 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-700 text-base text-navy uppercase leading-tight">{member.name}</h3>
                  <p className="text-gold text-xs font-medium">{member.role}</p>
                </div>
                <a href="mailto:lastborncanada@gmail.com" className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-navy hover:border-navy group/icon transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 text-gray-500 group-hover/icon:text-white transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
