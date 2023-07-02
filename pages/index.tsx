import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import WorkExperience from "@/components/WorkExperience"
import Skills from "@/components/Skills"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="bg-[#181E1E] text-[#C0C0C3] h-screen snap-y snap-mandatory overflow-scroll z-0  ">
      <title>Nick Valdez's Portfolio</title>
      <Header />

      <section id="hero" className="snap-start mt-[90px] ">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
