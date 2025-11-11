import { useState, useEffect } from 'react';
import { FaUserPlus } from 'react-icons/fa';

import { mockMentores } from '../utils/data'; 

import Filtro from '../components/mentores/Filtro';
import ContainerMentores from '../components/mentores/ContainerMentores';
import PopupMentor from '../components/mentores/PopupMentor';

export default function Mentores() {

  const [mentores, setMentores] = useState([]);
  const [filteredMentores, setFilteredMentores] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    area: '',
    localizacao: '',
    tecnologia: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {

    setMentores(mockMentores);
    setFilteredMentores(mockMentores);
  }, []); 


  useEffect(() => {
    let result = mentores;

    if (searchTerm) {
      result = result.filter(mentor =>
        mentor.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (mentor.habilidadesTecnicas ?? []).some(skill => 
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    if (filters.area) {
      result = result.filter(mentor => mentor.area === filters.area);
    }
    if (filters.localizacao) {
      result = result.filter(mentor => mentor.localizacao === filters.localizacao);
    }
    if (filters.tecnologia) {
      result = result.filter(mentor => 
        (mentor.habilidadesTecnicas ?? []).some(skill => 
          skill.toLowerCase().includes(filters.tecnologia.toLowerCase())
        )
      );
    }
    
    setFilteredMentores(result);
  }, [searchTerm, filters, mentores]);

  // Funções de Ajuda
  const openModal = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMentor(null);
  };

  const handleRecommend = () => {
    if (selectedMentor) {
      alert(`Você recomendou ${selectedMentor.nome}!`);
    }
  };

  const handleMessage = () => {
    if (selectedMentor) {
      alert(`Redirecionando para mensagem com ${selectedMentor.nome}`);
    }
  };

  const areas = [...new Set(mentores.map(mentor => mentor.area))];
  const localizacoes = [...new Set(mentores.map(mentor => mentor.localizacao))];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8">
      <div className="container mx-auto px-4">
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Encontre seu Mentor
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Conecte-se com profissionais experientes para acelerar sua carreira
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                <FaUserPlus className="mr-2" />
                Tornar-se Mentor
              </button>
            </div>
          </div>
        </div>
        
        <Filtro
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          setFilters={setFilters}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          areas={areas}
          localizacoes={localizacoes}
        />

        <ContainerMentores
          filteredMentores={filteredMentores}
          openModal={openModal}
        />

        {isModalOpen && selectedMentor && (
          <PopupMentor
            mentor={selectedMentor}
            closeModal={closeModal}
            handleRecommend={handleRecommend}
            handleMessage={handleMessage}
          />
        )}
      </div>
    </div>
  );
};