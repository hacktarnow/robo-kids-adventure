import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Dlaczego Tradycyjna Edukacja{" "}
            <span className="text-gradient">Nie Wystarcza?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <Card className="p-8 bg-destructive/5 border-destructive/20 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-destructive/10 rounded-full">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold">Problem</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Brak angażujących zajęć technicznych dla dzieci</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Nudne lekcje teorii bez praktyki</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Ograniczony dostęp do nowoczesnych technologii</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Dzieci tracą motywację do nauki przedmiotów ścisłych</span>
                </li>
              </ul>
            </Card>
            
            {/* Solution */}
            <Card className="p-8 bg-primary/5 border-primary/20 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Nasze Rozwiązanie</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Gamifikacja - nauka przez zabawę i rywalizację</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Praktyczne projekty z robotyką i elektroniką</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Dostęp online 24/7 + warsztaty stacjonarne</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Rozwój kompetencji przyszłości już dziś!</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
