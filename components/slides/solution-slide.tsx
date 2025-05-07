import { CheckCircle } from "lucide-react"

export default function SolutionSlide() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Our Solution 💡</h2>

      <div className="flex-1">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-blue-700">Lift AI: AI Care Manager</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Explains treatments and procedures to patients</p>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Routes patient requests efficiently</p>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Shares diagnoses and care plans in accessible language</p>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Follows up on next steps and missing documentation</p>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">Ensures no patient gets lost in the process</p>
            </div>
          </div>

          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500 mt-4">
            <p className="text-teal-800">
              <span className="font-bold">Result:</span> Faster access to care for patients and accelerated revenue for
              providers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
