import { TrendingUp, PieChart } from "lucide-react"

export default function MarketSlide() {
  return (
    <div className="w-full h-full flex flex-col p-8 pt-10 pb-14 bg-white min-h-[600px]">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Market Opportunity 💰</h2>

      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <p className="text-blue-800 font-medium">
          <span className="font-bold">Key Insight:</span> Good patient navigation is a key unlock for revenue for
          clinics, physician groups and hospitals.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 flex-1">
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
              <PieChart className="h-5 w-5 mr-2 text-blue-600" />
              Plastic Surgery Market
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>10,417 plastic surgery clinics in the U.S.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>50% adoption rate at $30K/year</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span className="font-semibold">$150M annual revenue opportunity</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Oncology Market Example
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>$145.5B U.S. oncology market (2024)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>Projected to reach $416.9B by 2034</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span>10% average revenue leakage</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span className="font-semibold">$1B+ in recoverable revenue with just 1% improvement</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
            <h3 className="text-xl font-semibold mb-3 text-teal-800">Future Revenue Streams</h3>
            <p className="text-gray-700">
              Once embedded in provider networks, Lift AI can facilitate pharmaceutical companies introducing emerging
              treatments directly to consumers through trusted providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
