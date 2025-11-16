import { FaStar } from 'react-icons/fa';

const Relatos = ({ relatos, relatoAtual, setRelatoAtual }) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            O que dizem nossos <span className="text-indigo-600">alunos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Histórias reais de transformação profissional através do aprendizado contínuo.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg relative">
            <div className="absolute -top-4 left-8">
              <div className="bg-indigo-600 text-white p-3 rounded-xl">
                <FaStar className="text-2xl" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-300 font-bold text-xl">
                    {relatos[relatoAtual].avatar}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(relatos[relatoAtual].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mx-1" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                  "{relatos[relatoAtual].content}"
                </blockquote>
                
                <div>
                  <p className="font-bold text-gray-800 dark:text-white text-lg">
                    {relatos[relatoAtual].name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {relatos[relatoAtual].role} • {relatos[relatoAtual].company}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {relatos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setRelatoAtual(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === relatoAtual ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relatos;