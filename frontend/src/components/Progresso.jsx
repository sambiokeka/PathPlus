import { FaStar, FaClock, FaCheck } from 'react-icons/fa';

const Progresso = ({ data, variant = 'card' }) => {

  if (variant === 'header') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
        {/* Seção do Título */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Trilha de {data.trilhaNome}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Domine as ferramentas e técnicas essenciais para se tornar um Cientista de Dados
            </p>
          </div>
            <div className="flex items-center space-x-8">
              {/* Bloco Dificuldade */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-2">
                  <FaStar className="text-indigo-600 dark:text-indigo-400 text-lg" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Dificuldade</p>
                <p className="font-semibold text-gray-800 dark:text-white">Intermediária</p>
              </div>

              {/* Bloco Duração */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-14 h-14 bg-green-100 dark:bg-green-900 rounded-full mb-2">
                  <FaClock className="text-green-600 dark:text-green-400 text-lg" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Duração Total</p>
                <p className="font-semibold text-gray-800 dark:text-white">{data.totalDuration}h</p>
              </div>
            </div>
        </div>

        {/* Seção da Barra de Progresso */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span>Progresso Geral da Trilha</span>
            <span>{data.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${data.progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
            <span>{data.completedModules} de {data.totalModules} módulos concluídos</span>
            <span>{data.completedDuration}h de {data.totalDuration}h</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Sua Trilha Atual</h3>
        <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{data.trilhaNome}</span>
      </div>
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
          <span>Progresso da Trilha</span>
          <span>{data.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${data.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Cartões de resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Módulos Concluídos */}
        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mr-3">
              <FaCheck className="text-indigo-600 dark:text-indigo-400 text-sm" />
            </div>
            <span className="text-gray-800 dark:text-white font-medium">Módulos Concluídos</span>
          </div>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 ml-11">
            {data.completedModules}/{data.totalModules}
          </p>
        </div>

        {/* Pontuação */}
        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mr-3">
              <FaStar className="text-green-600 dark:text-green-400 text-sm" />
            </div>
            <span className="text-gray-800 dark:text-white font-medium">Pontuação</span>
          </div>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400 ml-11">{data.pontuacao}%</p>
        </div>

        {/* Tempo de Estudo */}
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-3">
              <FaClock className="text-blue-600 dark:text-blue-400 text-sm" />
            </div>
            <span className="text-gray-800 dark:text-white font-medium">Tempo de Estudo</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 ml-11">{data.tempoEstudo}h</p>
        </div>
      </div>
    </div>
  );
};

export default Progresso;
