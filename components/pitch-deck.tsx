"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Slide components
import CoverSlide from "./slides/cover-slide"
import ProblemSlide from "./slides/problem-slide"
import SolutionSlide from "./slides/solution-slide"
import TractionSlide from "./slides/traction-slide"
import MarketSlide from "./slides/market-slide"
import CompetitorsSlide from "./slides/competitors-slide"
import BusinessModelSlide from "./slides/business-model-slide"
import TeamSlide from "./slides/team-slide"

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    <CoverSlide key="cover" />,
    <ProblemSlide key="problem" />,
    <SolutionSlide key="solution" />,
    <TractionSlide key="traction" />,
    <MarketSlide key="market" />,
    <CompetitorsSlide key="competitors" />,
    <BusinessModelSlide key="business" />,
    <TeamSlide key="team" />,
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="relative">
      <div className="aspect-[16/9] w-full">{slides[currentSlide]}</div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentSlide === index ? "bg-blue-600 w-4" : "bg-gray-300",
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 hover:bg-white"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 hover:bg-white"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
