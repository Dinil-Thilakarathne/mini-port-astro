export const ProfileData = {
  name: 'Dinil Thilakrathne',
  slug: 'I code creatively—and sometimes design too!',
};

export const AboutData = {
  title: '#A Little About Me',
  description:
    'I’m a CS undergrad at UCSC who loves building creative websites. I also dive into UI design occasionally. And yes—music is my constant coding companion!',
};

// Define the type for a single project item
type Project = {
  title: string;
  description: string;
  link?: string;
  itemList: string[];
};

// Sample data list
export const projectData: Project[] = [
  {
    title: 'Sona UI',
    description:
      'An open-source UI library built with React, Tailwind CSS, and Motion, focused on delivering beautifully animated and accessible components.',
    link: 'https://sona-ui.vercel.app',
    itemList: [
      'Gained experience in building scalable projects using Next.js',
      'Integrated MDX for dynamic and maintainable documentation',
      'Improved skills in writing clean, efficient React code',
      'Explored best practices for large project architecture',
    ],
  },
  {
    title: 'Hackathon Team Dashboard (still cooking!!)',
    description:
      'A web app to manage and showcase hackathon team details, built with Next.js and MongoDB.',
    itemList: [
      'Integrated MongoDB with Next.js App Router',
      'Implemented dynamic routing and data fetching',
      'Practiced CRUD operations',
      'Improved TypeScript type safety',
    ],
  },
  {
    title: 'Sona Code Demos',
    description:
      'A personal showcase of modern front-end UI experiments, built to highlight skills in creative web development through animated layouts and cutting-edge design patterns.',
    link: 'https://sonaui.vercel.app/private', // Update with actual demo URL if available
    itemList: [
      'Practiced creating modern, responsive layout structures',
      'Explored advanced animation techniques using Framer Motion',
      'Experimented with creative UI patterns and micro-interactions',
      'Enhanced understanding of performance-conscious front-end design',
    ],
  },
];

type Collaborator = {
  name: string;
  link?: string; // Optional: GitHub, LinkedIn, portfolio, etc.
};

type Work = {
  title: string;
  description: string;
  itemList: string[]; // What you did/learned
  collaborators?: Collaborator[]; // Optional list of people you worked with
  link?: string; // Live site or GitHub, optional
};

export const worksData: Work[] = [
  {
    title: 'IntelliHack 5.0',
    description: 'A Machine Learning Hackathon organized by IEEE CS Chapter of UCSC.',
    itemList: [
      'Working on a production-level website with a team',
      'Writing structured and readable code with GitHub (commits, PRs)',
      'Using Next.js API routes and fetching data from an API',
      'Handling real-world registration forms with validation',
    ],
    collaborators: [
      {
        name: 'Kaviru Hapuarachchi',
        link: 'https://www.linkedin.com/in/kaviruhapuarachchi/',
      },
      {
        name: 'Wendt Edmund',
        link: 'https://www.linkedin.com/in/wvedmund/',
      },
    ],
    link: 'https://intellihack.ieeecsucsc.org/',
  },
];


export const SocialsData = [
    {
        name: 'GitHub',
        link: "https://github.com/Dinil-Thilakarathne",
        iconName: "Github/white"
    },
    {
        name: 'LinkedIn',
        link: "https://www.linkedin.com/in/dinil-thilakarathne/",
        iconName: "LinkedIN/white"
    },
    {
        name: 'Instagram',
        link: "https://www.instagram.com/sona_code/",
        iconName: "Instagram/white"
    },
]