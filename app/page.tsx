"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Workflow } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false)
  const phoneNumber = "650-457-8561"

  const handleDemoClick = (e) => {
    // Check if it's likely a desktop device (this is a simple check, not foolproof)
    const isDesktop = window.innerWidth >= 1024 && !("ontouchstart" in window)

    if (isDesktop) {
      e.preventDefault()
      setShowPhoneTooltip(true)
      // Hide the tooltip after 5 seconds
      setTimeout(() => setShowPhoneTooltip(false), 5000)
    }
    // On mobile, the default behavior (making a call) will happen
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">Shunya</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#ai-agents" className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer">
            Solutions
          </a>
          <a href="mailto:nina@liftai.biz" className="text-gray-700 hover:text-gray-900 font-medium">
            Contact
          </a>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md">
            <a
              href="https://calendly.com/nina-liftai/explore-opportunities-with-shunya"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </Button>
        </nav>

        <div className="md:hidden">
          <button className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Make Revenue Cycle Management Invisible To Doctors
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Higher collections, Reduced DSO, Faster time-to-therapy
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md">
                <a
                  href="https://calendly.com/nina-liftai/explore-opportunities-with-shunya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
              <div className="relative">
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg rounded-md"
                >
                  <a href="tel:6504578561" onClick={handleDemoClick}>
                    Try AI Patient Intake
                  </a>
                </Button>
                {showPhoneTooltip && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white p-3 rounded-md shadow-lg border border-gray-200 z-10">
                    <p className="text-gray-800 whitespace-nowrap">
                      Call us at: <span className="font-bold">{phoneNumber}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section
          id="ai-agents"
          className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24 scroll-mt-20"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Powered by Autonomous AI Agents</h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Our platform is composed of specialized AI agents that work together to handle every aspect of the
                billing process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Documentation Agent */}
              <div className="bg-blue-800 bg-opacity-30 p-8 rounded-xl text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Documentation Agent</h3>
                <p className="text-blue-100 mb-6">
                  Proactively captures and transforms clinical evidence into compelling authorization narratives that
                  drive faster approvals.
                </p>
                <ul className="text-left space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Actively mines clinical notes for key evidence</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Strategically highlights critical diagnoses</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Builds compelling case documentation</span>
                  </li>
                </ul>
              </div>

              {/* Payer Agent */}
              <div className="bg-blue-800 bg-opacity-30 p-8 rounded-xl text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Payer Agent</h3>
                <p className="text-blue-100 mb-6">
                  Navigates complex insurance requirements and communicates with payers to secure approvals quickly.
                </p>
                <ul className="text-left space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Understands payer policies</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Submits optimized requests</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Handles appeals automatically</span>
                  </li>
                </ul>
              </div>

              {/* Coordination Agent */}
              <div className="bg-blue-800 bg-opacity-30 p-8 rounded-xl text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center">
                    <Workflow className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Coordination Agent</h3>
                <p className="text-blue-100 mb-6">
                  Orchestrates the entire workflow, ensuring all steps are completed efficiently and on time.
                </p>
                <ul className="text-left space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Prioritizes urgent cases</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tracks status in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Provides actionable insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-xl font-bold text-white block mb-4">Shunya</span>
              <p className="text-gray-400 mt-2">Make Revenue Cycle Management Invisible To Doctors</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#ai-agents" className="hover:text-white">
                    AI Agents
                  </a>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-white">
                    EHR Integration
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-white">
                    Analytics Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="mailto:nina@liftai.biz" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/hipaa" className="hover:text-white">
                    HIPAA Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Shunya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
