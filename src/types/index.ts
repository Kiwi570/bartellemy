export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image?: string
  href: string
  features?: string[]
}

export interface Certification {
  id: string
  name: string
  fullName: string
  description: string
  logo?: string
  color: string
}

export interface Realisation {
  id: string
  title: string
  category: string
  description: string
  images: string[]
  location?: string
  date?: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  date: string
  service?: string
  location?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface Brand {
  id: string
  name: string
  logo?: string
  category?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Stat {
  value: number
  suffix?: string
  prefix?: string
  label: string
  icon?: string
}

export interface FAQ {
  question: string
  answer: string
  category?: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address?: string
  projectType: string
  message: string
  urgency?: boolean
}
