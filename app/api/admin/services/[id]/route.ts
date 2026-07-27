import Service from "@/models/Service";
import { updateAndDelete } from "@/lib/crud";

export const { PUT, DELETE } = updateAndDelete(Service);
