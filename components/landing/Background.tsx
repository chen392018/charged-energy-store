"use client"
import { useState, useEffect } from "react"

export default function FeatureSectionBackground({
  children,
}: {
  children: React.ReactNode
}) {
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [backgroundColor, setBackgroundColor] =
    useState<string>("var(--primary-700)")

  useEffect(() => {
    // Update the scroll state
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    // Add an event listener when the component is mounted.
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup the listener when the component is unmounted.
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const lerpColor = (
      startColor: string,
      endColor: string,
      t: number,
    ): string => {
      const startRGB = hexToRgb(startColor)
      const endRGB = hexToRgb(endColor)
      const lerp = (a: number, b: number, t: number): number => a + (b - a) * t

      if (!startRGB || !endRGB) throw new Error("Bad hex color")

      const r = Math.round(lerp(startRGB.r, endRGB.r, t))
      const g = Math.round(lerp(startRGB.g, endRGB.g, t))
      const b = Math.round(lerp(startRGB.b, endRGB.b, t))
      return `rgb(${r}, ${g}, ${b})`
    }

    const interpolateColor = (scrollPos: number): string => {
      const getColor = (varName: string): string =>
        getComputedStyle(document.documentElement)
          .getPropertyValue(varName)
          .trim()

      if (scrollPos < 1450) {
        return getColor("--primary-700")
      } else if (scrollPos < 1850) {
        return lerpColor(
          getColor("--primary-700"),
          getColor("--dawn-background"),
          (scrollPos - 1450) / (1850 - 1450),
        )
      } else if (scrollPos < 2600) {
        return lerpColor(
          getColor("--dawn-background"),
          getColor("--noon-background"),
          (scrollPos - 1850) / (2600 - 1850),
        )
      } else if (scrollPos < 3350) {
        return lerpColor(
          getColor("--noon-background"),
          getColor("--dusk-background"),
          (scrollPos - 2600) / (3350 - 2600),
        )
      } else if (scrollPos < 4100) {
        return lerpColor(
          getColor("--dusk-background"),
          getColor("--primary-700"),
          (scrollPos - 3350) / (4100 - 3350),
        )
      } else {
        return getColor("--primary-700")
      }
    }
    setBackgroundColor(interpolateColor(scrollPosition))
  }, [scrollPosition])

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null
  }
  return (
    <section
      className={`py-12 sm:py-24 w-full bg-primary-700`}
      style={{ backgroundColor }}
    >
      {children}
    </section>
  )
}
