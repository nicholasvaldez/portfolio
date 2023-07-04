import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import ContactMe from "@/components/ContactMe"
import { GetStaticProps } from "next"
import { PageInfo, Project, Skill, Social } from "@/typings"
import { fetchPageInfo } from "@/utils/fetchPageInfo"
import { fetchSkills } from "@/utils/fetchSkils"
import { fetchProjects } from "@/utils/fetchProjects"
import { fetchSocials } from "@/utils/fetchSocials"

type Props = {
  pageInfo: PageInfo
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

export default function Home({ pageInfo, skills, projects, socials }: Props) {
  return (
    <div className="bg-[#181E1E] text-[#C0C0C3] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F6D0B1]/80">
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

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()
  const pageInfo: PageInfo = await fetchPageInfo()

  return {
    props: {
      pageInfo,
      socials,
      skills,
      projects,
    },
  }
}
