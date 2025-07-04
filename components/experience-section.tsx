'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Users, Trophy, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const leadership = [
    {
      title: 'Executive Director',
      organization: 'Nalanda Global Institute of Education (PVT) Ltd.',
      period: 'Mar 2025 - Present',
      type: 'Executive Leadership',
      description: 'Leading strategic initiatives in educational technology and institutional development.',
    },
    {
      title: 'Social Media Manager',
      organization: 'Vetgrow (PVT) Ltd.',
      period: 'Oct 2024 - Present',
      type: 'Executive Leadership',
      description: 'Managing digital marketing strategies and brand presence across multiple platforms.',
    },
    {
      title: 'Vice Chairman',
      organization: 'IEEE RAS Student Branch Chapter, University of Jaffna',
      period: 'Mar 2025 - Present',
      type: 'IEEE Leadership',
      description: 'Leading robotics and automation initiatives, organizing technical workshops and competitions.',
    },
    {
      title: 'Vice Chairman',
      organization: 'IEEE CIS Student Branch Chapter, University of Jaffna',
      period: 'Feb 2025 - Present',
      type: 'IEEE Leadership',
      description: 'Spearheading computational intelligence projects and research collaborations.',
    },
    {
      title: 'Membership Coordinator',
      organization: 'IEEE RAS Student Branch Chapter',
      period: 'Feb 2024 - Mar 2025',
      type: 'IEEE Leadership',
      description: 'Managed membership growth and engagement activities, achieving significant expansion.',
    },
    {
      title: 'Faculty Coordinator',
      organization: 'SEDS YARL, University of Jaffna',
      period: 'Apr 2024 - Present',
      type: 'Community Leadership',
      description: 'Coordinating space and engineering development activities for student community.',
    },
    {
      title: 'Student Ambassador',
      organization: 'LetsUpgrade Higher Education Community, India',
      period: 'Mar 2025',
      type: 'Community Leadership',
      description: 'Representing international educational initiatives and fostering cross-cultural collaboration.',
    },
  ];

  const achievements = [
    {
      title: 'AlgoRhythm – Champions',
      date: 'Jan 2025',
      description: 'First place in competitive programming and algorithmic problem-solving contest.',
      category: 'Competition',
    },
    {
      title: 'IEEE Regional Exemplary Student Branch Award',
      date: '2024',
      description: 'Recognition for outstanding contributions to IEEE student activities at University of Jaffna.',
      category: 'Recognition',
    },
    {
      title: 'Cloud Connect 2025 Participant',
      date: '2025',
      description: 'Participated in cloud computing conference with GDG Cloud Sri Lanka.',
      category: 'Conference',
    },
    {
      title: 'IEEEXtreme 18.0 Participant',
      date: '2024',
      description: 'Competed in the world\'s largest programming competition with Team EFacByteMinds.',
      category: 'Competition',
    },
  ];

  const executiveRoles = leadership.filter(role => role.type === 'Executive Leadership');
  const ieeeRoles = leadership.filter(role => role.type === 'IEEE Leadership');
  const communityRoles = leadership.filter(role => role.type === 'Community Leadership');

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience & Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of leadership excellence across executive positions, 
            IEEE activities, and community engagement, demonstrating strong organizational and strategic skills.
          </p>
        </div>

        <Tabs defaultValue="leadership" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="leadership">Leadership Roles</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="leadership" className="space-y-8">
            {/* Executive Leadership */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold">Executive Leadership</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {executiveRoles.map((role, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{role.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="font-medium">{role.organization}</div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-3 w-3" />
                          {role.period}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* IEEE Leadership */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-semibold">IEEE Leadership Excellence</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {ieeeRoles.map((role, index) => (
                  <Card key={index} className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{role.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="font-medium">{role.organization}</div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-3 w-3" />
                          {role.period}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Community Leadership */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold">Community Leadership</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {communityRoles.map((role, index) => (
                  <Card key={index} className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{role.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="font-medium">{role.organization}</div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-3 w-3" />
                          {role.period}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="h-6 w-6 text-yellow-600" />
              <h3 className="text-xl font-semibold">Recognition & Achievements</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="mb-2">
                        {achievement.category}
                      </Badge>
                      <Trophy className="h-4 w-4 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {achievement.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
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