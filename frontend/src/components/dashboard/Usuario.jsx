import { Link } from 'react-router-dom';

const Usuario = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Olá, Erick!</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Continue sua jornada de aprendizado</p>
      </div>
      <div className="mt-4 md:mt-0">
        <button className="hover:cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-colors">
          <i className="fas fa-play-circle mr-2"></i>
          <Link to="/trilha">Continuar Aprendendo</Link>
        </button>
      </div>
    </div>
  );
};

export default Usuario;