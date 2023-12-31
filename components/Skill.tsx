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
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        src={url}
        className="w-20 h-20 rounded-full border border-gray-500 object-cover xl:w-32 xl:h-32"
      />
    </div>
  )
}

export default Skill
