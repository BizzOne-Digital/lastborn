import mongoose, { Schema, models, model } from "mongoose";

const ContactSubmissionSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    service: { type: String, default: "" },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default models.ContactSubmission || model("ContactSubmission", ContactSubmissionSchema);
export type ContactSubmissionDoc = mongoose.InferSchemaType<typeof ContactSubmissionSchema> & { _id: mongoose.Types.ObjectId };
