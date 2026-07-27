import ContactSubmission from "@/models/ContactSubmission";
import { updateAndDelete } from "@/lib/crud";

export const { PUT, DELETE } = updateAndDelete(ContactSubmission);
