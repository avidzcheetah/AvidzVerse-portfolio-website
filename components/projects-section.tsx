'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Mew – Real-time AI Chatbot',
      category: 'AI Innovation',
      period: 'Dec 2024 - Feb 2025',
      description: 'State-of-the-art chatbot integrating React, OpenAI\'s ChatGPT, and Google\'s Gemini AI with real-time message streaming, auto-resizable text fields, markdown support, and dark mode.',
      technologies: ['React', 'ChatGPT', 'Gemini AI', 'JavaScript', 'CSS', 'HTML'],
      github: 'https://github.com/avidzcheetah/mew',
      demo: 'https://mew-chatbot.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Liver Disease Prediction Using PyCaret',
      category: 'AI Innovation',
      period: 'Mar 2025',
      description: 'ML model processing 554 patient records with comprehensive data preprocessing, demonstrating AI application in healthcare for early disease detection.',
      technologies: ['Python', 'PyCaret', 'Pandas', 'Machine Learning', 'Streamlit'],
      github: 'https://github.com/avidzcheetah/liver-disease-prediction',
      demo: 'https://liver-disease-ml.streamlit.app',
      featured: true,
    },
    {
      id: 3,
      title: 'Scalable Network Simulation',
      category: 'Cybersecurity',
      period: 'Ongoing',
      description: 'Designed secure network infrastructure for multi-department university campus with VLAN segmentation, achieving 30% scalability capacity for future growth.',
      technologies: ['Cisco Packet Tracer', 'VLANs', 'Subnetting', 'Layer 3 Switching', 'QoS'],
      github: 'https://github.com/avidzcheetah/network-simulation',
      demo: 'https://youtube.com/watch?v=network-demo',
      featured: true,
    },
    {
      id: 4,
      title: 'Bash Web Crawler & Vulnerability Checker',
      category: 'Cybersecurity',
      period: 'Oct 2024',
      description: 'Advanced security tool for webpage content extraction and vulnerability assessment with security checks for insecure forms, external scripts, and CSP policies.',
      technologies: ['Bash', 'HTML Parsing', 'Web Security', 'Vulnerability Assessment'],
      github: 'https://github.com/avidzcheetah/bash-web-crawler',
      demo: null,
      featured: false,
    },
    {
      id: 5,
      title: 'mFlix – Movie Dashboard',
      category: 'Full-Stack',
      period: 'Nov 2024 - Dec 2024',
      description: 'Complete movie management platform with CRUD operations via Server Actions, responsive design with Tailwind CSS, and MongoDB integration.',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Vercel'],
      github: 'https://github.com/avidzcheetah/mflix',
      demo: 'https://mflix-dashboard.vercel.app',
      featured: true,
    },
    {
      id: 6,
      title: 'Fast Line Follower – Dextron',
      category: 'Robotics',
      period: 'Competition Project',
      description: 'Autonomous robot developed by Team MeowBotz for competition with Arduino Nano-powered system and 5-IR sensor integration.',
      technologies: ['C++', 'Arduino', 'Embedded Systems', 'Sensor Integration'],
      github: 'https://github.com/avidzcheetah/dextron-robot',
      demo: null,
      featured: false,
    },
    {
      id: 7,
      title: 'Python Snake Game',
      category: 'Full-Stack',
      period: 'Learning Project',
      description: 'Classic gaming implementation demonstrating programming fundamentals and game development concepts.',
      technologies: ['Python', 'Pygame', 'Game Development'],
      github: 'https://github.com/avidzcheetah/python-snake',
      demo: null,
      featured: false,
    },
    {
      id: 8,
      title: 'Instagram Secure Password Tool',
      category: 'Cybersecurity',
      period: 'Security Project',
      description: 'Enhanced security tool forked and improved from open source with advanced password encryption and security features.',
      technologies: ['Python', 'Cryptography', 'Security'],
      github: 'https://github.com/avidzcheetah/instagram-password-tool',
      demo: null,
      featured: false,
    },
  ];

  const categories = ['All', 'AI Innovation', 'Cybersecurity', 'Full-Stack', 'Robotics'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative projects spanning AI, cybersecurity, full-stack development, 
            and robotics, demonstrating technical excellence and practical problem-solving.
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="featured">Featured Projects</TabsTrigger>
            <TabsTrigger value="all">All Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="featured" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="mb-2">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      )}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {project.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="all" className="space-y-8">
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="mb-2">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      )}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {project.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}