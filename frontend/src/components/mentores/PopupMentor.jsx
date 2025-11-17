import {
  FaTimes,
  FaMapMarkerAlt,
  FaStar,
  FaRegStar,
  FaUserPlus,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaHeart,
  FaEnvelope,
} from 'react-icons/fa';

const renderStars = (avaliacao) => {
  const stars = [];
  const fullStars = Math.floor(avaliacao);
  const hasHalfStar = avaliacao % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-400" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStar key="half" className="text-yellow-400" />);
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
  }

  return stars;
};

const PopupMentor = ({ mentor, closeModal, handleRecommend, handleMessage }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      {/* O container do modal */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header do Modal */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-start space-x-4">
              <img
                src={mentor.foto}
                alt={`Foto de ${mentor.nome}`}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {mentor.nome}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {mentor.cargo}
                </p>
                <div className="flex items-center mt-1">
                  <FaMapMarkerAlt className="text-gray-400 mr-1" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {mentor.localizacao}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  {renderStars(mentor.avaliacao)}
                  <span className="ml-2 text-gray-600 dark:text-gray-300">
                    {mentor.avaliacao} • {mentor.disponibilidade}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="hover:cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>

          {/* Conteúdo do Modal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Coluna Principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Sobre */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <FaUserPlus className="mr-2 text-indigo-600" />
                  Sobre
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {mentor.resumo}
                </p>
              </div>

              {/* Experiência */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <FaBriefcase className="mr-2 text-indigo-600" />
                  Experiência Profissional
                </h3>
                <div className="space-y-4">
                  {mentor.experiencias.map((exp, index) => (
                    <div key={index} className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        {exp.cargo} • {exp.empresa}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.inicio} - {exp.fim}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        {exp.descricao}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Habilidades Técnicas */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  Habilidades Técnicas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {mentor.habilidadesTecnicas.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projetos */}
              {mentor.projetos && mentor.projetos.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Projetos Destacados
                  </h3>
                  <div className="space-y-3">
                    {mentor.projetos.map((projeto, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          {projeto.titulo}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {projeto.descricao}
                        </p>
                        {projeto.link && (
                          <a
                            href={projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:cursor-pointer text-indigo-600 dark:text-indigo-400 text-sm hover:underline mt-2 inline-block"
                          >
                            Ver projeto →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Coluna Lateral */}
            <div className="space-y-6">
              {/* Soft Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {mentor.softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Formação */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <FaGraduationCap className="mr-2 text-indigo-600" />
                  Formação
                </h3>
                <div className="space-y-3">
                  {mentor.formacao.map((form, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        {form.curso}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {form.instituicao} • {form.ano}
                      </p> 
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificações */}
              {mentor.certificacoes && mentor.certificacoes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Certificações
                  </h3>
                  <div className="space-y-2">
                    {mentor.certificacoes.map((cert, index) => (
                      <div
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-2 rounded"
                      >
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Idiomas */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  Idiomas
                </h3>
                <div className="space-y-2">
                  {mentor.idiomas.map((idioma, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        {idioma.idioma}
                      </span>
                      <span className="text-gray-800 dark:text-white font-medium">
                        {idioma.nivel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Áreas de Interesse */}
              {mentor.areaInteresses && mentor.areaInteresses.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <FaHeart className="mr-2 text-indigo-600" />
                    Áreas de Interesse
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {mentor.areaInteresses.map((interesse, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm"
                      >
                        {interesse}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Botões de Ação */}
              <div className="space-y-3">
                <button
                  onClick={handleRecommend}
                  className="w-full bg-green-600 hover:cursor-pointer hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <FaStar className="mr-2" />
                  Recomendar Profissional
                </button>
                <button
                  onClick={handleMessage}
                  className="w-full bg-indigo-600 hover:cursor-pointer hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <FaEnvelope className="mr-2" />
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMentor;