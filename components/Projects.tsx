import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    name: "Superparent",
    description:
      "Built and maintain the web and mobile apps for an AI-powered family platform. Integrated LLM solutions that extract dates, deadlines and tasks from school emails, WhatsApp messages and PDF flyers, turning them into calendar events, to-dos and reminders. Run ongoing QA on the AI assistant — comparing inputs against outputs, classifying errors and tracking accuracy over time.",
    tags: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "AI/LLM"],
    industry: "AI · Family Tech",
  },
  {
    name: "MWEB",
    description:
      "Developed the mobile application for one of South Africa's largest internet service providers. Built customer-facing features including account management, usage dashboards and service request flows, optimised for both iOS and Android across a wide range of devices.",
    tags: ["React Native", "TypeScript", "Tailwind CSS"],
    industry: "Telecoms",
  },
  {
    name: "Webafrica",
    description:
      "Built the mobile application for a national fibre and LTE provider. Delivered features for service activation, connectivity monitoring and support ticketing, with a focus on performance and responsive UI across mobile platforms.",
    tags: ["React Native", "TypeScript", "Tailwind CSS"],
    industry: "Telecoms",
  },
  {
    name: "SuperSport",
    description:
      "Contributed front-end development to the website for Africa's leading sports broadcaster. Worked on live scores, fixtures, match pages and sports content feeds — building responsive, high-performance UI for a platform serving millions of fans.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    industry: "Sports Media",
  },
  {
    name: "AECI",
    description:
      "Developed the corporate website for the JSE-listed chemicals, mining explosives and agricultural group. Built responsive page templates, investor relations sections and content-managed layouts to present the group's divisions and sustainability reporting.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    industry: "Chemicals · Mining",
  },
  {
    name: "Grindrod",
    description:
      "Built the corporate website for the JSE-listed freight logistics, ports and financial services group. Delivered multi-division navigation, interactive service pages and investor content — presenting a complex group structure in a clean, accessible layout.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    industry: "Logistics · Ports",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Client Projects
          </h2>
          <div className="gradient-line w-16 mb-4" />
          <p className="text-muted mb-12 max-w-2xl">
            Production websites and mobile applications delivered for major South African brands at
            Britehouse Mobility (2021–2025) and Superparent (2026–present).
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 100} direction="scale">
              <div className="group card-glow bg-surface rounded-xl p-6 border border-border hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs font-medium text-white bg-gradient-to-r from-primary to-cyan-600 px-2.5 py-1 rounded-full whitespace-nowrap ml-2">
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
                      className="text-xs px-2 py-1 rounded-md bg-surface-alt text-muted border border-border hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
