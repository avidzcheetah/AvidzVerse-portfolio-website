import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { getProjectBySlug } from '@/data/projects';
import ImageGallery from '@/components/ProjectDetail/ImageGallery';

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const project = getProjectBySlug(slug as string);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--color-text)]">Project Not Found</h1>
          <Link href="/" className="text-[var(--color-primary)] mt-4 inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="container mx-auto px-4 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[var(--color-primary)] mb-8 hover:text-[var(--color-primary-hover)]"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          
          <div className="mb-8">
            <ImageGallery images={project.images} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-lg mb-6 whitespace-pre-line">{project.longDescription}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-primary)] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors"
                  >
                    <Github size={20} />
                    View Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[var(--color-text)] px-6 py-2 rounded-lg hover:bg-[var(--color-text)] hover:text-[var(--color-background)] transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Challenges Overcome</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)]">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;