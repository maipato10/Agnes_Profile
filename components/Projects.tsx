const projects = [
  {
    name: "Superparent",
    description:
      "AI-powered family organisation platform that turns school emails, WhatsApp messages and flyers into a shared calendar, to-do list and reminders.",
    tags: ["React", "Next.js", "React Native", "AI/LLM", "Tailwind"],
    industry: "AI · Family Tech",
  },
  {
    name: "MWEB",
    description:
      "Website for one of South Africa's best-known internet service providers, serving millions of broadband customers.",
    tags: ["React", "Next.js", "TypeScript"],
    industry: "Telecoms",
  },
  {
    name: "Webafrica",
    description:
      "Website for a national fibre and LTE internet service provider delivering high-speed connectivity across South Africa.",
    tags: ["React", "Next.js", "TypeScript"],
    industry: "Telecoms",
  },
  {
    name: "SuperSport",
    description:
      "Website for the pan-African sports broadcaster, delivering live scores, fixtures and sports content to fans.",
    tags: ["React", "Next.js", "TypeScript"],
    industry: "Sports Media",
  },
  {
    name: "AECI",
    description:
      "Corporate website for the JSE-listed chemicals, mining explosives and agricultural group.",
    tags: ["React", "TypeScript"],
    industry: "Chemicals · Mining",
  },
  {
    name: "Grindrod",
    description:
      "Corporate website for the JSE-listed freight logistics, ports and financial services group.",
    tags: ["React", "TypeScript"],
    industry: "Logistics · Ports",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Client Projects
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-4" />
        <p className="text-muted mb-12 max-w-2xl">
          Production websites delivered for major South African brands at
          Britehouse Mobility (2021–2025) and Superparent (2026–present).
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-surface rounded-xl p-6 border border-border hover:border-primary/40 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                  {project.industry}
                </span>
              </div>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-surface-alt text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
