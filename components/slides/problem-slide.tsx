export default function ProblemSlide() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">The Problem 🤔</h2>

      <div className="grid grid-cols-1 gap-8 flex-1">
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Patient Challenges</h3>
            <p className="text-gray-700">
              Getting treatments or surgeries can be overwhelming, and patients often lack accessible support to
              navigate their care journey.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Provider Challenges</h3>
            <p className="text-gray-700">Broken intake processes lead to delays in treatment and payment:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Insurance verification issues</li>
              <li>Missing documentation</li>
              <li>Disjointed follow-ups</li>
              <li>Inefficient patient education</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
