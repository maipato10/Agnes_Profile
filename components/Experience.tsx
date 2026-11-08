import ScrollReveal from "./ScrollReveal";

const roles = [
  {
    title: "Intermediate Software Developer",
    company: "Superparent",
    type: "AI-powered family organisation platform",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Build and maintain the production web and mobile applications with React.js, Next.js, React Native, TypeScript and Tailwind CSS.",
      "Integrate and configure AI/LLM solutions in production, powering the assistant that extracts dates and tasks from messages and documents.",
      "Run production quality checks on the AI assistant — comparing inputs against outputs and tracking error rates over time.",
      "Turn QA findings into fixes shipped through reviewed pull requests.",
      "Test calendar synchronisation, audit error handling and review UI flows to improve reliability.",
      "Partner with product and design to take features from requirements through to release in a small, fast-moving start-up team.",
    ],
  },
  {
    title: "Intermediate Software Developer",
    company: "Britehouse Mobility",
    type: "The Campus, Sandton, Johannesburg",
    period: "Dec 2024 – Dec 2025",
    current: false,
    bullets: [
      "Delivered web and mobile features for enterprise client projects using React, Next.js and React Native.",
      "Developed and maintained client websites for well-known South African brands.",
      "Improved application performance and code quality through targeted refactoring and code reviews.",
      "Mentored junior developers through pairing sessions and hands-on technical guidance.",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Britehouse Mobility",
    type: "The Campus, Sandton, Johannesburg",
    period: "Oct 2021 – Dec 2024",
    current: false,
    bullets: [
      "Built and maintained front-end and mobile application features in an Agile, cross-functional team.",
      "Contributed front-end development to client websites across telecoms, sports media, chemicals and logistics.",
      "Collaborated with back-end developers, testers and designers to deliver releases on schedule.",
      "Earned promotion to Intermediate Developer by taking increasing ownership of features and modules.",
    ],
  },
  {
    title: "Lecturer's Assistant",
    company: "Central University of Technology",
    type: "Free State",
    period: "Jan 2021 – Nov 2021",
    current: false,
    bullets: [
      "Supported lecturers on IT modules through marking, tutorials and student consultations.",
    ],
  },
  {
    title: "Computer Lab Assistant",
    company: "Central University of Technology",
    type: "Free State",
    period: "Mar 2020 – Dec 2020",
    current: false,
    bullets: [
      "Provided technical support to students and kept computer lab systems running.",
    ],
  },
  {
    title: "Technical Programming Lab Assistant",
    company: "Central University of Technology",
    type: "Free State",
    period: "Feb 2017 – Jan 2019",
    current: false,
    bullets: [
      "Coached students through programming practicals, debugging and core programming concepts.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 section-gradient-light">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
          <div className="gradient-line w-16 mb-12" />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-border" />

          <div className="space-y-10">
            {roles.map((role, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative pl-12 md:pl-16">
                  {/* Dot */}
                  <div
                    className={`absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                      role.current
                        ? "bg-primary border-primary animate-pulse-glow"
                        : "bg-background border-primary"
                    }`}
                  />

                  <div className="card-glow bg-background rounded-xl p-6 border border-border">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {role.title}
                        </h3>
                        <p className="text-primary font-medium">{role.company}</p>
                        <p className="text-sm text-muted">{role.type}</p>
                      </div>
                      <span className="text-sm text-muted whitespace-nowrap">
                        {role.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {role.bullets.map((b, j) => (
                        <li key={j} className="text-muted text-sm flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
