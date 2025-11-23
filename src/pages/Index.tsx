import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import CoreFeatures from "@/components/CoreFeatures";
import TargetAudience from "@/components/TargetAudience";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolution />
      <CoreFeatures />
      <TargetAudience />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
