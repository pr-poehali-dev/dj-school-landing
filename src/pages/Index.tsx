import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TargetSection from "@/components/TargetSection";
import Programs from "@/components/Programs";
import TrialSection from "@/components/TrialSection";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <TargetSection />
      <Programs />
      <TrialSection />
      <Gallery />
      <ContactForm />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
