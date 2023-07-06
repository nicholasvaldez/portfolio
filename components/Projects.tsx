import { urlFor } from "@/sanity"
import { Project } from "@/typings"
import { motion } from "framer-motion"
import Skill from "./Skill"
import Link from "next/link"
type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F6D0B1]/80  ">
        {projects?.map((p) => (
          <div
            key={p._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center md:p-44 h-[800px]"
          >
            <Link href={p.linkToBuild}>
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(p?.heroImage).url()}
                alt=""
                className="xl:w-[600px]"
              />
            </Link>
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <Link href={p.linkToBuild}>
                <h4 className="text-4xl font-semibold text-center">
                  {p.title}
                </h4>
              </Link>
              <div className="flex items-center space-x-2 justify-center">
                {p?.technologies.map((tech) => {
                  return (
                    <img
                      className="h-10 w-10"
                      key={tech._id}
                      src={urlFor(tech.image).url()}
                      alt={tech.title}
                    />
                  )
                })}
              </div>
              <p className="text-sm text-center md:text-left">{p.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F6D0B1]/20 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  )
}

export default Projects
