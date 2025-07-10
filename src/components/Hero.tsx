// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const sentence = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } }
};
const letter = {
  hidden: { opacity: 0, y: '0.25em' },
  visible: { opacity: 1, y: '0em', transition: { duration: 0.5 } }
};

const bullets = [
  '+3 LLMs escaneados automáticamente',
  '+30% de visibilidad en tus respuestas',
  '24/7 alertas instantáneas',
  '+50 keywords trackeados',
  '+10 competidores comparados',
];

// Duplicamos el array para lograr un loop continuo sin saltos
const items = [...bullets, ...bullets];
const ITEM_WIDTH = 220; // mismo ancho que antes (px)
const SCROLL_DISTANCE = bullets.length * ITEM_WIDTH; // 5 * 220 = 1100px

const Hero: React.FC = () => {
  const text = 'Aumenta tu visibilidad en IA hasta un +30% con AEOlytics';

  return (
    <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white pt-36 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Titular “tecleado” */}
        <motion.h1
          className="text-5xl font-extrabold mb-6 inline-block"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {text.split('').map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: text.length * 0.03 + 0.5, duration: 0.5 }}
        >
          Descubre en qué LLMs aparece tu marca y recibe recomendaciones de IA para dominar cada respuesta.
        </motion.p>

        {/* Carrusel continuo de bullets */}
        <div className="overflow-hidden mb-8">
          <motion.div
            className="flex space-x-6 px-6"
            style={{ width: `${items.length * ITEM_WIDTH}px` }}
            initial={{ x: 0 }}
            animate={{ x: -SCROLL_DISTANCE }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear'
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 bg-white bg-opacity-20 backdrop-blur-lg px-5 py-3 rounded-lg font-semibold text-sm"
                style={{ width: `${ITEM_WIDTH - 24}px` }} // ajustar ancho real descontando padding
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.a
          href="#features"
          className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-md"
          whileHover={{ scale: 1.05, boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Comenzar Ahora
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
