import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { BarChart2, AlertCircle, Lightbulb } from 'lucide-react';

const features = [
  {
    title: 'Escaneo Multimodal',
    description: 'Consulta automáticamente GPT, Perplexity y más para tus prompts.',
    icon: <BarChart2 />,
  },
  {
    title: 'Análisis de Visibilidad',
    description: 'Descubre dónde y cómo aparece tu marca en la respuesta.',
    icon: <AlertCircle />,
  },
  {
    title: 'Sugerencias IA',
    description: 'Recibe recomendaciones generadas por IA para mejorar tu ranking.',
    icon: <Lightbulb />,
  },
];

const Features: React.FC = () => (
  <motion.section
    id='features'
    className='py-20 bg-gray-50'
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className='container mx-auto px-6'>
      <h2 className='text-3xl font-bold text-center mb-12'>¿Por qué AEOlytics?</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {features.map((f) => (
          <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} />
        ))}
      </div>
    </div>
  </motion.section>
);

export default Features;