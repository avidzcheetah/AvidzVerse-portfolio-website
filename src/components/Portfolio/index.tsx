import { CircuitBoard, BookOpen, Accessibility, Bot, Car } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "FastLineFollower for NDT Dextron",
    description: "An autonomous line-following robot designed for the Dextron Competition, featuring precise line tracking, PID control, and high-speed navigation capabilities.",
    icon: Car,
    tech: ["Arduino", "Robotics", "PID Control", "3D Printing"],
    slug: "fast-line-follower"
  },
  {
    title: "Maze-Solving Robot",
    description: "Built using Arduino, ultrasonic sensors, and N20 motors for SLIIT Robofest 2024.",
    icon: CircuitBoard,
    tech: ["Arduino", "C++", "Robotics"],
    slug: "maze-solving-robot"
  },
  {
    title: "Java GUI Student Management System",
    description: "Includes advanced features like course integration, LMS functionality, and export to Excel.",
    icon: BookOpen,
    tech: ["Java", "MySQL", "JavaFX"],
    slug: "student-management-system"
  },
  {
    title: "Electric Wheelchair Project",
    description: "Designed for improved accessibility and mobility assistance.",
    icon: Accessibility,
    tech: ["Electronics", "IoT", "Arduino"],
    slug: "electric-wheelchair"
  },
  {
    title: "AI Chatbot (Mew)",
    description: "A real-time chatbot integrating ChatGPT and Gemini AI for dynamic conversations.",
    icon: Bot,
    tech: ["Python", "OpenAI API", "Google AI"],
    slug: "ai-chatbot-mew"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-[var(--color-surface)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[var(--color-text)]">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;