export default function CompetitorsSlide() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Competitive Landscape 🥊</h2>

      <div className="grid grid-cols-2 gap-8 flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-800">The Competition</h3>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">EMR Platforms</h4>
              <p className="text-gray-700 text-sm">
                Existing healthcare record systems with basic AI capabilities being added
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">General AI Agent Companies</h4>
              <p className="text-gray-700 text-sm">
                Broad AI solutions attempting to enter healthcare without specialty focus
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Healthcare AI Voice & Scribing Solutions</h4>
              <p className="text-gray-700 text-sm">
                Solutions focusing on providing voice AI and automating workflows without patient-centered navigation
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Our Differentiation</h3>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-3">Speciality-First Go To Market Approach</h4>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">✓</span>
                <span className="text-gray-700">
                  <span className="font-medium">Focused on plastic surgery</span> - cash-pay, insurance-free field ideal
                  for early AI adoption
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">✓</span>
                <span className="text-gray-700">
                  <span className="font-medium">Faster traction & iteration</span> - clear ROI and focused path to build
                  deep workflows
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">✓</span>
                <span className="text-gray-700">
                  <span className="font-medium">Defensible specialty knowledge</span> - building expertise others can't
                  easily match
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-teal-600 font-bold mr-2">✓</span>
                <span className="text-gray-700">
                  <span className="font-medium">Proven results</span> - already delivering qualified leads and patient
                  satisfaction
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
