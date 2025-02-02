import React from 'react';
import { Brain, Code, Shield, Users, MessageSquare, Rocket } from 'lucide-react';

const skills = [
  { icon: Code, name: 'Programming', level: 90 },
  { icon: Shield, name: 'Cybersecurity', level: 85 },
  { icon: Brain, name: 'AI & Innovation', level: 80 },
  { icon: Users, name: 'Team Leadership', level: 95 },
  { icon: MessageSquare, name: 'Communication', level: 88 },
  { icon: Rocket, name: 'Project Management', level: 85 },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-[var(--color-surface)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[var(--color-text)]">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-[var(--color-text-secondary)] mb-12 leading-relaxed">
            Hi, I'm <span className="font-semibold text-[var(--color-text)]">Avidu Dasun Sankalpa Witharana</span>, commonly known as Avidz. 
            I'm an undergraduate Engineering Student at the University of Jaffna, specializing in Computer Engineering, 
            and pursuing a BSc. in IT & Cybersecurity at PSB University. I'm also the founding chairman of the 
            Cybersecurity Students' Association of Sri Lanka, and my mission is to make cyberspace safer using AI 
            and innovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-[var(--color-background)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className="w-8 h-8 text-[var(--color-primary)]" />
                  <h3 className="text-xl font-semibold text-[var(--color-text)]">{skill.name}</h3>
                </div>
                <div className="w-full bg-[var(--color-surface)] rounded-full h-2.5">
                  <div
                    className="bg-[var(--color-primary)] h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;