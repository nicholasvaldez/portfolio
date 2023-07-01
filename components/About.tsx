import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
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
        src="https://i.imgur.com/cimKQTM.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#F6D0B1]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base w-[420px] h-[100px] xs:w-[420px] sm:h-[100px] md:w-[500px] md:h-[320px] lg:w-[700px] lg:h-[430px] overflow-scroll ">
          Hey! I'm Nick, a software developer and passionate drummer based in
          Nashville, TN. <br /> Over the last 5 years, I had an exciting journey
          as a drummer and co-producer in a professional indie pop band. I also
          served as the band's technical advisor and playback/lighting
          technician. This experience allowed me to meld my love for music and
          tech, cultivating a deep-seated passion for software development.
          <br />
          Leveraging my experience in music and hospitality, I recently
          graduated from Nashville Software School's intensive Full Stack
          Software Development program. I've been privileged to work on several
          exciting projects, like SamplStak, a platform for users to browse and
          collect audio samples, and GearHead, a gear tracking app for
          musicians. These experiences have honed my skills in various
          technologies such as HTML, CSS, JavaScript, React, Python, and Django.
          <br />
          In my personal life, I am happily married and a proud father to a
          10-month-old. Our family is made complete by Moose, our lovable Great
          Pyrenees/Husky mix. My Faith, Family and music are my greatest joys
          and the driving force behind my career transition to software
          development. <br />
          As a software developer, I strive to create applications that resonate
          with users, much like a good song does with its audience. My
          background in music has taught me the beauty of collaboration,
          creativity, and the magic of an amazing 'performance' - be it on stage
          or on a server.
        </p>
      </div>
    </div>
  )
}

export default About
