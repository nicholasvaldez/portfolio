import { Cursor, useTypewriter } from "react-simple-typewriter"

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello World! I'm Nick",
      "Pro-Drummer turned coder",
      "Husband",
      "Father",
      "Big believer in 2 o'clock afternoon coffee",
      "Welcome to my portfolio!",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#C0C0C3" />
      </h1>
    </div>
  )
}

export default Hero
