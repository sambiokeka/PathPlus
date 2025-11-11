import { FaUserFriends } from 'react-icons/fa';
import ItemModulo from './ItemModulo';

const Modulos = ({ modules, startModule }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
        Módulos da Trilha
      </h2>

      <div className="space-y-8">
        {modules.map((module) => (
          <ItemModulo 
            key={module.id}
            module={module}
            startModule={startModule}
          />
        ))}
      </div>

      {/* Rodapé da Trilha */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              Precisa de ajuda com esta trilha?
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Converse com nossos mentores especializados
            </p>
          </div>
          <button className="hover:cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
            <FaUserFriends className="mr-2" />
            Falar com um Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modulos;