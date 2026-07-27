"use client";
import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, X, Upload } from "lucide-react";

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "textarea" | "number" | "image";
  required?: boolean;
};

type Props = {
  resource: string; // e.g. "services"
  title: string;
  fields: FieldConfig[];
  itemTitle: (item: any) => string;
  itemSubtitle?: (item: any) => string;
};

export default function ResourceManager({ resource, title, fields, itemTitle, itemSubtitle }: Props) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    const res = await fetch(`/api/admin/${resource}`);
    const data = await res.json();
    setItems(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, [resource]);

  function openAddForm() {
    setEditingId(null);
    setFormData({});
    setShowForm(true);
  }

  function openEditForm(item: any) {
    setEditingId(item._id);
    setFormData(item);
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setEditingId(null);
    setFormData({});
  }

  async function handleImageUpload(fieldName: string, file: File) {
    setUploading(true);
    const body = new FormData();
    body.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body });
    const data = await res.json();
    setUploading(false);
    if (data.url) {
      setFormData((prev) => ({ ...prev, [fieldName]: data.url }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const url = editingId ? `/api/admin/${resource}/${editingId}` : `/api/admin/${resource}`;
    const method = editingId ? "PUT" : "POST";
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setSaving(false);
    closeForm();
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this item? This cannot be undone.")) return;
    await fetch(`/api/admin/${resource}/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display font-800 text-3xl text-navy uppercase">{title}</h1>
        <button
          onClick={openAddForm}
          className="flex items-center gap-2 px-4 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-dark transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add New
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-500 text-sm">No items yet. Click "Add New" to create one.</p>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
          {items.map((item) => (
            <div key={item._id} className="flex items-center gap-4 p-4">
              {item.img || item.src ? (
                <img
                  src={item.img || item.src}
                  alt=""
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0 bg-gray-100"
                />
              ) : null}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-navy text-sm truncate">{itemTitle(item)}</p>
                {itemSubtitle && <p className="text-xs text-gray-500 truncate">{itemSubtitle(item)}</p>}
              </div>
              <button
                onClick={() => openEditForm(item)}
                className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-navy hover:border-navy hover:text-white transition-colors flex-shrink-0"
              >
                <Pencil className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors flex-shrink-0"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-display font-700 text-lg text-navy uppercase">
                {editingId ? "Edit" : "Add"} {title.replace(/s$/, "")}
              </h2>
              <button onClick={closeForm} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {fields.map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                  {f.type === "textarea" ? (
                    <textarea
                      required={f.required}
                      rows={3}
                      value={formData[f.name] || ""}
                      onChange={(e) => setFormData((p) => ({ ...p, [f.name]: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  ) : f.type === "image" ? (
                    <div className="space-y-2">
                      {formData[f.name] && (
                        <img src={formData[f.name]} alt="" className="w-20 h-20 rounded-lg object-cover border border-gray-200" />
                      )}
                      <label className="flex items-center gap-2 px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 cursor-pointer hover:border-gold hover:text-gold transition-colors w-fit">
                        <Upload className="w-4 h-4" />
                        {uploading ? "Uploading..." : "Upload image"}
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleImageUpload(f.name, file);
                          }}
                        />
                      </label>
                    </div>
                  ) : (
                    <input
                      type={f.type === "number" ? "number" : "text"}
                      required={f.required}
                      value={formData[f.name] ?? ""}
                      onChange={(e) => setFormData((p) => ({ ...p, [f.name]: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  )}
                </div>
              ))}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving || uploading}
                  className="flex-1 py-2.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-60"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-5 py-2.5 border border-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
