import ScrollReveal from "./ScrollReveal";

const degrees = [
  {
    degree: "BCom Honours in Information Systems",
    institution: "University of Johannesburg",
    year: "2022",
    focus: "Computer & Information Systems Security / Information Assurance",
  },
  {
    degree: "Advanced Diploma in Information Technology",
    institution: "Central University of Technology, Free State",
    year: "2020 – 2021",
    focus: "Graduated Cum Laude",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Central University of Technology, Free State",
    year: "2016 – 2019",
    focus: null,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-foreground mb-2">Education</h2>
          <div className="gradient-line w-16 mb-12" />
        </ScrollReveal>

        <div className="space-y-6">
          {degrees.map((d, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="card-glow flex flex-col sm:flex-row gap-4 sm:gap-8 p-6 bg-surface rounded-xl border border-border">
                <div className="sm:w-32 shrink-0">
                  <span className="text-sm font-semibold gradient-text">
                    {d.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {d.degree}
                  </h3>
                  <p className="text-muted">{d.institution}</p>
                  {d.focus && (
                    <p className="text-sm text-primary mt-1 font-medium">
                      {d.focus}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
