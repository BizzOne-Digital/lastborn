import { connectDB } from "@/lib/db";
import Service from "@/models/Service";
import TeamMember from "@/models/TeamMember";
import GalleryImage from "@/models/GalleryImage";
import Review from "@/models/Review";

export async function getServices() {
  await connectDB();
  const docs = await Service.find().sort({ order: 1, createdAt: 1 }).lean();
  return JSON.parse(JSON.stringify(docs));
}

export async function getTeamMembers() {
  await connectDB();
  const docs = await TeamMember.find().sort({ order: 1, createdAt: 1 }).lean();
  return JSON.parse(JSON.stringify(docs));
}

export async function getGalleryImages() {
  await connectDB();
  const docs = await GalleryImage.find().sort({ order: 1, createdAt: 1 }).lean();
  return JSON.parse(JSON.stringify(docs));
}

export async function getPublishedReviews() {
  await connectDB();
  const docs = await Review.find({ published: true }).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(docs));
}
