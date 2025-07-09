import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-gray-400 py-10">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="text-white font-bold mb-2">AEOlytics</h4>
        <p>© 2025 AEOlytics. Todos los derechos reservados.</p>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Enlaces</h5>
        <ul>
          <li><a href="#features" className="hover:text-white">Características</a></li>
          <li><a href="#pricing" className="hover:text-white">Precios</a></li>
          <li><a href="#contact" className="hover:text-white">Contacto</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Síguenos</h5>
        <div className="flex space-x-4">
          <a href="#" aria-label="Twitter" className="hover:text-white">Tw</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">In</a>
          <a href="#" aria-label="GitHub" className="hover:text-white">GH</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;