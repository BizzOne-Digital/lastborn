import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Review from "@/models/Review";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, rating, comment } = body;

  if (!name || !rating || !comment) {
    return NextResponse.json({ error: "Name, rating, and comment are required" }, { status: 400 });
  }

  await connectDB();
  await Review.create({ name, rating, comment, published: false });

  return NextResponse.json({ success: true });
}
