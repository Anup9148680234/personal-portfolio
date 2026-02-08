"use client";

import { SectionSeparator } from "@/components/section-separator";

const skills = [
  // Languages
  "JavaScript",

  // Frontend
  "React",
  "Next.js",
  "Tailwind CSS",

  // Backend

  "GraphQL",

  "MySQL",

  // E-commerce / CMS
  "Shopify",
  "DSA",
  "System Design",
];
const experience = [
  {
    role: "Front-End Developer",
    company: "Ecloto Designs",
    period: "Nov 2024 - Present",
    highlights: [
      "Developed custom Shopify app features including dynamic color swatches, product bundles, and optimized Add to Cart blocks to improve conversion rates.",
      "Built responsive and scalable Shopify app frontends using React, integrated with Shopify Admin via GraphQL.",
      "Performed end-to-end testing using React Native and Android Studio to ensure cross-platform compatibility and performance.",
    ],
  },
  {
    role: "Software Developer",
    company: "HummingBird Web Solutions Limited",
    period: "Aug 2023 - Oct 2024",
    highlights: [
      "Led Magento 2 to Shopify migration projects, ensuring data integrity, minimal downtime, and SEO preservation.",
      "Developed and enhanced e-commerce platforms using Next.js and GraphQL, improving frontend performance and backend efficiency.",
      "Upgraded and optimized WordPress themes, improving site performance by up to 70% and significantly enhancing mobile responsiveness.",
    ],
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "AccioJob",
    period: "Late 2022 - Mid 2023",
    highlights: [
      "Built full-stack web applications using React, Node.js, Express, and MongoDB as part of an intensive developer training program.",
      "Implemented REST APIs, authentication flows, and CRUD operations while following clean coding practices.",
      "Strengthened problem-solving skills by working on data structures, algorithms, and real-world coding assignments.",
    ],
  },
  {
    role: "Risk & Financial Advisory Analyst",
    company: "Deloitte",
    period: "Sep 2021 - Sep 2022",
    highlights: [
      "Developed and deployed a full-stack web application, contributing to both frontend UI and backend logic with database integration.",
      "Participated in third-party risk assessment projects, applying modern risk evaluation methodologies and compliance standards.",
      "Collaborated with cross-functional teams and attended continuous training sessions to align technical solutions with business risk needs.",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <>
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gray-400 text-lg italic font-light font-[var(--font-playfair)]">
              Skills & Experience
            </span>
          </div>

          {/* Skills Pills */}
          <div className="mb-24">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/10 px-8 py-3 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-colors cursor-default font-[var(--font-plus-jakarta)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-white/10 last:border-b-0 hover:bg-white/5 rounded-xl transition-all duration-300 hover:border-white/20 px-6 -mx-6 group cursor-default"
              >
                <div className="text-xl md:text-2xl text-white font-light font-[var(--font-plus-jakarta)] group-hover:text-white/90 transition-colors">
                  {exp.role}
                </div>
                <div className="text-xl md:text-2xl text-gray-300 font-light font-[var(--font-plus-jakarta)] group-hover:text-white/80 transition-colors">
                  {exp.company}
                </div>
                <div className="text-xl md:text-2xl text-gray-400 font-light md:text-right font-[var(--font-plus-jakarta)] group-hover:text-white/70 transition-colors">
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beautiful separator after Skills section */}
      <SectionSeparator />
    </>
  );
};
