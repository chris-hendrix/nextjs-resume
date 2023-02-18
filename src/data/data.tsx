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
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
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
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
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
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
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
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  }
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
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
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
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
