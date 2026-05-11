import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileApp from "@/components/MobileApp";

export default function Home() {
  return (
    <>
      {/* Desktop View (Unchanged) */}
      <div className="hidden md:block">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <ProjectsGallery />
          <ContactForm />
        </main>
        <Footer />
      </div>

      {/* Mobile View (New App UI) */}
      <div className="block md:hidden">
        <MobileApp />
      </div>
    </>
  );
}
