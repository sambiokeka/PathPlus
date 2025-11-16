import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Paginacao = ({ currentPage, totalPages, onPageChange }) => {

  if (totalPages <= 1) {
    return null;
  }

  const handlePrev = () => {
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-between mt-8">
      {/* Botão Anterior */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="hover:cursor-pointer flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-300 transition-colors"
      >
        <FaChevronLeft className="mr-2 h-4 w-4" />
        Anterior
      </button>

      {/* Indicador de Página */}
      <span className="text-sm text-gray-900 dark:text-gray-300">
        Página <span className="font-medium text-gray-900 dark:text-white">{currentPage}</span> de <span className="font-medium text-gray-900 dark:text-white">{totalPages}</span>
      </span>

      {/* Botão Próximo */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="hover:cursor-pointer flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-300 transition-colors"
      >
        Próximo
        <FaChevronRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};

export default Paginacao;