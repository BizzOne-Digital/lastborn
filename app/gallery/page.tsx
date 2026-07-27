import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <Gallery />
      <Footer />
    </main>
  );
}
