"use client";
import { useEffect, useState } from "react";
import { Trash2, Mail, MailOpen } from "lucide-react";

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/contacts");
    setContacts(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function toggleRead(id: string, read: boolean) {
    await fetch(`/api/admin/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: !read }),
    });
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this submission?")) return;
    await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <h1 className="font-display font-800 text-3xl text-navy uppercase mb-6">Contact Submissions</h1>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading...</p>
      ) : contacts.length === 0 ? (
        <p className="text-gray-500 text-sm">No submissions yet.</p>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
          {contacts.map((c) => (
            <div key={c._id} className={`p-4 flex items-start gap-4 ${!c.read ? "bg-gold/5" : ""}`}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-navy text-sm">{c.name}</p>
                  <span className="text-xs text-gray-400">{new Date(c.createdAt).toLocaleString()}</span>
                  {!c.read && <span className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold">New</span>}
                </div>
                <p className="text-xs text-gray-500 mb-1">
                  {c.email} {c.phone && `· ${c.phone}`} {c.service && `· ${c.service}`}
                </p>
                <p className="text-sm text-gray-600">{c.message}</p>
              </div>
              <button
                onClick={() => toggleRead(c._id, c.read)}
                className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-navy hover:border-navy hover:text-white transition-colors flex-shrink-0"
                title={c.read ? "Mark as unread" : "Mark as read"}
              >
                {c.read ? <MailOpen className="w-3.5 h-3.5" /> : <Mail className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => handleDelete(c._id)}
                className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors flex-shrink-0"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
