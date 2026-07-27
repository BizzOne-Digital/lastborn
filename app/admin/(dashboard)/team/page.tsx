"use client";
import ResourceManager from "@/components/admin/ResourceManager";

export default function AdminTeamPage() {
  return (
    <ResourceManager
      resource="team"
      title="Team"
      itemTitle={(item) => item.name}
      itemSubtitle={(item) => item.role}
      fields={[
        { name: "name", label: "Full Name", type: "text", required: true },
        { name: "role", label: "Role / Title", type: "text", required: true },
        { name: "office", label: "Office", type: "text", required: true },
        { name: "bio", label: "Short Bio", type: "textarea", required: true },
        { name: "img", label: "Photo", type: "image", required: true },
        { name: "order", label: "Display order", type: "number" },
      ]}
    />
  );
}
