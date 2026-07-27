import { Star } from "lucide-react";
import { getPublishedReviews } from "@/lib/data";
import ReviewForm from "@/components/ReviewForm";

export default async function Reviews() {
  const reviews = await getPublishedReviews();

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="font-display font-800 text-4xl sm:text-5xl text-navy uppercase leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-4 text-base max-w-lg mx-auto">
            Real feedback from businesses and families who trust LBC with their shipments.
          </p>
        </div>

        {reviews.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {reviews.map((r: any) => (
              <div key={r._id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{r.comment}"</p>
                <p className="font-display font-700 text-navy text-sm uppercase">{r.name}</p>
              </div>
            ))}
          </div>
        )}

        <ReviewForm />
      </div>
    </section>
  );
}
