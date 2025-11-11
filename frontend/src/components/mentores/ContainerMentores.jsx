import { FaSearch, FaStar, FaRegStar } from 'react-icons/fa';
import Mentor from './Mentor'; // Importa o card individual

// Função de ajuda para renderizar estrelas
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

// As props mudaram para refletir a paginação
const ContainerMentores = ({ mentoresDaPagina, totalMentoresEncontrados, openModal }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        {/* Usa o número total que veio do "Pai" */}
        {totalMentoresEncontrados} mentores encontrados
      </h2>
      
      {/* Se não houver resultados (baseado no total) */}
      {totalMentoresEncontrados === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaSearch className="text-gray-400 text-2xl" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Nenhum mentor encontrado
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Tente ajustar os filtros ou termos de busca
          </p>
        </div>
      )}

      {/* Se houver resultados, mostre o grid */}
      {totalMentoresEncontrados > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mapeia apenas os 6 mentores da página atual */}
          {mentoresDaPagina.map(mentor => (
            <Mentor
              key={mentor.id}
              mentor={mentor}
              openModal={openModal}
              renderStars={renderStars} // Passa a função para o card
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContainerMentores;