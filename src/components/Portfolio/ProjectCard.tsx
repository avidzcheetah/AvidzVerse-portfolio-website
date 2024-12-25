import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  tech: string[];
  slug: string;
}

const ProjectCard = ({ title, description, icon: Icon, tech, slug }: ProjectCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    // Open in a new tab
    window.open(`/projects/${slug}`, '_blank');
  };

  return (
    <motion.div
      className="bg-[var(--color-surface)] rounded-xl p-8 cursor-pointer"
      whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={handleClick}
    >
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-10 h-10 text-[var(--color-primary)]" />
        <h3 className="text-2xl font-semibold text-[var(--color-text)]">{title}</h3>
      </div>
      <p className="text-[var(--color-text-secondary)] mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-primary)] px-3 py-1 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;