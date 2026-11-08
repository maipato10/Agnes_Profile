import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
          <div className="gradient-line w-16 mb-8" />
        </ScrollReveal>

        <div className="space-y-5 text-muted leading-relaxed text-lg">
          <ScrollReveal delay={100}>
            <p>
              I&apos;m a front-end and mobile developer based in Johannesburg
              with five years of hands-on experience shipping production
              applications. My day-to-day toolkit is React, Next.js, React
              Native and TypeScript — the stack I&apos;ve used to build
              everything from telecoms portals to sports-media platforms.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p>
              Right now I&apos;m at{" "}
              <span className="text-primary font-medium">Superparent</span>, an
              AI-powered family organisation platform, where I build the web and
              mobile apps and quality-assure the AI assistant that turns school
              emails, WhatsApp messages and flyers into calendar events, to-dos
              and reminders. Before that I spent four years at Britehouse
              Mobility delivering websites for brands like MWEB, Webafrica,
              SuperSport, AECI and Grindrod — earning a promotion from junior to
              intermediate along the way.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p>
              Outside of shipping features, I care about clean code, meaningful
              code reviews and helping junior developers grow. I hold a BCom
              Honours in Information Systems and a cum laude Advanced Diploma in
              IT.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
