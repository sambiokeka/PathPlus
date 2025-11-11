import { FaCheck, FaPlay, FaLock, FaClock, FaBook, FaProjectDiagram, FaChevronRight } from 'react-icons/fa';

// --- Funções de Ajuda ---
const getModuleIcon = (type) => {
  switch (type) {
    case 'teórico':
      return <FaBook className="text-blue-500" />;
    case 'prático':
      return <FaPlay className="text-green-500" />;
    case 'projeto':
      return <FaProjectDiagram className="text-purple-500" />;
    default:
      return <FaBook className="text-gray-500" />;
  }
};

const getStatusBadge = (status) => {
  switch (status) {
    case 'completed':
      return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Concluído</span>;
    case 'current':
      return <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Em Andamento</span>;
    case 'upcoming':
      return <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Em Breve</span>;
    default:
      return null;
  }
};


const ItemModulo = ({ module, startModule }) => {
  return (
    <div 
      className={`flex flex-col lg:flex-row items-start p-6 rounded-lg border-2 transition-all duration-300 ${
        module.status === 'current' 
          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
          : module.status === 'completed'
          ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10'
          : 'border-gray-200 dark:border-gray-700'
      }`}
    >
      {/* Número e Ícone do Módulo */}
      <div className="flex items-center mb-4 lg:mb-0 lg:mr-6">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
          module.status === 'completed' 
            ? 'bg-green-500 text-white' 
            : module.status === 'current'
            ? 'bg-indigo-500 text-white'
            : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
        }`}>
          {module.status === 'completed' ? (
            <FaCheck />
          ) : module.status === 'current' ? (
            <FaPlay />
          ) : (
            <FaLock />
          )}
        </div>
        <div className="lg:hidden">
          <h3 className="font-semibold text-gray-800 dark:text-white">{module.title}</h3>
          {getStatusBadge(module.status)}
        </div>
      </div>

      {/* Conteúdo do Módulo */}
      <div className="flex-1 lg:mr-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2">
          <h3 className="hidden lg:block font-semibold text-gray-800 dark:text-white text-lg">
            {module.title}
          </h3>
          <div className="hidden lg:block">
            {getStatusBadge(module.status)}
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-3">
          {module.description}
        </p>

        {/* Skills e Metadados */}
        <div className="flex flex-wrap gap-2 mb-4">
          {module.skills.map((skill, skillIndex) => (
            <span 
              key={skillIndex}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center mr-4">
            {getModuleIcon(module.type)}
            <span className="ml-1 capitalize">{module.type}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1" />
            <span>{module.duration}</span>
          </div>
        </div>
      </div>

      {/* Ações e Progresso */}
      <div className="flex flex-col items-end mt-4 lg:mt-0 w-full lg:w-auto">
        {module.status === 'current' && (
          <div className="w-full lg:w-48 mb-4">
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
              <span>Progresso</span>
              <span>{module.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${module.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        <button
          onClick={() => startModule(module.id)}
          disabled={module.status === 'upcoming'}
          className={`w-full lg:w-auto flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
            module.status === 'completed'
              ? 'bg-green-100 hover:cursor-pointer dark:bg-green-900 text-green-700 dark:text-green-300'
              : module.status === 'current'
              ? 'bg-indigo-600 hover:cursor-pointer hover:bg-indigo-700 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
          }`}
        >
          {module.status === 'completed' ? (
            <>
              <FaCheck className="mr-2" />
              Concluído
            </>
          ) : module.status === 'current' ? (
            <>
              <FaPlay className="mr-2" />
              Continuar
            </>
          ) : (
            <>
              <FaLock className="mr-2" />
              Em Breve
            </>
          )}
          <FaChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ItemModulo;