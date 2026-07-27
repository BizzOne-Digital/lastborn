import { NextRequest, NextResponse } from "next/server";
import { uploadImageBuffer } from "@/lib/cloudinary";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { url } = await uploadImageBuffer(buffer);
  return NextResponse.json({ url });
}
