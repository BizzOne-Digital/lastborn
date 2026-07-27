import { NextRequest, NextResponse } from "next/server";
import { Model } from "mongoose";
import { connectDB } from "@/lib/db";

export function listAndCreate(model: Model<any>, defaultSort: Record<string, 1 | -1> = { order: 1 }) {
  return {
    async GET() {
      await connectDB();
      const docs = await model.find().sort(defaultSort).lean();
      return NextResponse.json(docs);
    },
    async POST(request: NextRequest) {
      await connectDB();
      const body = await request.json();
      const doc = await model.create(body);
      return NextResponse.json(doc, { status: 201 });
    },
  };
}

export function updateAndDelete(model: Model<any>) {
  return {
    async PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
      await connectDB();
      const { id } = await context.params;
      const body = await request.json();
      const doc = await model.findByIdAndUpdate(id, body, { new: true });
      if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });
      return NextResponse.json(doc);
    },
    async DELETE(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
      await connectDB();
      const { id } = await context.params;
      const doc = await model.findByIdAndDelete(id);
      if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });
      return NextResponse.json({ success: true });
    },
  };
}
