import { FaArrowRight, FaGraduationCap } from 'react-icons/fa';

const TrilhasHomePage = ({ learningPaths, getColorClasses }) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Trilhas em <span className="text-indigo-600">Destaque</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comece sua jornada com nossas trilhas mais populares, cuidadosamente 
            elaboradas por especialistas do mercado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {path.description}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(path.color)}`}>
                  <FaGraduationCap />
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{path.duration}</span>
                <span>{path.level}</span>
                <span>{path.students} alunos</span>
              </div>
              
              <button className="hover:cursor-pointer w-full bg-white dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-indigo-600 hover:text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white">
                Explorar Trilha
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="hover:cursor-pointer border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Ver Todas as Trilhas
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrilhasHomePage;