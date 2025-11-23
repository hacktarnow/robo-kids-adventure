import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna Kowalska",
      role: "Mama 9-letniego Jasia",
      rating: 5,
      text: "Mój syn nie mógł się doczekać każdych zajęć! Wreszcie znalazł coś, co go naprawdę pasjonuje. Teraz sam projektuje małe roboty i nie może się doczekać, żeby pokazać mi swoje kolejne projekty."
    },
    {
      name: "Piotr Nowak",
      role: "Tata 12-letniej Zosi",
      rating: 5,
      text: "Platforma jest genialnie zaprojektowana. Zosia nauczyła się więcej o programowaniu i elektronice w 3 miesiące niż przez cały rok w szkole. System nagród motywuje ją do dalszej nauki!"
    },
    {
      name: "Katarzyna Lewandowska",
      role: "Mama bliźniaków 7-letnich",
      rating: 5,
      text: "Moje dzieci uwielbiają warsztaty! Prowadzący są fantastyczni, a materiały bardzo przystępne. To świetna inwestycja w przyszłość dzieci - rozwijają kompetencje, które będą im przydatne w XXI wieku."
    }
  ];

  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Co Mówią{" "}
            <span className="text-gradient">Rodzice i Dzieci?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dołącz do tysięcy zadowolonych rodzin!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift transition-all duration-300 hover:shadow-xl relative"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-bold text-secondary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 items-center opacity-60">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-muted-foreground">Średnia ocena</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">2500+</div>
            <div className="text-sm text-muted-foreground">Opinii rodziców</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground">Aktywnych uczniów</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
