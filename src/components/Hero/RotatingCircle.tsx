import { motion } from 'framer-motion';

const RotatingCircle = () => {
  return (
    <motion.div
      className="absolute w-[120%] h-[120%] border-2 border-[var(--color-primary)] rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  );
};

export default RotatingCircle;