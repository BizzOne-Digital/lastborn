"use client";

const images = [
  {
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80&fit=crop",
    alt: "Air cargo loading",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80&fit=crop",
    alt: "Container ship at port",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&q=80&fit=crop",
    alt: "Cargo logistics warehouse",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1570155396cer?w=600&q=80&fit=crop",
    alt: "Shipping containers port",
    src2: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80&fit=crop",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1459750521914-ced6aeafbf4c?w=600&q=80&fit=crop",
    alt: "Aerial view of cargo ship",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&fit=crop",
    alt: "Construction and cargo delivery",
    span: "col-span-2",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80&fit=crop",
    alt: "Air cargo operations",
    class: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80&fit=crop",
    alt: "Container ship",
    class: "",
  },
  {
    src: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&q=80&fit=crop",
    alt: "Cargo warehouse",
    class: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80&fit=crop",
    alt: "Shipping port",
    class: "",
  },
  {
    src: "https://images.unsplash.com/photo-1459750521914-ced6aeafbf4c?w=600&q=80&fit=crop",
    alt: "Freight delivery",
    class: "",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&fit=crop",
    alt: "Logistics operations",
    class: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
            Gallery
          </div>
          <h2 className="font-display font-800 text-4xl sm:text-5xl text-navy uppercase leading-tight">
            Our Operations in Action
          </h2>
          <p className="text-gray-500 mt-4 text-base max-w-lg mx-auto">
            Air freight, ocean cargo, and logistics — moving your goods across the globe with precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${img.class}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
