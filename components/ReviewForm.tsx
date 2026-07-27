"use client";
import { useState } from "react";
import { Star } from "lucide-react";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, rating, comment }),
    });
    setSubmitting(false);
    setSent(true);
    setName("");
    setRating(5);
    setComment("");
  }

  if (sent) {
    return (
      <div className="max-w-lg mx-auto text-center bg-gold/5 border border-gold/20 rounded-2xl p-8">
        <p className="text-navy font-medium">Thank you for your feedback! Your review will appear once approved.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4">
      <h3 className="font-display font-700 text-lg text-navy uppercase text-center">Leave a Review</h3>
      <input
        type="text"
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold"
      />
      <div className="flex items-center gap-2 justify-center">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setRating(n)}
            aria-label={`${n} star`}
          >
            <Star className={`w-6 h-6 ${n <= rating ? "fill-gold text-gold" : "text-gray-300"}`} />
          </button>
        ))}
      </div>
      <textarea
        required
        rows={3}
        placeholder="Share your experience with LBC..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold"
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors disabled:opacity-60"
      >
        {submitting ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}
