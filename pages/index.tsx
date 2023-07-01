import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Hero from "@/components/Hero"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="bg-[#181E1E] text-[#C0C0C3] h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <title>Nick Valdez's Portfolio</title>
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center mt-[90px]">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
