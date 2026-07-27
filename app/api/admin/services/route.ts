import Service from "@/models/Service";
import { listAndCreate } from "@/lib/crud";

export const { GET, POST } = listAndCreate(Service, { order: 1, createdAt: 1 });
