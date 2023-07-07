import { urlFor } from "@/sanity"
import { PageInfo } from "@/typings"
import { motion } from "framer-motion"

type Props = {
  pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-5 md:space-y-10 sm:w-auto relative md:static w-full">
        <h4 className="text-4xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#F6D0B1]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base w-[100%] h-[190%] sm:h-[100px] md:w-[500px] md:h-[320px] lg:w-[700px] lg:h-[430px] overflow-y-scroll absolute md:static scrollbar scrollbar-track-gray-400/20 md:scrollbar-track-transparent scrollbar-thumb-[#F6D0B1]/80 ">
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </div>
  )
}

export default About
