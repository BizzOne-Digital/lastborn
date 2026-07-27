import Review from "@/models/Review";
import { updateAndDelete } from "@/lib/crud";

export const { PUT, DELETE } = updateAndDelete(Review);
