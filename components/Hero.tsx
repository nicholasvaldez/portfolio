import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import ProfilePic from "../Images/ProfilePic.jpg"
import Link from "next/link"
import { PageInfo } from "@/typings"

type Props = {
  pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi! I'm ${pageInfo?.name}`,
      "Pro-Drummer turned Keyboard Cowboy",
      "Husband",
      "Father",
      "Big believer in 2pm coffee",
      "Welcome to my portfolio.",
    ],
    loop: true,
    delaySpeed: 500,
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
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#C0C0C3" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="https://drive.google.com/file/d/1tzcWaJzj_RGSEW5FPQLXCmmDKBtqAzQf/view?usp=sharing">
            <button className="heroButton">Resume</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
