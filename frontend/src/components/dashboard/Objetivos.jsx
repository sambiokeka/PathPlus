const Objetivos = () => {
  return (
    <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Metas da Semana</h3>
        <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">3 de 5 concluídas</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center mr-3">
            <i className="fas fa-check text-green-500 text-xs"></i>
          </div>
          <span className="text-gray-800 dark:text-white">Completar módulo de Python Básico</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center mr-3">
            <i className="fas fa-check text-green-500 text-xs"></i>
          </div>
          <span className="text-gray-800 dark:text-white">Participar de 2 sessões de mentoria</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center mr-3">
            <i className="fas fa-check text-green-500 text-xs"></i>
          </div>
          <span className="text-gray-800 dark:text-white">Finalizar projeto prático</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center mr-3"></div>
          <span className="text-gray-800 dark:text-white">Completar 5 horas de estudo</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center mr-3"></div>
          <span className="text-gray-800 dark:text-white">Revisar soft skills: comunicação</span>
        </div>
      </div>
    </div>
  );
};

export default Objetivos;