import React from 'react';
import { User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "João, 36 anos",
      text: "Achei que só transplante resolveria. Em 2 semanas, já vi diferença.",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Ricardo, 29 anos", 
      text: "Voltei a usar boné por estilo, não por vergonha.",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Maurício, 48 anos",
      text: "Não esperava tanto. Meu cabelo parou de cair em 10 dias.",
      avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">
            Avaliações reais
          </h2>
          <p className="text-xl text-gray-600 text-left">
            Depoimentos de quem já testou o protocolo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <User className="w-4 h-4 text-[#3f5c4f] mb-1" />
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;