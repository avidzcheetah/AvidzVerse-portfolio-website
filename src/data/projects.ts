import { CircuitBoard, BookOpen, Accessibility, Bot, Car } from 'lucide-react';

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: any;
  tech: string[];
  github?: string;
  demo?: string;
  features: string[];
  challenges: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    slug: 'fast-line-follower',
    title: 'FastLineFollower for NDT Dextron',
    description: 'An autonomous line-following robot designed for the Dextron Competition, featuring precise line tracking, PID control, and high-speed navigation capabilities.',
    longDescription: `The FastLineFollower project represents a significant advancement in autonomous robotics, specifically designed for the NDT Dextron Competition. This innovative robot showcases the perfect blend of hardware precision and software intelligence.

Key Achievements:
• Achieved sub-second response times in line detection and course correction
• Implemented advanced PID control algorithms for smooth navigation
• Developed custom PCB design for optimal component integration
• Created 3D-printed chassis optimized for weight and stability

The project demonstrates expertise in embedded systems programming, control theory, and mechanical design while pushing the boundaries of what's possible in autonomous navigation.`,
    icon: Car,
    tech: ['Arduino', 'Robotics', 'PID Control', '3D Printing', 'PCB Design'],
    github: 'https://github.com/avidzcheetah/FastLineFollower-Dextron',
    demo: 'https://youtube.com/watch?v=demo',
    features: [
      'High-precision line detection using custom sensor array',
      'Advanced PID control system for smooth navigation',
      'Custom PCB design for optimal performance',
      '3D printed chassis for weight optimization',
      'Real-time telemetry and debugging system'
    ],
    challenges: [
      'Optimizing sensor readings for varying light conditions',
      'Implementing efficient PID tuning algorithms',
      'Designing compact yet effective power distribution',
      'Balancing speed with accuracy in navigation'
    ],
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800',
      'https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?w=800'
    ]
  },
  // Add other projects here...
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};