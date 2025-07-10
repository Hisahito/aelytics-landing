import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string; // ruta en public/, e.g. '/avatars/user1.jpg'
};

const testimonials: Testimonial[] = [
  {
    quote: 'Gracias a AEOlytics hemos visto un aumento del 40% en menciones de marca en respuestas de IA.',
    name: 'María López',
    role: 'CEO de TechLegal',
    avatar: '/avatars/maria.jpg',
  },
  {
    quote: 'La claridad de los insights y las alertas 24/7 nos han ahorrado horas de monitoreo manual.',
    name: 'Carlos Méndez',
    role: 'Head of Marketing, AgenciApp',
    avatar: '/avatars/carlos.jpg',
  },
  {
    quote: 'Las sugerencias automáticas de contenido han mejorado nuestro tráfico orgánico un 25% en 2 semanas.',
    name: 'Lucía García',
    role: 'Growth Lead, StartupX',
    avatar: '/avatars/lucia.jpg',
  },
];

const logos = [
  '/logos/google.svg',
  '/logos/airbnb.svg',
  '/logos/shopify.svg',
  '/logos/slack.svg',
  '/logos/netflix.svg',
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Lo que dicen nuestros clientes</h2>

        {/* Carrusel */}
        <div className="relative max-w-xl mx-auto mb-12">
          {/* Flechas */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            <ChevronRight size={24} />
          </button>

          <AnimatePresence initial={false}>
            {testimonials.map((t, i) =>
              i === index ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <p className="text-lg italic mb-6">“{t.quote}”</p>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-600">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Logo ${i + 1}`}
              className="h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
