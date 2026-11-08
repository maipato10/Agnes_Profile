import ScrollReveal from "./ScrollReveal";

const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Front End",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "Cross-Browser Compatibility",
    ],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "iOS & Android Builds"],
  },
  {
    title: "AI & LLM",
    skills: [
      "LLM Integration",
      "Deterministic LLM Programming",
      "AI Output QA",
    ],
  },
  {
    title: "Back End & Cloud",
    skills: ["REST APIs", "Convex", "Clerk Auth"],
  },
  {
    title: "Practices & Tools",
    skills: [
      "Git",
      "Code Reviews",
      "Agile / Scrum",
      "Production QA",
      "Performance Optimisation",
      "Refactoring",
      "Mentoring",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 section-gradient-light">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Technical Skills
          </h2>
          <div className="gradient-line w-16 mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.title} delay={i * 100}>
              <div className="border-l-2 border-primary/40 pl-4 hover:border-primary transition-colors">
                <h3 className="text-sm font-semibold gradient-text uppercase tracking-wider mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-background border border-border text-foreground hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
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
