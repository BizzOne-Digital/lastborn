import Review from "@/models/Review";
import { listAndCreate } from "@/lib/crud";

export const { GET, POST } = listAndCreate(Review, { createdAt: -1 });
