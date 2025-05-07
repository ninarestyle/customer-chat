import Image from "next/image"

export default function CoverSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
      <div className="mb-8">
        <Image src="/lemon-logo.webp" alt="Lift AI Logo" width={120} height={120} className="mx-auto" />
      </div>

      <h1 className="text-5xl font-bold mb-4 text-center">Lift AI</h1>
      <p className="text-2xl mb-8 text-center">AI Care Manager</p>

      <div className="text-xl opacity-80 mt-12">Transforming patient navigation through AI</div>
    </div>
  )
}
