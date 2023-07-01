import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import ProfilePic from "../Images/ProfilePic.jpg"
import Link from "next/link"

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi! I'm Nick Valdez",
      "Pro-Drummer turned Keyboard Cowboy",
      "Husband",
      "Father",
      "Big believer in 2pm coffee",
      "Welcome to my portfolio!",
    ],
    loop: true,
    delaySpeed: 1000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <div className="flex flex-col justify-center items-center mt-[90px]">
        <BackgroundCircles />
        <Image
          className="relative rounded-full h-40 w-40 mx-auto object-cover"
          src={ProfilePic}
          alt="Photo of Nick"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#C0C0C3" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
