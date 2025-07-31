import emailjs from "emailjs-com";
import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageToggle"; // ar pagal savo struktūrą
import { translations } from "./ui/translations";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const { toast } = useToast();
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_bmbofvm",
        "template_0xqqib9",
        e.target,
        "f0luGLv-awyIhc-PU"
      )
      .then(
        (result) => {
          toast({
            title: t.messageSentTitle,
            description: t.messageSentDescription,
          });
          setIsSubmitting(false);
          e.target.reset(); 
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.contactTitle.split(" ")[0]}{" "}
          <span className="text-primary">
            {t.contactTitle.split(" ").slice(1).join(" ")}
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.contactDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">{t.contactInfoTitle}</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t.emailLabel}</h4>
                  <a
                    href={`mailto:${t.emailAddress}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.emailAddress}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t.phoneLabel}</h4>
                  <a
                    href={`tel:${t.phoneNumber}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.phoneNumber}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t.locationLabel}</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    {t.location}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">{t.sendMessageTitle}</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.yourName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={t.yourName + "..."}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.yourEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={t.yourEmail + "..."}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.yourMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder={t.yourMessage + "..."}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? t.sending : t.sendMessage}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
