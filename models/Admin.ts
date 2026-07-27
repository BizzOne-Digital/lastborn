import mongoose, { Schema, models, model } from "mongoose";

const AdminSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
});

export default models.Admin || model("Admin", AdminSchema);
export type AdminDoc = mongoose.InferSchemaType<typeof AdminSchema>;
