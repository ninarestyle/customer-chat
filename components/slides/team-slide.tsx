import Image from "next/image"
import { Linkedin, Twitter, Instagram, Users, Search } from "lucide-react"

export default function TeamSlide() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
      <h2 className="text-3xl font-bold mb-8">Our Team</h2>

      <div className="grid grid-cols-2 gap-8 flex-1">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Image
              src="/nina-chen-headshot.jpg"
              alt="Nina Chen"
              width={100}
              height={100}
              className="rounded-full border-4 border-white"
            />
            <div>
              <h3 className="text-2xl font-bold">Nina Chen</h3>
              <p className="text-blue-100">CEO & Founder</p>
              <div className="flex space-x-2 mt-2">
                <a
                  href="https://www.linkedin.com/in/nina-chen-49697824/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/nina_loopin?s=21&t=3kf4PYxuK40YZNy3_t2HoA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Advisors</h3>
            <div className="flex items-center space-x-3 mb-3">
              <Image src="/dr-kim-headshot.jpg" alt="Dr. Roy Kim" width={60} height={60} className="rounded-full" />
              <div>
                <h4 className="font-semibold">Dr. Roy Kim</h4>
                <p className="text-sm text-blue-100">Plastic Surgeon & Strategic Partner</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-white/20">
              <div className="w-10 h-10 rounded-full bg-blue-400/30 flex items-center justify-center">
                <Search className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">Healthcare Advisor</h4>
                <p className="text-sm text-blue-100">Multiple potential advisors in pipeline</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Nina Chen</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Twitter className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                <span>100K+ RedNote Following</span>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                <span>Engineering Leader in Social Media Companies</span>
              </li>
              <li className="flex items-start">
                <Linkedin className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                <span>Builder of a Fashion Resale Marketplace</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Dr. Roy Kim</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Twitter className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                <span>14.7K Following on X</span>
              </li>
              <li className="flex items-start">
                <Instagram className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                <span>45K Instagram Following</span>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                <span>Editor of Official Open Access Journal for ASPS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
