import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animated Background Gradient
export const AnimatedGradientBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          background: [
            "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            "linear-gradient(45deg, #8b5cf6, #ec4899)",
            "linear-gradient(45deg, #ec4899, #3b82f6)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="w-full h-full opacity-10"
      />
    </div>
  );
};

// Floating Cards Animation
export const FloatingCard = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Pulse Animation
export const PulseElement = ({ children, className = "" }) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Rotating Icon
export const RotatingIcon = ({ children, className = "" }) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Shimmer Effect
export const ShimmerEffect = ({ className = "" }) => {
  return (
    <motion.div
      animate={{
        backgroundPosition: ["200% center", "-200% center"],
      }}
      transition={{ duration: 3, repeat: Infinity }}
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        backgroundSize: "200% 100%",
      }}
      className={className}
    />
  );
};

// Staggered List Animation
export const StaggeredList = ({ items, children }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.div key={index} variants={itemVariants}>
          {children(item, index)}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Number Counter Animation
export const CounterAnimation = ({ end, duration = 2, className = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span className={className}>{count}</span>;
};

// Slide In Animation
export const SlideInElement = ({
  children,
  direction = "left",
  delay = 0,
  className = "",
}) => {
  const directionVariants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -100, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
  };

  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hover Scale Animation
export const HoverScaleElement = ({ children, scale = 1.05, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Morphing Shape
export const MorphingShape = ({ className = "" }) => {
  return (
    <motion.div
      animate={{
        borderRadius: ["30%", "70%", "30%"],
        transform: ["rotate(0deg)", "rotate(180deg)", "rotate(360deg)"],
      }}
      transition={{ duration: 6, repeat: Infinity }}
      className={`bg-gradient-to-r from-blue-500 to-purple-500 ${className}`}
    />
  );
};

// Text Reveal Animation
export const TextReveal = ({ text, className = "" }) => {
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// Bounce Animation
export const BounceElement = ({ children, className = "" }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Fade In Animation
export const FadeInElement = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax Scroll Effect
export const ParallaxElement = ({ children, offset = 50, className = "" }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      style={{ y: scrollY * (offset / 100) }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
