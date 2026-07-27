import mongoose, { Schema, models, model } from "mongoose";

const ReviewSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default models.Review || model("Review", ReviewSchema);
export type ReviewDoc = mongoose.InferSchemaType<typeof ReviewSchema> & { _id: mongoose.Types.ObjectId };
