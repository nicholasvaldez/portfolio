import Image from "next/image"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Hero from "@/components/Hero"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div>
      <title>Nick Valdez's Portfolio</title>
      <Header />

      {/* Hero */}
      <section id="hero">
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
