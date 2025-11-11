import { FaMapMarkerAlt } from 'react-icons/fa';

const Mentor = ({ mentor, openModal, renderStars }) => {
  return (
    <div
      onClick={() => openModal(mentor)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-indigo-600 dark:text-indigo-300 font-bold text-lg">
            {/* Pega as iniciais do nome */}
            {mentor.nome.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 dark:text-white truncate">
            {mentor.nome}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
            {mentor.cargo}
          </p>
          <div className="flex items-center mt-1">
            <FaMapMarkerAlt className="text-gray-400 text-xs mr-1" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {mentor.localizacao}
            </span>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {renderStars(mentor.avaliacao)}
              <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                {mentor.avaliacao}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {mentor.resumo}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {(mentor.habilidadesTecnicas ?? []).slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
        {(mentor.habilidadesTecnicas?.length ?? 0) > 3 && (
          <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs px-2 py-1 rounded">
            +{mentor.habilidadesTecnicas.length - 3}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">
          {mentor.disponibilidade}
        </span>
        <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
          Ver perfil →
        </button>
      </div>
    </div>
  );
};

export default Mentor;