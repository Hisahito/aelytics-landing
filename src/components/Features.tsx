import React from 'react';
import FeatureCard from './FeatureCard';
import { BarChart2, AlertCircle, Lightbulb } from 'lucide-react';

const features = [
  {
    title: 'Escaneo Multillm',
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
  <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">¿Por qué AEOlytics?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f) => (
          <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;