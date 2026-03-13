import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

async function main() {
  console.log('Seeding Academic Section...');
  const academicData = {
    degrees_json: [
      {
        title: 'BSc. Engineering (Hons.) in Computer Engineering',
        institution: 'University of Jaffna',
        period: 'Feb 2023 - Present',
        status: 'In Progress',
        color: 'energy-blue',
        details: [
          'Specializing in Software Engineering and Hardware Integration.',
          'Core coursework: Data Structures, Algorithms, Computer Architecture.',
          'Active member of the University Cyber Security Society.'
        ]
      },
      {
        title: 'BSc. Information Technology and Cyber Security',
        institution: 'PSB University Cambodia',
        period: 'Sep 2023 - Feb 2026',
        status: 'In Progress',
        color: 'energy-violet',
        details: [
          'Focus on Network Security, Cryptography, and Ethical Hacking.',
          'Practical labs simulating real-world cyber attack and defense scenarios.',
          'Dual-degree concurrent enrollment.'
        ]
      }
    ],
    diplomas_json: [
      {
        title: 'Cyber Threat Intelligence 101',
        institution: 'arcX',
        period: 'Certification',
        status: 'Valid',
        color: 'energy-teal'
      },
      {
        title: 'Ethical Hacking Essentials (EHE)',
        institution: 'EC-Council',
        period: 'Certification',
        status: 'Valid',
        color: 'energy-gold'
      }
    ]
  };
  
  await supabase.from('academic_section').insert([academicData]);

  console.log('Seeding Skills Section...');
  const skillsData = {
    categories_json: [
      {
        domain: 'Cybersecurity & Web',
        iconName: 'Shield',
        color: 'border-energy-blue',
        textColor: 'text-energy-blue',
        nodes: [
          { name: 'Vulnerability Analysis', level: 85 },
          { name: 'Web Security', level: 88 },
          { name: 'Penetration Testing', level: 80 },
        ]
      },
      {
        domain: 'Machine Learning & AI',
        iconName: 'Network',
        color: 'border-energy-violet',
        textColor: 'text-energy-violet',
        nodes: [
          { name: 'Large Language Models (LLMs)', level: 85 },
          { name: 'AI Chatbots', level: 90 },
          { name: 'ChatGPT / Gemini AI', level: 88 },
        ]
      },
      {
        domain: 'Programming Languages',
        iconName: 'Terminal',
        color: 'border-energy-teal',
        textColor: 'text-energy-teal',
        nodes: [
          { name: 'Java / Python', level: 90 },
          { name: 'JavaScript / Bash', level: 85 },
          { name: 'C++', level: 80 },
        ]
      },
      {
        domain: 'Web Development',
        iconName: 'Code2',
        color: 'border-energy-gold',
        textColor: 'text-energy-gold',
        nodes: [
          { name: 'React / Next.js', level: 85 },
          { name: 'HTML / CSS / Tailwind', level: 95 },
          { name: 'TypeScript / JavaScript', level: 88 }
        ]
      },
      {
        domain: 'Embedded Systems & IoT',
        iconName: 'Cpu',
        color: 'border-slate-400',
        textColor: 'text-slate-400',
        nodes: [
          { name: 'Arduino Prog.', level: 88 },
          { name: 'Automation', level: 82 },
          { name: 'Microcontrollers', level: 80 },
        ]
      },
      {
        domain: 'Tools & Frameworks',
        iconName: 'Terminal',
        color: 'border-energy-blue',
        textColor: 'text-energy-blue',
        nodes: [
          { name: 'Git / VS Code / Android Studio', level: 90 },
          { name: 'Linux', level: 85 },
        ]
      }
    ]
  };
  
  await supabase.from('skills_section').insert([skillsData]);

  console.log('Seeding Projects Section...');
  const projectsData = {
    projects_json: [
        {
          title: 'JamHub',
          category: ['web'],
          description: 'Real-time Collaborative Music Platform.',
          longDescription: 'Developed a web platform that enables real-time collaborative music sessions where multiple users can create or join jam rooms and play virtual instruments together with low latency audio interaction using WebAudio, WebSockets, TypeScript, and modern web technologies.',
          techStack: ['TypeScript', 'WebAudio', 'WebSockets', 'React'],
          githubUrl: 'https://github.com/avidzcheetah/JamHub',
          liveUrl: 'https://jamhub.vercel.app',
          status: 'July 2025 - Present',
          color: 'energy-blue'
        },
        {
          title: 'ML Intrusion Detection System',
          category: ['ai', 'cyber'],
          description: 'Real-time Machine Learning Intrusion Detection System.',
          longDescription: 'Developed a real-time network intrusion detection system that combines Supervised (Random Forest) and Unsupervised (Autoencoder) machine learning to detect both known and zero-day attacks. Features live packet capture, real-time classification, and explainable AI visualization.',
          techStack: ['Python', 'Random Forest', 'Autoencoder', 'Network Security'],
          githubUrl: 'https://github.com/avidzcheetah',
          liveUrl: '',
          status: 'Dec 2025 - Feb 2026',
          color: 'energy-violet'
        },
        {
          title: 'EngNext',
          category: ['web'],
          description: 'Career Platform connecting engineering graduates with companies.',
          longDescription: 'Developed a platform connecting engineering graduates with companies, enabling profile creation, job applications, and recruitment management through student, company, and admin dashboards for streamlined hiring.',
          techStack: ['Next.js', 'React', 'TypeScript', 'Node.js'],
          githubUrl: 'https://github.com/avidzcheetah',
          liveUrl: '',
          status: 'Aug 2025 - Oct 2026',
          color: 'energy-teal'
        },
        {
          title: 'AvidzVerse Portfolio',
          category: ['web'],
          description: 'Modern personal portfolio website.',
          longDescription: 'Developed a modern personal portfolio website using React, TypeScript, HTML, and CSS to present bio, skills, and project showcase with a responsive, mobile friendly interface, fast load times, an integrated contact form, and direct links to GitHub, LinkedIn, and other social profiles.',
          techStack: ['React', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
          githubUrl: 'https://github.com/avidzcheetah/AvidzVerse-portfolio-website',
          liveUrl: 'https://avidzverse.vercel.app',
          status: 'Jun 2025',
          color: 'energy-blue'
        },
        {
          title: 'Lab Rescheduling System',
          category: ['web'],
          description: 'Web-based lab rescheduling system for the Faculty of Engineering.',
          longDescription: 'Developed a web-based lab rescheduling system for the Faculty of Engineering, University of Jaffna with request and approval workflows, automated email notifications, real time tracking, attendance logging, and role-based dashboards.',
          techStack: ['React.js', 'Next.js', 'PHP', 'MySQL', 'Tailwind CSS', 'EmailJS'],
          githubUrl: 'https://github.com/avidzcheetah',
          liveUrl: '',
          status: 'Jun 2025',
          color: 'energy-gold'
        },
        {
          title: 'Mew',
          category: ['ai'],
          description: 'Real-time AI Chatbot integrating OpenAI and Gemini.',
          longDescription: 'Developed Mew, a real time AI chatbot built with React that integrates OpenAI ChatGPT and Google Gemini AI, with message streaming, auto resizable input, auto scrolling, Markdown formatting, dark mode, and loading indicators.',
          techStack: ['React', 'JavaScript', 'CSS', 'OpenAI API', 'Gemini API'],
          githubUrl: 'https://github.com/avidzcheetah',
          liveUrl: 'https://mew.vercel.app',
          status: 'Nov 2024 - Dec 2024',
          color: 'energy-violet'
        },
        {
          title: 'Crawler',
          category: ['cyber'],
          description: 'Bash Web Crawler and Vulnerability Checker.',
          longDescription: 'Developed a Bash script to crawl webpages, extract key content such as headings, paragraphs, and links, and detect security issues including insecure forms, external script loading, and missing Content Security Policies.',
          techStack: ['Bash', 'Linux', 'Web Security'],
          githubUrl: 'https://github.com/avidzcheetah',
          liveUrl: '',
          status: 'Oct 2024',
          color: 'energy-teal'
        },
        {
          title: 'RepoSpector',
          category: ['cyber'],
          description: 'GitHub Repository Analysis Tool.',
          longDescription: 'Developed a Python based tool using the GitHub API to analyze repositories by reviewing documentation, open issues, pull requests, dependencies, security, and licensing, with automated issue creation for critical problems.',
          techStack: ['Python', 'GitHub API', 'JSON', 'Automation'],
          githubUrl: 'https://github.com/avidzcheetah',
          liveUrl: '',
          status: 'Dec 2024',
          color: 'energy-gold'
        }
      ]
  };
  
  await supabase.from('projects_section').insert([projectsData]);

  console.log('Seeding Experience Section...');
  const expData = {
    experiences_json: [
      {
        role: 'Consultant – Associate Software Developer (On Contract)',
        company: 'Enigma Solutions (Pvt) Ltd',
        period: 'July 2025 - Present',
        points: [
          'Developing secure, highly available backend systems and APIs.',
          'Collaborating with cross-functional teams to integrate software solutions.',
          'Ensuring robust security practices across deployed applications.'
        ]
      },
      {
        role: 'Social Media Executive (Part-Time)',
        company: 'Vetgrow (Pvt) Ltd',
        period: 'Oct 2024 - Aug 2025',
        points: [
          'Managed social media presence and online strategy.',
          'Created technical content and engaged with the community.'
        ]
      }
    ],
    volunteering_json: [
      {
        role: 'Vice Chairman',
        org: 'IEEE RAS Student Branch Chapter, University of Jaffna',
        period: 'Mar 2025 – Mar 2026'
      },
      {
        role: 'Vice Chairman',
        org: 'IEEE CIS Student Branch Chapter, University of Jaffna',
        period: 'Feb 2025 – Jan 2026'
      },
      {
        role: 'Membership Coordinator',
        org: 'IEEE RAS Student Branch Chapter, University of Jaffna',
        period: 'Feb 2024 – Feb 2025'
      },
      {
        role: 'Faculty Coordinator',
        org: 'SEDS Yarl, University of Jaffna',
        period: 'Apr 2024 – Apr 2025'
      }
    ],
    awards_json: [
      {
        title: 'AlgoRhythm – Champions',
        date: 'Jan 2025 / Jun 2024',
        description: 'Secured the championship position in AlgoRhythm (Facebook).'
      }
    ]
  };

  await supabase.from('experience_section').insert([expData]);

  console.log('Database seeded successfully.');
}

main().catch(console.error);
