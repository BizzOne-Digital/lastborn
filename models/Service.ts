import mongoose, { Schema, models, model } from "mongoose";

const ServiceSchema = new Schema(
  {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    tag: { type: String, required: true },
    img: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default models.Service || model("Service", ServiceSchema);
export type ServiceDoc = mongoose.InferSchemaType<typeof ServiceSchema> & { _id: mongoose.Types.ObjectId };
