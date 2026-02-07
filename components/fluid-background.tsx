"use client"

import { useEffect, useRef } from "react"

export const FluidBackground = () => {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let x = 0
    let y = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      x += (targetX - x) * 0.08
      y += (targetY - y) * 0.08

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary glow */}
      <div
        ref={glowRef}
        className="
          absolute
          w-[400px] h-[400px]
          rounded-full
          blur-[120px]
          opacity-70
          bg-gradient-to-br
          from-purple-500
          via-blue-500
          to-cyan-400
        "
      />

      {/* Ambient static glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-40 bg-purple-600" />
      <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] rounded-full blur-[140px] opacity-30 bg-blue-600" />
    </div>
  )
}