import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [logoClass, setLogoClass] = useState('text-indigo-600');

  useEffect(() => {
    const month = new Date().getMonth() + 1; // 1–12
    let animClass = '';

    if (month === 7) animClass = 'pride-gradient-text';
    else if (month === 10) animClass = 'halloween-animation';
    else if (month === 12) animClass = 'xmas-animation';

    if (!animClass) return; // ningún otro mes

    // Aplicar animación
    setLogoClass(animClass);

    // Tras 2s (duration de las animaciones), volver al color base
    const timeout = setTimeout(() => {
      setLogoClass('text-indigo-600');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []); // solo on mount / cada refresh

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          <span className={logoClass}>AEO</span>
          <span className="text-indigo-600">lytics</span>
        </a>
        <nav className="space-x-6">
          <a href="#features" className="text-gray-700 hover:text-indigo-600">Características</a>
          <a href="#pricing"   className="text-gray-700 hover:text-indigo-600">Precios</a>
          <a href="#contact"   className="text-gray-700 hover:text-indigo-600">Contacto</a>
        </nav>
        <a
          href="/login"
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Iniciar Sesión
        </a>
      </div>
    </header>
  );
};

export default Header;
