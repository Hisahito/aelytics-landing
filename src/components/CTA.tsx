import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => (
  <motion.section
    id="get-started"
    className="py-20 bg-indigo-600 text-white"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-6 text-center">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Listo para potenciar tu SEO en IA?
      </motion.h2>
      <motion.p
        className="mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Únete a AEOlytics hoy y domina tu visibilidad en los grandes LLMs.
      </motion.p>
      <motion.a
        href="/signup"
        className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-md inline-block"
        whileHover={{ scale: 1.05, boxShadow: '0px 4px 12px rgba(0,0,0,0.2)' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Registrarme
      </motion.a>
    </div>
  </motion.section>
);

export default CTA;
