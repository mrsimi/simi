type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Style Transfer App (half-done)',
    description:
      'Take the style in one photo and apply it to another photo using mathematics',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/dugsqtdzy/video/upload/v1743235552/Screen_Recording_2025-03-29_at_09.00.39_ln8r64.mov',
    id: 'project1',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Can a Music Database Talk Back? Building the TurnTable Chat Experiment',
    description: 'Building a ai chat for Nigeria\'s foremost music data chart company',
    link: '/blog/Can-a-Music-Database-Talk-Back-Building-the-TurnTable-chat-xperiment',
    uid: 'blog-1',
  },
  {
    title: 'Building Standup Magic: A Peek Behind the Curtain',
    description: 'We\'re building a platform to streamline project management, focusing on automated stand-up notifications',
    link: '/blog/Behind-the-scene-BuildingDoTellBoard',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/mrsimi',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/home',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/0xfatherstreet',
  },
]

export const EMAIL = 'adegokesimi@email.com'
