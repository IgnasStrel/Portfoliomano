import { ArrowUp } from "lucide-react";
import { translations } from "./ui/translations";
import { useContext } from "react";
import { LanguageContext } from "./LanguageToggle"; // Importuoji kontekstą

export const Footer = () => {
  const { language } = useContext(LanguageContext); // Gavai aktyvią kalbą

  return (
    <footer className="py-3 px-4 bg-card relative border-t border-border mt-12 pt-3 flex flex-wrap justify-center items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Ignas Strelčiūnas. {translations[language].footerText}
      </p>
      <a
        href="#hero"
        className="p-2 ml-8 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
