import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const TrailingCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const mouseLeaveHandler = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    document.documentElement.addEventListener('mouseleave', mouseLeaveHandler); // Hide when mouse leaves window

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      document.documentElement.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 8, // Center the cursor
      y: mousePosition.y - 8, // Center the cursor
      scale: isVisible ? 1 : 0,
      backgroundColor: 'rgba(96, 165, 250, 0.7)', // Tailwind blue-400 with opacity
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
        mass: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cursorVariants}
      animate="default"
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50"
    />
  );
};

export default TrailingCursor;
