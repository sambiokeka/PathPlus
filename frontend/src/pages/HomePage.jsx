import { useState, useEffect } from 'react';
import { FaGraduationCap, FaUserFriends, FaChartLine, FaRocket } from 'react-icons/fa';

import HeroSection from '../components/homepage/HeroSection';
import Estatisticas from '../components/homepage/Estatisticas';
import Features from '../components/homepage/Features';
import TrilhasHomePage from '../components/homepage/TrilhasHomePage';
import Relatos from '../components/homepage/Relatos';
import CTA from '../components/homepage/CTA';

export default function HomePage() {

  const [relatoAtual, setRelatoAtual] = useState(0);

  const features = [
    { icon: FaGraduationCap, title: 'Trilhas Personalizadas', description: 'Caminhos de aprendizado adaptados...', color: 'indigo' },
    { icon: FaUserFriends, title: 'Mentoria Especializada', description: 'Conecte-se com profissionais...', color: 'green' },
    { icon: FaChartLine, title: 'Progresso Inteligente', description: 'Acompanhe seu desenvolvimento...', color: 'blue' },
    { icon: FaRocket, title: 'Preparação para o Futuro', description: 'Desenvolva as habilidades...', color: 'purple' }
  ];

  const relatos = [
    { name: 'Ana Silva', role: 'Desenvolvedora Front-End', company: 'Tech Solutions', content: 'O Path+ transformou minha carreira...', avatar: 'AS', rating: 5 },
    { name: 'Carlos Mendes', role: 'Cientista de Dados', company: 'Data Analytics Co.', content: 'As trilhas de Data Science são incríveis...', avatar: 'CM', rating: 5 },
    { name: 'Marina Oliveira', role: 'Product Manager', company: 'StartUp Inovação', content: 'Finalmente encontrei uma plataforma...', avatar: 'MO', rating: 5 }
  ];

  const stats = [
    { number: '10K+', label: 'Profissionais Impactados' },
    { number: '85%', label: 'Aumento Salarial Médio' },
    { number: '200+', label: 'Mentores Especializados' },
    { number: '50+', label: 'Trilhas Disponíveis' }
  ];

  const learningPaths = [
    { title: 'Data Science', description: 'Domine Python, ML...', duration: '6 meses', level: 'Intermediário', students: '2.4k', color: 'blue' },
    { title: 'Desenvolvimento Full Stack', description: 'JavaScript, React, Node.js...', duration: '8 meses', level: 'Iniciante', students: '3.1k', color: 'green' },
    { title: 'UX/UI Design', description: 'Crie experiências digitais...', duration: '5 meses', level: 'Iniciante', students: '1.8k', color: 'purple' }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setRelatoAtual((prev) => (prev + 1) % relatos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [relatos.length]);


  const getColorClasses = (color) => {
    const colors = {
      indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300',
      green: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300',
      blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300',
      purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300'
    };
    return colors[color] || colors.indigo;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <HeroSection 
        stats={stats} 
        relatos={relatos} 
      />
      <Estatisticas stats={stats} />
      <Features 
        features={features} 
        getColorClasses={getColorClasses} 
      />
      <TrilhasHomePage 
        learningPaths={learningPaths} 
        getColorClasses={getColorClasses} 
      />
      <Relatos
        relatos={relatos}
        relatoAtual={relatoAtual}
        setRelatoAtual={setRelatoAtual}
      />
      <CTA />
    </div>
  );
};