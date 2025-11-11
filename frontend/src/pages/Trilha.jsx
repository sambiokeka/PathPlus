import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Progresso from '../components/Progresso'; 

import Modulos from '../components/trilha/Modulos'; 

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

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        
        <Progresso data={progressData} variant="header" />

        <Modulos modules={modules} startModule={startModule} />
        
      </div>
    </div>
  );
};