/* eslint-disable object-curly-spacing */
import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import portfolioImage1 from '../images/portfolio/1-chat.jpg';
import portfolioImage2 from '../images/portfolio/2-baseball.jpg';
import portfolioImage3 from '../images/portfolio/3-nuclear.jpg';
import portfolioImage4 from '../images/portfolio/4-earthquake.jpg';
import portfolioImage5 from '../images/portfolio/5-mp3.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume - Chris Hendrix',
  description: "Chris Hendrix' software engineering resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Chris Hendrix.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a New York based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Emissary.io</strong> helping connect people with game-changing account intelligence
        from world-class leaders.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Baseball</strong> is my lifelong passion, but I also enjoy&nbsp;
        <strong className="text-stone-100">strength training</strong> and <strong className="text-stone-100">DJing</strong>&nbsp;
        some tunes in my bedroom.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://github.com/chris-hendrix/nextjs-resume/raw/main/Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a Structural/Seismic Engineering graduate from MIT, I always loved building things. In my first life, while providing seismic 
  risk consulting in the nuclear power industry, I started gravitated toward more towards software-oriented projects, and eventually found my love 
  for  building things on the web.`,
  aboutItems: [
    { label: 'Location', text: 'New York, NY', Icon: MapIcon },
    { label: 'Age', text: '33', Icon: CalendarIcon },
    { label: 'Citizenship', text: 'United States', Icon: FlagIcon },
    { label: 'Interests', text: 'Baseball, strength training, DJing', Icon: SparklesIcon },
    { label: 'Education', text: 'MIT', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Emissary.io', Icon: OfficeBuildingIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: 'Python, Javascript, Typescript, Java, SQL',
  },
  {
    name: 'Technologies',
    skills: 'Node, Express, flask, React, Postgres, MySQL, MongoDB, Redux',
  },
  {
    name: 'Tools',
    skills: 'GCP, Docker, Github Actions, Elasticsearch, CI/CD, Linux, WSL2',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2022 - Present',
    location: 'Emissary.io',
    title: 'Senior Fullstack Engineer',
    content: `Emissary.io provides a platform for tech sellers to find game-changing account intelligence 
      from world-class leaders. At Emissary.io, I`,
    list: [
      `Lead revenue-impacting features within the main app, including user search, library search, and email 
      notifications by designing the new MySQL schema, flask endpoints, Elasticsearch indexing, sqlalchemy queries, 
      pytest unit tests, and React components`,
      `Planned feature epics by providing user stories based on PRDs as part of an agile development workflow, 
      enabling the swift development of new features by the engineering team`,
      `Lead the upgrade of MySQL in our local Docker environment, as well as our GCP production environment, 
      resulting in improved query performance`,
      `Tasked with mentoring and onboarding a new engineer shortly after I joined Emissary, enabling him to produce 
      meaningful PRs within a month `
    ]
  },
  {
    date: 'July 2013 - Jan 2022',
    location: 'Jensen Hughes (acquired Stevenson & Associates in 2017)',
    title: 'Engineer',
    content: `Jensen Hughes provides engineering consulting that makes our world safe, secure, and resilient. 
      While at Jensen Hughes, I`,
    list: [
      `Managed a team of 4-6 engineers and technical experts, architected a relational database, and developed 
      meaningful trends as a part of EPRI funded research on nuclear power risk assessments`,
      `Generalized the existing Python/TensorFlow codebase so it could be used for different applications for 
      a project designed to use NLP to streamline the processing of Nuclear Power Plant condition reports`,
      `Designed the the object structure, database mapper for multiple desktop applications that are currently 
      being used by nuclear power plants for seismic risk assessments`,
      `Awarded by management for developing tools that automate proposal generation and track project budgets`,
      `Performed non-software work including seismic risk assessments, blast design, proposals writing, project 
      management, and leading internal BD initiatives`,
    ]
  },
  {
    date: 'Aug 2012 - May 2023',
    location: 'MIT',
    title: 'Teaching Assistant, Java',
    content: `As a graduate student at MIT, I`,
    list: [
      `Taught weekly recitations going over lecture topics such as data structures, algorithms, and OOP`,
      `Helped administer the course by writing test questions and homework solutions`,
    ]
  },
];

export const education: TimelineItem[] = [
  {
    date: '2012 - 2013',
    location: 'MIT',
    title: 'M.Eng., Seismic Engineering',
  },
  {
    date: '2008 - 2012',
    location: 'MIT',
    title: 'B.S., Civil Engineering',
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Next.js Message App',
    description: 'A "boilerplate" message app with full user authentication.',
    url: 'https://boilerplate-nextjs-eight.vercel.app/',
    image: portfolioImage1,
  },
  {
    title: 'Fantasy Baseball App',
    description: 'A custom fantasy baseball webapp built with React and Express.',
    url: 'https://mit-fantasy-baseball.onrender.com/',
    image: portfolioImage2,
  },
  {
    title: 'AI Tool for Nuclear Power Plant Maintenance',
    description: 'Tool that uses NLP to streamline nuclear power plant condition reporting.',
    url: 'https://www.jensenhughes.com/digital-solutions/dataadvisr-ai-process-improvement',
    image: portfolioImage3,
  },
  {
    title: 'EPRI Seismic Research',
    description: `Publication outlining a data based approach to performing nuclear seismic risk assessments. 
    Image by macrovector on Freepik`,
    url: 'https://www.epri.com/research/programs/061177/results/3002020572',
    image: portfolioImage4,
  },
  {
    title: 'MP3 Organizer',
    description: `Simple .NET desktop app that can tag and organize your mp3 files in a datagrid view.`,
    url: 'https://www.epri.com/research/programs/061177/results/3002020572',
    image: portfolioImage5,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'cmhendrix@alum.mit.edu',
      href: 'mailto:cmhendrix@alum.mit.edu',
    },
    {
      type: ContactType.Location,
      text: 'New York, NY',
      href: 'https://goo.gl/maps/LHKagmdDMgDJ7Zhh7',
    },
    {
      type: ContactType.LinkedIn,
      text: '/in/chris-hendrix',
      href: 'https://www.linkedin.com/in/chris-hendrix/',
    },
    {
      type: ContactType.Github,
      text: 'chris-hendrix',
      href: 'https://github.com/chris-hendrix',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/chris-hendrix' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/chris-hendrix/' },
];
