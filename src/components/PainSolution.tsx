import React from 'react';

const steps = [
  {
    pain: 'Tu marca pasa desapercibida en LLMs',
    solution: 'Escanea GPT, Perplexity y más, detecta menciones al instante.',
    result: 'Aumenta tu visibilidad un +30% en promedio.',
  },
  {
    pain: 'No sabes cuándo tu ranking baja',
    solution: 'Recibe alertas 24/7 cuando caigas en el ranking.',
    result: 'Reacciona antes que tu competencia y recupera posiciones.',
  },
  {
    pain: 'Careces de recomendaciones claras',
    solution: 'Nuestra IA sugiere ajustes de contenido paso a paso.',
    result: 'Mejora tu posicionamiento con un 20% de efectividad extra.',
  },
];

const PainSolution: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Cómo lo logramos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div
            key={s.pain}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col h-full"
          >
            <h3 className="text-red-600 font-semibold mb-2">Dolor</h3>
            <p className="flex-1 text-gray-700 mb-4">{s.pain}</p>

            <h4 className="text-indigo-600 font-semibold mb-2">Solución</h4>
            <p className="flex-1 text-gray-700 mb-4">{s.solution}</p>

            <h4 className="text-green-600 font-semibold mb-2">Resultado</h4>
            <p className="font-bold text-gray-800">{s.result}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSolution;
