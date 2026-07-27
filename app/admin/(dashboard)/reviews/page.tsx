"use client";
import { useEffect, useState } from "react";
import { Star, Trash2, Check, X } from "lucide-react";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/reviews");
    setReviews(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function togglePublish(id: string, published: boolean) {
    await fetch(`/api/admin/reviews/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !published }),
    });
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this review?")) return;
    await fetch(`/api/admin/reviews/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <h1 className="font-display font-800 text-3xl text-navy uppercase mb-6">Reviews</h1>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading...</p>
      ) : reviews.length === 0 ? (
        <p className="text-gray-500 text-sm">No reviews submitted yet.</p>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
          {reviews.map((r) => (
            <div key={r._id} className="p-4 flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-navy text-sm">{r.name}</p>
                  <span className="flex items-center gap-0.5 text-gold text-xs">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold" />
                    ))}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      r.published ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {r.published ? "Published" : "Pending"}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{r.comment}</p>
              </div>
              <button
                onClick={() => togglePublish(r._id, r.published)}
                className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors ${
                  r.published
                    ? "bg-gray-50 border-gray-200 hover:bg-gray-100"
                    : "bg-green-50 border-green-200 text-green-600 hover:bg-green-100"
                }`}
                title={r.published ? "Unpublish" : "Publish"}
              >
                {r.published ? <X className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => handleDelete(r._id)}
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
