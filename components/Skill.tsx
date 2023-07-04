import { urlFor } from "@/sanity"
import { motion } from "framer-motion"

type Props = {
  directionLeft?: boolean
  url: string
}

function Skill({ url, directionLeft }: Props) {
  return (
    <div>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={url}
        className="w-24 h-24 rounded-full border border-gray-500 object-cover xl:w-32 xl:h-32"
      />
    </div>
  )
}

export default Skill
