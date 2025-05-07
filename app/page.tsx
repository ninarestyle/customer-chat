import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import PitchDeck from "@/components/pitch-deck"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Lift AI Pitch Deck</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <PitchDeck />
        </div>

        <div className="mt-8 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <span>View Full Presentation</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}
