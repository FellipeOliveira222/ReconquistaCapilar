import React from 'react';
import { Circle } from 'lucide-react';

const CalviceStages: React.FC = () => {
  const stages = [
    {
      stage: "Estágio 1",
      description: "Queda leve, entradas discretas",
      color: "bg-yellow-500",
      textColor: "text-yellow-700"
    },
    {
      stage: "Estágio 2", 
      description: "Entradas profundas, rarefação no topo",
      color: "bg-orange-500",
      textColor: "text-orange-700"
    },
    {
      stage: "Estágio 3",
      description: "Região da coroa praticamente sem fios",
      color: "bg-red-500",
      textColor: "text-red-700"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-left">
            Em que estágio da calvície você está?
          </h2>
          <div className="mt-8">
            <img 
              src="/assets/Design sem nome (3).png"
              alt="Estágios da calvície"
              className="w-full max-w-2xl h-auto object-contain mx-auto"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stages.map((stage, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Circle className={`w-6 h-6 mr-3 ${stage.color} rounded-full`} fill="currentColor" />
                <h3 className={`text-xl font-bold ${stage.textColor}`}>{stage.stage}</h3>
              </div>
              <p className="text-gray-600">{stage.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center p-6 bg-[#3f5c4f]/10 rounded-lg">
          <p className="text-lg font-semibold text-[#3f5c4f]">
            Todos os estágios são compatíveis com o protocolo — mas o quanto antes começar, melhores os resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalviceStages;