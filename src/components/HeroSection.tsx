import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Seu cabelo pode voltar a <span className="text-[#3f5c4f]">crescer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Sem remédios ou promessas milagrosas. Um plano realista e natural.
            </p>
            <a 
              href="https://pay.kirvano.com/f6d3ddf1-b6c0-4f47-8c9c-e50f287fde14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#3f5c4f] hover:bg-[#2d4238] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="hidden sm:inline">RECUPERAR MEU CABELO AGORA</span>
              <span className="sm:hidden">RECUPERAR MEU CABELO</span>
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/assets/86s6YabMVxBWTODSW4UJymsHXmjhZnchQSNwSEw7.jpeg" 
              alt="Homem com cabelo recuperado" 
              className="rounded-2xl shadow-2xl max-w-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;