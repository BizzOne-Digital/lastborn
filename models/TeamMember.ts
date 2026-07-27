import mongoose, { Schema, models, model } from "mongoose";

const TeamMemberSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    office: { type: String, required: true },
    img: { type: String, required: true },
    bio: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default models.TeamMember || model("TeamMember", TeamMemberSchema);
export type TeamMemberDoc = mongoose.InferSchemaType<typeof TeamMemberSchema> & { _id: mongoose.Types.ObjectId };
