import TeamMember from "@/models/TeamMember";
import { listAndCreate } from "@/lib/crud";

export const { GET, POST } = listAndCreate(TeamMember, { order: 1, createdAt: 1 });
