import Image from "next/image"
import { TrendingUp, Users, MessageSquare, DollarSign } from "lucide-react"

export default function TractionSlide() {
  return (
    <div className="w-full h-full flex flex-col p-8 pt-10 pb-14 bg-white min-h-[600px]">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Traction & Validation 📈</h2>

      <div className="grid grid-cols-2 gap-8 flex-1">
        <div className="space-y-6">
          <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg">
            <Users className="h-10 w-10 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Clinic Adoption</h3>
              <p className="text-gray-700">3 clinics onboarded, 4th in progress</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg">
            <DollarSign className="h-10 w-10 text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Revenue</h3>
              <p className="text-gray-700">First paying customer at $99/month</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg">
            <MessageSquare className="h-10 w-10 text-purple-600" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Engagement</h3>
              <p className="text-gray-700">1,000+ patient inquiries handled</p>
              <p className="text-gray-700">One user engaged in a 193-message conversation</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg">
            <TrendingUp className="h-10 w-10 text-red-600" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Lead Generation</h3>
              <p className="text-gray-700">2-3 qualified leads per week</p>
              <p className="text-gray-700">~$5,000 potential revenue per lead</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Expert Endorsement</h3>
            <div className="flex items-start space-x-4">
              <Image src="/dr-kim-headshot.jpg" alt="Dr. Roy Kim" width={60} height={60} className="rounded-full" />
              <div>
                <p className="text-gray-700 italic">
                  "I've been using Lift AI in my practice and it's been a game-changer for patient engagement and lead
                  conversion."
                </p>
                <p className="text-blue-600 font-medium mt-2">Dr. Roy Kim, Plastic Surgeon & Advisor</p>
                <a
                  href="https://x.com/drroykim/status/1907949712486871065?s=46&t=3kf4PYxuK40YZNy3_t2HoA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  View Endorsement Tweet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
