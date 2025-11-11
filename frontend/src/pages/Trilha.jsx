import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Progresso from '../components/Progresso'; 

import { FaCheck, FaPlay, FaLock, FaClock, FaBook, FaProjectDiagram, FaChevronRight, FaUserFriends } from 'react-icons/fa';

export default function Trilha() {
  const { progressData } = useOutletContext();

  const [currentModule, setCurrentModule] = useState(3);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const mockModules = [
      {
        id: 1,
        title: 'Fundamentos de Python',
        description: 'Sintaxe básica, estruturas de dados e funções',
        duration: '4h',
        status: 'completed',
        type: 'teórico',
        progress: 100,
        skills: ['Python', 'Lógica de Programação']
      },
      {
        id: 2,
        title: 'Manipulação de Dados com Pandas',
        description: 'Trabalhando com DataFrames e análise de dados',
        duration: '6h',
        status: 'completed',
        type: 'prático',
        progress: 100,
        skills: ['Pandas', 'DataFrames', 'Análise de Dados']
      },
      {
        id: 3,
        title: 'Visualização de Dados',
        description: 'Criando gráficos e dashboards com Matplotlib e Seaborn',
        duration: '5h',
        status: 'current',
        type: 'prático',
        progress: 65,
        skills: ['Matplotlib', 'Seaborn', 'Visualização']
      },
      {
        id: 4,
        title: 'Estatística para Data Science',
        description: 'Conceitos estatísticos essenciais',
        duration: '8h',
        status: 'upcoming',
        type: 'teórico',
        progress: 0,
        skills: ['Estatística', 'Probabilidade', 'Testes']
      },
      {
        id: 5,
        title: 'Machine Learning Básico',
        description: 'Introdução a algoritmos de ML',
        duration: '10h',
        status: 'upcoming',
        type: 'prático',
        progress: 0,
        skills: ['ML', 'Scikit-learn', 'Classificação']
      },
      {
        id: 6,
        title: 'Projeto Final - Análise de Dados',
        description: 'Aplicação prática de todos os conceitos aprendidos',
        duration: '12h',
        status: 'upcoming',
        type: 'projeto',
        progress: 0,
        skills: ['Projeto', 'Portfólio', 'Caso Real']
      }
    ];
    setModules(mockModules);
  }, []);

  const startModule = (moduleId) => {
    if (moduleId === currentModule) {
      console.log(`Iniciando módulo ${moduleId}`);
    }
  };

  const getModuleIcon = (type) => {
    switch (type) {
      case 'teórico':
        return <FaBook className="text-blue-500" />;
      case 'prático':
        return <FaPlay className="text-green-500" />;
      case 'projeto':
        return <FaProjectDiagram className="text-purple-500" />;
      default:
        return <FaBook className="text-gray-500" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Concluído</span>;
      case 'current':
        return <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Em Andamento</span>;
      case 'upcoming':
        return <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Em Breve</span>;
      default:
        return null;
    }
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        
        <Progresso data={progressData} variant="header" />

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
            Módulos da Trilha
          </h2>

          <div className="space-y-8">
            {modules.map((module, index) => (
              <div 
                key={module.id}
                className={`flex flex-col lg:flex-row items-start p-6 rounded-lg border-2 transition-all duration-300 ${
                  module.status === 'current' 
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
                    : module.status === 'completed'
                    ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {/* Ícone e Número */}
                <div className="flex items-center mb-4 lg:mb-0 lg:mr-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    module.status === 'completed' 
                      ? 'bg-green-500 text-white' 
                      : module.status === 'current'
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
                  }`}>
                    {module.status === 'completed' ? (
                      <FaCheck />
                    ) : module.status === 'current' ? (
                      <FaPlay />
                    ) : (
                      <FaLock />
                    )}
                  </div>
                  <div className="lg:hidden">
                    <h3 className="font-semibold text-gray-800 dark:text-white">{module.title}</h3>
                    {getStatusBadge(module.status)}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 lg:mr-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2">
                    <h3 className="hidden lg:block font-semibold text-gray-800 dark:text-white text-lg">
                      {module.title}
                    </h3>
                    <div className="hidden lg:block">
                      {getStatusBadge(module.status)}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {module.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {module.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center mr-4">
                      {getModuleIcon(module.type)}
                      <span className="ml-1 capitalize">{module.type}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Ações */}
                <div className="flex flex-col items-end mt-4 lg:mt-0 w-full lg:w-auto">
                  {module.status === 'current' && (
                    <div className="w-full lg:w-48 mb-4">
                      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
                        <span>Progresso</span>
                        <span>{module.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => startModule(module.id)}
                    disabled={module.status === 'upcoming'}
                    className={`w-full lg:w-auto flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                      module.status === 'completed'
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : module.status === 'current'
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {module.status === 'completed' ? (
                      <>
                        <FaCheck className="mr-2" />
                        Concluído
                      </>
                    ) : module.status === 'current' ? (
                      <>
                        <FaPlay className="mr-2" />
                        Continuar
                      </>
                    ) : (
                      <>
                        <FaLock className="mr-2" />
                        Em Breve
                      </>
                    )}
                    <FaChevronRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Rodapé da Trilha */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="text-center lg:text-left mb-4 lg:mb-0">
                <p className="text-gray-600 dark:text-gray-300">
                  Precisa de ajuda com esta trilha?
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Converse com nossos mentores especializados
                </p>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                <FaUserFriends className="mr-2" />
                Falar com um Mentor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
