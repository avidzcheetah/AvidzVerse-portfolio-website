import { motion } from 'framer-motion';

const RotatingCircle = () => {
  // Create dots around the circle
  const dots = Array.from({ length: 8 }).map((_, i) => {
    const rotation = (i * 360) / 8;
    return (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-[var(--color-primary)] rounded-full"
        style={{
          transform: `rotate(${rotation}deg) translateY(-105%)`,
        }}
      />
    );
  });

  // Create lines between dots
  const lines = Array.from({ length: 20 }).map((_, i) => {
    const rotation = (i * 360) / 15;
    return (
      <motion.div
        key={i}
        className="absolute h-[1px] w-8 bg-[var(--color-primary)] opacity-20"
        style={{
          transform: `rotate(${rotation}deg) translateX(50%)`,
          transformOrigin: 'left center',
        }}
      />
    );
  });

  return (
    <motion.div
      className="absolute w-full h-full"
      style={{ width: '110%', height: '110%', top: '-5%', left: '-5%' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <div className="relative w-full h-full">
        {/* Main circle */}
        <div className="absolute inset-0 border-2 border-[var(--color-primary)] rounded-full opacity-20" />
        
        {/* Dots and lines container */}
        <div className="absolute inset-0">
          {dots}
          {lines}
        </div>
      </div>
    </motion.div>
  );
};

export default RotatingCircle;