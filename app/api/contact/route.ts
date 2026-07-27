import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import ContactSubmission from "@/models/ContactSubmission";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, service, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
  }

  await connectDB();
  await ContactSubmission.create({ name, email, phone, service, message });

  return NextResponse.json({ success: true });
}
