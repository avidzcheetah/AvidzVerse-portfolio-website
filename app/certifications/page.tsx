'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, X, Calendar, Award, ExternalLink, Search, Rocket } from 'lucide-react';
import { useTheme } from 'next-themes';
import { AmbientBackground } from '@/components/ambient-background';

interface Certificate {
  id: string;
  title: string;
  institution: string;
  date: string;
  description: string;
  category: string;
  imageUrl: string;
  skills: string[];
  credentialId?: string;
  verificationUrl?: string;
}

export default function CertificationsPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isClient, setIsClient] = useState(false);
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const { theme, systemTheme } = useTheme();
  const modalRef = useRef<HTMLDivElement>(null);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sample certificates data with converted Google Drive URLs
  const certificates: Certificate[] = [
    
    {
      id: '1',
      title: 'Diploma in Information Technology',
      institution: 'SITC Campus',
      date: '2023',
      description: 'Foundation program covering core IT concepts, programming fundamentals, and system administration.',
      category: 'Diploma',
      imageUrl: ('YOUR_GOOGLE_DRIVE_URL_HERE'), // Replace with your actual Google Drive URL
      skills: ['Programming', 'Database Management', 'Web Development', 'System Administration'],
    },
    {
      id: '2',
      title: 'Diploma in Cyber Security',
      institution: 'London School of Business and Social Sciences',
      date: '2022',
      description: 'Comprehensive cybersecurity program covering threat analysis, security protocols, and incident response.',
      category: 'Diploma',
      imageUrl: ('https://i.ibb.co/RkkP1fCC/CERTIFICATE-CSB1-Avidu-Dasun-Sankalpa-Witharana.jpg'),
      skills: ['Threat Analysis', 'Security Protocols', 'Incident Response', 'Digital Forensics'],
      verificationUrl: 'https://londonsbs.org.uk/qualification-verification/',
    },
    {
      id: '3',
      title: 'Diploma in Psychology and Counselling',
      institution: 'SITC Campus',
      date: '2024',
      description: 'Foundational study of human behavior, psychological theories, and professional counselling techniques.',
      category: 'Diploma',
      imageUrl: 'YOUR_GOOGLE_DRIVE_URL_HERE',
      skills: ['Behavioral Psychology', 'Counselling Techniques', 'Mental Health Awareness'],
    },
    {
      id: '4',
      title: 'Diploma in English',
      institution: 'SITC Campus',
      date: '2023',
      description: 'Advanced English language program focusing on professional communication, literature, and linguistic proficiency.',
      category: 'Diploma',
      imageUrl: 'YOUR_GOOGLE_DRIVE_URL_HERE',
      skills: ['Professional Communication', 'Linguistics', 'Technical Writing'],
    },
    {
      id: '5',
      title: 'Diploma in Aviation Airlines Air Transportation & Airports',
      institution: 'MTF Institute of Management, Technology and Finance',
      date: '2024',
      description: 'Specialized program covering aviation management, airport operations, and air transportation logistics.',
      category: 'Diploma',
      imageUrl: 'YOUR_GOOGLE_DRIVE_URL_HERE',
      skills: ['Aviation Management', 'Airport Operations', 'Logistics'],
    },
    {
      id: '6',
      title: 'Advanced Certificate in Information and Communication Technology',
      institution: 'BCI Campus',
      date: '2022',
      description: 'Advanced certification in ICT covering modern communication technologies and information systems.',
      category: 'Certificate',
      imageUrl: 'YOUR_GOOGLE_DRIVE_URL_HERE', // Replace with your actual Google Drive URL
      skills: ['Communication Systems', 'ICT Infrastructure', 'Network Technologies'],
      verificationUrl: 'https://www.facebook.com/BCICAMPUSLK',
    },
    {
      id: '7',
      title: 'Ethical Hacking Essentials',
      institution: 'EC Council',
      date: '2024',
      description: 'Ethical Hacking Essentials is an introductory cybersecurity course that covers ethical hacking and penetration testing fundamentals and prepares learners for a career in cybersecurity.',
      category: 'Certificate',
      imageUrl: 'https://i.ibb.co/B59qfQX5/Ethical-Hacking-Essentials.png',
      skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment'],
      verificationUrl: 'https://www.facebook.com/BCICAMPUSLK',
    },
    {
      id: '8',
      title: 'Advanced Certificate in Parapsychology',
      institution: 'NTSL Campus',
      date: '2024',
      description: 'In-depth exploration of parapsychological phenomena, research methodologies, and theoretical frameworks.',
      category: 'Certificate',
      imageUrl: 'YOUR_GOOGLE_DRIVE_URL_HERE',
      skills: ['Research Methodologies', 'Phenomenological Analysis', 'Theoretical Research'],
    },
  ];

  const categories = ['All', ...Array.from(new Set(certificates.map(cert => cert.category)))];

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleImageLoad = (id: string) => {
    setImageLoading(prev => ({ ...prev, [id]: false }));
    setImageErrors(prev => ({ ...prev, [id]: false }));
  };

  const handleImageError = (id: string) => {
    setImageLoading(prev => ({ ...prev, [id]: false }));
    setImageErrors(prev => ({ ...prev, [id]: true }));
    console.error(`Failed to load image for certificate ${id}`);
  };

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (selectedCertificate) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedCertificate]);

  // Initialize loading states
  useEffect(() => {
    const initialLoading: Record<string, boolean> = {};
    certificates.forEach(cert => {
      initialLoading[cert.id] = true;
    });
    setImageLoading(initialLoading);
  }, []);

  const backgroundStyle = {
    backgroundColor: '#0b0c10',
  };

  if (!isClient) return null;

  return (
    <>
      <style jsx>{`
        /* Cosmic Sky Background Animations */
        .cosmic-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        /* Twinkling Stars */
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .star-small {
          width: 1px;
          height: 1px;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
        }

        .star-medium {
          width: 2px;
          height: 2px;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
        }

        .star-large {
          width: 3px;
          height: 3px;
          box-shadow: 0 0 12px rgba(255, 255, 255, 1);
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* Moving Shooting Stars */
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #fff, #87ceeb, transparent);
          border-radius: 50%;
          animation: shoot 8s linear infinite;
          will-change: transform, opacity;
        }

        @keyframes shoot {
          0% {
            transform: translateX(-100px) translateY(100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-100px);
            opacity: 0;
          }
        }

        .shooting-star::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
          transform: translateX(-50px) rotate(45deg);
        }

        /* Floating Nebula Clouds */
        .nebula {
          position: absolute;
          border-radius: 50%;
          /* filter: blur(40px); */ /* Removed for performance */
          animation: float 20s ease-in-out infinite;
          opacity: ${isDark ? '0.2' : '0.1'};
          will-change: transform, opacity;
        }

        .nebula-1 {
          width: 300px;
          height: 200px;
          background: radial-gradient(ellipse at center, rgba(255, 107, 157, 0.5) 0%, rgba(196, 69, 105, 0.2) 40%, transparent 70%);
          top: 10%;
          left: 20%;
          animation-delay: 0s;
        }

        .nebula-2 {
          width: 250px;
          height: 150px;
          background: radial-gradient(ellipse at center, rgba(72, 52, 212, 0.5) 0%, rgba(104, 109, 224, 0.2) 40%, transparent 70%);
          top: 60%;
          right: 15%;
          animation-delay: -7s;
        }

        .nebula-3 {
          width: 200px;
          height: 300px;
          background: radial-gradient(ellipse at center, rgba(0, 210, 211, 0.5) 0%, rgba(1, 163, 164, 0.2) 40%, transparent 70%);
          top: 30%;
          right: 40%;
          animation-delay: -14s;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: ${isDark ? '0.3' : '0.2'};
          }
          33% { 
            transform: translateY(-30px) scale(1.1);
            opacity: ${isDark ? '0.4' : '0.3'};
          }
          66% { 
            transform: translateY(15px) scale(0.9);
            opacity: ${isDark ? '0.2' : '0.1'};
          }
        }

        /* Galaxy Spirals */
        .galaxy {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(138,92,246,0.3) 30%, transparent 70%);
          animation: rotate 60s linear infinite;
          opacity: ${isDark ? '0.6' : '0.4'};
        }

        .galaxy::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(59,130,246,0.4) 40%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .galaxy-1 {
          top: 15%;
          left: 70%;
          animation-delay: 0s;
        }

        .galaxy-2 {
          bottom: 20%;
          left: 10%;
          animation-delay: -20s;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Constellation Lines */
        .constellation {
          position: absolute;
          opacity: ${isDark ? '0.4' : '0.3'};
          animation: constellationPulse 8s ease-in-out infinite;
        }

        @keyframes constellationPulse {
          0%, 100% { opacity: ${isDark ? '0.4' : '0.3'}; }
          50% { opacity: ${isDark ? '0.7' : '0.5'}; }
        }

        .constellation-line {
          stroke: rgba(255, 255, 255, 0.6);
          stroke-width: 1;
          fill: none;
        }

        /* Planet */
        .planet {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #ff7675, #fd79a8, #6c5ce7);
          box-shadow: 0 0 20px rgba(108, 92, 231, 0.5);
          animation: orbit 120s linear infinite;
          top: 40%;
          left: 60%;
          opacity: ${isDark ? '0.8' : '0.6'};
        }

        .planet::after {
          content: '';
          position: absolute;
          top: -10px;
          left: -20px;
          right: -20px;
          bottom: -10px;
          border: 2px solid rgba(108, 92, 231, 0.3);
          border-radius: 50%;
          transform: rotateX(75deg);
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }

        /* Certificate Card Animations */
        .certificate-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(102, 252, 241, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
        }

        .certificate-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 10px 30px rgba(102, 252, 241, 0.2);
          border-color: rgba(102, 252, 241, 0.4);
          background: rgba(15, 23, 42, 0.6);
          will-change: transform;
        }

        .skill-tag {
          background: rgba(102, 252, 241, 0.05);
          color: #66fcf1;
          border: 1px solid rgba(102, 252, 241, 0.2);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Image Loading and Error States */
        .image-skeleton {
          background: linear-gradient(90deg, ${isDark ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.6)'} 25%, transparent 50%, ${isDark ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.6)'} 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .image-error {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: ${isDark ? 'rgba(71, 85, 105, 0.3)' : 'rgba(226, 232, 240, 0.6)'};
          color: ${isDark ? 'rgba(148, 163, 184, 0.8)' : 'rgba(71, 85, 105, 0.8)'};
          font-size: 0.875rem;
          text-align: center;
          padding: 1rem;
        }

        /* Modal Animations */
        .modal-overlay {
          backdrop-filter: blur(8px);
          animation: modalFadeIn 0.3s ease-out;
        }

        .modal-content {
          animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideIn {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }

        /* Skill tags */
        .skill-tag {
          background: ${isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'};
          color: ${isDark ? '#60a5fa' : '#3b82f6'};
          border: 1px solid ${isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'};
          border-radius: 999px;
          padding: 0.25em 0.75em;
          font-size: 0.875rem;
          font-weight: 500;
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
          user-select: none;
          transition: background-color 0.3s ease;
        }

        .skill-tag:hover {
          background: ${isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'};
          cursor: default;
        }
      `}</style>

      <div className="min-h-screen relative" style={backgroundStyle}>
        {/* Cosmic Sky Background */}
        <div className="cosmic-container">
          {/* Twinkling Stars */}
          {/* Twinkling Stars - Reduced count for performance */}
          {[...Array(60)].map((_, i) => {
            const starType = i % 3 === 0 ? 'star-large' : i % 2 === 0 ? 'star-medium' : 'star-small';
            return (
              <div
                key={`star-${i}`}
                className={`star ${starType}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 4}s`,
                }}
              />
            );
          })}

          {/* Shooting Stars */}
          {/* Shooting Stars - Reduced count */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`shooting-${i}`}
              className="shooting-star"
              style={{
                top: `${Math.random() * 50}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}

          {/* Nebula Clouds */}
          <div className="nebula nebula-1" />
          <div className="nebula nebula-2" />
          <div className="nebula nebula-3" />

          {/* Galaxies */}
          <div className="galaxy galaxy-1" />
          <div className="galaxy galaxy-2" />

          {/* Planet */}
          <div className="planet" />

          {/* Constellation */}
          <svg className="constellation" style={{ top: '25%', left: '15%', width: '200px', height: '150px' }}>
            <polyline
              className="constellation-line"
              points="20,20 60,40 100,30 140,60 180,50"
            />
            <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.8)" />
            <circle cx="60" cy="40" r="2" fill="rgba(255,255,255,0.8)" />
            <circle cx="100" cy="30" r="2" fill="rgba(255,255,255,0.8)" />
            <circle cx="140" cy="60" r="2" fill="rgba(255,255,255,0.8)" />
            <circle cx="180" cy="50" r="2" fill="rgba(255,255,255,0.8)" />
          </svg>

          <svg className="constellation" style={{ top: '65%', right: '25%', width: '180px', height: '120px' }}>
            <polyline
              className="constellation-line"
              points="30,30 80,20 120,50 160,40"
            />
            <circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.8)" />
            <circle cx="80" cy="20" r="2" fill="rgba(255,255,255,0.8)" />
            <circle cx="120" cy="50" r="2" fill="rgba(255,255,255,0.8)" />
            <circle cx="160" cy="40" r="2" fill="rgba(255,255,255,0.8)" />
          </svg>
        </div>

        {/* Ambient Background */}
        <AmbientBackground />

        {/* Header */}
        <div className="relative z-10 pt-24 pb-12 container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/#academic"
              className="group flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 bg-space-800/40 hover:bg-space-700/60 text-slate-300 hover:text-energy-blue backdrop-blur-sm border border-energy-blue/20 hover:border-energy-blue/50"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-display tracking-widest uppercase text-xs">Return to Command Center</span>
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-widest text-white uppercase">
              MISSION <span className="text-energy-blue text-glow">ACCOMPLISHMENTS</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-energy-blue animate-pulse" />
              <span className="text-[10px] font-display tracking-[0.4em] text-energy-blue/60 uppercase">Database Decryption Complete</span>
            </div>
            <p className="text-sm max-w-2xl mx-auto text-slate-400 font-sans leading-relaxed">
              Archive of verified academic credentials and specialized certifications obtained during active duty across various technical sectors.
            </p>
          </div>

          {/* Search and category filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-energy-blue/50"
                aria-hidden="true"
              />
              <input
                type="text"
                aria-label="Search archive"
                placeholder="Search archive..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded bg-space-800/40 border border-space-700 text-white placeholder-slate-500 focus:ring-1 focus:ring-energy-blue focus:border-energy-blue/50 transition-all font-sans"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded font-display text-[10px] tracking-widest uppercase transition-all border ${
                    selectedCategory === category
                      ? 'bg-energy-blue/20 text-energy-blue border-energy-blue/50 shadow-[0_0_15px_rgba(102,252,241,0.2)]'
                      : 'bg-space-800/40 text-slate-400 border-space-700 hover:border-slate-500'
                  }`}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-90">
            {filteredCertificates.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className={`text-6xl mb-4`} aria-hidden="true">
                  🔍
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>No certificates found</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              filteredCertificates.map((certificate, index) => (
                <article
                  key={certificate.id}
                  className={`certificate-card p-6 rounded-xl cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 transition-transform duration-300 hover:scale-[1.03] border border-white/10`}
                  onClick={() => openModal(certificate)}
                  tabIndex={0}
                  aria-labelledby={`cert-title-${certificate.id}`}
                >
                  <div className="relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 aspect-[4/3] mb-4">
                    {imageLoading[certificate.id] && !imageErrors[certificate.id] && (
                      <div className="absolute inset-0 image-skeleton" />
                    )}
                    
                    {imageErrors[certificate.id] ? (
                      <div className="absolute inset-0 image-error">
                        <div className="text-4xl mb-2">📄</div>
                        <div>Certificate Image</div>
                        <div className="text-xs mt-1 opacity-70">Failed to load</div>
                      </div>
                    ) : (
                        <Image
                          src={certificate.imageUrl}
                          alt={certificate.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          onLoad={() => handleImageLoad(certificate.id)}
                          onError={() => handleImageError(certificate.id)}
                          unoptimized
                        />
                    )}
                    
                      <span
                        className={`absolute top-2 right-2 px-3 py-1 rounded text-[8px] font-display tracking-widest uppercase backdrop-blur-md border ${
                          certificate.category === 'Degree'
                            ? 'bg-energy-blue/20 text-energy-blue border-energy-blue/40'
                            : certificate.category === 'Diploma'
                            ? 'bg-energy-violet/20 text-energy-violet border-energy-violet/40'
                            : 'bg-energy-teal/20 text-energy-teal border-energy-teal/40'
                        }`}
                      >
                        {certificate.category}
                      </span>
                  </div>

                  <h3 id={`cert-title-${certificate.id}`} className="text-lg font-bold mb-2 line-clamp-2 text-white font-display tracking-wide uppercase">
                    {certificate.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2 text-slate-300">
                    <Award className="h-4 w-4 text-energy-teal" />
                    <span className="text-xs font-display tracking-wider uppercase">{certificate.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-widest">{certificate.date}</span>
                  </div>
                  <p className="text-xs mb-4 line-clamp-2 text-slate-400 font-sans leading-relaxed">
                    {certificate.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="skill-tag px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span className="px-2 py-1 text-[8px] font-display tracking-widest text-slate-600 uppercase">
                        +{certificate.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </article>
              ))
            )}
          </div>
        </div>

        {/* Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
          >
            <div className="modal-overlay absolute inset-0 bg-black/70" onClick={closeModal} tabIndex={-1} />
            <section
              ref={modalRef}
              className="modal-content relative rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl border border-energy-blue/30 bg-space-950/95 backdrop-blur-md"
            >
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded bg-space-800 text-energy-blue hover:text-white border border-energy-blue/20 transition-all z-10"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-14">
                {/* Image Section */}
                <div className="relative rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 aspect-[4/3]">
                  {imageErrors[selectedCertificate.id] ? (
                    <div className="absolute inset-0 image-error">
                      <div className="text-6xl mb-4">📄</div>
                      <div className="text-lg">Certificate Image</div>
                      <div className="text-sm mt-2 opacity-70">Failed to load image</div>
                    </div>
                  ) : (
                    <Image 
                      src={selectedCertificate.imageUrl} 
                      alt={selectedCertificate.title} 
                      fill 
                      className="object-cover" 
                      unoptimized
                    />
                  )}
                </div>

                {/* Details Section */}
                <div className="space-y-6">
                  <span
                    className={`inline-block px-4 py-1.5 rounded text-[10px] font-display tracking-widest uppercase mb-4 border ${
                      selectedCertificate.category === 'Degree'
                        ? 'bg-energy-blue/20 text-energy-blue border-energy-blue/40'
                        : selectedCertificate.category === 'Diploma'
                        ? 'bg-energy-violet/20 text-energy-violet border-energy-violet/40'
                        : 'bg-energy-teal/20 text-energy-teal border-energy-teal/40'
                    }`}
                  >
                    {selectedCertificate.category}
                  </span>

                  <h2 id="modal-title" className="text-3xl font-bold font-display text-white tracking-wide uppercase">
                    {selectedCertificate.title}
                  </h2>

                  <div className="flex items-center gap-2 text-energy-teal mb-1">
                    <Award className="h-5 w-5" />
                    <span className="font-display tracking-widest uppercase text-sm">{selectedCertificate.institution}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 mb-6">
                    <Calendar className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-[0.2em]">{selectedCertificate.date}</span>
                  </div>

                  <div>
                    <h3 className="text-xs font-display tracking-[0.3em] text-slate-500 uppercase mb-3 border-b border-space-700 pb-2">Analysis Report</h3>
                    <p className="text-slate-300 font-sans leading-relaxed text-sm">{selectedCertificate.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-display tracking-[0.3em] text-slate-500 uppercase mb-4 border-b border-space-700 pb-2">Technical Proficiency</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(selectedCertificate.credentialId || selectedCertificate.verificationUrl) && (
                    <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Verification</h3>

                      {selectedCertificate.credentialId && (
                        <div className="mb-6">
                          <span className="text-[10px] font-display tracking-widest text-slate-600 uppercase">Archive ID:</span>
                          <p className="font-mono text-xs text-energy-blue bg-space-800/50 p-2 rounded border border-space-700 mt-2">{selectedCertificate.credentialId}</p>
                        </div>
                      )}

                      {selectedCertificate.verificationUrl && (
                        <a
                          href={selectedCertificate.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-energy-blue text-space-900 font-display tracking-widest uppercase text-xs rounded transition-all hover:bg-energy-teal shadow-[0_0_15px_rgba(102,252,241,0.3)]"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Verify Credentials
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
