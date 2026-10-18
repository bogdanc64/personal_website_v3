export const aboutCopy =
  'My name is Maftei Bogdan-Cosmin, I am a senior technical consultant and I love making customers satisfied and pleased with my work. I always bring a touch of originality to every project I do and I love to communicate while carrying out the project, precisely to satisfy the needs and desires of each client.'

export const contactIntro = {
  before: 'Get in touch or shoot me an email directly on ',
  email: 'maftei.bogdan@outlook.com',
}

export const links = {
  email: 'maftei.bogdan@outlook.com',
  github: 'https://github.com/bogdanc64',
  linkedin: 'https://www.linkedin.com/in/bogdan-cosmin-maftei-412018215/',
  resume: '/Bogdan_Maftei_Resume.pdf',
}

export const proficientSkills = ['typescript', 'angular', 'vue', 'nestjs'] as const
export const otherSkills = ['go', 'jest', 'aws', 'azure', 'tailwind', 'dotnet'] as const

export type Engagement = {
  companyName: string
  position: string
  joinedAs?: string
  startingDate: Date
  endingDate?: Date
  current?: boolean
  keypoints: string[]
  skills: string[]
}

export const engagements: Engagement[] = [
  {
    companyName: 'Softwire',
    position: 'Senior Technical Consultant',
    joinedAs: 'Software Developer II',
    startingDate: new Date(Date.UTC(2025, 3, 22)),
    current: true,
    keypoints: [
      'Advised clients on technical decisions and helped shape the application roadmap.',
      'Led the development of a high-priority project from scratch, meeting strict requirements and deadlines.',
      'Contributed to improving and maintaining existing codebases across multiple projects.',
      'Collaborated effectively with cross-functional teams to ensure smooth development workflows.',
    ],
    skills: ['react', 'python', 'fastapi', 'azure', 'snowflake', 'tableau'],
  },
  {
    companyName: 'Software Business Partners',
    position: 'Full-stack Developer',
    startingDate: new Date(Date.UTC(2022, 7, 22)),
    endingDate: new Date(Date.UTC(2025, 3, 15)),
    keypoints: [
      'Designed and implemented complex management systems with full-stack proficiency, showcasing deep technical knowledge and attention to detail.',
      'Led the end-to-end development of software solutions, including architecture design, MVP creation, and team management, ensuring efficient project execution and delivery.',
      'Optimized application infrastructure on cloud platforms by implementing advanced CI/CD pipelines, streamlining deployment processes, and enhancing operational efficiency.',
      'Improved code quality and maintainability by refactoring legacy code, adhering to clean coding principles, and systematically increasing test coverage with robust unit testing practices.',
    ],
    skills: ['vue', 'angular', 'dotnet', 'express', 'aws', 'azure'],
  },
]

export type ProjectRecord = {
  index: number
  title: string
  description: string
  technologies: string[]
  linkCode: string
  privateRepository: boolean
}

export const projects: ProjectRecord[] = [
  {
    index: 1,
    technologies: ['vue', 'nestjs', 'socket.io'],
    title: 'Runnie',
    description:
      'An app that helps you run end-to-end (E2E) tests for websites by automating user actions and checking that everything works as expected from start to finish. It makes sure your site behaves correctly in real-world scenarios.',
    linkCode: 'https://github.com/bogdanc64/runnie',
    privateRepository: true,
  },
  {
    index: 2,
    technologies: ['react', 'tailwind', 'nextjs'],
    title: 'Personal portfolio',
    description:
      'A fast and responsive personal website built with React, Tailwind CSS, and Next.js, designed to present my work and background clearly.',
    linkCode: 'https://github.com/bogdanc64/personal_website_v3',
    privateRepository: false,
  },
]

const monthYear = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

const skillLabels: Record<string, string> = {
  typescript: 'TypeScript',
  angular: 'Angular',
  vue: 'Vue',
  nestjs: 'NestJS',
  go: 'Go',
  jest: 'Jest',
  aws: 'AWS',
  azure: 'Azure',
  tailwind: 'Tailwind',
  dotnet: '.NET',
  react: 'React',
  python: 'Python',
  fastapi: 'FastAPI',
  snowflake: 'Snowflake',
  tableau: 'Tableau',
  express: 'Express',
  'socket.io': 'Socket.IO',
  nextjs: 'Next.js',
}

export function skillLabel(id: string) {
  return skillLabels[id] ?? id
}

export function formatPeriod(startingDate: Date, endingDate?: Date) {
  const start = monthYear.format(startingDate)
  const end = endingDate ? monthYear.format(endingDate) : 'Present'
  return `${start} – ${end}`
}
