import { FaPlay, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Pronto para transformar sua carreira?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de profissionais que já estão se preparando para o futuro do trabalho.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="hover:cursor-pointer bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center">
            <FaPlay className="mr-3" />
            Começar Agora Gratuitamente
          </button>
          <button className="hover:cursor-pointer border-2 border-white text-white hover:bg-gray-800 hover:bg-opacity-40 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
            Agendar Demonstração
          </button>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-indigo-100">
          <div className="flex items-center">
            <FaShieldAlt className="mr-2" />
            <span>7 dias grátis • Cancele quando quiser</span>
          </div>
          <div className="flex items-center">
            <FaGlobeAmericas className="mr-2" />
            <span>100% online • Aprenda de qualquer lugar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;