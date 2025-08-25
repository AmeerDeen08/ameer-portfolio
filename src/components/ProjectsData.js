import Img from '../assets/images/bgg.png';
import Notes from '../assets/images/notes.png'
import Ecommerce from '../assets/images/ecommerce.png'

const projects = [
  {
    id: 'project-1',
    title: 'Online Notes Sharing System',
    description: `A mobile app that allows students and teachers to upload, share, and download categorized notes with a secure file-sharing system.`,
    technologies: ['React-Native', 'TailwindCSS', 'PostgresSQL'],
    github: '',
    live: '',
    thumbnail: Notes,
    status: 'completed',
    completionDate: 'July 2024',
    features: [
      'Upload and share categorized notes',
      'Secure file-sharing system',
      'User-friendly interface for teachers and students',
    ],
    challenges: [
      'Implementing secure file upload/download',
      'Managing note categorization efficiently',
    ],
    learnings: [
      'File handling with security best practices',
      'Database optimization for structured queries',
    ]
  },
  {
    id: 'project-2',
    title: 'E-commerce Platform (Appampatt Sweets)',
    description: `An e-commerce platform for Appampatt Sweets with product listings, authentication, payments, and an admin panel for order management.`,
    technologies: ['ReactJS', 'Bootstrap'],
    github: '',
    live: '',
    thumbnail: Ecommerce,
    status: 'completed',
    completionDate: 'September 2024',
    features: [
      'Product listing with categories',
      'Cart and order management',
      'Admin panel for managing orders',
    ],
    challenges: [
      'Creating a scalable backend',
      'Integrating payment flow securely',
    ],
    learnings: [
      'Full-stack integration with React and backend',
      'Responsive UI design for e-commerce',
    ]
  },
  {
    id: 'project-3',
    title: 'BlogTure - Blogging Platform',
    description: `A modern blogging platform where users can write, edit, and share blogs with real-time collaboration and community features.`,
    technologies: ['Django', 'React.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/ameerdeen/task-manager',
    live: 'https://task-manager-ad.netlify.app',
    thumbnail: Img,
    status: 'in-progress',
    expectedCompletion: 'December 2024',
    progress: 60,
    completedFeatures: [
      'User authentication system',
      'Basic blog creation and editing',
      'Community interaction features',
    ],
    upcomingFeatures: [
      'Real-time collaboration',
      'Advanced blog editor',
      'Analytics for writers',
    ],
    challenges: [
      'Handling concurrent blog edits',
      'Building efficient real-time collaboration tools',
    ]
  }
];

export default projects;
