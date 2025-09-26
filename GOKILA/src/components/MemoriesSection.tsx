import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const MemoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const memories = [
    {
      image: "https://media.licdn.com/dms/image/v2/D5610AQGeOTvwZiewKQ/image-shrink_800/image-shrink_800/0/1685361484691?e=2147483647&v=beta&t=gdqITH2PvkiMBrQyohZYRKrvkcof_bW3kLtJJOgcm0M",
      caption: "Our first café date is a memory I can never forget when I put the chain on you, I felt so happy, and that moment will always stay close to my heart. "
    },
    {
      image: "https://yt3.ggpht.com/8gBUDI1el2rF-0YKS9jVeKf7Kj8Ws5uJq0bmFwgicb_pfhqhGWSSfn2WDgPUXA_EkCtsB4nakGK9Qw=s800-c-fcrop64=1,00002aabffffd555-rw-nd-v1",
      caption: "You wore a saree for me when I was suspended, and still stood by me with all your love and support. The moment I saw you in that saree, my heart skipped a beat I could feel the love in your eyes, and in that instant I knew how strong our bond truly is."
    },
    {
      image: "https://yt3.ggpht.com/FsZnRssntAboRt8nouOk9e-joPiBcTl1k7soXCaLyPq9VmCO7o-_V_7utb49YBnQ_kiidqQzK-qxqhk=s800-c-fcrop64=1,00002aabffffd555-rw-nd-v1",  
      caption: "It was our first movie together,a memory with you I’ll never forget."
    },
    {
      image: "https://yt3.ggpht.com/NLrBUQ2n6QeEgb0-1ESp446E_hbACMTlQVaADCtBllDzJFTaIVEi-byrIpP3SzismuxwBigx3X-s=s1344-rw-nd-v1",
      caption: "That day when we went on a bike ride from Tambaram to Velachery, it felt so special just you and me, and the happiness of our love growing stronger."
    },
    {
      image: "https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZmxvd2VyfGVufDB8fDB8fHww",
      caption: "Every day I express my love by giving you letters and flowers I don’t even know why, but I’m so deeply addicted to you and the happiness you bring me."
    },
    {
      image: "https://yt3.ggpht.com/yzLBtMqG2tO2REd2g9PK5EMAowHTQM2VZd3SIn48lkQyayZjQnppWhABx_H381J0tUIlq-Aa_kGFtg=s800-c-fcrop64=1,00002298ffffdd67-rw-nd-v1",
      caption: "In McDonald’s, we sat together and talked about our problems, and that day we solved one of our biggest fights do you remember how we turned that moment into love again?"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-pink-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.h2
          className="text-5xl md:text-6xl font-dancing font-bold text-center text-purple-800 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Beautiful Memories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 transform perspective-1000">
                <div className="relative overflow-hidden">
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    className="w-full aspect-[4/3] max-h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <motion.p
                    className="font-poppins text-gray-700 text-center text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  >
                    {memory.caption}
                  </motion.p>
                </div>

                {/* Decorative heart overlay */}
                <motion.div
                  className="absolute top-4 right-4 text-pink-400 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ❤️
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-300 rounded-full opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};