import { connectDB } from "@/lib/db";
import Service from "@/models/Service";
import TeamMember from "@/models/TeamMember";
import GalleryImage from "@/models/GalleryImage";
import Review from "@/models/Review";
import ContactSubmission from "@/models/ContactSubmission";
import { Wrench, Users, Image as ImageIcon, Star, Mail } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  await connectDB();

  const [services, team, gallery, pendingReviews, unreadContacts] = await Promise.all([
    Service.countDocuments(),
    TeamMember.countDocuments(),
    GalleryImage.countDocuments(),
    Review.countDocuments({ published: false }),
    ContactSubmission.countDocuments({ read: false }),
  ]);

  const cards = [
    { label: "Services", value: services, icon: Wrench, href: "/admin/services" },
    { label: "Team Members", value: team, icon: Users, href: "/admin/team" },
    { label: "Gallery Images", value: gallery, icon: ImageIcon, href: "/admin/gallery" },
    { label: "Pending Reviews", value: pendingReviews, icon: Star, href: "/admin/reviews" },
    { label: "Unread Contacts", value: unreadContacts, icon: Mail, href: "/admin/contacts" },
  ];

  return (
    <div>
      <h1 className="font-display font-800 text-3xl text-navy uppercase mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.label}
              href={c.href}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-navy" />
              </div>
              <p className="text-3xl font-display font-700 text-navy">{c.value}</p>
              <p className="text-sm text-gray-500 mt-1">{c.label}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
