const Atividade = () => {
  return (
    <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col">
      <div className="flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Próxima Atividade
          </h3>
        </div>
        <div className="space-y-4 flex flex-col flex-1">
          <div className="border-l-4 border-indigo-500 pl-4 py-2">
            <h4 className="font-medium text-gray-800 dark:text-white">Análise de Dados com Python</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Módulo 8: Pandas e NumPy</p>
            <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="far fa-clock mr-1"></i>
              <span>Duração: 2h 30min</span>
            </div>
          </div>
          <button className="w-full border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center flex-1">
            <i className="fas fa-plus mr-2"></i>
            Adicionar Atividade
          </button>
        </div>
      </div>
      <div className="flex space-x-3 mt-auto pt-6">
        <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition-colors">
          Iniciar
        </button>
        <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          Agendar
        </button>
      </div>
    </div>
  );
};

export default Atividade;