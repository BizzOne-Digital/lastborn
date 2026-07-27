"use client";
import ResourceManager from "@/components/admin/ResourceManager";

const ICON_OPTIONS = ["Plane", "Ship", "Car", "Train", "Truck", "Package", "Home"];

export default function AdminServicesPage() {
  return (
    <ResourceManager
      resource="services"
      title="Services"
      itemTitle={(item) => item.title}
      itemSubtitle={(item) => item.tag}
      fields={[
        { name: "title", label: "Title", type: "text", required: true },
        { name: "desc", label: "Description", type: "textarea", required: true },
        { name: "tag", label: "Tag (e.g. Express, ~90 Days)", type: "text", required: true },
        { name: "icon", label: `Icon name (one of: ${ICON_OPTIONS.join(", ")})`, type: "text", required: true },
        { name: "img", label: "Image", type: "image", required: true },
        { name: "order", label: "Display order", type: "number" },
      ]}
    />
  );
}
