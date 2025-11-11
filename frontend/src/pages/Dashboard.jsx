import { useOutletContext } from 'react-router-dom'; 
import Usuario from '../components/dashboard/Usuario';
import Progresso from '../components/Progresso';
import Atividade from '../components/dashboard/Atividade';
import Mentores from '../components/dashboard/MentoresDashboard';
import Objetivos from '../components/dashboard/Objetivos';
import Saude from '../components/dashboard/Saude';

export default function Dashboard() {

  const { progressData } = useOutletContext();

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <Usuario />
        <Progresso data={progressData} />
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Atividade />
        <Mentores />
        <Objetivos />
        <Saude />
      </div>
    </main>
  );
};
