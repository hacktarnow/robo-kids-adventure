import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-success-green text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full mb-4">
            <Gift className="w-6 h-6" />
            <span className="font-semibold text-lg">14 Dni Całkowicie Za Darmo!</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Rozpocznij Przygodę z Robotyką i Programowaniem Już Dziś!
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Dołącz do ponad 10,000 szczęśliwych dzieci, które odkrywają świat technologii 
            przez zabawę i praktyczne projekty. Bez zobowiązań, bez karty kredytowej.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full hover-lift shadow-2xl group"
            >
              Rozpocznij Darmowy Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full hover-lift"
            >
              Umów Bezpłatną Konsultację
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Bez karty kredytowej</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Anuluj w każdej chwili</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Dostęp do wszystkich funkcji</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
