import { useContext } from "react";
import { LanguageContext } from "@/components/LanguageToggle";
import { translations } from "./ui/translations";

export const CareerSection = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].careerSection;

  const careerEvents = [
    { year: "2019 - 2021", description: t.events.event1 },
    { year: "2021 - 2022", description: t.events.event2 },
    { year: "2022 - 2022", description: t.events.event4 },
    { year: "2023 - 2025", description: t.events.event3 },
  ];

  return (
    <section id="career" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.title} <span className="text-primary">{t.highlight}</span>
        </h2>

        <div className="relative border-l-2 border-primary ml-6">
          {careerEvents.map((event, idx) => (
            <div key={idx} className="mb-10 ml-6 relative">
              <div className="absolute -left-4 top-2 w-4 h-4 bg-primary rounded-full border-2 border-secondary" />
              <p className="font-semibold text-primary">{event.year}</p>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
