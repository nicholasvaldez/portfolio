import { Stringifier } from "postcss"

interface SanityBody {
  _createdAt: string
  _id: string
  _rec: string
  _updatedAt: string
}

interface Image {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo"
  address: string
  backgroundInformation: string
  email: string
  role: string
  heroImage: Image
  name: string
  phoneNumber: string
  profilePic: Image
}

export interface Techology extends SanityBody {
  _type: "skill"
  image: Image
  title: string
}

export interface Skill extends SanityBody {
  _type: "skill"
  image: Image
  title: string
}

export interface Project extends SanityBody {
  title: string
  _type: "project"
  image: Image
  linkToBuild: string
  summary: string
  technologies: Techology[]
}

export interface Social extends SanityBody {
  _type: "social"
  title: string
  url: string
}
