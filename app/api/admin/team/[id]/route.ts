import TeamMember from "@/models/TeamMember";
import { updateAndDelete } from "@/lib/crud";

export const { PUT, DELETE } = updateAndDelete(TeamMember);
