import GalleryImage from "@/models/GalleryImage";
import { listAndCreate } from "@/lib/crud";

export const { GET, POST } = listAndCreate(GalleryImage, { order: 1, createdAt: 1 });
