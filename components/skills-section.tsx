'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Shield, Brain, Cpu } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: <Code className="h-6 w-6" />,
      color: 'text-blue-600',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 80 },
      ],
      technologies: ['Git', 'Visual Studio Code', 'Android Studio', 'Linux', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      title: 'Cybersecurity Expertise',
      icon: <Shield className="h-6 w-6" />,
      color: 'text-red-600',
      skills: [
        { name: 'Vulnerability Analysis', level: 85 },
        { name: 'Penetration Testing', level: 80 },
        { name: 'Network Security', level: 88 },
        { name: 'Web Security', level: 82 },
        { name: 'Bash Scripting', level: 90 },
        { name: 'VLAN Implementation', level: 85 },
      ],
      technologies: ['Subnetting', 'QoS Configuration', 'Security Auditing', 'Incident Response'],
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="h-6 w-6" />,
      color: 'text-purple-600',
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'AI Chatbots', level: 85 },
        { name: 'LLM Integration', level: 78 },
        { name: 'Data Analysis', level: 82 },
        { name: 'PyCaret', level: 75 },
        { name: 'Streamlit', level: 80 },
      ],
      technologies: ['ChatGPT', 'Gemini AI', 'Pandas', 'TensorFlow', 'PyTorch'],
    },
    {
      title: 'Embedded Systems',
      icon: <Cpu className="h-6 w-6" />,
      color: 'text-green-600',
      skills: [
        { name: 'Arduino Programming', level: 88 },
        { name: 'IoT Development', level: 82 },
        { name: 'Automation', level: 85 },
        { name: 'Microcontrollers', level: 80 },
        { name: 'Sensor Integration', level: 85 },
        { name: 'Circuit Design', level: 75 },
      ],
      technologies: ['ESP32', 'Raspberry Pi', 'Bluetooth', 'WiFi', 'Serial Communication'],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning multiple domains of technology, 
            from cybersecurity to artificial intelligence and embedded systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`${category.color}`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
                <CardDescription>
                  Core competencies and practical experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Skills with Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}