"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { FluidBackground } from "@/components/fluid-background"

// Project data
const projects = [
  {
    id: 1,
    title: "CelticJewelry - Magento to Shopify Migration",
    description:
      "Migrated an incomplete Magento 2 store to Shopify, resolving legacy issues, fixing broken functionalities, and customizing the Ella theme to deliver a stable, SEO-optimized, and conversion-focused e-commerce experience.",
    category: "Shopify",
    type: "E-commerce Migration",
    link: "https://celticjewelry.com",
    image: "/mocks/celtic.gif",
    skills: ["Shopify", "Liquid", "E-commerce Migration"],
  },
  {
    id: 2,
    title: "Crypto Tracker",
    description:
      "A responsive React.js application using the CoinGecko API and Material UI to track 100+ cryptocurrencies, compare prices, manage watchlists, and switch between dark and light themes.",
    category: "Frontend",
    type: "Web App",
    link: "https://github.com/Anup9148680234/crypto_app",
    image: "/mocks/crypto.gif",
    skills: ["React.js", "REST APIs", "Material UI"],
  },
  {
    id: 3,
    title: "Headless Shopify Storefront",
    description:
      "A modern headless Shopify storefront built with Next.js and Tailwind CSS, integrating the Shopify Storefront GraphQL API for real-time product data, inventory updates, and dynamic variant selection.",
    category: "Shopify",
    type: "Full-Stack Web App",
    link: "https://github.com/Anup9148680234/headless-shopify-dashboard",
    image: "/mocks/headless-dashboard.gif",
    skills: ["Next.js", "GraphQL", "Headless Commerce"],
  },
  {
    id: 4,
    title: "Axiom Pulse - Token Trading Table",
    description:
      "A pixel-perfect frontend application displaying token trading data in an interactive table layout, focused on clean UI, performance, and real-time market visualization.",
    category: "Frontend",
    type: "Web App",
    link: "https://github.com/Anup9148680234/axiom-pulse-token-trading-table-app",
    image: "/mocks/axiom-pulse-token-trading.gif",
    skills: ["React.js", "Data Visualization", "UI/UX Design"],
  },
  {
    id: 5,
    title: "Podcast Platform",
    description:
      "A full-stack podcast platform built with React, Redux, and Firebase, featuring authentication, profile management, podcast creation, episode uploads, and a fully responsive user interface.",
    category: "Full-Stack",
    type: "Web App",
    link: "https://github.com/Anup9148680234/podcast-app",
    image: "/mocks/podcast.gif",
    skills: ["React.js", "Redux", "Firebase"],
  },
  {
    id: 6,
    title: "Elevating Coffeeza's E-commerce Presence",
    description:
      "Password: temahb - Designed and developed Coffeeza's Shopify website, leveraging Liquid templates and best practices for a seamless e-commerce experience.",
    category: "Graphics",
    type: "Web Experience",
    link: "https://coffeeezza.myshopify.com/",
    image: "/mocks/coffeezaa.gif",
    skills: ["Shopify", "Liquid", "UI/UX Design"],
  },
];


export default function ProjectsPage() {
  const router = useRouter()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  return (
    <div className="bg-black text-white min-h-screen relative font-[var(--font-plus-jakarta)]">
      {/* Fluid background with reduced opacity for projects page */}
      <div className="absolute inset-0 opacity-50">
        <FluidBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-12 pb-24 px-6">
        {/* Back button */}
        <div className="max-w-7xl mx-auto mb-12">
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight font-[var(--font-plus-jakarta)]">
            My <span className="italic font-normal text-gray-400 font-[var(--font-playfair)]">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            A collection of my work across various technologies and domains.
            From web applications to system utilities and design projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="project-card-landscape bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:scale-[1.03] will-change-transform shadow-xl hover:shadow-2xl hover:shadow-white/10 relative">
                {/* Project Image */}
                <div className="relative h-[300px] w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs text-white font-medium font-[var(--font-plus-jakarta)] bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-gray-300 font-medium font-[var(--font-plus-jakarta)] bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-light text-white font-[var(--font-plus-jakarta)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Skills Tags */}
                  {project.skills && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-white/10 px-2 py-1 rounded-md text-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-400">{new URL(project.link).hostname}</span>
                    <div className="text-white/70 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cursor Following Button */}
        {hoveredProject && (
          <div
            className="fixed pointer-events-none z-50"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <button className="bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium flex items-center space-x-2 border border-white/40 button-glow shadow-2xl">
              <span className="text-sm">View Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
