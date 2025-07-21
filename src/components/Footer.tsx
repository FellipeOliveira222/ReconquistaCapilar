import React from 'react';
import { Shield, Lock, Award, CheckCircle2 } from 'lucide-react';

const Footer: React.FC = () => {
  const seals = [
    {
      icon: Shield,
      title: "Pagamento Seguro",
      subtitle: "SSL 256 bits"
    },
    {
      icon: Lock,
      title: "Dados Protegidos",
      subtitle: "LGPD Compliance"
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      subtitle: "Protocolo Testado"
    },
    {
      icon: CheckCircle2,
      title: "Satisfação",
      subtitle: "15.000+ Clientes"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Security Seals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {seals.map((seal, index) => {
            const Icon = seal.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <Icon className="w-12 h-12 text-green-400 mb-3" />
                <h3 className="font-semibold text-white mb-1">{seal.title}</h3>
                <p className="text-gray-400 text-sm">{seal.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Reconquista Capilar</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Protocolo natural e científico para recuperação capilar. Mais de 15.000 homens já transformaram suas vidas.
            </p>
            
            {/* Legal Info */}
            <div className="space-y-2 text-sm text-gray-500">
              <p>© 2024 Reconquista Capilar. Todos os direitos reservados.</p>
              <p>Este produto não substitui orientação médica profissional.</p>
              <p>Resultados podem variar de pessoa para pessoa.</p>
            </div>

            {/* Final CTA */}
            <div className="mt-8">
              <a 
                href="https://pay.kirvano.com/f6d3ddf1-b6c0-4f47-8c9c-e50f287fde14"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#3f5c4f] hover:bg-[#2d4238] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="hidden sm:inline">RECUPERAR MEU CABELO AGORA</span>
                <span className="sm:hidden">RECUPERAR MEU CABELO</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;