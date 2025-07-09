import React from 'react';

const Header: React.FC = () => (
  <header className="bg-white shadow-md fixed w-full z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/" className="text-2xl font-bold text-indigo-600">AEOlytics</a>
      <nav className="space-x-6">
        <a href="#features" className="text-gray-700 hover:text-indigo-600">Características</a>
        <a href="#pricing" className="text-gray-700 hover:text-indigo-600">Precios</a>
        <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contacto</a>
      </nav>
      <a href="/login" className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Iniciar Sesión</a>
    </div>
  </header>
);

export default Header;