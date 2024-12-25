import { motion } from 'framer-motion';
import EducationCard from './EducationCard';

const educationData = [
  {
    title: "BScEng (Hons) in Computer Engineering",
    institution: "University of Jaffna",
    period: "2023 - Present",
    description: "Undergraduate studies focusing on computer engineering and systems design."
  },
  {
    title: "BSc in IT and Cybersecurity",
    institution: "PSB University Cambodia",
    period: "2023 - Present",
    description: "Concurrent degree program specializing in IT security and cyber defense."
  },
  {
    title: "Diploma in Information Technology",
    institution: "SITC Campus",
    period: "2023"
  },
  {
    title: "Diploma in Cyber Security",
    institution: "London School of Business & Social sciences",
    period: "2022"
  },
  {
    title: "Diploma in Psychology and Counseling",
    institution: "SITC Campus",
    period: "2022"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[var(--color-background)]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-[var(--color-text)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;