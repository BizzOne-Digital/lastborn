"use client";
import ResourceManager from "@/components/admin/ResourceManager";

export default function AdminGalleryPage() {
  return (
    <ResourceManager
      resource="gallery"
      title="Gallery"
      itemTitle={(item) => item.alt}
      itemSubtitle={(item) => item.spanClass || "default size"}
      fields={[
        { name: "alt", label: "Description (alt text)", type: "text", required: true },
        { name: "src", label: "Image", type: "image", required: true },
        { name: "spanClass", label: "Grid size class (optional, e.g. col-span-2 row-span-2)", type: "text" },
        { name: "order", label: "Display order", type: "number" },
      ]}
    />
  );
}
