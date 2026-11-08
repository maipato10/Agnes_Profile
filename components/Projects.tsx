import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    name: "Superparent",
    role: "Intermediate Developer · 2026 – Present",
    description:
      "An AI-powered family organisation platform that helps parents manage their children's school communications. I build and maintain both the web and mobile applications, and integrate the LLM solutions that power the core product — an AI assistant that reads school emails, WhatsApp messages and PDF flyers, then extracts dates, deadlines and action items and turns them into shared calendar events, to-do lists and reminders. I also run production QA on the AI output: comparing what comes in against what gets saved, classifying errors like duplicates, wrong dates and missed requests, and tracking accuracy over time to feed improvements back into the development cycle.",
    tags: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "AI/LLM", "Convex"],
    industry: "AI · Family Tech",
  },
  {
    name: "MWEB",
    role: "Developer at Britehouse Mobility · 2021 – 2025",
    description:
      "Mobile application for one of South Africa's most recognised internet service providers, serving millions of broadband customers. I developed customer-facing features including account management screens, data usage dashboards, service request flows and in-app notifications. Built with React Native for cross-platform delivery on iOS and Android, with a focus on performance across a wide range of device capabilities and network conditions.",
    tags: ["React Native", "TypeScript", "Tailwind CSS"],
    industry: "Telecoms",
  },
  {
    name: "Webafrica",
    role: "Developer at Britehouse Mobility · 2021 – 2025",
    description:
      "Mobile application for a national fibre and LTE internet service provider. I delivered features for service activation, real-time connectivity monitoring, package upgrades and support ticketing. Worked closely with the design team to build a clean, intuitive UI that guides users through complex ISP processes — from checking coverage and signing up to managing their account and troubleshooting connection issues.",
    tags: ["React Native", "TypeScript", "Tailwind CSS"],
    industry: "Telecoms",
  },
  {
    name: "SuperSport",
    role: "Developer at Britehouse Mobility · 2021 – 2025",
    description:
      "Website for the pan-African sports broadcaster — the home of live sport in Africa. I contributed front-end development to the public-facing site, working on live score components, match pages, fixture schedules, league tables and editorial sports content feeds. Built responsive, high-performance UI designed to handle traffic spikes during major sporting events, ensuring fans get real-time updates without lag.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    industry: "Sports Media",
  },
  {
    name: "AECI",
    role: "Developer at Britehouse Mobility · 2021 – 2025",
    description:
      "Corporate website for the JSE-listed chemicals, mining explosives and agricultural group. I built responsive page templates, an investor relations hub with downloadable financial reports, and content-managed layouts that present the group's multiple divisions — from mining services to plant health. Delivered a clean, professional design that reflects a 100-year-old industrial brand while meeting modern web standards for accessibility and performance.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    industry: "Chemicals · Mining",
  },
  {
    name: "Grindrod",
    role: "Developer at Britehouse Mobility · 2021 – 2025",
    description:
      "Corporate website for the JSE-listed freight logistics, ports and financial services group. I delivered multi-division navigation, interactive service pages, port location maps and investor content. The challenge was presenting a complex group with operations across shipping, rail, ports and banking in a single cohesive site — with clear information architecture and fast page loads despite rich content.",
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
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs font-medium text-white bg-gradient-to-r from-primary to-cyan-600 px-2.5 py-1 rounded-full whitespace-nowrap ml-2">
                    {project.industry}
                  </span>
                </div>
                <p className="text-xs text-primary mb-3">{project.role}</p>
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
