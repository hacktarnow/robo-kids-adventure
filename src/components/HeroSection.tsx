import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-robotics.jpg";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-light-bg to-background">
            {/* Decorative floating elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000" />

            <div className="container mx-auto px-4 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                            <Sparkles className="w-5 h-5 text-primary" />
                            <span className="text-sm font-semibold text-primary">
                                Nauka przez zabawę!
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Odkryj Świat{" "}
                            <span className="text-gradient">Robotyki</span> i
                            Programowania
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                            Gamifikowana platforma edukacyjna dla dzieci 6-14
                            lat. Rozwijaj kompetencje inżynieryjne przez gry,
                            eksperymenty i warsztaty online!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="text-lg px-8 py-6 rounded-full hover-lift shadow-lg group"
                            >
                                Rozpocznij Przygodę!
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 py-6 rounded-full hover-lift border-2"
                            >
                                Wypróbuj za Darmo
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">
                                    10K+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Szczęśliwych dzieci
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">
                                    500+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Warsztatów
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">
                                    98%
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Zadowolenia
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right image */}
                    <div className="relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl hover-lift">
                            <img
                                src={heroImage}
                                alt="Dzieci uczące się robotyki i programowania przez zabawę"
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
