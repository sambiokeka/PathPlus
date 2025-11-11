const Saude = () => {
  return (
    <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Seu Bem-estar</h3>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
          <i className="fas fa-brain text-indigo-600 dark:text-indigo-400 text-xl"></i>
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">Tempo focado hoje</p>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">2h 15min</p>
        </div>
      </div>
      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center mt-6">
        <i className="fas fa-seedling mr-2"></i>
        Sessão de Bem-estar
      </button>
    </div>
  );
};

export default Saude;