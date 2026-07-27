import { getGalleryImages } from "@/lib/data";

export default async function Gallery() {
  const galleryImages = await getGalleryImages();

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
          {galleryImages.map((img: any) => (
            <div
              key={img._id}
              className={`relative overflow-hidden rounded-2xl group ${img.spanClass}`}
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
