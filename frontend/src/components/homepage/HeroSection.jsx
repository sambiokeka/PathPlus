import { FaPlay, FaStar, FaArrowRight, FaLightbulb, FaUserFriends, FaGraduationCap, FaCheck, FaChartLine } from 'react-icons/fa';

const HeroSection = ({ stats, relatos }) => {
  const mentorStat = stats.find(s => s.label.includes('Mentores'))?.number || "200+";
  const trailStat = stats.find(s => s.label.includes('Trilhas'))?.number || "50+";

  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            
            <h1 className="-mt-10 text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Prepare-se para o 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                futuro do trabalho
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-indigo-100 leading-relaxed">
              Descubra trilhas de aprendizagem personalizadas, conecte-se com mentores 
              e desenvolva as habilidades que o mercado mais valoriza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="hover:cursor-pointer bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center">
                <FaPlay className="mr-3" />
                Começar Agora
              </button>
              <button className="border-2 border-white text-white hover:cursor-pointer hover:bg-gray-800 hover:bg-opacity-10 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
                Explorar Trilhas
              </button>
            </div>
            
            <div className="flex items-center mt-8 text-indigo-100">
              <div>
                <p className="font-semibold">+10.000 profissionais já começaram</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-yellow-300 mr-1" />
                  ))}
                  <span className="ml-2">4.9/5 (2.4k avaliações)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Card Falso do Dashboard */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-md">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">+</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-800 dark:text-white text-lg">Path +</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Dashboard de Aprendizado</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <span>Progresso da Trilha</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaCheck className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">7</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Concluídos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaStar className="text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">84%</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Pontuação</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaChartLine className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">36h</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Estudo</p>
                  </div>
                </div>
                
                <button className="w-full bg-indigo-600 hover:cursor-pointer hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Continuar Aprendizado
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <FaUserFriends className="mr-2" />
                  <span className="font-semibold">{mentorStat} mentores</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <FaGraduationCap className="mr-2" />
                  <span className="font-semibold">{trailStat} trilhas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;