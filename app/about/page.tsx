import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <About />
      <Team />
      <Footer />
    </main>
  );
}
