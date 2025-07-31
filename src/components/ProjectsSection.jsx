import { useContext } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { LanguageContext } from "./LanguageToggle";
import { translations } from "./ui/translations";

const projects = [
  {
    id: 1,
    titleKey: "project1Title",
    descriptionKey: "project1",
    image: "/projects/lllparts.png",
    tags: ["PHP", "MySQL", "CSS"],
    demoUrl: "https://lllparts.co.uk",
  },
  {
    id: 2,
    titleKey: "project2Title",
    descriptionKey: "project2",
    image: "/projects/partevo.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://Partevo.co.uk",
  },
  {
    id: 3,
    titleKey: "project3Title",
    descriptionKey: "project3",
    image: "/projects/avkparts.png",
    tags: ["PHP", "MySQL", "CSS"],
    demoUrl: "https://Avkparts.lt",
  },
  {
    id: 4,
    titleKey: "project4Title",
    descriptionKey: "project4",
    image: "/projects/avbs.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://avbalticsolutions.com/",
  },
  {
    id: 5,
    titleKey: "project5Title",
    descriptionKey: "project5",
    image: "/projects/InsaneP.png",
    tags: ["HTML", "CSS", "Bootstrap"],
  },
];

export const ProjectsSection = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span>{t.featuredProjects.split(" ")[0]} </span>
          <span className="text-primary">
            {t.featuredProjects.split(" ")[1]}
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.projectsDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{t[project.titleKey]}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t.projectDescriptions[project.descriptionKey]}
                </p>

                {project.demoUrl && (
                  <div className="flex justify-start items-center gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      {t.demo} <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
