import type { Education, Work } from "../data/pages/Experience"

interface Section<T> {
  title: string
  items: T[]
  color: string
}

interface ExperienceData {
  education: Section<Education>
  work: Section<Work>
}

interface ExperienceDetailProps {
  data: ExperienceData
  lang: 'es' | 'en'
  theme: 'dark' | 'light'
  activeTab?: string
  className?:string
}


export type { Section, ExperienceData, ExperienceDetailProps }