import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface WelcomeSectionProps {
  onScrollToMemories: () => void;
}

export const WelcomeSection = ({ onScrollToMemories }: WelcomeSectionProps) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-20 max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-6xl md:text-8xl font-dancing font-bold text-purple-800 mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Happy Birthday,
          <br />
          <motion.span
            className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Gokila!
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-poppins text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          "Happy Birthday! Di Goki My Noodles Manda."
          "Wish you Many MORE Happy Return Of The Day."
        </motion.p>

        <motion.button
          onClick={onScrollToMemories}
          className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center gap-2">
            HAPPY BIRTHDAY MA 🎉
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </span>
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-pink-300 rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};