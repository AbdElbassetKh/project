import { Monitor, Palette, Lightbulb, Users, Code, LineChart } from 'lucide-react';

export const projects = [
  {
    id: '1',
    title: 'E-commerce Redesign',
    slug: 'ecommerce-redesign',
    excerpt: 'A complete UX overhaul for an established e-commerce platform.',
    description: 'Redesigned the entire user experience for a major e-commerce platform, resulting in a 40% increase in conversion rates and a 25% reduction in cart abandonment.',
    tags: ['UI/UX', 'E-commerce', 'Responsive Design'],
    imageUrl: 'https://images.pexels.com/photos/92905/pexels-photo-92905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    liveUrl: 'https://example.com'
  },
  {
    id: '2',
    title: 'Finance Dashboard',
    slug: 'finance-dashboard',
    excerpt: 'Interactive dashboard for personal financial management.',
    description: 'Designed and developed an intuitive financial dashboard that helps users track expenses, manage investments, and reach savings goals through data visualization.',
    tags: ['Dashboard', 'Data Visualization', 'React'],
    imageUrl: 'https://images.pexels.com/photos/3943746/pexels-photo-3943746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '3',
    title: 'Health & Fitness App',
    slug: 'health-fitness-app',
    excerpt: 'Mobile app for tracking health metrics and workout routines.',
    description: 'Crafted a comprehensive health and fitness application allowing users to track workouts, log nutrition, and monitor health metrics with an emphasis on habit formation.',
    tags: ['Mobile App', 'UI/UX', 'Health Tech'],
    imageUrl: 'https://images.pexels.com/photos/3927386/pexels-photo-3927386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    liveUrl: 'https://example.com'
  },
  {
    id: '4',
    title: 'Travel Booking Platform',
    slug: 'travel-booking-platform',
    excerpt: 'All-in-one travel booking and itinerary management system.',
    description: 'Developed a comprehensive travel booking platform that simplifies trip planning with intelligent itinerary suggestions based on user preferences and budget constraints.',
    tags: ['Web App', 'Travel', 'API Integration'],
    imageUrl: 'https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '5',
    title: 'Restaurant Ordering System',
    slug: 'restaurant-ordering-system',
    excerpt: 'Contactless ordering system for restaurants using QR codes.',
    description: 'Created a contactless ordering system that allows restaurant patrons to browse menus, place orders, and pay from their mobile devices via QR codes, increasing table turnover by 35%.',
    tags: ['QR Code', 'Mobile Web', 'Payments'],
    imageUrl: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    liveUrl: 'https://example.com'
  },
  {
    id: '6',
    title: 'Educational Platform',
    slug: 'educational-platform',
    excerpt: 'Interactive learning platform for students and educators.',
    description: 'Built an engaging educational platform featuring interactive lessons, progress tracking, and a community forum that has been adopted by over 200 schools nationally.',
    tags: ['EdTech', 'React', 'API Development'],
    imageUrl: 'https://images.pexels.com/photos/5428260/pexels-photo-5428260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
];

export const services = [
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful interfaces that delight users while meeting business objectives.',
    icon: Palette
  },
  {
    title: 'Web Development',
    description: 'Building fast, responsive websites and web applications using modern technologies.',
    icon: Code
  },
  {
    title: 'Brand Identity',
    description: 'Crafting memorable brand identities including logos, color systems, and design guidelines.',
    icon: Lightbulb
  },
  {
    title: 'User Research',
    description: 'Understanding user needs through interviews, testing, and data analysis to inform design decisions.',
    icon: Users
  },
  {
    title: 'Responsive Design',
    description: 'Designing experiences that work flawlessly across all devices and screen sizes.',
    icon: Monitor
  },
  {
    title: 'Analytics & Optimization',
    description: 'Improving conversion rates and user engagement through data-driven design improvements.',
    icon: LineChart
  }
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechVision',
    quote: 'Working with John was an absolute pleasure. He took our vague concept and transformed it into a stunning website that perfectly captures our brand identity. The attention to detail was remarkable.',
    avatarUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    name: 'David Chen',
    role: 'Startup Founder',
    company: 'Innovate Labs',
    quote: 'John delivered exceptional work on our product redesign. His ability to balance aesthetics with functionality resulted in a significant increase in user engagement and conversion rates.',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'Wireframe Solutions',
    quote: 'The website John created for us exceeded our expectations in every way. His collaborative approach and technical expertise made the entire process seamless and enjoyable.',
    avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
];

export const skills = {
  design: [
    { name: 'Figma', proficiency: 95 },
    { name: 'Adobe XD', proficiency: 90 },
    { name: 'Photoshop', proficiency: 85 },
    { name: 'Illustrator', proficiency: 80 },
    { name: 'Webflow', proficiency: 70 }
  ],
  development: [
    { name: 'HTML/CSS', proficiency: 95 },
    { name: 'JavaScript', proficiency: 90 },
    { name: 'React', proficiency: 85 },
    { name: 'TypeScript', proficiency: 80 },
    { name: 'Next.js', proficiency: 75 },
    { name: 'Node.js', proficiency: 70 }
  ],
  soft: [
    { name: 'Communication', proficiency: 90 },
    { name: 'Problem Solving', proficiency: 95 },
    { name: 'Project Management', proficiency: 85 },
    { name: 'Collaboration', proficiency: 90 },
    { name: 'Time Management', proficiency: 80 }
  ]
};

export const process = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Understanding your business, goals, and target audience to set a clear direction.'
  },
  {
    step: 2,
    title: 'Strategy',
    description: 'Developing a comprehensive plan that aligns design and functionality with business objectives.'
  },
  {
    step: 3,
    title: 'Design',
    description: 'Creating wireframes and visual designs that bring your brand to life in the digital space.'
  },
  {
    step: 4,
    title: 'Development',
    description: 'Building robust, scalable websites and applications with clean, efficient code.'
  },
  {
    step: 5,
    title: 'Testing',
    description: 'Rigorous testing across devices and browsers to ensure a flawless user experience.'
  },
  {
    step: 6,
    title: 'Launch',
    description: 'Deploying your project and providing support to ensure a smooth transition.'
  }
];