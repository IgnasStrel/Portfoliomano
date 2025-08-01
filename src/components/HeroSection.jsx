import { ArrowDown } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "./LanguageToggle";
import { translations } from "./ui/translations";

export const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{t?.heroHi || "Hi, I'm"}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ignas </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Strelčiūnas </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {t?.heroSub || `I'm a developer who makes websites that look great, run fast, and don’t break (often)`}
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              {t?.heroCTA || "View My Work"}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">{t?.scroll || "Scroll"}</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
