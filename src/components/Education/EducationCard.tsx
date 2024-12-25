import { motion } from 'framer-motion';

interface EducationCardProps {
  title: string;
  institution: string;
  period?: string;
  description?: string;
}

const EducationCard = ({ title, institution, period, description }: EducationCardProps) => {
  return (
    <motion.div
      className="bg-[var(--color-surface)] p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-[var(--color-text)]">{title}</h3>
      <p className="text-[var(--color-primary)] font-semibold mt-2">{institution}</p>
      {period && <p className="text-[var(--color-text-secondary)] mt-1">{period}</p>}
      {description && <p className="text-[var(--color-text)] mt-2">{description}</p>}
    </motion.div>
  );
};

export default EducationCard;