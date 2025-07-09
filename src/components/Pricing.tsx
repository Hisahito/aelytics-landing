import React from 'react';

type Plan = {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$39/mo',
    features: ['10 prompts', '2 escaneos/semana', 'Análisis básico'],
    buttonText: 'Empieza hoy',
  },
  {
    name: 'Pro',
    price: '$99/mo',
    features: ['50 prompts', 'Escaneo diario', 'IA suggestions', 'Histórico completo'],
    buttonText: '¡Empieza hoy y ahorra 20%!',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$299+/mo',
    features: ['Múltiples dominios', 'Alertas', 'Exportación de reportes', 'API'],
    buttonText: 'Contactar ventas',
  },
];

const Pricing: React.FC = () => (
  <section id="pricing" className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Planes y Precios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-gray-100 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl ${plan.popular ? 'border-2 border-indigo-600 bg-indigo-50' : ''}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 mt-[-10px] mr-[-10px] bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Más Popular
              </div>
            )}
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-4">{plan.price}</p>
            <ul className="text-gray-700 mb-6 space-y-2">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {feat}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-md font-semibold transition-transform duration-200 hover:scale-105 ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
