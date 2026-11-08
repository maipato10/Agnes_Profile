import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agnes Monyeke | Software Developer",
  description:
    "Portfolio of Agnes Maipato Monyeke — Intermediate Software Developer specialising in React, Next.js, React Native and TypeScript. Based in Johannesburg, South Africa.",
  keywords: [
    "Agnes Monyeke",
    "Software Developer",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Johannesburg",
    "South Africa",
    "Front End Developer",
  ],
  openGraph: {
    title: "Agnes Monyeke | Software Developer",
    description:
      "Front-end and mobile developer with 5 years of commercial experience in React, Next.js, React Native and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  if (mode === 'dark' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
