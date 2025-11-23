import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import kidsYoung from "@/assets/kids-young.jpg";
import kidsOlder from "@/assets/kids-older.jpg";

const TargetAudience = () => {
  const ageGroups = [
    {
      age: "6-10 lat",
      title: "Młodzi Odkrywcy",
      image: kidsYoung,
      description: "Pierwsze kroki w świecie technologii",
      features: [
        "Proste konstrukcje z klocków elektronicznych",
        "Gry edukacyjne z podstawami logiki",
        "Zabawa z bezpiecznymi robotami",
        "Kolorowe interfejsy i duże przyciski",
        "Wprowadzenie do podstaw programowania wizualnego"
      ],
      color: "accent"
    },
    {
      age: "10-14 lat",
      title: "Inżynierowie Jutra",
      image: kidsOlder,
      description: "Zaawansowane projekty i prawdziwe programowanie",
      features: [
        "Programowanie mikrokontrolerów (Arduino, Raspberry Pi)",
        "Budowa złożonych robotów mobilnych",
        "Nauka języków programowania (Python, C++)",
        "Praca z czujnikami i układami elektronicznymi",
        "Własne projekty i konkursy techniczne"
      ],
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="age-groups">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Programy Dostosowane do{" "}
            <span className="text-gradient">Wieku i Umiejętności</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Każde dziecko ma swoje tempo - nasza platforma rośnie razem z nimi!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {ageGroups.map((group, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-lift transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={group.image} 
                  alt={`Dzieci w wieku ${group.age} uczące się robotyki`}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute top-4 left-4 px-6 py-2 rounded-full font-bold text-lg shadow-lg"
                  style={{
                    backgroundColor: `hsl(var(--${group.color}))`,
                    color: 'white'
                  }}
                >
                  {group.age}
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <h3 className="text-3xl font-bold">{group.title}</h3>
                <p className="text-lg text-muted-foreground">{group.description}</p>
                
                <ul className="space-y-3 pt-4">
                  {group.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span 
                        className="mt-1 text-lg"
                        style={{ color: `hsl(var(--${group.color}))` }}
                      >
                        ✓
                      </span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full mt-6 rounded-full"
                  style={{
                    backgroundColor: `hsl(var(--${group.color}))`,
                    color: 'white'
                  }}
                >
                  Sprawdź Program dla {group.age}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
