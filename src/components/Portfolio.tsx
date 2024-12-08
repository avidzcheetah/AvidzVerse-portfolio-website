import React from 'react';
import { CircuitBoard, BookOpen, Accessibility, Bot, Car } from 'lucide-react';

const projects = [
  {
    title: 'AI Chatbot (Mew)',
    description: 'A real-time chatbot integrating ChatGPT and Gemini AI for dynamic conversations.',
    icon: Bot,
    tech: ['Python', 'OpenAI API', 'Google AI'],
  },
  {
    title: 'FastLineFollower for NDT Dextron',
    description: 'An autonomous line-following robot designed for the Dextron Competition, featuring precise line tracking, PID control, and high-speed navigation capabilities.',
    icon: Car,
    tech: ['Arduino', 'Robotics', 'PID Control', '3D Printing'],
    link: 'https://github.com/avidzcheetah/FastLineFollower-Dextron'
  },
  {
    title: 'Maze-Solving Robot',
    description: 'Built using Arduino, ultrasonic sensors, and N20 motors for SLIIT Robofest 2024.',
    icon: CircuitBoard,
    tech: ['Arduino', 'C++', 'Robotics'],
  },
  {
    title: 'Electric Wheelchair Project',
    description: 'Designed for improved accessibility and mobility assistance.',
    icon: Accessibility,
    tech: ['Electronics', 'IoT', 'Arduino'],
  },
  {
    title: 'Java GUI Student Management System',
    description: 'Includes advanced features like course integration, LMS functionality, and export to Excel.',
    icon: BookOpen,
    tech: ['Java', 'MySQL', 'JavaFX'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <project.icon className="w-10 h-10 text-blue-500" />
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;