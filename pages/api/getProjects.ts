import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { sanityClient } from "@/sanity"
import { Project } from "@/typings"

const query = groq`
*[_type == "project"]{
  title,
  heroImage,
  summary,
  linkToBuild,
  "technologies": technologies[]->{
    _id,
    _type,
    title,
    image
  }
}
`

type Data = {
  projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query)
  // console.log(projects)

  res.status(200).json({ projects })
}
