// Run with: node --env-file=.env.local scripts/seed.mjs
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!MONGODB_URI || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error("Missing MONGODB_URI, ADMIN_EMAIL, or ADMIN_PASSWORD in environment.");
  process.exit(1);
}

const AdminSchema = new mongoose.Schema({ email: String, passwordHash: String });
const ServiceSchema = new mongoose.Schema(
  { icon: String, title: String, desc: String, tag: String, img: String, order: Number },
  { timestamps: true }
);
const TeamMemberSchema = new mongoose.Schema(
  { name: String, role: String, office: String, img: String, bio: String, order: Number },
  { timestamps: true }
);
const GalleryImageSchema = new mongoose.Schema(
  { src: String, alt: String, spanClass: String, order: Number },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);
const Service = mongoose.model("Service", ServiceSchema);
const TeamMember = mongoose.model("TeamMember", TeamMemberSchema);
const GalleryImage = mongoose.model("GalleryImage", GalleryImageSchema);

const services = [
  { icon: "Plane", title: "Air Freight", desc: "Direct flights from Canada to Tanzania, Mombasa Kenya and back. Fast and reliable air cargo solutions for time-sensitive shipments.", tag: "Express", img: "https://images.unsplash.com/photo-1571086291540-b137111fa1c7?q=80", order: 1 },
  { icon: "Ship", title: "Ocean Freight", desc: "Sea freight shipping up to Tanzania in approximately 90 days. Cost-effective bulk cargo solutions for large shipments.", tag: "~90 Days", img: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80", order: 2 },
  { icon: "Car", title: "Car Shipping", desc: "Safe and secure vehicle transportation from Canada to Africa. Full container or shared container options available.", tag: "Vehicles", img: "https://images.unsplash.com/photo-1720014836833-20d9992a510f?q=80&fit=crop", order: 3 },
  { icon: "Train", title: "Rail Shipping", desc: "Inland rail connections to move cargo efficiently once it arrives at the port destination.", tag: "Inland", img: "https://images.unsplash.com/photo-1568514328861-5465017e40fc?q=80&fit=crop", order: 4 },
  { icon: "Truck", title: "Truck Freight", desc: "Ground transportation and last-mile delivery services connecting ports to final destinations across East Africa.", tag: "Ground", img: "https://images.unsplash.com/photo-1766561994067-dbd575e1cff2?q=80&fit=crop", order: 5 },
  { icon: "Package", title: "Door-to-Door Shipping", desc: "Complete door-to-door logistics — we pick up from your location in Canada and deliver to the final address in Africa.", tag: "Full Service", img: "https://images.unsplash.com/photo-1614018453562-77f6180ce036?q=80&fit=crop", order: 6 },
  { icon: "Home", title: "Household Goods & Personal Effects", desc: "Careful handling of personal belongings, household furniture, appliances, and personal effects for families relocating.", tag: "Personal", img: "https://images.unsplash.com/photo-1449247666642-264389f5f5b1?q=80&fit=crop", order: 7 },
];

const team = [
  { name: "Adv. Mwanjara A.A", role: "CEO / Founder", office: "Tanzania Office", img: "/Mwanjara.jpeg", bio: "Founded Last Born Canada with a mission to simplify shipping for the African diaspora in Canada.", order: 1 },
  { name: "Jacqueline Musyimi", role: "Logistics Manager", office: "Canada and Africa", img: "/Jacqueline.jpeg", bio: "Manages all inbound and outbound shipments and coordinates logistics between Canada and Africa.", order: 2 },
  { name: "Anna Mwakapala", role: "Client Relations", office: "Both Offices", img: "/Anna.jpeg", bio: "Dedicated to keeping our clients informed and happy from pickup to final delivery.", order: 3 },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80&fit=crop", alt: "Air cargo operations", spanClass: "col-span-2 row-span-2", order: 1 },
  { src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80&fit=crop", alt: "Container ship", spanClass: "", order: 2 },
  { src: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&q=80&fit=crop", alt: "Cargo warehouse", spanClass: "", order: 3 },
  { src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80&fit=crop", alt: "Shipping port", spanClass: "", order: 4 },
  { src: "https://images.unsplash.com/photo-1459750521914-ced6aeafbf4c?w=600&q=80&fit=crop", alt: "Freight delivery", spanClass: "", order: 5 },
  { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&fit=crop", alt: "Logistics operations", spanClass: "col-span-2", order: 6 },
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB.");

  const existingAdmin = await Admin.findOne({ email: ADMIN_EMAIL.toLowerCase() });
  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await Admin.create({ email: ADMIN_EMAIL.toLowerCase(), passwordHash });
    console.log(`Admin account created: ${ADMIN_EMAIL}`);
  } else {
    console.log("Admin account already exists, skipping.");
  }

  if ((await Service.countDocuments()) === 0) {
    await Service.insertMany(services);
    console.log(`Seeded ${services.length} services.`);
  } else {
    console.log("Services already exist, skipping.");
  }

  if ((await TeamMember.countDocuments()) === 0) {
    await TeamMember.insertMany(team);
    console.log(`Seeded ${team.length} team members.`);
  } else {
    console.log("Team members already exist, skipping.");
  }

  if ((await GalleryImage.countDocuments()) === 0) {
    await GalleryImage.insertMany(galleryImages);
    console.log(`Seeded ${galleryImages.length} gallery images.`);
  } else {
    console.log("Gallery images already exist, skipping.");
  }

  await mongoose.disconnect();
  console.log("Seeding complete.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
