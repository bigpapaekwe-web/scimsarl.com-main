import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      rotate: 5,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <span key={index} style={{ overflow: "hidden", display: "inline-block" }}>
          <motion.span variants={child} style={{ display: "inline-block", marginRight: "0.25em" }}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
