import React from 'react';

const Hero: React.FC = () => (
  <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white pt-36 pb-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Optimiza tu visibilidad en IA con AEOlytics</h1>
      <p className="text-xl mb-8">Mide, analiza y mejora tu presencia en respuestas de ChatGPT, Claude, Perplexity y más.</p>
      <a href="#get-started" className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100">Comenzar Ahora</a>
    </div>
  </section>
);

export default Hero;