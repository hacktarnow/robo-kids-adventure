import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question:
                "Czy moje dziecko potrzebuje wcześniejszego doświadczenia?",
            answer: "Nie! Nasze programy są zaprojektowane zarówno dla początkujących, jak i bardziej zaawansowanych uczniów. Zaczynamy od podstaw i stopniowo rozwijamy umiejętności w tempie dostosowanym do każdego dziecka.",
        },
        {
            question: "Jakie urządzenia są potrzebne do zajęć online?",
            answer: "Wystarczy komputer lub tablet z dostępem do internetu. Wszystkie narzędzia programistyczne są dostępne w przeglądarce. Dla warsztatów stacjonarnych zapewniamy cały sprzęt - mikrokontrolery, roboty, komponenty elektroniczne.",
        },
        {
            question: "Jak wygląda model hybrydowy warsztatów?",
            answer: "Dzieci mają dostęp do platformy online 24/7, gdzie mogą uczyć się w swoim tempie. Dodatkowo organizujemy regularne warsztaty stacjonarne (raz w tygodniu lub dwa razy w miesiącu), gdzie dzieci pracują nad praktycznymi projektami pod okiem instruktorów. Aplikacja śledzi postępy i sugeruje kolejne zadania.",
        },
        {
            question: "Ile kosztuje dostęp do platformy?",
            answer: "Platforma jest w pełni darmowa.",
        },
        {
            question: "Czy dziecko otrzyma certyfikat po ukończeniu kursu?",
            answer: "Tak! Po ukończeniu każdego modułu dziecko otrzymuje cyfrowy certyfikat osiągnięć. Dodatkowo, za ukończenie pełnego programu dla swojej grupy wiekowej, wystawiamy oficjalny certyfikat kompetencji, który może być dodany do portfolio edukacyjnego.",
        },
    ];

    return (
        <section className="py-20 bg-muted/30" id="faq">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Często Zadawane{" "}
                        <span className="text-gradient">Pytania</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Masz pytania? Mamy odpowiedzi!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-background border-2 border-border rounded-2xl px-6 hover:border-primary/50 transition-colors"
                            >
                                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pt-2">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
