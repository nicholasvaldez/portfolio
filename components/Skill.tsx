import { motion } from "framer-motion"

type Props = {
  directionLeft?: boolean
}

function Skill({ directionLeft }: Props) {
  return (
    <div>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
        className="w-24 h-24 rounded-full border border-gray-500 object-cover xl:w-32 xl:h-32"
      />
    </div>
  )
}

export default Skill
