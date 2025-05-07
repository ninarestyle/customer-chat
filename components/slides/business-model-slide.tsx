import { DollarSign, BarChart } from "lucide-react"

export default function BusinessModelSlide() {
  return (
    <div className="w-full h-full flex flex-col p-8 pt-10 pb-14 bg-white min-h-[600px]">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Business Model 💼</h2>

      <div className="grid grid-cols-2 gap-8 flex-1">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-800">Revenue Streams</h3>

          <div className="bg-blue-50 p-5 rounded-lg">
            <div className="flex items-start mb-4">
              <DollarSign className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-700">SaaS Subscription</h4>
                <p className="text-gray-700">
                  Pricing scales with AI capabilities, similar to human skillsets: more skills, higher value.
                  Entry-level administrative staff costs range between $40K-60K per year.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <BarChart className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-700">Future: Pharmaceutical Partnerships</h4>
                <p className="text-gray-700">
                  Revenue share from connecting patients with relevant treatment options and clinical trials
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-800">Growth Strategy</h3>

          <div className="space-y-4">
            <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
              <h4 className="font-semibold text-teal-800 mb-1">Phase 1: Plastic Surgery Focus</h4>
              <p className="text-gray-700 text-sm">
                Dominate the plastic surgery niche with proven ROI and referral-based growth
              </p>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
              <h4 className="font-semibold text-teal-800 mb-1">Phase 2: Expand to Adjacent Specialties</h4>
              <p className="text-gray-700 text-sm">
                Leverage success to expand into dermatology, cosmetic dentistry, and other cash-pay specialties
              </p>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
              <h4 className="font-semibold text-teal-800 mb-1">Phase 3: Hospital Systems Integration</h4>
              <p className="text-gray-700 text-sm">
                Partner with hospital systems to implement AI care managers across multiple departments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
