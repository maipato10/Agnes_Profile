import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Agnes Monyeke
            </h1>
            <p className="text-xl sm:text-2xl text-muted mb-6">
              Intermediate Software Developer
            </p>
            <p className="text-muted max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
              Building production web and mobile apps with React, Next.js, React
              Native &amp; TypeScript. Currently crafting AI-powered features at
              Superparent in Johannesburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/Agnes_Monyeke_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
              <Image
                src="/agnes.jpg"
                alt="Agnes Monyeke"
                width={320}
                height={320}
                priority
                className="relative rounded-full object-cover w-full h-full border-4 border-primary/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
