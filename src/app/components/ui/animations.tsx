"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Animation variants for reusability
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Section reveal animation (scroll-triggered)
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
  const directionVariants: Record<string, Variants> = {
    up: {
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      },
    },
    down: {
      hidden: { opacity: 0, y: -60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      },
    },
    left: {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      },
    },
    right: {
      hidden: { opacity: 0, x: 60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      },
    },
  };

  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={directionVariants[direction]}>
      {children}
    </motion.div>
  );
};

// Hero text reveal animation
interface HeroRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const HeroReveal = ({ children, className = "", delay = 0 }: HeroRevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Staggered list animation
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerDelay?: number;
}

export const StaggerContainer = ({ children, className = "", delayChildren = 0.1, staggerDelay = 0.1 }: StaggerContainerProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Staggered item
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Image reveal animation
interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ImageReveal = ({ children, className = "", delay = 0 }: ImageRevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Section header animation (scroll-triggered)
interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
}

export const SectionHeader = ({ children, className = "" }: SectionHeaderProps) => {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
};

// Card hover animation
interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedCard = ({ children, className = "" }: AnimatedCardProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Counter animation
interface CounterAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const CounterAnimation = ({ children, className = "", delay = 0 }: CounterAnimationProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
};
