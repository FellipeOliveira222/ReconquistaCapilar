import React from 'react';
import { Shield, RefreshCw, Clock, CheckCircle } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantia de 7 dias",
      description: "Se não ficar satisfeito, devolvemos 100% do seu dinheiro"
    },
    {
      icon: RefreshCw,
      title: "Reembolso total",
      description: "Processo simples e rápido, sem burocracias"
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Atendimento especializado sempre que precisar"
    },
    {
      icon: CheckCircle,
      title: "Sem riscos",
      description: "Teste o protocolo com total segurança"
    }
  ];

  return (
    <section className="py-16 bg-[#3f5c4f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sua satisfação é garantida
          </h2>
          <p className="text-xl text-green-100">
            Experimente sem riscos por 7 dias completos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{guarantee.title}</h3>
                <p className="text-green-100 text-sm">{guarantee.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a 
            href="https://pay.kirvano.com/f6d3ddf1-b6c0-4f47-8c9c-e50f287fde14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-[#3f5c4f] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="hidden sm:inline">COMEÇAR AGORA - GARANTIA DE 7 DIAS</span>
            <span className="sm:hidden">RECUPERAR MEU CABELO</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;