import mongoose, { Schema, models, model } from "mongoose";

const GalleryImageSchema = new Schema(
  {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    spanClass: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default models.GalleryImage || model("GalleryImage", GalleryImageSchema);
export type GalleryImageDoc = mongoose.InferSchemaType<typeof GalleryImageSchema> & { _id: mongoose.Types.ObjectId };
