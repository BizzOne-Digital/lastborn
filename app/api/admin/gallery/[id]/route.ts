import GalleryImage from "@/models/GalleryImage";
import { updateAndDelete } from "@/lib/crud";

export const { PUT, DELETE } = updateAndDelete(GalleryImage);
