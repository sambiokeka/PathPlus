const MentoresDashboard = () => {
  return (
    <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Mentores Recomendados</h3>
          <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Ver todos</a>
        </div>
        <div className="space-y-4">
          <div className="flex items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-3">
              <span className="text-indigo-600 dark:text-indigo-300 font-medium">ML</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 dark:text-white">Maria Lima</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Cientista de Dados Sênior</p>
            </div>
            <button className="text-indigo-600 dark:text-indigo-400">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="flex items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 dark:text-blue-300 font-medium">PS</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 dark:text-white">Pedro Silva</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Engenheiro de ML</p>
            </div>
            <button className="text-indigo-600 dark:text-indigo-400">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="flex items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-600 dark:text-green-300 font-medium">AS</span>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 dark:text-white">Ana Souza</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Arquiteta de Dados</p>
            </div>
            <button className="text-indigo-600 dark:text-indigo-400">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <button className="w-full mt-6 border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <i className="fas fa-plus mr-2"></i>
        Encontrar mais mentores
      </button>
    </div>
  );
};

export default MentoresDashboard;