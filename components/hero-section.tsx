"use client"

import { Twitter, Linkedin, Github } from "lucide-react"

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center max-w-2xl mx-auto">
       

        {/* Available for work */}
        <div className="flex items-center justify-center mb-5">
          <div className="relative">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse">
              <div className="absolute -inset-1 bg-green-500/30 rounded-full animate-ping"></div>
            </div>
          </div>
          <span className="text-green-400 text-xs ml-2">available for work</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-light mb-3">
          Anup <span className="italic font-normal text-gray-400 font-[var(--font-playfair)]">Angadi</span>
        </h1>

        {/* Job Title */}
        <p className="text-sm text-gray-400 mb-8 tracking-wide">A passionate Front End Web Developer enthused in building responsive, animated and interactive websites</p>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 mb-10">
          
          <a href="https://www.linkedin.com/in/anup-angadi/" aria-label="LinkedIn Profile" className="group">
            <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-white cursor-pointer transition-colors" />
          </a>
          <a
            href="https://github.com/Anup9148680234"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="group"
          >
            <Github className="w-5 h-5 text-gray-500 group-hover:text-white cursor-pointer transition-colors" />
          </a>
          <a
            href="https://leetcode.com/u/anup220799/"
            aria-label="LeetCode Profile"
            className="group"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current text-gray-500 group-hover:text-white transition-colors cursor-pointer"
            >
              <path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z" />
            </svg>
          </a>
        </div>

        {/* Contact Button */}
        <button
          onClick={scrollToContact}
          className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center mx-auto text-lg font-medium button-glow"
        >
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Contact Me
          <svg
            className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

