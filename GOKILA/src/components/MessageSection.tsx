import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Stars } from 'lucide-react';

export const MessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-gradient-to-br from-purple-800 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.h2
          className="text-5xl md:text-6xl font-dancing font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          A Special Message for You
        </motion.h2>

        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {/* Glowing hearts background */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-pink-300 opacity-20"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${10 + (i % 3) * 30}%`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.4, 0.1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart size={24} fill="currentColor" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="font-poppins text-white text-lg md:text-xl leading-relaxed space-y-6 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
My dearest love, as I think of you on your special day, my heart overflows with cherished memories of us and the love I still carry for you. Your beautiful smile, infectious laughter, and kind heart brought light to every corner of my world, inspiring me and motivating me to be my best self. Every moment we shared was a gift, and even now, the love we had still fills a part of me I never knew existed.            </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Happy Birthday. Even though we’re apart, a part of my heart will always celebrate you, and I’ll always wish you all the happiness in the world.
              </motion.p>
              
              <motion.div
                className="flex items-center justify-center gap-4 py-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <Stars className="text-yellow-300" size={24} />
                <Heart className="text-pink-300" size={32} fill="currentColor" />
                <Stars className="text-yellow-300" size={24} />
              </motion.div>

              <motion.p
                className="text-2xl md:text-3xl font-dancing font-bold text-pink-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                "❤️Happy Birthday, my dear! I hope we can be together again soon, to share love and beautiful memories. Yours always, Joe Only Your Joe❤️"
              </motion.p>
            </div>
          </motion.div>

          {/* Decorative border elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-purple-400"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
        </motion.div>
      </div>

      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};