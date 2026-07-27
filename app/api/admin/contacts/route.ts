import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import ContactSubmission from "@/models/ContactSubmission";

export async function GET() {
  await connectDB();
  const docs = await ContactSubmission.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(docs);
}
