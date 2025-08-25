import Img from '../assets/images/bgg.png';

const projects = [
  {
    id: 'project-1',
    title: 'Online Notes Sharing System',
    thumbnail: Img,
    technologies: ['React-Native', 'TailwindCSS', 'PostgresSQL'],
    shortDescription: 'A mobile app that allows students and teachers to upload, share, and download categorized notes with a secure file-sharing system.',
    github: '',
    live: '',
    status: 'completed'
  },
  {
    id: 'project-2',
    title: 'E-commerce Platform (Appampatt Sweets)',
    thumbnail: Img,
    technologies: ['ReactJS', 'Bootstrap'],
    shortDescription: 'An e-commerce platform for Appampatt Sweets with product listings, authentication, payments, and an admin panel for order management.',
    github: '',
    live: '',
    status: 'completed'
  },
  {
    id: 'project-3',
    title: 'BlogTure - Blogging Platform',
    thumbnail: Img,
    technologies: ['Django', 'React.js', 'Node.js', 'PostgreSQL'],
    shortDescription: 'A modern blogging platform where users can write, edit, and share blogs with real-time collaboration and community features.',
    github: 'https://github.com/ameerdeen/task-manager',
    live: 'https://task-manager-ad.netlify.app',
    status: 'in-progress'
  }
];

export default projects;
