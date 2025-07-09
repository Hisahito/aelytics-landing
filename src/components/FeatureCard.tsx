import React from 'react';

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureCard: React.FC<Props> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
    <div className="text-indigo-600 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;