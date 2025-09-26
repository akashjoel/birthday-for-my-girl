import { motion } from 'framer-motion';
import { Heart, Sparkles, Router as Butterfly } from 'lucide-react';

export const FloatingElements = () => {
  const hearts = Array.from({ length: 12 }, (_, i) => i);
  const butterflies = Array.from({ length: 4 }, (_, i) => i);
  const sparkles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating Hearts */}
      {hearts.map((heart, index) => (
        <motion.div
          key={`heart-${heart}`}
          className="absolute text-pink-400"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: index * 2,
            ease: "easeInOut",
          }}
          style={{
            left: `${(index * 8.33) % 100}%`,
          }}
        >
          <Heart 
            size={16 + Math.random() * 16} 
            fill="currentColor" 
            className="drop-shadow-lg"
          />
        </motion.div>
      ))}

      {/* Floating Butterflies */}
      {butterflies.map((butterfly, index) => (
        <motion.div
          key={`butterfly-${butterfly}`}
          className="absolute text-purple-400"
          initial={{
            x: -100,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: window.innerWidth + 100,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 15 + Math.random() * 5,
            repeat: Infinity,
            delay: index * 5,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Butterfly size={20 + Math.random() * 10} className="drop-shadow-lg" />
          </motion.div>
        </motion.div>
      ))}

      {/* Sparkling Elements */}
      {sparkles.map((sparkle, index) => (
        <motion.div
          key={`sparkle-${sparkle}`}
          className="absolute text-yellow-300"
          style={{
            left: `${(index * 12.5) % 100}%`,
            top: `${(index * 15) % 100}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            rotate: [0, 180, 360],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: index * 0.8,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={12 + Math.random() * 8} className="drop-shadow-lg" />
        </motion.div>
      ))}
    </div>
  );
};