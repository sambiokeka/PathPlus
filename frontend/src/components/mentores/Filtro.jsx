import { FaSearch, FaFilter } from 'react-icons/fa';

const Filtro = ({
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  showFilters,
  setShowFilters,
  areas,
  localizacoes,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
      {/* Barra de Busca e Botão de Filtro Mobile */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar por nome, cargo, área ou tecnologia..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-medium flex items-center justify-center"
        >
          <FaFilter className="mr-2" />
          {showFilters ? 'Esconder Filtros' : 'Mostrar Filtros'}
        </button>
      </div>

      <div
        className={`mt-4 grid-cols-1 md:grid-cols-3 gap-4 ${
          showFilters ? 'grid' : 'hidden'
        } lg:grid`}
      >
        <select
          value={filters.area}
          onChange={(e) => setFilters({ ...filters, area: e.target.value })}
          className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Todas as áreas</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>

        <select
          value={filters.localizacao}
          onChange={(e) =>
            setFilters({ ...filters, localizacao: e.target.value })
          }
          className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Todas as localizações</option>
          {localizacoes.map((local) => (
            <option key={local} value={local}>
              {local}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Filtrar por tecnologia..."
          value={filters.tecnologia}
          onChange={(e) =>
            setFilters({ ...filters, tecnologia: e.target.value })
          }
          className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default Filtro;