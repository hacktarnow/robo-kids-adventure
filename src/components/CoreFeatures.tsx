import { Card } from "@/components/ui/card";
import { Cpu, Gamepad2, Users } from "lucide-react";
import robotMascot from "@/assets/robot-mascot.jpg";

const CoreFeatures = () => {
  const features = [
    {
      icon: Cpu,
      title: "Kompetencje Inżynieryjno-Techniczne",
      description: "Nauka robotyki, programowania mikrokontrolerów i elektroniki przez praktyczne wyzwania",
      details: [
        "Programowanie Arduino i Raspberry Pi",
        "Budowa własnych robotów krok po kroku",
        "Zaawansowane projekty z czujnikami i silnikami",
        "Rozwiązywanie problemów technicznych"
      ],
      color: "primary"
    },
    {
      icon: Gamepad2,
      title: "Gry Edukacyjne (Edugaming)",
      description: "Interaktywne gry rozwijające logikę, mechanikę, elektronikę i kreatywność",
      details: [
        "Quizy i zagadki elektroniczne",
        "Symulatory obwodów elektrycznych",
        "Wyzwania programistyczne z nagrodami",
        "System punktów i osiągnięć"
      ],
      color: "accent"
    },
    {
      icon: Users,
      title: "Warsztaty Hybrydowe",
      description: "Model mieszany: nauka online + spotkania stacjonarne z aplikacją wspierającą postępy",
      details: [
        "Zajęcia online dostępne 24/7",
        "Regularne warsztaty stacjonarne",
        "Śledzenie postępów w aplikacji",
        "Personalizowane zadania i projekty"
      ],
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-background" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Trzy Filary Naszej{" "}
            <span className="text-gradient">Platformy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kompleksowe podejście do edukacji technicznej - od podstaw elektroniki 
            po zaawansowane projekty robotyczne
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift transition-all duration-300 hover:shadow-xl border-2"
              style={{
                borderColor: `hsl(var(--${feature.color}))`,
                backgroundColor: `hsl(var(--${feature.color}) / 0.05)`
              }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 float"
                style={{ backgroundColor: `hsl(var(--${feature.color}) / 0.2)` }}
              >
                <feature.icon 
                  className="w-8 h-8"
                  style={{ color: `hsl(var(--${feature.color}))` }}
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span 
                      className="mt-1"
                      style={{ color: `hsl(var(--${feature.color}))` }}
                    >
                      ✓
                    </span>
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Mascot Section */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <img 
              src={robotMascot} 
              alt="Przyjazny robot maskotka platformy"
              className="w-48 h-48 rounded-full shadow-2xl bounce-subtle"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-lg">
              Cześć! 👋
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
